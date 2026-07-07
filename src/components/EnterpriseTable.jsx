import { useMemo, useState } from "react";

function EnterpriseTable({
  columns = [],
  data = [],
}) {
  const [sortKey, setSortKey] = useState(null);
  const [ascending, setAscending] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  function handleSort(columnKey) {
    if (sortKey === columnKey) {
      setAscending(!ascending);
    } else {
      setSortKey(columnKey);
      setAscending(true);
    }
  }

  const filteredData = useMemo(() => {
    if (!search.trim()) return data;

    return data.filter((row) =>
      columns.some((column) => {
        const value = row[column.key];

        if (value === undefined || value === null) {
          return false;
        }

        return String(value)
          .toLowerCase()
          .includes(search.toLowerCase());
      })
    );
  }, [data, search, columns]);

  const sortedData = useMemo(() => {
    if (!sortKey) return filteredData;

    return [...filteredData].sort((a, b) => {
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
  }, [filteredData, sortKey, ascending]);

  const totalPages = Math.max(
    1,
    Math.ceil(sortedData.length / rowsPerPage)
  );

  const currentPage = Math.min(page, totalPages);

  const start = (currentPage - 1) * rowsPerPage;

  const paginatedData = sortedData.slice(
    start,
    start + rowsPerPage
  );

  function exportCSV() {
    const header = columns.map((c) => c.label).join(",");

    const rows = sortedData.map((row) =>
      columns
        .map((column) => `"${row[column.key] ?? ""}"`)
        .join(",")
    );

    const csv = [header, ...rows].join("\n");

    const blob = new Blob([csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");

    link.href = url;
    link.download = "report.csv";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(url);
  }

  function printTable() {
    const printWindow = window.open("", "_blank");

    const html = `
      <html>
        <head>
          <title>JPS Enterprise Report</title>

          <style>
            body{
              font-family:Arial,sans-serif;
              padding:30px;
            }

            h2{
              margin-bottom:20px;
            }

            table{
              width:100%;
              border-collapse:collapse;
            }

            th,td{
              border:1px solid #ddd;
              padding:10px;
              text-align:left;
            }

            th{
              background:#f3f3f3;
            }
          </style>
        </head>

        <body>

          <h2>JPS Enterprise Report</h2>

          <table>

            <thead>

              <tr>

                ${columns
                  .map((c) => `<th>${c.label}</th>`)
                  .join("")}

              </tr>

            </thead>

            <tbody>

              ${sortedData
                .map(
                  (row) => `
                <tr>

                  ${columns
                    .map(
                      (column) =>
                        `<td>${row[column.key] ?? ""}</td>`
                    )
                    .join("")}

                </tr>
              `
                )
                .join("")}

            </tbody>

          </table>

        </body>

      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
    printWindow.print();
  }

  return (
    <>
      <div className="enterprise-toolbar">

        <input
          className="enterprise-search"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
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

            {paginatedData.length === 0 ? (
              <tr>

                <td
                  className="empty-table"
                  colSpan={columns.length}
                >
                  No matching records.
                </td>

              </tr>
            ) : (
              paginatedData.map((row, index) => (
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

      <div className="enterprise-pagination">

        <div>

          Showing {sortedData.length === 0 ? 0 : start + 1} -{" "}
          {Math.min(start + rowsPerPage, sortedData.length)} of{" "}
          {sortedData.length}

        </div>

        <div className="pagination-controls">

          <button
            disabled={currentPage === 1}
            onClick={() => setPage(currentPage - 1)}
          >
            ◀ Previous
          </button>

          <span>
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => setPage(currentPage + 1)}
          >
            Next ▶
          </button>

          <select
            value={rowsPerPage}
            onChange={(e) => {
              setRowsPerPage(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value={10}>10</option>
            <option value={25}>25</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>

        </div>

      </div>
    </>
  );
}

export default EnterpriseTable;