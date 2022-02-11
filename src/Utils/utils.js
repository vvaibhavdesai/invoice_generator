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

export function clearItemInput(tax, discount, itemName, quantity, price) {
  tax.current = null;
  discount.current = null;
  itemName.current = "";
  quantity.current = null;
  return (price.current = null);
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
