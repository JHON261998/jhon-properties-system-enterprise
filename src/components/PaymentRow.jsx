function PaymentRow({ payment }) {
  return (
    <tr>
      <td>{payment.receiptNo}</td>
      <td>{payment.period}</td>
      <td>{payment.tenant}</td>
      <td>{payment.unit}</td>
      <td>{payment.amount}</td>
      <td>{payment.method}</td>
      <td>{payment.createdAt}</td>
    </tr>
  );
}

export default PaymentRow;
