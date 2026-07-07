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

    return data.filter(row =>
      columns.some(column => {

        const value = row[column.key];

        if (value === undefined || value === null)
          return false;

        return String(value)
          .toLowerCase()
          .includes(search.toLowerCase());

      })
    );

  }, [data, search, columns]);

  const sortedData = useMemo(() => {

    if (!sortKey) return filteredData;

    return [...filteredData].sort((a, b) => {

      const A = a[sortKey];
      const B = b[sortKey];

      if (typeof A === "number") {

        return ascending
          ? A - B
          : B - A;

      }

      return ascending

        ? String(A).localeCompare(String(B))

        : String(B).localeCompare(String(A));

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

      </div>

      <div className="enterprise-table-wrapper">

        <table className="enterprise-table">

          <thead>

            <tr>

              {columns.map(column => (

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

                  {columns.map(column => (

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

          Showing {sortedData.length === 0 ? 0 : start + 1} -

          {" "}

          {Math.min(
            start + rowsPerPage,
            sortedData.length
          )}

          {" "}of{" "}

          {sortedData.length}

        </div>

        <div className="pagination-controls">

          <button
            disabled={currentPage === 1}
            onClick={() =>
              setPage(currentPage - 1)
            }
          >
            ◀ Previous
          </button>

          <span>

            Page {currentPage} of {totalPages}

          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() =>
              setPage(currentPage + 1)
            }
          >
            Next ▶
          </button>

          <select
            value={rowsPerPage}
            onChange={(e) => {

              setRowsPerPage(
                Number(e.target.value)
              );

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