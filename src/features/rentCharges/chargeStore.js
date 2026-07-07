export function loadCharges() {
  const saved = localStorage.getItem("rentCharges");
  return saved ? JSON.parse(saved) : [];
}

export function saveCharges(charges) {
  localStorage.setItem(
    "rentCharges",
    JSON.stringify(charges)
  );
}

export function createCharge(data, count) {
  const amount = Number(data.amount);

  return {
    id: crypto.randomUUID(),

    code: `RC-${String(count + 1).padStart(3, "0")}`,

    ...data,

    amount,
    amountPaid: 0,
    balance: amount,

    status: "Unpaid",

    createdAt: new Date().toLocaleString(),
  };
}

export function updateChargePayment(chargeId, paymentAmount) {
  const charges = loadCharges();

  const updated = charges.map((charge) => {
    if (String(charge.id) !== String(chargeId)) {
      return charge;
    }

    const amountPaid =
      Number(charge.amountPaid) + Number(paymentAmount);

    const balance =
      Number(charge.amount) - amountPaid;

    let status = "Unpaid";

    if (balance <= 0) {
      status = "Paid";
    } else if (amountPaid > 0) {
      status = "Partially Paid";
    }

    return {
      ...charge,
      amountPaid,
      balance: balance < 0 ? 0 : balance,
      status,
    };
  });

  saveCharges(updated);
}

export function getOutstandingCharges() {
  return loadCharges().filter(
    (charge) => charge.status !== "Paid"
  );
}