import { useState } from "react";
import TextInput from "./TextInput";
import { loadLandlords } from "../features/landlords/landlordStore";

function PropertyModal({ open, onClose, onSave }) {
  const landlords = loadLandlords();

  const [name, setName] = useState("");
  const [landlordId, setLandlordId] = useState("");
  const [manager, setManager] = useState("");

  if (!open) return null;

  function handleSave() {
    if (!name.trim() || !landlordId) return;

    const landlord = landlords.find(
      (l) => String(l.id) === landlordId
    );

    onSave({
      name,
      landlordId,
      landlord: landlord?.name || "",
      manager,
    });

    setName("");
    setLandlordId("");
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

        <label>Landlord</label>

        <select
          value={landlordId}
          onChange={(e) => setLandlordId(e.target.value)}
        >
          <option value="">Select Landlord</option>

          {landlords.map((landlord) => (
            <option
              key={landlord.id}
              value={landlord.id}
            >
              {landlord.name}
            </option>
          ))}
        </select>

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