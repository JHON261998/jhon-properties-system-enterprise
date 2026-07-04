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

export function createProperty(data) {
  return {
    id: `P-${Date.now()}`,
    status: "Active",
    ...data,
  };
}