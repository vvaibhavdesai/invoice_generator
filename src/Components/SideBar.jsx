import { useDataContext } from "./../Context/DataContext";
import { formatDate } from "../utils/utils";
import { useNavigate } from "react-router-dom";
export function SideBar() {
  const { invoiceList,  id } = useDataContext();
  const navigate = useNavigate()

  return (
    <aside className="sidebar">
      <section className="search-section">
        <input className="search-input" type="text" placeholder="search..." />
      </section>
      <ul className="sidebar-list">
        {invoiceList.length > 0 &&
          invoiceList.map((item) => (
            <li
              className={id === item.id ? `selected` : ``}
              onClick={() => navigate(`/dashboard/${item.id}`)}
              key={item.id}
            >
              <div className="invoice-list">
                <div className="invoice-details">
                  <h4 className={id === item.id ? `white` : ``}>
                    Inv: #{item.id}
                  </h4>
                  <time>{formatDate(item.date)}</time>
                </div>
                <div className="invoice-details-bottom-row">
                  <div className="invoice-bottom-row-details">
                    <p className={id === item.id ? `white` : ``}>
                      Items- {item.itemsList.length}
                    </p>
                    <p className="weight600 invoice-details-row-name">
                      {" "}
                      {item.customer.name}
                    </p>
                  </div>
                  <p className={`${id === item.id ? `white` : ``} weight600`}>
                    ₹{item.grandTotal}
                  </p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </aside>
  );
}
