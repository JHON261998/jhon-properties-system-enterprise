export function loadPayments() {
  const saved = localStorage.getItem("payments");
  return saved ? JSON.parse(saved) : [];
}

export function savePayments(payments) {
  localStorage.setItem(
    "payments",
    JSON.stringify(payments)
  );
}

export function createPayment(data, count) {
  return {
    id: `PAY-${Date.now()}`,
    receiptNo: `RCP-${String(count + 1).padStart(5, "0")}`,
    createdAt: new Date().toLocaleString(),
    ...data,
  };
}