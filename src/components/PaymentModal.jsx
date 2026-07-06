import { useState } from "react";
import { getOutstandingCharges } from "../features/rentCharges/chargeStore";

function PaymentModal({ open, onClose, onSave }) {
  const charges = getOutstandingCharges();

  const [chargeId, setChargeId] = useState("");
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("Cash");

  if (!open) return null;

  function handleSave() {
    const charge = charges.find(
      (c) => String(c.id) === chargeId
    );

    if (!charge) return;

    onSave({
      chargeId,
      period: charge.period,
      tenant: charge.tenant,
      unit: charge.unit,
      amount,
      method,
    });

    setChargeId("");
    setAmount("");
    setMethod("Cash");

    onClose();
  }

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Receive Payment</h2>

        <label>Rent Charge</label>

        <select
          value={chargeId}
          onChange={(e) => setChargeId(e.target.value)}
        >
          <option value="">
            Select Rent Charge
          </option>

          {charges.map((charge) => (
            <option
              key={charge.id}
              value={charge.id}
            >
              {charge.tenant} - {charge.period} (KES {charge.balance})
            </option>
          ))}
        </select>

        <label>Amount Received</label>

        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <label>Payment Method</label>

        <select
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          <option>Cash</option>
          <option>M-Pesa</option>
          <option>Bank Transfer</option>
          <option>Cheque</option>
        </select>

        <div className="modal-buttons">
          <button
            className="primary-btn"
            onClick={handleSave}
          >
            Receive Payment
          </button>

          <button onClick={onClose}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PaymentModal;