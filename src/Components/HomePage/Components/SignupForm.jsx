import axios from "axios";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SignupForm({ heroVisibility }) {
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate();
  const [signup, setSignup] = useState(false);
  async function loginHandler({ email, password }) {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      if (data.code === "LOGIN_SUCCESS") {
        navigate("/dashboard");
      } else {
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="login-form-container">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          return loginHandler({
            name: name.current,
            email: email.current,
            password: password.current,
          });
        }}
        className="login-form"
        // animate={{
        //   height: !heroVisibility ? 0 : 500,
        //   width: !heroVisibility ? 0 : 400,
        //   backgroundColor: "#e6e6e6",
        //   borderRadius: 100,
        //   visibility: !heroVisibility ? "hidden" : "visible",
        // }}
        // initial={{
        //   height: 0,
        //   width: 0,
        //   visibility: "hidden",
        // }}
        // transition={{
        //   type: "spring",
        //   stiffness: 30,
        // }}
      >
        <fieldset>
          <div className="form-input-container">
            <input
              onChange={(e) => (name.current = e.target.value)}
              type="text"
              // animate={{
              //   height: heroVisibility ? "2rem" : 0,
              //   width: heroVisibility ? "15rem" : 0,
              // }}
              // initial={{
              //   height: 0,
              //   width: 0,
              // }}
              // transition={{
              //   duration: 2,
              // }}
              placeholder="Enter your name"
              className="form-fields make-center"
            />
          </div>
          <div className="form-input-container">
            <input
              onChange={(e) => (email.current = e.target.value)}
              type="Email"
              // animate={{
              //   height: heroVisibility ? "2rem" : 0,
              //   width: heroVisibility ? "15rem" : 0,
              // }}
              // initial={{
              //   height: 0,
              //   width: 0,
              // }}
              // transition={{
              //   duration: 2,
              // }}
              placeholder="Email"
              className="form-fields "
            />
          </div>
          <div className="form-input-container">
            <input
              onChange={(e) => (password.current = e.target.value)}
              type="password"
              // animate={{
              //   height: heroVisibility ? "2rem" : 0,
              //   width: heroVisibility ? "15rem" : 0,
              // }}
              // initial={{
              //   height: 0,
              //   width: 0,
              // }}
              // transition={{
              //   duration: 2,
              // }}
              placeholder="password"
              className="form-fields make-center"
            />
          </div>
        </fieldset>
        <input
          type="submit"
          value="SUBMIT"
          // initial={{
          //   height: 0,
          //   width: 0,
          // }}
          // animate={{
          //   height: heroVisibility ? "3rem" : 0,
          //   width: heroVisibility ? "12rem" : 0,
          // }}
          // transition={{
          //   type: "spring",
          //   duration: 1.5,
          //   stiffness: 30,
          // }}
          className="form-submit-button weight700"
        />
      </form>
    </div>
  );
}
