const TableBody = ({ itemsList }) => {
  return (
    <tbody>
      {itemsList.length > 0 &&
        itemsList.map((item) => (
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
  );
};

export default TableBody;
