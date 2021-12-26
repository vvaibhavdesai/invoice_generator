export function formatDate(date) {
  const newDate = new Date(date).toLocaleDateString();
  const newTime = new Date(date).toLocaleTimeString();
  return `${newDate} ${newTime}`;
}

export const createReducer = (itemProperty) => {
  if (itemProperty !== "subTotal") {
    return (total, item) => total + item[itemProperty] * item.quantity;
  } else {
    return (total, item) => total + item[itemProperty];
  }
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
