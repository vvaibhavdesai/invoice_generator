import "./App.css";
import { Invoice } from "./Components/Invoice";
import { CountryDataForm } from "./Components/CountryDataForm/CountryDataForm";
import { useDataContext } from "./Context/DataContext";
import { InvoiceDataForm } from "./Components/InvoiceDataForm/InvoiceDataForm";
import { Route, Routes } from "react-router-dom";
import { InvoiceCard } from "./Components/InvoiceCard/Invoicecard";
import Homepage from "./Components/HomePage/Homepage";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import { useEffect, useLayoutEffect } from "react";
import axios from "axios";
import { updateInvoiceList } from "./redux/userSlice";
import { useDispatch } from "react-redux";

function App() {
  const { showModal, invoiceModal } = useDataContext();
  const dispatch = useDispatch();

  useEffect(() => {
    (async function () {
      try {
        const {
          data: {
            invoices: { userInvoices },
          },
        } = await axios.get("http://localhost:5000/api/invoices/all", {
          withCredentials: true,
        });
        if (userInvoices) {
          return dispatch(updateInvoiceList(userInvoices));
        }
      } catch (e) {
        window.alert(e.message);
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
