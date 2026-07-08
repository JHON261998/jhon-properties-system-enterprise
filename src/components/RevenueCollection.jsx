function RevenueCollection({ dashboard }) {

  const collected = dashboard.stats.totalCollected;

  const expected = dashboard.stats.totalRentCharged;

  const percentage =
    expected === 0
      ? 0
      : Math.round((collected / expected) * 100);

  return (

    <div className="dashboard-widget">

      <h2>Revenue Collection</h2>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${percentage}%`,
          }}
        />

      </div>

      <h1>{percentage}%</h1>

      <p>

        KES {collected.toLocaleString()}

        {" "}of{" "}

        KES {expected.toLocaleString()}

      </p>

    </div>

  );

}

export default RevenueCollection;