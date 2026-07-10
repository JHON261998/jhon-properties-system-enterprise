function ExecutiveAlerts({ dashboard }) {
  const { stats, occupancy } = dashboard;

  const alerts = [];

  if (stats.outstandingBalance > 0) {
    alerts.push({
      color: "#dc2626",
      title: "Outstanding Rent",
      message: `KES ${stats.outstandingBalance.toLocaleString()} is still outstanding.`,
    });
  }

  if (occupancy.vacantUnits > 0) {
    alerts.push({
      color: "#d97706",
      title: "Vacant Units",
      message: `${occupancy.vacantUnits} unit(s) are currently vacant.`,
    });
  }

  if (occupancy.occupancyRate >= 90) {
    alerts.push({
      color: "#16a34a",
      title: "Excellent Occupancy",
      message: `Occupancy is ${occupancy.occupancyRate}%.`,
    });
  }

  return (
    <div className="dashboard-widget">
      <h2>Executive Alerts</h2>

      {alerts.length === 0 ? (
        <p>No alerts at this time.</p>
      ) : (
        alerts.map((alert, index) => (
          <div
            key={index}
            className="alert-card"
            style={{ borderLeft: `5px solid ${alert.color}` }}
          >
            <strong>{alert.title}</strong>
            <p>{alert.message}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default ExecutiveAlerts;