import { formatDate } from "./../Utils/dateformatter";
import printer from "./../assets/printer.png";

export function InvoiceCard({ invoice }) {
  return (
    <div className="invoice-card-holder">
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
          <button
            onClick={() => window.print()}
            aria-label="print the invoice"
            className="print-btn"
          >
            PRINT
            <img alt="printer" src={printer} />
          </button>
        </div>
      </div>
      <div className="table-cover">
        <table className="table ">
          <thead>
            <tr className="th-color">
              <th className="th-borders weight600 small-text ">ITEM</th>
              <th className="th-borders weight600 small-text">QUANTITY</th>
              <th className="th-borders weight600 small-text">UNIT PRICE</th>
              <th className="th-borders weight600 small-text">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            {invoice.itemsList.map((item) => (
              <tr key={item.id}>
                <td className="td-body weight600 text-align-left">
                  {item.itemName}
                </td>
                <td className="td-body weight600 text-align-center">
                  {item.quantity}
                </td>
                <td className="td-body weight600 text-align-center">
                  ₹{item.price}
                </td>
                <td className="td-body weight600 text-align-right">
                  ₹{item.subTotal}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
