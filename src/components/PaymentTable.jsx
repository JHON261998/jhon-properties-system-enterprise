import PaymentRow from "./PaymentRow";

function PaymentTable({ payments }) {
  return (
    <div className="table-container">
      <table className="jps-table">
        <thead>
          <tr>
            <th>Receipt</th>
            <th>Period</th>
            <th>Tenant</th>
            <th>Unit</th>
            <th>Amount</th>
            <th>Method</th>
            <th>Date Received</th>
          </tr>
        </thead>

        <tbody>
          {payments.length === 0 ? (
            <tr>
              <td colSpan={7} className="empty-state">
                No Payments Received
              </td>
            </tr>
          ) : (
            payments.map((payment) => (
              <PaymentRow
                key={payment.id}
                payment={payment}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PaymentTable;