import { useState } from "react";
import TextInput from "./TextInput";

function BuildingModal({ open, onClose, onSave }) {
  const [name, setName] = useState("");
  const [property, setProperty] = useState("");

  if (!open) return null;

  function handleSave() {
    if (!name.trim()) return;

    onSave({
      name,
      property,
    });

    setName("");
    setProperty("");
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Building</h2>

        <TextInput
          label="Building Name"
          placeholder="Block A"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          label="Property"
          placeholder="Sunset Apartments"
          value={property}
          onChange={(e) => setProperty(e.target.value)}
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