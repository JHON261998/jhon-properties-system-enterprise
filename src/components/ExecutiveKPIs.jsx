function ExecutiveKPIs({ dashboard }) {
  const stats = dashboard.stats;
  const occupancy = dashboard.occupancy;

  return (
    <div className="dashboard-grid">

      <div className="dashboard-card">
        <h3>Properties</h3>
        <p>{stats.properties}</p>
      </div>

      <div className="dashboard-card">
        <h3>Buildings</h3>
        <p>{stats.buildings}</p>
      </div>

      <div className="dashboard-card">
        <h3>Total Units</h3>
        <p>{occupancy.totalUnits}</p>
      </div>

      <div className="dashboard-card">
        <h3>Tenants</h3>
        <p>{stats.tenants}</p>
      </div>

      <div className="dashboard-card">
        <h3>Occupancy</h3>
        <p>{occupancy.occupancyRate}%</p>
      </div>

      <div className="dashboard-card">
        <h3>Expected Rent</h3>
        <p>KES {stats.totalRentCharged.toLocaleString()}</p>
      </div>

      <div className="dashboard-card">
        <h3>Collected</h3>
        <p>KES {stats.totalCollected.toLocaleString()}</p>
      </div>

      <div className="dashboard-card">
        <h3>Outstanding</h3>
        <p>KES {stats.outstandingBalance.toLocaleString()}</p>
      </div>

    </div>
  );
}

export default ExecutiveKPIs;