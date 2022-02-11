import { useDataContext } from "./../Context/DataContext";
import { formatDate } from "../lib/utils";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
export function SideBar() {
  const { id, setId } = useDataContext();
  const navigate = useNavigate();
  const invoiceList = useSelector((state) => state.user.invoiceList);
  console.log(invoiceList, "item.itemsList.length");

  return (
    <aside className="sidebar">
      <section className="search-section">
        {/* <input className="search-input" type="text" placeholder="search..." /> */}
      </section>
      <ul className="sidebar-list">
        {invoiceList.length > 0 &&
          invoiceList.map((item) => {
            return (
              <li
                className={id === item._id ? `selected` : ``}
                onClick={() => {
                  setId(item._id);
                  navigate(`/dashboard/${item._id}`);
                }}
                key={item._id}
              >
                <div className="invoice-list">
                  <div className="invoice-details">
                    <h4 className={id === item._id ? `white` : ``}>
                      Inv: #{item._id}
                    </h4>
                    <time>{formatDate(item.date)}</time>
                  </div>
                  <div className="invoice-details-bottom-row">
                    <div className="invoice-bottom-row-details">
                      <p className={id === item._id ? `white` : ``}>
                        Items- {item.itemsList.length}
                      </p>
                      <p className="weight600 invoice-details-row-name">
                        {" "}
                        {item.customer.name}
                      </p>
                    </div>
                    <p
                      className={`${id === item._id ? `white` : ``} weight600`}
                    >
                      ₹{item.grandTotal}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
      </ul>
    </aside>
  );
}
