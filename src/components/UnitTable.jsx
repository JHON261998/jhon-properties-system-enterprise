import UnitRow from "./UnitRow";

function UnitTable({ units }) {
  return (
    <div className="table-container">
      <table className="jps-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Unit</th>
            <th>Building</th>
            <th>Type</th>
            <th>Monthly Rent</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {units.length === 0 ? (
            <tr>
              <td colSpan={6} className="empty-state">
                No units registered.
              </td>
            </tr>
          ) : (
            units.map((unit) => (
              <UnitRow
                key={unit.id}
                unit={unit}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UnitTable;