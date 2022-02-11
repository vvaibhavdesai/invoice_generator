import { useState, createContext, useContext } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [showModal, setShowModal] = useState(false);
  const [invoiceModal, setInvoiceModal] = useState(false);
  const [id, setId] = useState('');

  return (
    <DataContext.Provider
      value={{
        showModal,
        setShowModal,
        invoiceModal,
        setInvoiceModal,
        id,
        setId,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
