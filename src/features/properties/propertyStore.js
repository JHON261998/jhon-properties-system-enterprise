export function loadProperties() {
  const saved = localStorage.getItem("properties");
  return saved ? JSON.parse(saved) : [];
}

export function saveProperties(properties) {
  localStorage.setItem(
    "properties",
    JSON.stringify(properties)
  );
}

export function createProperty(data, count) {
  return {
    id: `P-${Date.now()}`,
    code: `P-${String(count + 1).padStart(3, "0")}`,
    status: "Active",
    createdAt: new Date().toLocaleDateString(),
    ...data,
  };
}