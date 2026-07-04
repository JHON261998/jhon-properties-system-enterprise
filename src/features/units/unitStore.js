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