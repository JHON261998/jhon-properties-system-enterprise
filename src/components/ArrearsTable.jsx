import ArrearsRow from "./ArrearsRow";

function ArrearsTable({ arrears }) {
  return (
    <div className="table-container">
      <table className="jps-table">
        <thead>
          <tr>
            <th>Tenant</th>
            <th>Unit</th>
            <th>Period</th>
            <th>Rent</th>
            <th>Paid</th>
            <th>Outstanding</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {arrears.length === 0 ? (
            <tr>
              <td colSpan={7} className="empty-state">
                No Tenants In Arrears
              </td>
            </tr>
          ) : (
            arrears.map((charge) => (
              <ArrearsRow
                key={charge.id}
                charge={charge}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ArrearsTable;