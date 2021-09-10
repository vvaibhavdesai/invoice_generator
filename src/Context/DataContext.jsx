import { useState, useReducer, createContext, useContext } from "react";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [modal, setModal] = useState(false);
  return (
    <DataContext.Provider value={{ modal, setModal }}>
      {children}
    </DataContext.Provider>
  );
}

export function useDataContext() {
  return useContext(DataContext);
}
