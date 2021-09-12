import plus from "./../assets/plus.png";
import { useDataContext } from "./../Context/DataContext";
import { InvoiceCard } from "./Invoicecard";

export function Invoice() {
  const { setShowModal, id, invoiceList } = useDataContext();
  const invoice = invoiceList.find((invoices) => invoices.id === id);

  return (
    <section className="invoice-card">
      <button
        onClick={() => setShowModal(true)}
        className="add-invoice-btn make-center"
        aria-label="add invoices"
      >
        <img className="plus-img" alt="plus" src={plus} />
      </button>
      <h2 className="gray super-small-text text-align-left">INVOICE DETAILS</h2>
      <section>
        {invoice ? (
          <InvoiceCard invoice={invoice} />
        ) : (
          <>
            <h3 className="gray weight600">No invoice Exist</h3>
            <button onClick={()=>setShowModal(true)} className="proceed-btn">
              Add an invoice to get Started
            </button>
          </>
        )}
      </section>
    </section>
  );
}
