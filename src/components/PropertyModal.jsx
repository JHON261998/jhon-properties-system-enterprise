import { useState } from "react";
import TextInput from "./TextInput";

function PropertyModal({ open, onClose, onSave }) {
  const [name, setName] = useState("");
  const [landlord, setLandlord] = useState("");
  const [manager, setManager] = useState("");

  if (!open) return null;

  function handleSave() {
    if (!name.trim()) return;

    onSave({
      name,
      landlord,
      manager,
    });

    setName("");
    setLandlord("");
    setManager("");
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Property</h2>

        <TextInput
          label="Property Name"
          placeholder="Sunset Apartments"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          label="Landlord"
          placeholder="Mr. Kamau"
          value={landlord}
          onChange={(e) => setLandlord(e.target.value)}
        />

        <TextInput
          label="Property Manager"
          placeholder="John"
          value={manager}
          onChange={(e) => setManager(e.target.value)}
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

export default PropertyModal;