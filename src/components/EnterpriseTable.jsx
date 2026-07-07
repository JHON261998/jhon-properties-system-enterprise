import { useMemo, useState } from "react";

function EnterpriseTable({
  columns = [],
  data = [],
}) {

  const [sortKey, setSortKey] = useState(null);
  const [ascending, setAscending] = useState(true);

  function handleSort(columnKey) {

    if (sortKey === columnKey) {
      setAscending(!ascending);
    } else {
      setSortKey(columnKey);
      setAscending(true);
    }

  }

  const sortedData = useMemo(() => {

    if (!sortKey) return data;

    return [...data].sort((a, b) => {

      const valueA = a[sortKey];
      const valueB = b[sortKey];

      if (typeof valueA === "number") {
        return ascending
          ? valueA - valueB
          : valueB - valueA;
      }

      return ascending
        ? String(valueA).localeCompare(String(valueB))
        : String(valueB).localeCompare(String(valueA));

    });

  }, [data, sortKey, ascending]);

  return (

    <div className="enterprise-table-wrapper">

      <table className="enterprise-table">

        <thead>

          <tr>

            {columns.map((column) => (

              <th
                key={column.key}
                onClick={() => handleSort(column.key)}
                style={{ cursor: "pointer" }}
              >

                {column.label}

                {sortKey === column.key &&
                  (ascending ? " ▲" : " ▼")}

              </th>

            ))}

          </tr>

        </thead>

        <tbody>

          {sortedData.length === 0 ? (

            <tr>

              <td
                colSpan={columns.length}
                className="empty-table"
              >
                No records found.
              </td>

            </tr>

          ) : (

            sortedData.map((row, index) => (

              <tr key={row.id || index}>

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