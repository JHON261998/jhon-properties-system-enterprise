import StatementCard from "./StatementCard";

function StatementSummary({ data }) {
  return (
    <div className="dashboard-grid">

      <StatementCard
        title="Rental Income"
        value={`KES ${data.totalRent}`}
      />

      <StatementCard
        title="Collected"
        value={`KES ${data.totalCollected}`}
      />

      <StatementCard
        title="Outstanding"
        value={`KES ${data.outstanding}`}
      />

      <StatementCard
        title="Collection Rate"
        value={`${data.collectionRate}%`}
      />

      <StatementCard
        title="Occupied Units"
        value={data.occupied}
      />

      <StatementCard
        title="Vacant Units"
        value={data.vacant}
      />

    </div>
  );
}

export default StatementSummary;