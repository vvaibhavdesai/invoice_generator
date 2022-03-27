import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { BASE_URL } from "../../../App";
import { useDataContext } from "../../../Context/DataContext";
import { updateInvoiceList } from "../../../redux/userSlice";
export default function FormRowFotter({
  itemsList,
  taxAmount,
  discountAmount,
  subTotal,
  grandTotal,
}) {
  const { setInvoiceModal } = useDataContext();
  const fullName = useSelector((state) => state.user.fullName);
  const email = useSelector((state) => state.user.email);
  const phone = useSelector((state) => state.user.phone);
  const address = useSelector((state) => state.user.address);
  const pincode = useSelector((state) => state.user.pincode);
  const dispatch = useDispatch();

  async function invoiceAdder(
    itemsList,
    email,
    phone,
    address,
    pincode,
    taxAmount,
    discountAmount,
    subTotal,
    grandTotal
  ) {
    if(grandTotal === 0){
        return window.alert("please  fill the all necessary details")
      }
    const invoiceData = {
      date: new Date(),
      id: uuidv4(),
      tax: 0,
      discount: 0,
      taxAmount: 0,
      discountAmount: 0,
      subTotal: 0,
      grandTotal: 0,
      itemsList,
      customer: { name: fullName, email, phone, address, pincode },
    };

    invoiceData.tax = itemsList.reduce((total, item) => total + item.tax, 0);
    invoiceData.discount = itemsList.reduce(
      (total, item) => total + item.discount,
      0
    );
    invoiceData.taxAmount = parseInt(taxAmount);
    invoiceData.discountAmount = parseInt(discountAmount);
    invoiceData.subTotal = parseInt(subTotal);
    invoiceData.grandTotal = parseInt(grandTotal);
    console.log(invoiceData, "this is invoice data");

    const {
      data: { doc },
      status,
    } = await axios.post(
      BASE_URL + "api/invoices/create",
      { invoice: invoiceData },
      { withCredentials: true }
    );
    if (status === 200) {
      dispatch(updateInvoiceList(doc));
      console.log("from form row fotter", doc);
      return setInvoiceModal(false);
    } else if (status !== 200) {
      return window.alert("Error in adding invoice");
    }
  }
  return (
    <div className="form-row-footer ">
      <div className="form-row-footer">
        <div className="footer-values dark-gray weight600">
          <p>Tax</p>
          <p>₹{taxAmount}</p>
        </div>
        <div className="footer-values dark-gray weight600">
          <p>Discount</p>
          <p>₹{discountAmount}</p>
        </div>
        <div className="footer-values weight600 ">
          <p className="dark-gray">Grand Total</p>
          <p>₹{grandTotal}</p>
        </div>
      </div>
      <button
        onClick={() =>
          invoiceAdder(
            itemsList,
            email,
            phone,
            address,
            pincode,
            taxAmount,
            discountAmount,
            subTotal,
            grandTotal
          )
        }
        className="weight700 proceed-btn"
      >
        PROCEED
      </button>
    </div>
  );
}
