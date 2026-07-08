function DashboardCard({
  title,
  value,
  subtitle,
  icon,
  trend,
}) {
  return (
    <div className="dashboard-card">

      <div className="dashboard-card-header">

        <div className="dashboard-icon">
          {icon}
        </div>

        <div>

          <h3>{title}</h3>

          <small>{subtitle}</small>

        </div>

      </div>

      <div className="dashboard-card-value">

        {value}

      </div>

      <div className="dashboard-card-trend">

        {trend}

      </div>

    </div>
  );
}

export default DashboardCard;