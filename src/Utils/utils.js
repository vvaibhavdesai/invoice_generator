export function formatDate(date) {
  const newDate = new Date(date).toLocaleDateString();
  const newTime = new Date(date).toLocaleTimeString();
  return `${newDate} ${newTime}`;
}

export const reducer = (total, item) => {
  return total + item.subTotal;
};
export const taxReducer = (total, item) => {
  return total + item.taxAmount;
};
export const discountReducer = (total, item) => {
  return total + item.discountAmount;
};
export const grandTotalReducer = (total, item) => {
  return total + item.subTotal;
};


export function clearItemInput(
  setTax,
  setDiscount,
  setItemName,
  setQuantity,
  setPrice
) {
  setTax("");
  setDiscount("");
  setItemName("");
  setQuantity("");
  return setPrice("");
}

export function clearCountryDataFormEntries(
  setFullName,
  setPincode,
  setEmail,
  setAddress,
  setPhone
) {
  setFullName("");
  setPincode("");
  setEmail("");
  setAddress("");
  return setPhone("");
}
