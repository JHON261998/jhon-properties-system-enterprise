function PropertyPerformance({ properties }) {
  return (
    <div className="dashboard-section">

      <h2>Property Performance</h2>

      <table className="dashboard-table">

        <thead>
          <tr>
            <th>Property</th>
            <th>Occupancy</th>
            <th>Expected Rent</th>
            <th>Collected</th>
            <th>Outstanding</th>
            <th>Collection %</th>
          </tr>
        </thead>

        <tbody>

          {properties.map((property) => (

            <tr key={property.propertyId}>

              <td>{property.property}</td>

              <td>{property.occupancyRate}%</td>

              <td>
                KES {property.expectedRent.toLocaleString()}
              </td>

              <td>
                KES {property.collectedRent.toLocaleString()}
              </td>

              <td>
                KES {property.outstandingBalance.toLocaleString()}
              </td>

              <td>
                {property.collectionRate}%
              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
}

export default PropertyPerformance;