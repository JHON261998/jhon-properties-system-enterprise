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

  const [showColumns, setShowColumns] = useState(
    columns.reduce((obj, col) => {
      obj[col.key] = true;
      return obj;
    }, {})
  );

  const visibleColumns = columns.filter(
    col => showColumns[col.key]
  );

  function toggleColumn(key) {
    setShowColumns(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  }

  function handleSort(columnKey) {
    if (sortKey === columnKey) {
      setAscending(!ascending);
    } else {
      setSortKey(columnKey);
      setAscending(true);
    }
  }

  // Keep the rest of your current EnterpriseTable logic
  // (search, filtering, sorting, pagination,
  // exportCSV(), printTable())

  return (
    <>

      <div className="enterprise-toolbar">

        <input
          className="enterprise-search"
          placeholder="Search..."
          value={search}
          onChange={(e)=>{
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

      <div className="column-selector">

        {columns.map(column => (

          <label key={column.key}>

            <input
              type="checkbox"
              checked={showColumns[column.key]}
              onChange={() =>
                toggleColumn(column.key)
              }
            />

            {column.label}

          </label>

        ))}

      </div>

      <div className="enterprise-table-wrapper">

        <table className="enterprise-table">

          <thead>

            <tr>

              {visibleColumns.map(column=>(

                <th
                  key={column.key}
                  onClick={() =>
                    handleSort(column.key)
                  }
                >

                  {column.label}

                  {sortKey===column.key &&
                    (ascending ? " ▲":" ▼")}

                </th>

              ))}

            </tr>

          </thead>

          <tbody>

            {paginatedData.map((row,index)=>(

              <tr key={row.id||index}>

                {visibleColumns.map(column=>(

                  <td key={column.key}>

                    {row[column.key]}

                  </td>

                ))}

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Keep your existing pagination here */}

    </>
  );

}

export default EnterpriseTable;