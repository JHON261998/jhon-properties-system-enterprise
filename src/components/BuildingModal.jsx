import { useState } from "react";
import { loadProperties } from "../features/properties/propertyStore";

function BuildingModal({ open, onClose, onSave }) {
  const properties = loadProperties();

  const [name, setName] = useState("");
  const [propertyId, setPropertyId] = useState("");

  if (!open) return null;

  function handleSave() {
    if (!name.trim() || !propertyId) return;

    const property = properties.find(
      (p) => String(p.id) === propertyId
    );

    onSave({
      name,
      propertyId,
      property: property?.name || "",
    });

    setName("");
    setPropertyId("");
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Building</h2>

        <label>Property</label>

        <select
          value={propertyId}
          onChange={(e) => setPropertyId(e.target.value)}
        >
          <option value="">Select Property</option>

          {properties.map((property) => (
            <option
              key={property.id}
              value={property.id}
            >
              {property.name}
            </option>
          ))}
        </select>

        <label>Building Name</label>

        <input
          type="text"
          placeholder="Block A"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <div className="modal-buttons">
          <button
            className="primary-btn"
            onClick={handleSave}
          >
            Save
          </button>

          <button onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default BuildingModal;