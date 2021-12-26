const InvoiceTable = ({ invoice }) => {
  return (
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
              ₹{item.subTotal.toFixed(2)}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default InvoiceTable;
