function RentChargeRow({ charge }) {
  return (
    <tr>
      <td>{charge.code}</td>
      <td>{charge.period}</td>
      <td>{charge.tenant}</td>
      <td>{charge.unit}</td>
      <td>{charge.amount}</td>
      <td>{charge.status}</td>
    </tr>
  );
}

export default RentChargeRow;