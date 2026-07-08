import { useMemo, useState } from "react";

function EnterpriseTable({
  columns = [],
  data = [],
}) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [ascending, setAscending] = useState(true);

  const filteredData = useMemo(() => {
    if (!search) return data;

    return data.filter((row) =>
      Object.values(row).some((value) =>
        String(value).toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [data, search]);

  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aVal = a[sortKey];
      const bVal = b[sortKey];

      if (aVal < bVal) return ascending ? -1 : 1;
      if (aVal > bVal) return ascending ? 1 : -1;
      return 0;
    });
  }, [filteredData, sortKey, ascending]);

  function handleSort(key) {
    if (sortKey === key) {
      setAscending(!ascending);
    } else {
      setSortKey(key);
      setAscending(true);
    }
  }

  function exportCSV() {
    const header = columns.map((c) => c.label).join(",");

    const rows = sortedData.map((row) =>
      columns
        .map((c) => `"${row[c.key] ?? ""}"`)
        .join(",")
    );

    const csv = [header, ...rows].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "export.csv";
    link.click();

    URL.revokeObjectURL(url);
  }

  function printTable() {
    window.print();
  }

  return (
    <>
      <div className="enterprise-toolbar">
        <input
          className="enterprise-search"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          className="enterprise-export-btn"
          onClick={exportCSV}
        >
          Export CSV
        </button>

        <button
          className="enterprise-print-btn"
          onClick={printTable}
        >
          Print
        </button>
      </div>

      <div className="enterprise-table-wrapper">
        <table className="enterprise-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  onClick={() => handleSort(column.key)}
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
    </>
  );
}

export default EnterpriseTable;