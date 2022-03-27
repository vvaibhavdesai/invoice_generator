import "./App.css";
import { Invoice } from "./Components/Invoice";
import { CountryDataForm } from "./Components/CountryDataForm/CountryDataForm";
import { useDataContext } from "./Context/DataContext";
import { InvoiceDataForm } from "./Components/InvoiceDataForm/InvoiceDataForm";
import { Route, Routes, useNavigate } from "react-router-dom";
import { InvoiceCard } from "./Components/InvoiceCard/Invoicecard";
import Homepage from "./Components/HomePage/Homepage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { useEffect } from "react";
import axios from "axios";
import { updateInvoiceList } from "./redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import SignupForm from "./Components/HomePage/Components/SignupForm";
import MyDocument from "./Components/Document";
import { useAuthContext } from "./Context/AuthContext";

export const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {
  const { showModal, invoiceModal } = useDataContext();
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInvoices = useSelector((state) => state.user.invoiceList);

  useEffect(() => {
    console.log(user, "this is user");
  }, [user]);

  useEffect(() => {
    if(userInvoices.length > 0) {
      return;
    }
    (async function () {
      try {
        const {
          data: {
            invoices: { userInvoices },
          },
        } = await axios.get(BASE_URL + "api/invoices/all", {
          withCredentials: true,
        });
        if (userInvoices) {
          console.log(user, "userId");
          navigate("/dashboard");
          return dispatch(updateInvoiceList(userInvoices));
        }
      } catch (e) {
        console.log(e.message);
        // window.alert(e.message);
      }
    })();
  }, []);

  const FormModal = () => {
    return (
      <>
        {(showModal || invoiceModal) && (
          <section className="country-form make-center">
            {showModal && <CountryDataForm />}
            {invoiceModal && <InvoiceDataForm />}
          </section>
        )}
      </>
    );
  };

  const AppContainer = () => {
    return (
      <>
        <Routes>
          <Route path={"/"} element={<Homepage />} />
          <Route path={"/register"} element={<SignupForm />} />

          <Route
            path={"/dashboard"}
            element={
              <PrivateRoute>
                <Invoice />
              </PrivateRoute>
            }
          />
          <Route
            path={"dashboard/:invoiceId"}
            element={
              <PrivateRoute>
                <InvoiceCard />
              </PrivateRoute>
            }
          />
          <Route
            path={"/download/:invoiceId"}
            element={
              <PrivateRoute>
                <MyDocument />
              </PrivateRoute>
            }
          />
        </Routes>
        <FormModal />
      </>
    );
  };

  return (
    <>
      <AppContainer />
    </>
  );
}

export default App;
