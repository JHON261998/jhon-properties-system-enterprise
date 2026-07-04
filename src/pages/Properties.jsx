import { useEffect, useState } from "react";

import {
  loadProperties,
  saveProperties,
  createProperty,
} from "../features/properties/propertyStore";

function Properties() {
  const [name, setName] = useState("");
  const [properties, setProperties] = useState(loadProperties);

  useEffect(() => {
    saveProperties(properties);
  }, [properties]);

  function addProperty() {
    if (!name.trim()) return;

    const property = createProperty({
      name,
    });

    setProperties([...properties, property]);

    setName("");
  }

  return (
    <>
      <h1>Properties</h1>

      <p>Register and manage properties.</p>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          placeholder="Property Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <button
          className="primary-btn"
          onClick={addProperty}
          style={{ marginLeft: "10px" }}
        >
          Add Property
        </button>
      </div>

      <table className="jps-table" style={{ marginTop: "30px" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Property Name</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {properties.length === 0 ? (
            <tr>
              <td colSpan={3} className="empty-state">
                No properties registered.
              </td>
            </tr>
          ) : (
            properties.map((property) => (
              <tr key={property.id}>
                <td>{property.id}</td>
                <td>{property.name}</td>
                <td>{property.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </>
  );
}

export default Properties;
