import "./App.css";
import { SideBar } from "./Components/SideBar";
import { Invoice } from "./Components/Invoice";
import { CountryDataForm } from "./Components/CountryDataForm/CountryDataForm";
import { useDataContext } from "./Context/DataContext";
import { InvoiceDataForm } from "./Components/InvoiceDataForm/InvoiceDataForm";
import { Navbar } from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { InvoiceCard } from "./Components/InvoiceCard/Invoicecard";
function App() {
  const { showModal, invoiceModal } = useDataContext();
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
      <div className="App">
        <SideBar />
        <Routes>
          <Route path={"/"} element={<Invoice />} />
          <Route path="dashboard/:invoiceId" element={<InvoiceCard />} />
        </Routes>
        <FormModal />
      </div>
    );
  };
  return (
    <>
      <Navbar />
      <AppContainer />
    </>
  );
}

export default App;
