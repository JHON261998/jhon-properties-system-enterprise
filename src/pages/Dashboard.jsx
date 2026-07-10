import { getExecutiveDashboard } from "../services/dashboardServiceV2";
import { useAppRefresh } from "../context/AppRefreshContext";

import ExecutiveKPIs from "../components/ExecutiveKPIs";
import RevenueCollection from "../components/RevenueCollection";
import OccupancyWidget from "../components/OccupancyWidget";
import ExecutiveAlerts from "../components/ExecutiveAlerts";
import ActivityTimeline from "../components/ActivityTimeline";
import BillingStatusWidget from "../components/BillingStatusWidget";
import RecentPayments from "../components/RecentPayments";
import RevenueTrend from "../components/RevenueTrend";
import GenerateRentButton from "../components/GenerateRentButton";
import ApplyLateFeesButton from "../components/ApplyLateFeesButton";
import PropertyPerformance from "../components/PropertyPerformance";

function Dashboard() {

  const { refreshKey } = useAppRefresh();

  // Recalculate dashboard whenever refreshApp() is called.
  const dashboard = getExecutiveDashboard(refreshKey);

  return (
    <>
      <div className="page-header">

        <div>
          <h1>Executive Dashboard</h1>
          <p>
            Welcome back to Jhon Properties System Enterprise.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
          }}
        >

          <GenerateRentButton />

          <ApplyLateFeesButton />

        </div>

      </div>

      <ExecutiveKPIs dashboard={dashboard} />

      <RevenueCollection
        dashboard={dashboard}
      />

      <OccupancyWidget
        dashboard={dashboard}
      />

      <ExecutiveAlerts
        dashboard={dashboard}
      />

      <ActivityTimeline />

      <BillingStatusWidget />

      <RecentPayments />

      <RevenueTrend />

      <PropertyPerformance
        properties={dashboard.propertyPerformance}
      />

    </>
  );
}

export default Dashboard;