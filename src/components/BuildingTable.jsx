import BuildingRow from "./BuildingRow";

function BuildingTable({ buildings }) {
  return (
    <div className="table-container">
      <table className="jps-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Building</th>
            <th>Property</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {buildings.length === 0 ? (
            <tr>
              <td colSpan={5} className="empty-state">
                No buildings registered.
              </td>
            </tr>
          ) : (
            buildings.map((building) => (
              <BuildingRow
                key={building.id}
                building={building}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default BuildingTable;