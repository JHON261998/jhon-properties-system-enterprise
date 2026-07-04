export function loadTenants() {
  const saved = localStorage.getItem("tenants");
  return saved ? JSON.parse(saved) : [];
}

export function saveTenants(tenants) {
  localStorage.setItem("tenants", JSON.stringify(tenants));
}

export function createTenant(data, count) {
  return {
    id: `T-${Date.now()}`,
    code: `T-${String(count + 1).padStart(3, "0")}`,
    status: "Active",
    createdAt: new Date().toLocaleDateString(),
    ...data,
  };
}