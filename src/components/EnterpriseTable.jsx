import { useMemo, useState } from "react";

function EnterpriseTable({
  columns = [],
  data = [],
}) {

  const [sortKey, setSortKey] = useState(null);
  const [ascending, setAscending] = useState(true);
  const [search, setSearch] = useState("");

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

        if (value === null || value === undefined) {
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

  return (

    <>

      <div className="enterprise-toolbar">

        <input

          className="enterprise-search"

          placeholder="Search..."

          value={search}

          onChange={(e) =>
            setSearch(e.target.value)
          }

        />

      </div>

      <div className="enterprise-table-wrapper">

        <table className="enterprise-table">

          <thead>

            <tr>

              {columns.map((column) => (

                <th

                  key={column.key}

                  onClick={() =>
                    handleSort(column.key)
                  }

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

                  No matching records.

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