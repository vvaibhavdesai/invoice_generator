import { useLayoutEffect } from "react";
import { useDataContext } from "./../Context/DataContext";
import { Navbar } from "./Navbar";
import { SideBar } from "./SideBar";

export function Invoice() {
  const { id, setShowModal } = useDataContext();

  return (
    <>
      <Navbar />
      <div
        className="App"
          // style={{
          //   gridTemplateAreas: `${
          //     id ? `sidebar invoice-card-holder` : `sidebar invoice-card`
          //   }`,
          // }}
      >
        <SideBar />
        <section className="invoice-card">
          <h2 className="gray super-small-text text-align-left">
            INVOICE DETAILS
          </h2>
          <section>
            <>
              <h3 className="gray weight600">No invoice Exist</h3>
              <button
                onClick={() => setShowModal(true)}
                className="proceed-btn"
              >
                Add an invoice to get Started
              </button>
            </>
          </section>
        </section>
      </div>
    </>
  );
}
