import DashboardCard from "./DashboardCard";

function ExecutiveKPIs({ dashboard }) {
  const stats = dashboard.stats;
  const occupancy = dashboard.occupancy;

  return (
    <div className="dashboard-grid">

      <DashboardCard
        title="Properties"
        value={stats.properties}
        subtitle="Managed Properties"
        icon="🏢"
        trend="Portfolio"
      />

      <DashboardCard
        title="Buildings"
        value={stats.buildings}
        subtitle="Registered Buildings"
        icon="🏘️"
        trend="Structures"
      />

      <DashboardCard
        title="Total Units"
        value={occupancy.totalUnits}
        subtitle="Available Inventory"
        icon="🚪"
        trend="Units"
      />

      <DashboardCard
        title="Tenants"
        value={stats.tenants}
        subtitle="Active Tenants"
        icon="👤"
        trend="Residents"
      />

      <DashboardCard
        title="Occupancy"
        value={`${occupancy.occupancyRate}%`}
        subtitle="Current Occupancy"
        icon="📈"
        trend="Live Rate"
      />

      <DashboardCard
        title="Expected Rent"
        value={`KES ${stats.totalRentCharged.toLocaleString()}`}
        subtitle="Monthly Billing"
        icon="💰"
        trend="Revenue"
      />

      <DashboardCard
        title="Collected"
        value={`KES ${stats.totalCollected.toLocaleString()}`}
        subtitle="Payments Received"
        icon="💵"
        trend="Cash Flow"
      />

      <DashboardCard
        title="Outstanding"
        value={`KES ${stats.outstandingBalance.toLocaleString()}`}
        subtitle="Amounts Due"
        icon="⚠️"
        trend="Receivables"
      />

    </div>
  );
}

export default ExecutiveKPIs;