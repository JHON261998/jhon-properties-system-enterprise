import {
  loadUnits,
  getUnitStatistics,
} from "../features/units/unitStore";

export function getOccupancyReport() {
  const units = loadUnits();

  const stats = getUnitStatistics();

  return {
    generatedAt: new Date().toLocaleString(),

    totalUnits: stats.total,

    occupiedUnits: stats.occupied,

    vacantUnits: stats.vacant,

    occupancyRate: stats.occupancy,

    availableUnits: units
      .filter(unit => unit.status === "Vacant")
      .sort((a, b) =>
        a.unitNumber.localeCompare(b.unitNumber)
      ),
  };
}