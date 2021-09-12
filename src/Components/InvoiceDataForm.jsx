import enter from "./../assets/enter.png";
import { FormHeader } from "./../Utils/FormHeader";
import { useDataContext } from "./../Context/DataContext";
import { useState } from "react";

export function InvoiceDataForm() {
  const { setInvoiceModal, fullName, phone, pincode, address,  email, dispatch,setFullName, setAddress, setEmail, setPhone, setPincode,invoiceList } =
    useDataContext();
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const [itemsList, setItemsList] = useState([]);
  const [ tax, setTax ] = useState(0);
  const [ discount, setDiscount ] = useState(0)
  
  

  const reducer=(total,item)=>{
    return total+(item.quantity * item.price)
  }
  
  const subTotal = itemsList.reduce(reducer,0);
  const taxAmount = (subTotal*(tax/100))
  const discountAmount = (subTotal*(discount/100))
  const grandTotal = ((subTotal+taxAmount)-discountAmount).toFixed(2)
  
  const invoiceData={
    date:new Date(),
    id:invoiceList.length+1,
    tax:0,
    discount:0,
    taxAmount:0,
    discountAmount:0,
    subTotal:0,
    grandTotal:0,
    itemsList,
    customer:{name:fullName, email, phone, address, pincode }
  }
  
  function addtoItemList() {
    const item = {
      id:itemsList.length+1,
      itemName,
      quantity,
      price,
      subTotal:quantity*price,
    };
    setItemsList((items) => [...items, item]);
    return clearItemInput()
  }
  function clearItemInput(){
    setTax("")
    setDiscount("")
    setItemName("")
    setQuantity("")
    return setPrice("")
  }
  function clearCountryDataFormEntries(){
    setFullName("")
    setPincode("")
    setEmail("")
    setAddress("")
    return setPhone("")
    
  }
  function invoiceAdder(){
    invoiceData.tax=tax >0 ? tax:0
    invoiceData.discount = discount>0 ? discount:0
    invoiceData.taxAmount=  taxAmount>0 ? taxAmount:0
    invoiceData.discountAmount = discountAmount >0 ? discountAmount:0
    invoiceData.subTotal= subTotal
    invoiceData.grandTotal = grandTotal
    dispatch({type:"ADD_ITEMS",payload:invoiceData})
    clearCountryDataFormEntries()
    return setInvoiceModal(false)
  }

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
            <thead>
              <tr className="th-color">
                <th className="th-borders weight600 small-text ">ITEM</th>
                <th className="th-borders weight600 small-text">QUANTITY</th>
                <th className="th-borders weight600 small-text">UNIT PRICE</th>
                <th className="th-borders weight600 small-text">TOTAL</th>
              </tr>
            </thead>
            <tbody>
              {itemsList.length > 0 &&
                itemsList.map((item) => (
                  <tr key={item.id}>
                    <td className="td-body weight600 text-align-left">{item.itemName}</td>
                    <td className="td-body weight600 text-align-center">{item.quantity}</td>
                    <td className="td-body weight600 text-align-center">₹{item.price}</td>
                    <td className="td-body weight600 text-align-right">₹{item.subTotal.toFixed(2)}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <form onSubmit={e=>e.preventDefault()}className="form-row form-margin">
          <input
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            className="form-row-base_style form-padding"
            type="text"
            placeholder="please enter item name"
          />
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="form-row-base_style form-padding form-numeric-values"
            min="1"
            type="number"
            placeholder="0"
          />
          <input
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="form-row-base_style form-padding form-numeric-values"
            min="0.01"
            step="1.00"
            type="number"
            placeholder="0"
          />
          <button
          disabled={true && !itemName && !price}
            onClick={() => addtoItemList()}
            className="enter-button"
            aria-label="Add item button"
          >
            <img src={enter} alt="enter" />
          </button>
        </form>
      </div>
      <div className="form-bottom-row form-margin row-padding">
        <div className="form-bottom-row">
          <input
          value={tax}
          onChange={(e)=>setTax(e.target.value)}
            type="number"
            className="form-numeric-values form-padding form-row-base_style"
            placeholder="0"
            min="1%"
          />
          <input
          value={discount}
          onChange={e=>setDiscount(e.target.value)}
            type="number"
            className="form-numeric-values form-padding form-row-base_style"
            placeholder="0.00"
            min="0.00"
            step="0.01"
          />
        </div>
        <div className="form-bottom-row gap">
          <p className="weight600 dark-gray">Sub Total</p>
          <p className="weight600">₹{subTotal}</p>
        </div>
      </div>
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
        <button onClick={()=>invoiceAdder()} className="weight700 proceed-btn">
          PROCEED
        </button>
      </div>
    </div>
  );
}
