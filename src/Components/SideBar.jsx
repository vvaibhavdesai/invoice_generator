export function SideBar() {
  return (
    <aside className="sidebar">
      <section className="search-section">
        <input className="search-input" type="text" placeholder="search..." />
      </section>
      <ul className="sidebar-list">
        <li>
          <div className="invoice-list">
            <div className="invoice-details">
              <h4>Inv: #1</h4>
              <time>xya asd</time>
            </div>
            <div className="invoice-details-bottom-row">
              <div className="invoice-bottom-row-details">
                <p>Items -1</p>
                <p className="weight600 invoice-details-row-name"> Vaibhav Desai</p>
              </div>
              <p className="weight600">₹2000</p>
            </div>
          </div>
        </li>
      </ul>
    </aside>
  );
}
