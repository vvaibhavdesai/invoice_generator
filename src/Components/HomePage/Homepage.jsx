import hero from "../../assets/hero.svg";
import herotxt from "../../assets/hero-text.svg";
import { motion } from "framer-motion";
import { useEffect, useLayoutEffect, useState } from "react";
import SignupForm from "./Components/SignupForm";
import { useAuthContext } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import { BASE_URL } from "../../App";
import { updateInvoiceList } from "../../redux/userSlice";
import { useDispatch } from "react-redux";


export default function Homepage() {
  const [heroVisibility, setHeroVisibility] = useState(false);
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (user?.userID) {
      return navigate("/dashboard");
    } else {
      return;
    }
  }, [user]);

  useEffect(() => {
    (async function () {
      try {
        const { data } = await axios.get(BASE_URL + "api/auth/userinfo", {
          withCredentials: true,
        });
        // const {
        //   data: {
        //     invoices: { userInvoices },
        //   },
        // } = await axios.get(BASE_URL + "api/invoices/all", {
        //   withCredentials: true,
        // });
        
        if (data.code === "USER_INFO_FETCHED") {
          let userData = {
            ...data,
          };
          setUser(userData);
        }
        if (user) {
          navigate("/dashboard");
          // return dispatch(updateInvoiceList(userInvoices));
        }
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, []);

  return (
    <>
      <div className=" homepage">
        <nav className="weight600 make-center space-between navbar">
          <p>&nbsp;</p>
          <div className="make-center space-evenly"></div>
        </nav>
        <section className="homepage-hero-container">
          <div className="hero-text">
            <motion.img
              className="hero-txt-image"
              src={herotxt}
              alt=""
              animate={{ x: heroVisibility ? -650 : 50 }}
              initial={{
                x: -650,
              }}
              transition={{
                type: "spring",
                stiffness: 30,
              }}
            />
          </div>
          <div className="hero-img-container">
            <motion.img
              className="hero-img"
              src={hero}
              alt=""
              animate={{
                x: heroVisibility ? 1100 : -150,
              }}
              initial={{
                x: 1100,
              }}
              transition={{
                type: "spring",
                stiffness: 25,
                damping: 10,
              }}
            />
          </div>
        </section>
        <motion.button
          onClick={() => {
            window.alert(
              "Please use guest login, Been working on fixing the auth for this app! Thank you:)"
            );
            navigate("/register");
            return setHeroVisibility(true);
          }}
          animate={{
            y: heroVisibility ? 200 : -50,
            opacity: heroVisibility ? 0 : 1,
          }}
          initial={{
            y: 100,
            x: 600,
            opacity: 0,
          }}
          transition={{
            type: "spring",
            stiffness: 25,
          }}
          className="homepage-btn  weight600"
        >
          Get Started
        </motion.button>
      </div>
    </>
  );
}
