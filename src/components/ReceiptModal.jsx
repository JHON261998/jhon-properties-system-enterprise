function ReceiptModal({ open, payment, onClose }) {
  if (!open || !payment) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Payment Receipt</h2>

        <p><strong>Receipt:</strong> {payment.receiptNo}</p>
        <p><strong>Tenant:</strong> {payment.tenant}</p>
        <p><strong>Unit:</strong> {payment.unit}</p>
        <p><strong>Period:</strong> {payment.period}</p>
        <p><strong>Amount:</strong> KES {payment.amount}</p>
        <p><strong>Method:</strong> {payment.method}</p>
        <p><strong>Date:</strong> {payment.createdAt}</p>

        <div className="modal-buttons">
          <button
            className="primary-btn"
            onClick={onClose}
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}

export default ReceiptModal;