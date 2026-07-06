import RentChargeRow from "./RentChargeRow";

function RentChargeTable({ charges }) {
  return (
    <div className="table-container">
      <table className="jps-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Period</th>
            <th>Tenant</th>
            <th>Unit</th>
            <th>Rent</th>
            <th>Paid</th>
            <th>Balance</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {charges.length === 0 ? (
            <tr>
              <td colSpan={8} className="empty-state">
                No Rent Charges Generated
              </td>
            </tr>
          ) : (
            charges.map((charge) => (
              <RentChargeRow
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

export default RentChargeTable;