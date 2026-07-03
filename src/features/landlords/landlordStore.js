export function loadLandlords() {
  const saved = localStorage.getItem("landlords");

  return saved ? JSON.parse(saved) : [];
}

export function saveLandlords(landlords) {
  localStorage.setItem(
    "landlords",
    JSON.stringify(landlords)
  );
}

export function createLandlord(data) {
  return {
    id: `L-${Date.now()}`,
    status: "Active",
    ...data,
  };
}