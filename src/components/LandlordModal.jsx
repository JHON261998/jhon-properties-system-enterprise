function LandlordModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add Landlord</h2>

        <input
          type="text"
          placeholder="Full Name"
        />

        <input
          type="text"
          placeholder="Phone Number"
        />

        <input
          type="email"
          placeholder="Email Address"
        />

        <div className="modal-buttons">

          <button className="primary-btn">
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