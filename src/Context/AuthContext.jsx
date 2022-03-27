import axios from "axios";
import {
  useState,
  createContext,
  useContext,
  useLayoutEffect,
  useEffect,
} from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../App";
import { updateInvoiceList } from "../redux/userSlice";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);


  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
