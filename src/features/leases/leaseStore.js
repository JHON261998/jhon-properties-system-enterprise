export function loadLeases() {
  const saved = localStorage.getItem("leases");
  return saved ? JSON.parse(saved) : [];
}

export function saveLeases(leases) {
  localStorage.setItem("leases", JSON.stringify(leases));
}

export function createLease(data, count) {
  return {
    id: crypto.randomUUID(),
    code: `L-${String(count + 1).padStart(3, "0")}`,
    status: "Active",
    createdAt: new Date().toLocaleDateString(),
    ...data,
  };
}