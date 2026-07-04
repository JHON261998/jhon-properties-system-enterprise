import { useState } from "react";
import TextInput from "./TextInput";

function UnitModal({ open, onClose, onSave }) {
  const [unitNumber, setUnitNumber] = useState("");
  const [building, setBuilding] = useState("");
  const [type, setType] = useState("");
  const [rent, setRent] = useState("");

  if (!open) return null;

  function handleSave() {
    if (!unitNumber.trim()) return;

    onSave({
      unitNumber,
      building,
      type,
      rent,
    });

    setUnitNumber("");
    setBuilding("");
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

        <TextInput
          label="Building"
          placeholder="Block A"
          value={building}
          onChange={(e) => setBuilding(e.target.value)}
        />

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