import { getExecutiveDashboard } from "../services/dashboardServiceV2";

import ExecutiveKPIs from "../components/ExecutiveKPIs";
import PropertyPerformance from "../components/PropertyPerformance";

function Dashboard() {

  const dashboard = getExecutiveDashboard();

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

      <ExecutiveKPIs dashboard={dashboard} />

      <PropertyPerformance
        properties={dashboard.propertyPerformance}
      />

    </>
  );
}

export default Dashboard;