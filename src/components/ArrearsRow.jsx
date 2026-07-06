function ArrearsRow({ charge }) {
  return (
    <tr>
      <td>{charge.tenant}</td>
      <td>{charge.unit}</td>
      <td>{charge.period}</td>
      <td>KES {charge.amount}</td>
      <td>KES {charge.amountPaid}</td>
      <td>KES {charge.balance}</td>
      <td>⚠ In Arrears</td>
    </tr>
  );
}

export default ArrearsRow;
