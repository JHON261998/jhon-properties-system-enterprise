import { loadPayments } from "../features/payments/paymentStore";

function RecentPayments() {
  const payments = loadPayments()
    .sort(
      (a, b) =>
        new Date(b.createdAt) - new Date(a.createdAt)
    )
    .slice(0, 5);

  return (
    <div className="dashboard-widget">

      <h2>Recent Payments</h2>

      {payments.length === 0 ? (
        <p>No payments received yet.</p>
      ) : (
        payments.map((payment) => (
          <div
            key={payment.id}
            className="payment-item"
          >
            <div>

              <strong>
                {payment.tenant}
              </strong>

              <br />

              <small>
                {payment.period}
              </small>

            </div>

            <div>

              <strong>
                KES {Number(payment.amount).toLocaleString()}
              </strong>

              <br />

              <small>
                {payment.method}
              </small>

            </div>

          </div>
        ))
      )}

    </div>
  );
}

export default RecentPayments;