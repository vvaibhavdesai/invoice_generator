import axios from "axios";
import { useState, createContext, useContext, useLayoutEffect } from "react";
import { BASE_URL } from "../App";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(BASE_URL + "api/auth/userinfo", {
          withCredentials: true,
        });
        if (data.code === "USER_INFO_FETCHED") {
          let userData = {
            ...data,
          };
          setUser(userData);
        }
      } catch (error) {
        window.alert(error.message);
      }
    })();
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
