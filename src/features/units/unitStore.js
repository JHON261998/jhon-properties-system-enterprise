export function loadUnits() {
  const saved = localStorage.getItem("units");
  return saved ? JSON.parse(saved) : [];
}

export function saveUnits(units) {
  localStorage.setItem(
    "units",
    JSON.stringify(units)
  );
}

export function createUnit(data, count) {
  return {
    id: `U-${Date.now()}`,
    code: `U-${String(count + 1).padStart(3, "0")}`,
    status: "Vacant",
    createdAt: new Date().toLocaleDateString(),
    ...data,
  };
}