import { useState } from "react";
import TextInput from "./TextInput";

function LandlordModal({ open, onClose, onSave }) {
  const [name, setName] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  function handleSave() {
    if (!name.trim()) return;

    onSave({
      name,
      nationalId,
      phone,
      email,
      status: "Active",
    });

    setName("");
    setNationalId("");
    setPhone("");
    setEmail("");
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Landlord</h2>

        <TextInput
          label="Full Name"
          placeholder="Enter full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <TextInput
          label="National ID"
          placeholder="Enter National ID"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />

        <TextInput
          label="Phone Number"
          placeholder="Enter phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextInput
          label="Email Address"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="modal-buttons">
          <button className="primary-btn" onClick={handleSave}>
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

export default LandlordModal;