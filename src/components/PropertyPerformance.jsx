import EnterpriseTable from "./EnterpriseTable";

function PropertyPerformance({ properties }) {

  const columns = [

    {
      key: "property",
      label: "Property",
    },

    {
      key: "occupancyRate",
      label: "Occupancy %",
    },

    {
      key: "expectedRent",
      label: "Expected Rent",
    },

    {
      key: "collectedRent",
      label: "Collected",
    },

    {
      key: "outstandingBalance",
      label: "Outstanding",
    },

    {
      key: "collectionRate",
      label: "Collection %",
    },

  ];

  return (

    <div className="dashboard-section">

      <h2>Property Performance</h2>

      <EnterpriseTable

        columns={columns}

        data={properties}

      />

    </div>

  );

}

export default PropertyPerformance;