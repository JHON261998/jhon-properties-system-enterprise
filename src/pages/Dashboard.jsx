import { getDashboardStats } from "../services/dashboardService";

import {
  getOccupancyReport,
  getCollectionReport,
} from "../reports";

function Dashboard() {
  const stats = getDashboardStats();

  const occupancy = getOccupancyReport();
  const collection = getCollectionReport();

  console.log("Occupancy Report:", occupancy);
  console.log("Collection Report:", collection);

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
          <h3>Occupied Units</h3>
          <p>{occupancy.occupiedUnits}</p>
        </div>

        <div className="dashboard-card">
          <h3>Vacant Units</h3>
          <p>{occupancy.vacantUnits}</p>
        </div>

        <div className="dashboard-card">
          <h3>Occupancy Rate</h3>
          <p>{occupancy.occupancyRate}%</p>
        </div>

        <div className="dashboard-card">
          <h3>Tenants</h3>
          <p>{stats.tenants}</p>
        </div>

        <div className="dashboard-card">
          <h3>Leases</h3>
          <p>{stats.leases}</p>
        </div>

        <div className="dashboard-card">
          <h3>Rent Charges</h3>
          <p>{stats.rentCharges}</p>
        </div>

        <div className="dashboard-card">
          <h3>Payments</h3>
          <p>{stats.payments}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Rent Charged</h3>
          <p>KES {stats.totalRentCharged.toLocaleString()}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Collected</h3>
          <p>KES {stats.totalCollected.toLocaleString()}</p>
        </div>

        <div className="dashboard-card">
          <h3>Outstanding Balance</h3>
          <p>KES {stats.outstandingBalance.toLocaleString()}</p>
        </div>

      </div>
    </>
  );
}

export default Dashboard;