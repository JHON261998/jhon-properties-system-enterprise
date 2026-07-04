import { useState } from "react";
import TextInput from "./TextInput";

function TenantModal({ open, onClose, onSave }) {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");

  if (!open) return null;

  function handleSave() {
    if (!fullName.trim()) return;

    onSave({
      fullName,
      phone,
      idNumber,
      email,
    });

    setFullName("");
    setPhone("");
    setIdNumber("");
    setEmail("");
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Tenant</h2>

        <TextInput
          label="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <TextInput
          label="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <TextInput
          label="National ID / Passport"
          value={idNumber}
          onChange={(e) => setIdNumber(e.target.value)}
        />

        <TextInput
          label="Email"
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

export default TenantModal;