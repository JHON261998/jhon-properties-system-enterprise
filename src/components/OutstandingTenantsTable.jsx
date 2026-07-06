function OutstandingTenantsTable({ tenants }) {
  return (
    <div className="table-container">

      <table className="jps-table">

        <thead>
          <tr>
            <th>Tenant</th>
            <th>Unit</th>
            <th>Period</th>
            <th>Outstanding</th>
          </tr>
        </thead>

        <tbody>

          {tenants.length === 0 ? (
            <tr>
              <td
                colSpan={4}
                className="empty-state"
              >
                No Outstanding Balances
              </td>
            </tr>
          ) : (
            tenants.map((tenant) => (
              <tr key={tenant.id}>
                <td>{tenant.tenant}</td>
                <td>{tenant.unit}</td>
                <td>{tenant.period}</td>
                <td>KES {tenant.balance}</td>
              </tr>
            ))
          )}

        </tbody>

      </table>

    </div>
  );
}

export default OutstandingTenantsTable;