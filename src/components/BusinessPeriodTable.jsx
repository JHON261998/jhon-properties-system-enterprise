function BusinessPeriodTable({
  periods,
  onOpen,
  onClose,
}) {
  return (
    <div className="table-container">
      <table className="jps-table">

        <thead>
          <tr>
            <th>Code</th>
            <th>Period</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {periods.length === 0 ? (
            <tr>
              <td colSpan="4">
                No Business Periods Created
              </td>
            </tr>
          ) : (
            periods.map(period => (
              <tr key={period.id}>

                <td>{period.code}</td>

                <td>
                  {period.month} {period.year}
                </td>

                <td>{period.status}</td>

                <td>

                  {period.status === "Open" ? (

                    <button
                      onClick={() => onClose(period.id)}
                    >
                      Close
                    </button>

                  ) : (

                    <button
                      onClick={() => onOpen(period.id)}
                    >
                      Open
                    </button>

                  )}

                </td>

              </tr>
            ))
          )}

        </tbody>

      </table>
    </div>
  );
}

export default BusinessPeriodTable;