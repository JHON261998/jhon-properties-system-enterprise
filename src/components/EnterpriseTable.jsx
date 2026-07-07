function EnterpriseTable({
  columns = [],
  data = [],
}) {
  return (
    <div className="enterprise-table-wrapper">

      <table className="enterprise-table">

        <thead>

          <tr>

            {columns.map((column) => (

              <th key={column.key}>
                {column.label}
              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {data.length === 0 ? (

            <tr>

              <td
                colSpan={columns.length}
                className="empty-table"
              >
                No records found.
              </td>

            </tr>

          ) : (

            data.map((row, index) => (

              <tr
                key={row.id || index}
              >

                {columns.map((column) => (

                  <td key={column.key}>
                    {row[column.key]}
                  </td>

                ))}

              </tr>

            ))

          )}

        </tbody>

      </table>

    </div>
  );
}

export default EnterpriseTable;