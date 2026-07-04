import { useState } from "react";
import TextInput from "./TextInput";
import { loadBuildings } from "../features/buildings/buildingStore";

function UnitModal({ open, onClose, onSave }) {
  const buildings = loadBuildings();

  const [unitNumber, setUnitNumber] = useState("");
  const [buildingId, setBuildingId] = useState("");
  const [type, setType] = useState("");
  const [rent, setRent] = useState("");

  if (!open) return null;

  function handleSave() {
    if (!unitNumber.trim() || !buildingId) return;

    const building = buildings.find(
      (b) => String(b.id) === buildingId
    );

    onSave({
      unitNumber,
      buildingId,
      building: building?.name || "",
      type,
      rent,
    });

    setUnitNumber("");
    setBuildingId("");
    setType("");
    setRent("");
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Unit</h2>

        <TextInput
          label="Unit Number"
          placeholder="A001"
          value={unitNumber}
          onChange={(e) => setUnitNumber(e.target.value)}
        />

        <label>Building</label>

        <select
          value={buildingId}
          onChange={(e) => setBuildingId(e.target.value)}
        >
          <option value="">Select Building</option>

          {buildings.map((building) => (
            <option
              key={building.id}
              value={building.id}
            >
              {building.name}
            </option>
          ))}
        </select>

        <TextInput
          label="Unit Type"
          placeholder="1 Bedroom"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />

        <TextInput
          label="Monthly Rent"
          placeholder="25000"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
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

export default UnitModal;