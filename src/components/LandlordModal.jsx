import { useState } from "react";

function LandlordModal({ open, onClose, onSave }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [nationalId, setNationalId] = useState("");

  if (!open) return null;

  function handleSave() {
    if (!name.trim()) return;

    onSave({
      name,
      phone,
      email,
      nationalId,
      status: "Active",
    });

    setName("");
    setPhone("");
    setEmail("");
    setNationalId("");
  }

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add Landlord</h2>

        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="National ID"
          value={nationalId}
          onChange={(e) => setNationalId(e.target.value)}
        />

        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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

export default LandlordModal;