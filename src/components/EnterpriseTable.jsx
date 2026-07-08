import { useMemo, useState } from "react";

function EnterpriseTable({
  columns = [],
  data = [],
}) {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState(null);
  const [ascending, setAscending] = useState(true);

  const [page, setPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [density, setDensity] = useState("comfortable");
  const [zebra, setZebra] = useState(true);

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

  const totalPages = Math.max(
    1,
    Math.ceil(sortedData.length / rowsPerPage)
  );

  const startIndex =
    (page - 1) * rowsPerPage;

  const endIndex = Math.min(
    startIndex + rowsPerPage,
    sortedData.length
  );

  const paginatedData =
    sortedData.slice(
      startIndex,
      startIndex + rowsPerPage
    );

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

        <div className="table-options">

          <label>
            Density
          </label>

          <select
            value={density}
            onChange={(e) => setDensity(e.target.value)}
          >
            <option value="compact">Compact</option>
            <option value="comfortable">Comfortable</option>
            <option value="spacious">Spacious</option>
          </select>

          <label>
            <input
              type="checkbox"
              checked={zebra}
              onChange={() => setZebra(!zebra)}
            />
            Zebra Rows
          </label>

        </div>
      </div>

      <div className="enterprise-table-wrapper">
        <table
          className={`enterprise-table ${density} ${
            zebra ? "zebra" : ""
          }`}
        >
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  className={
                    column === columns[0]
                      ? "sticky-column"
                      : ""
                  }
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
                  colSpan={columns.length}
                  className="empty-table"
                >
                  No records found.
                </td>
              </tr>
            ) : (
              paginatedData.map((row, index) => (
                <tr key={row.id || index}>
                  {columns.map((column) => (
                    <td
                      key={column.key}
                      className={
                        column === columns[0]
                          ? "sticky-column"
                          : ""
                      }
                    >
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

        <div className="pagination-controls">

          <button
            disabled={page === 1}
            onClick={() => setPage(page - 1)}
          >
            Previous
          </button>

          <div>

            <div>
              Page {page} of {totalPages}
            </div>

            <small>
              Showing{" "}
              {sortedData.length === 0
                ? 0
                : startIndex + 1}
              –
              {endIndex}
              {" "}of{" "}
              {sortedData.length}
              {" "}records
            </small>

          </div>

          <button
            disabled={page >= totalPages}
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>

        </div>

        <div className="pagination-controls">

          <span>Rows:</span>

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