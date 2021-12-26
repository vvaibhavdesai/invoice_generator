import { formatDate } from "../../utils/utils";
import printer from "./../../assets/printer.png";
import { useParams } from "react-router-dom";
import { useDataContext } from "../../Context/DataContext";
import close from "./../../assets/close.png";
import InvoiceTable from "./Components/InvoiceTable";
import Button from "../../utils/Button";

export function InvoiceCard() {
  const { invoiceList } = useDataContext();

  const { invoiceId } = useParams();
  const invoice = invoiceList.find((invoices) => invoices.id === invoiceId);

  return (
    <div className="invoice-card-holder">
      <button style={{ position: "absolute", top: "90px", left: "330px" }}>
        <img src={close} alt={""} />
      </button>
      <div className="invoice-card-header">
        <div className="invoice-card-details text-align-left ">
          <h3 className=" small-text weight600">Invoice</h3>
          <p className="">#{invoice.id}</p>
          <time className="small-text dark-gray">
            {formatDate(invoice.date)}
          </time>
        </div>
        <div className="invoice-holder-details">
          <div className="text-align-right">
            <p className="dark-gray weight600 small-text">CUSTOMER DETAILS</p>
            <p className="weight600">{invoice.customer.name}</p>
            <a href={`mail:${invoice.customer.email}`} className="dark-gray">
              {invoice.customer.email}
            </a>
          </div>
          <Button callback={window.print} image={printer} styleClass={"print-btn"} childrenText={"PRINT"} />
        </div>
      </div>
      <div className="table-cover">
        <InvoiceTable invoice={invoice} />
      </div>
      <div className="invoice-card-bottom-row">
        <div className="invoice-card-bottom-row_value">
          <p className="weight600 small-text bottom-row_value-color">
            Sub Total
          </p>
          <p className="weight700">₹{invoice.subTotal}</p>
        </div>
        <div className="invoice-card-bottom-row_value">
          <p className="weight600 small-text bottom-row_value-color">Tax</p>
          <p className="weight700">{`(${invoice.tax}%)`}</p>
        </div>
        <div className="invoice-card-bottom-row_value">
          <p className="weight600 small-text bottom-row_value-color">
            Discount
          </p>
          <p className="weight700">{`(${invoice.discount}%)`}</p>
        </div>
      </div>
      <div className="invoice-card-grandTotal">
        <div className="grandTotal_bottom_row">
          <h3 className="weight600 small-text bottom-row_value-color">
            GrandTotal
          </h3>
          <p className="weight700">₹{invoice.grandTotal}</p>
        </div>
      </div>
    </div>
  );
}
