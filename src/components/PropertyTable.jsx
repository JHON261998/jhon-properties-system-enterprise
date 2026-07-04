import PropertyRow from "./PropertyRow";

function PropertyTable({ properties }) {
  return (
    <div className="table-container">
      <table className="jps-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Property</th>
            <th>Landlord</th>
            <th>Manager</th>
            <th>Status</th>
            <th>Created</th>
          </tr>
        </thead>

        <tbody>
          {properties.length === 0 ? (
            <tr>
              <td colSpan={6} className="empty-state">
                No properties registered.
              </td>
            </tr>
          ) : (
            properties.map((property) => (
              <PropertyRow
                key={property.id}
                property={property}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PropertyTable;