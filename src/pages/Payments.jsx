import { useEffect, useState } from "react";

import PaymentModal from "../components/PaymentModal";
import PaymentTable from "../components/PaymentTable";
import ReceiptModal from "../components/ReceiptModal";

import {
  loadPayments,
  savePayments,
  createPayment,
} from "../features/payments/paymentStore";

function Payments() {
  const [payments, setPayments] = useState(loadPayments);
  const [paymentModal, setPaymentModal] = useState(false);
  const [receiptModal, setReceiptModal] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    savePayments(payments);
  }, [payments]);

  function receivePayment(data) {
    const payment = createPayment(data, payments.length);

    const updated = [...payments, payment];

    setPayments(updated);

    setSelectedPayment(payment);

    setReceiptModal(true);
  }

  return (
    <>
      <div className="page-header">

        <div>
          <h1>Payments</h1>
          <p>Receive tenant payments.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setPaymentModal(true)}
        >
          + Receive Payment
        </button>

      </div>

      <PaymentTable payments={payments} />

      <PaymentModal
        open={paymentModal}
        onClose={() => setPaymentModal(false)}
        onSave={receivePayment}
      />

      <ReceiptModal
        open={receiptModal}
        payment={selectedPayment}
        onClose={() => setReceiptModal(false)}
      />
    </>
  );
}

export default Payments;