import TenantRow from "./TenantRow";

function TenantTable({ tenants }) {
  return (
    <div className="table-container">
      <table className="jps-table">
        <thead>
          <tr>
            <th>Code</th>
            <th>Full Name</th>
            <th>Phone</th>
            <th>ID Number</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {tenants.length === 0 ? (
            <tr>
              <td colSpan={6} className="empty-state">
                No tenants registered.
              </td>
            </tr>
          ) : (
            tenants.map((tenant) => (
              <TenantRow key={tenant.id} tenant={tenant} />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default TenantTable;