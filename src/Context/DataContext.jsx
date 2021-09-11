import { useState, useReducer, createContext, useContext } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [pincode, setPincode] = useState("");
  return (
    <DataContext.Provider
      value={{
        showModal,
        setShowModal,
        invoiceModal,
        setInvoiceModal,
        fullName,
        setFullName,
        phone,
        setPhone,
        address,
        setAddress,
        email,
        setEmail,
        pincode,
        setPincode,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
