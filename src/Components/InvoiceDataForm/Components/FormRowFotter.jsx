import { v4 as uuidv4 } from "uuid";
import { useDataContext } from "../../../Context/DataContext";
import { clearCountryDataFormEntries } from "../../../utils/utils";
export default function FormRowFotter({
  itemsList,
  email,
  phone,
  address,
  pincode,
  taxAmount,
  discountAmount,
  subTotal,
  grandTotal,
}) {
  const {
    dispatch,
    fullName,
    setFullName,
    setAddress,
    setEmail,
    setPhone,
    setPincode,
    setInvoiceModal,
  } = useDataContext();
  function invoiceAdder(
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
    invoiceData.taxAmount = taxAmount;
    invoiceData.discountAmount = discountAmount;
    invoiceData.subTotal = subTotal;
    invoiceData.grandTotal = grandTotal;
    dispatch({ type: "ADD_ITEMS", payload: invoiceData });
    clearCountryDataFormEntries(
      setFullName,
      setPincode,
      setEmail,
      setAddress,
      setPhone
    );
    return setInvoiceModal(false);
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
