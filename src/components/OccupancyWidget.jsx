function OccupancyWidget({ dashboard }) {

  const occupancy = dashboard.occupancy;

  const occupied = occupancy.occupiedUnits;

  const vacant = occupancy.vacantUnits;

  const total = occupancy.totalUnits;

  const percent =
    total === 0
      ? 0
      : Math.round((occupied / total) * 100);

  return (

    <div className="dashboard-widget">

      <h2>Occupancy Performance</h2>

      <div className="progress-bar">

        <div
          className="progress-fill"
          style={{
            width: `${percent}%`,
          }}
        />

      </div>

      <h1>{percent}%</h1>

      <p>

        {occupied} Occupied

        {" • "}

        {vacant} Vacant

        {" • "}

        {total} Total Units

      </p>

    </div>

  );

}

export default OccupancyWidget;