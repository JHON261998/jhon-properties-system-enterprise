export function loadPeriods() {
  const saved = localStorage.getItem("businessPeriods");
  return saved ? JSON.parse(saved) : [];
}

export function savePeriods(periods) {
  localStorage.setItem("businessPeriods", JSON.stringify(periods));
}

export function createPeriod(data, count) {
  return {
    id: Date.now().toString(),
    code: `BP-${String(count + 1).padStart(3, "0")}`,
    status: "Open",
    createdAt: new Date().toLocaleDateString(),
    ...data,
  };
}

export function closePeriod(id) {
  const periods = loadPeriods();

  const updated = periods.map(period =>
    period.id === id
      ? { ...period, status: "Closed" }
      : period
  );

  savePeriods(updated);
}

export function openPeriod(id) {
  const periods = loadPeriods();

  const updated = periods.map(period =>
    period.id === id
      ? { ...period, status: "Open" }
      : period
  );

  savePeriods(updated);
}