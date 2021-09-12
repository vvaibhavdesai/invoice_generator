import "./App.css";
import { Header } from "./Components/Header";
import { SideBar } from "./Components/SideBar";
import { Invoice } from "./Components/Invoice";
import { CountryDataForm } from "./Components/CountryDataForm";
import { useDataContext } from "./Context/DataContext";
import { InvoiceDataForm } from "./Components/InvoiceDataForm";
function App() {
  const { showModal, invoiceModal } = useDataContext();
  return (
    <div>
      <Header />
      <div className="App">
        <SideBar />
        <Invoice />
       {(showModal || invoiceModal )&& <section className="country-form make-center">
          {showModal && <CountryDataForm />}
          {invoiceModal && <InvoiceDataForm />}
        </section>}
      </div>
    </div>
  );
}

export default App;
