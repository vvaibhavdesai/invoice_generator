import axios from "axios";
import { useState, createContext, useContext, useLayoutEffect } from "react";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useLayoutEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/auth/userinfo",
          {
            withCredentials: true,
          }
        );
        if (data.code === "USER_INFO_FETCHED") {
          let userData = {
            ...data,
          };
          setUser(userData);
        }
      } catch (error) {
        console.log(error);
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
