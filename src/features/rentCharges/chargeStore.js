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
  return {
    id: `RC-${Date.now()}`,
    code: `RC-${String(count + 1).padStart(3, "0")}`,
    status: "Unpaid",
    createdAt: new Date().toLocaleDateString(),
    ...data,
  };
}