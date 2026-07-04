import LeaseRow from "./LeaseRow";

function LeaseTable({ leases }) {
  return (
    <div className="table-container">
      <table className="jps-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Tenant</th>
            <th>Unit</th>
            <th>Start</th>
            <th>End</th>
            <th>Monthly Rent</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {leases.length === 0 ? (
            <tr>
              <td colSpan={7} className="empty-state">
                No leases created.
              </td>
            </tr>
          ) : (
            leases.map((lease) => (
              <LeaseRow key={lease.id} lease={lease} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LeaseTable;