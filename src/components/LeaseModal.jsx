import { useState } from "react";
import { loadTenants } from "../features/tenants/tenantStore";
import { getVacantUnits } from "../features/units/unitStore";

function LeaseModal({ open, onClose, onSave }) {
  const tenants = loadTenants();
  const units = getVacantUnits();

  const [tenantId, setTenantId] = useState("");
  const [unitId, setUnitId] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [rent, setRent] = useState("");
  const [deposit, setDeposit] = useState("");

  if (!open) return null;

  function handleSave() {
    if (!tenantId || !unitId) return;

    const tenant = tenants.find((t) => String(t.id) === tenantId);
    const unit = units.find((u) => String(u.id) === unitId);

    onSave({
      tenantId,
      tenant: tenant?.fullName || "",
      unitId,
      unit: unit?.unitNumber || "",
      startDate,
      endDate,
      rent,
      deposit,
    });

    setTenantId("");
    setUnitId("");
    setStartDate("");
    setEndDate("");
    setRent("");
    setDeposit("");

    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Create Lease</h2>

        <label>Tenant</label>
        <select value={tenantId} onChange={(e) => setTenantId(e.target.value)}>
          <option value="">Select Tenant</option>
          {tenants.map((tenant) => (
            <option key={tenant.id} value={tenant.id}>
              {tenant.fullName}
            </option>
          ))}
        </select>

        <label>Unit</label>
        <select value={unitId} onChange={(e) => setUnitId(e.target.value)}>
          <option value="">Select Unit</option>
          {units.map((unit) => (
            <option key={unit.id} value={unit.id}>
              {unit.unitNumber}
            </option>
          ))}
        </select>

        <label>Start Date</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label>End Date</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <label>Monthly Rent</label>
        <input
          type="number"
          value={rent}
          onChange={(e) => setRent(e.target.value)}
        />

        <label>Deposit</label>
        <input
          type="number"
          value={deposit}
          onChange={(e) => setDeposit(e.target.value)}
        />

        <div className="modal-buttons">
          <button className="primary-btn" onClick={handleSave}>
            Save
          </button>

          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default LeaseModal;