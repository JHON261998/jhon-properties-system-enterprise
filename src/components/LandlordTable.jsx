import LandlordRow from "./LandlordRow";

function LandlordTable({ landlords, onDelete }) {
  return (
    <div className="table-container">
      <table className="jps-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Properties</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {landlords.length === 0 ? (
            <tr>
              <td colSpan={7} className="empty-state">
                No landlords registered.
              </td>
            </tr>
          ) : (
            landlords.map((landlord) => (
              <LandlordRow
                key={landlord.id}
                landlord={landlord}
                onDelete={onDelete}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LandlordTable;