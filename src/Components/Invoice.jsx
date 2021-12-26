
import { useDataContext } from "./../Context/DataContext";

export function Invoice() {
  const { setShowModal } = useDataContext();

  return (
    <section className="invoice-card">
      <h2 className="gray super-small-text text-align-left">INVOICE DETAILS</h2>
      <section>
        <>
          <h3 className="gray weight600">No invoice Exist</h3>
          <button onClick={() => setShowModal(true)} className="proceed-btn">
            Add an invoice to get Started
          </button>
        </>
      </section>
    </section>
  );
}
