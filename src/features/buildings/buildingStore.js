export function loadBuildings() {
  const saved = localStorage.getItem("buildings");
  return saved ? JSON.parse(saved) : [];
}

export function saveBuildings(buildings) {
  localStorage.setItem(
    "buildings",
    JSON.stringify(buildings)
  );
}

export function createBuilding(data, count) {
  return {
    id: `B-${Date.now()}`,
    code: `B-${String(count + 1).padStart(3, "0")}`,
    status: "Active",
    createdAt: new Date().toLocaleDateString(),
    ...data,
  };
}