function Dashboard() {
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
          <h3>Landlords</h3>
          <p>0 Registered</p>
        </div>

        <div className="dashboard-card">
          <h3>Properties</h3>
          <p>0 Registered</p>
        </div>

        <div className="dashboard-card">
          <h3>Tenants</h3>
          <p>0 Active</p>
        </div>

        <div className="dashboard-card">
          <h3>Monthly Rent</h3>
          <p>KES 0</p>
        </div>
      </div>
    </>
  );
}

export default Dashboard;