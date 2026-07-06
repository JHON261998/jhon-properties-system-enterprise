function RentChargeRow({ charge }) {
  return (
    <tr>
      <td>{charge.code}</td>
      <td>{charge.period}</td>
      <td>{charge.tenant}</td>
      <td>{charge.unit}</td>
      <td>KES {charge.amount}</td>
      <td>KES {charge.amountPaid}</td>
      <td>KES {charge.balance}</td>
      <td>{charge.status}</td>
    </tr>
  );
}

export default RentChargeRow;