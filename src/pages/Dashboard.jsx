import { getUnitStatistics } from "../features/units/unitStore";

function Dashboard() {
  const stats = getUnitStatistics();

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Dashboard</h1>
          <p>Welcome back to Jhon Properties System Enterprise.</p>
        </div>

        <button className="primary-btn">
          + Add Property
        </button>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>Total Units</h3>
          <p>{stats.total}</p>
        </div>

        <div className="dashboard-card">
          <h3>Occupied Units</h3>
          <p>{stats.occupied}</p>
        </div>

        <div className="dashboard-card">
          <h3>Vacant Units</h3>
          <p>{stats.vacant}</p>
        </div>

        <div className="dashboard-card">
          <h3>Occupancy Rate</h3>
          <p>{stats.occupancy}%</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;