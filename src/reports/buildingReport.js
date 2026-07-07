import { loadBuildings } from "../features/buildings/buildingStore";
import { loadProperties } from "../features/properties/propertyStore";
import { loadUnits } from "../features/units/unitStore";
import { loadCharges } from "../features/rentCharges/chargeStore";
import { loadPayments } from "../features/payments/paymentStore";
import { getCurrentPeriod } from "../features/businessPeriods/periodStore";

export function getBuildingReport() {
  const period = getCurrentPeriod();

  if (!period) {
    return [];
  }

  const periodName = `${period.month} ${period.year}`;

  const buildings = loadBuildings();
  const properties = loadProperties();
  const units = loadUnits();
  const charges = loadCharges();
  const payments = loadPayments();

  return buildings.map((building) => {
    const property = properties.find(
      (p) => String(p.id) === String(building.propertyId)
    );

    const buildingUnits = units.filter(
      (unit) => String(unit.buildingId) === String(building.id)
    );

    const unitIds = buildingUnits.map((u) => String(u.id));

    const occupied = buildingUnits.filter(
      (u) => u.status === "Occupied"
    ).length;

    const vacant = buildingUnits.filter(
      (u) => u.status === "Vacant"
    ).length;

    const occupancyRate =
      buildingUnits.length === 0
        ? 0
        : Number(
            ((occupied / buildingUnits.length) * 100).toFixed(1)
          );

    const buildingCharges = charges.filter(
      (charge) =>
        unitIds.includes(String(charge.unitId)) &&
        charge.period === periodName
    );

    const buildingPayments = payments.filter(
      (payment) =>
        unitIds.includes(String(payment.unitId)) &&
        payment.period === periodName
    );

    const expectedRent = buildingCharges.reduce(
      (sum, charge) => sum + Number(charge.amount),
      0
    );

    const collectedRent = buildingPayments.reduce(
      (sum, payment) => sum + Number(payment.amount),
      0
    );

    const outstandingBalance =
      expectedRent - collectedRent;

    const collectionRate =
      expectedRent === 0
        ? 0
        : Number(
            ((collectedRent / expectedRent) * 100).toFixed(1)
          );

    return {
      buildingId: building.id,
      building: building.name,

      propertyId: property?.id || "",
      property: property?.name || "",

      units: buildingUnits.length,
      occupied,
      vacant,

      occupancyRate,

      expectedRent,
      collectedRent,
      outstandingBalance,

      collectionRate,
    };
  });
}