import { loadPayments } from "../features/payments/paymentStore";

function RevenueTrend() {

  const payments = loadPayments();

  const monthlyTotals = {};

  payments.forEach((payment) => {

    const month = payment.period || "Unknown";

    monthlyTotals[month] =
      (monthlyTotals[month] || 0) +
      Number(payment.amount);

  });

  const chartData = Object.entries(monthlyTotals);

  const maxValue =
    Math.max(...chartData.map((d) => d[1]), 1);

  return (

    <div className="dashboard-widget">

      <h2>Monthly Revenue Trend</h2>

      <div className="bar-chart">

        {chartData.map(([month, value]) => (

          <div
            key={month}
            className="bar-column"
          >

            <div
              className="bar"
              style={{
                height: `${(value / maxValue) * 180}px`,
              }}
            />

            <small>{month}</small>

            <strong>

              {value.toLocaleString()}

            </strong>

          </div>

        ))}

      </div>

    </div>

  );

}

export default RevenueTrend;