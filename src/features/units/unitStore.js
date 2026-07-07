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
    id: crypto.randomUUID(),

    code: `U-${String(count + 1).padStart(3, "0")}`,

    status: "Vacant",

    createdAt: new Date().toLocaleDateString(),

    ...data,
  };
}

export function markUnitOccupied(unitId) {
  const units = loadUnits();

  const updated = units.map((unit) => {
    if (String(unit.id) === String(unitId)) {
      return {
        ...unit,
        status: "Occupied",
      };
    }

    return unit;
  });

  saveUnits(updated);
}

export function markUnitVacant(unitId) {
  const units = loadUnits();

  const updated = units.map((unit) => {
    if (String(unit.id) === String(unitId)) {
      return {
        ...unit,
        status: "Vacant",
      };
    }

    return unit;
  });

  saveUnits(updated);
}

export function getVacantUnits() {
  return loadUnits().filter(
    (unit) => unit.status === "Vacant"
  );
}

export function getOccupiedUnits() {
  return loadUnits().filter(
    (unit) => unit.status === "Occupied"
  );
}

export function getUnitStatistics() {
  const units = loadUnits();

  const total = units.length;

  const occupied = units.filter(
    (unit) => unit.status === "Occupied"
  ).length;

  const vacant = units.filter(
    (unit) => unit.status === "Vacant"
  ).length;

  const occupancy =
    total === 0
      ? 0
      : Number(((occupied / total) * 100).toFixed(1));

  return {
    total,
    occupied,
    vacant,
    occupancy,
  };
}