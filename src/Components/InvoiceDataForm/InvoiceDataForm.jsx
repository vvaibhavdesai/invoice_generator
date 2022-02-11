import { useState } from "react";
import { FormHeader } from "../Header/FormHeader";
import TableBody from "./Components/TableBody";
import { useDataContext } from "../../Context/DataContext";
import { TableHead } from "./Components/TableHead";
import { OrderItemDetailForm } from "./Components/OrderItemForm";
import { clearItemInput, createReducer } from "../../utils/utils";
import FormBottomRow from "./Components/FormBottomRow";
import FormRowFotter from "./Components/FormRowFotter";
import { useSelector } from "react-redux";

export function InvoiceDataForm() {
  const { setInvoiceModal } = useDataContext();
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState();
  const [price, setPrice] = useState();
  const [itemsList, setItemsList] = useState([]);
  const [tax, setTax] = useState(0);
  const [discount, setDiscount] = useState(0);
  const fullName = useSelector((state) => state.user.fullName);

  console.log(
    useSelector((state) => state.user),
    "this is user"
  );
  
  const email = useSelector((state) => state.user.email);

  const subTotal = itemsList.reduce(createReducer("subTotal"), 0).toFixed(2);
  const taxAmount = itemsList.reduce(createReducer("taxAmount"), 0).toFixed(2);
  const discountAmount = itemsList
    .reduce(createReducer("discountAmount"), 0)
    .toFixed(2);
  const grandTotal = itemsList.reduce(createReducer("subTotal"), 0).toFixed(2);

  function addtoItemList(quantity, price, tax, discount = 0) {
    let discountedAmount, calculateTaxAmount, subTotalAfterTax;
    if (discount > 0) {
      // to calculate cost if the discount is greater than 0
      discountedAmount = (price * discount) / 100;
      const discountableAmount = price - discountedAmount;
      calculateTaxAmount = (discountableAmount * tax) / 100;
      subTotalAfterTax = quantity * (calculateTaxAmount + discountableAmount);
    } else {
      // to calculate cost if no discount given
      calculateTaxAmount = (price * tax) / 100;
      subTotalAfterTax = quantity * (calculateTaxAmount + price);
    }
    const item = {
      id: itemsList.length + 1,
      itemName,
      quantity,
      price,
      subTotal: subTotalAfterTax,
      taxAmount: calculateTaxAmount,
      discountAmount: discountedAmount > 0 ? discountedAmount : 0,
      discount,
      tax,
    };
    setItemsList((items) => [...items, item]);
    return clearItemInput(
      setTax,
      setDiscount,
      setItemName,
      setQuantity,
      setPrice
    );
  }

  const propsForOrderItemForm = {
    itemName,
    setItemName,
    quantity,
    setQuantity,
    price,
    setPrice,
    tax,
    discount,
    addtoItemList,
  };

  const formBottomRowProps = {
    tax,
    setTax,
    discount,
    setDiscount,
    subTotal,
  };

  const formRowFooterProps = {
    itemsList,
    taxAmount,
    discountAmount,
    subTotal,
    grandTotal,
  };
  return (
    <div className="form-container">
      <div className="form-container-body">
        <FormHeader closeModal={setInvoiceModal} />
        <div className="form-header invoice-data-form-margin">
          <p className="weight600 super-small-text">PRODUCT DETAILS</p>
          <div className="form-header-customer-detail">
            <p className="weight600 dark-gray super-small-text ">
              CUSTOMER DETAILS
            </p>
            <p className="weight700">{fullName}.</p>
            <a className="dark-gray" href="#.">
              {email}
            </a>
          </div>
        </div>
        <div className="table-cover">
          <table className="table ">
            <TableHead />
            <TableBody itemsList={itemsList} />
          </table>
        </div>
        <OrderItemDetailForm {...propsForOrderItemForm} />
      </div>
      <FormBottomRow {...formBottomRowProps} />
      <FormRowFotter {...formRowFooterProps} />
    </div>
  );
}
