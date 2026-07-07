import { getExecutiveDashboard } from "../services/dashboardServiceV2";

function Dashboard() {

  const dashboard = getExecutiveDashboard();

  console.log("Executive Dashboard:", dashboard);

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Executive Dashboard</h1>
          <p>
            Welcome back to Jhon Properties System Enterprise.
          </p>
        </div>

        <button className="primary-btn">
          + Add Property
        </button>
      </div>

      <div className="dashboard-grid">

        <div className="dashboard-card">
          <h3>Properties</h3>
          <p>{dashboard.stats.properties}</p>
        </div>

        <div className="dashboard-card">
          <h3>Buildings</h3>
          <p>{dashboard.stats.buildings}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Units</h3>
          <p>{dashboard.occupancy.totalUnits}</p>
        </div>

        <div className="dashboard-card">
          <h3>Occupied Units</h3>
          <p>{dashboard.occupancy.occupiedUnits}</p>
        </div>

        <div className="dashboard-card">
          <h3>Vacant Units</h3>
          <p>{dashboard.occupancy.vacantUnits}</p>
        </div>

        <div className="dashboard-card">
          <h3>Occupancy Rate</h3>
          <p>{dashboard.occupancy.occupancyRate}%</p>
        </div>

        <div className="dashboard-card">
          <h3>Tenants</h3>
          <p>{dashboard.stats.tenants}</p>
        </div>

        <div className="dashboard-card">
          <h3>Leases</h3>
          <p>{dashboard.stats.leases}</p>
        </div>

        <div className="dashboard-card">
          <h3>Rent Charges</h3>
          <p>{dashboard.stats.rentCharges}</p>
        </div>

        <div className="dashboard-card">
          <h3>Payments</h3>
          <p>{dashboard.stats.payments}</p>
        </div>

        <div className="dashboard-card">
          <h3>Total Rent Charged</h3>
          <p>
            KES {dashboard.stats.totalRentCharged.toLocaleString()}
          </p>
        </div>

        <div className="dashboard-card">
          <h3>Total Collected</h3>
          <p>
            KES {dashboard.stats.totalCollected.toLocaleString()}
          </p>
        </div>

        <div className="dashboard-card">
          <h3>Outstanding Balance</h3>
          <p>
            KES {dashboard.stats.outstandingBalance.toLocaleString()}
          </p>
        </div>

      </div>
    </>
  );
}

export default Dashboard;