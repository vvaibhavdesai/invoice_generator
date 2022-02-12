import axios from "axios";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../App";
import { useAuthContext } from "../../../Context/AuthContext";
export default function SignupForm({ heroVisibility }) {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [register, setRegister] = useState(false);
  const { setUser } = useAuthContext();

  async function loginHandler({ email, password }) {
    try {
      const { data } = await axios.post(
        BASE_URL + "api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (data.code === "LOGIN_SUCCESS") {
        setUser(data);
        return navigate("/dashboard");
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  async function registerHandler({ email, password, name }) {
    try {
      const { data } = await axios.post(BASE_URL + "api/auth/register", {
        email,
        password,
        username: name,
      });
      if (data.code === "REGISTER_SUCCESS") {
        setUser(data);
        return navigate("/dashboard");
      }
    } catch (error) {
      window.alert(error.message);
    }
  }

  return (
    <>
      <nav className="weight600 make-center space-between navbar">
        <p>&nbsp;</p>
        <div className="make-center space-evenly">
          <span className="margin1rem">
            <button onClick={() => setRegister(true)} className="register-btn">
              Register
            </button>
          </span>
          <span className="margin1rem">
            <button onClick={() => setRegister(false)} className="login-btn">
              Login
            </button>
          </span>
        </div>
      </nav>

      <div className="login-form-container make-center">
        <div className="form-div">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (register === true) {
                registerHandler({
                  name: name.current,
                  email: email.current,
                  password: password.current,
                });
              }
              return loginHandler({
                email: email.current,
                password: password.current,
              });
            }}
            className="login-form"
          >
            <fieldset>
              <div className="form-input-container">
                {register && (
                  <input
                    onChange={(e) => (name.current = e.target.value)}
                    type="text"
                    placeholder="Enter your name"
                    className="form-fields make-center"
                  />
                )}
              </div>
              <div className="form-input-container">
                <input
                  onChange={(e) => (email.current = e.target.value)}
                  type="Email"
                  placeholder="Email"
                  className="form-fields "
                />
              </div>
              <div className="form-input-container">
                <input
                  onChange={(e) => (password.current = e.target.value)}
                  type="password"
                  placeholder="password"
                  className="form-fields make-center"
                />
              </div>
            </fieldset>
            <input
              type="submit"
              value="SUBMIT"
              className="form-submit-button weight700"
            />
          </form>
        </div>
      </div>
    </>
  );
}
