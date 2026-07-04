import { useState } from "react";

function BusinessPeriodModal({
  open,
  onClose,
  onSave,
}) {

  const [month, setMonth] = useState("");
  const [year, setYear] = useState("2026");

  if (!open) return null;

  function save() {

    if (!month) return;

    onSave({
      month,
      year,
    });

    setMonth("");
    setYear("2026");

    onClose();
  }

  return (

    <div className="modal-overlay">

      <div className="modal">

        <h2>Create Business Period</h2>

        <label>Month</label>

        <select
          value={month}
          onChange={(e)=>setMonth(e.target.value)}
        >

          <option value="">Select Month</option>

          <option>January</option>
          <option>February</option>
          <option>March</option>
          <option>April</option>
          <option>May</option>
          <option>June</option>
          <option>July</option>
          <option>August</option>
          <option>September</option>
          <option>October</option>
          <option>November</option>
          <option>December</option>

        </select>

        <label>Year</label>

        <input
          value={year}
          onChange={(e)=>setYear(e.target.value)}
        />

        <div className="modal-buttons">

          <button
            className="primary-btn"
            onClick={save}
          >
            Save
          </button>

          <button
            onClick={onClose}
          >
            Cancel
          </button>

        </div>

      </div>

    </div>

  );
}

export default BusinessPeriodModal;