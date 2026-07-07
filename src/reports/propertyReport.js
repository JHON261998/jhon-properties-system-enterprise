import { loadProperties } from "../features/properties/propertyStore";
import { loadBuildings } from "../features/buildings/buildingStore";
import { loadUnits } from "../features/units/unitStore";
import { loadCharges } from "../features/rentCharges/chargeStore";
import { loadPayments } from "../features/payments/paymentStore";
import { getCurrentPeriod } from "../features/businessPeriods/periodStore";

export function getPropertyReport() {
  const period = getCurrentPeriod();

  if (!period) {
    return [];
  }

  const periodName = `${period.month} ${period.year}`;

  const properties = loadProperties();
  const buildings = loadBuildings();
  const units = loadUnits();
  const charges = loadCharges();
  const payments = loadPayments();

  return properties.map((property) => {

    const propertyBuildings = buildings.filter(
      building => building.propertyId === property.id
    );

    const buildingIds = propertyBuildings.map(
      building => building.id
    );

    const propertyUnits = units.filter(
      unit => buildingIds.includes(unit.buildingId)
    );

    const unitIds = propertyUnits.map(
      unit => unit.id
    );

    const occupiedUnits = propertyUnits.filter(
      unit => unit.status === "Occupied"
    );

    const vacantUnits = propertyUnits.filter(
      unit => unit.status === "Vacant"
    );

    const propertyCharges = charges.filter(
      charge =>
        unitIds.includes(charge.unitId) &&
        charge.period === periodName
    );

    const propertyPayments = payments.filter(
      payment =>
        unitIds.includes(payment.unitId) &&
        payment.period === periodName
    );

    const expectedRent = propertyCharges.reduce(
      (sum, charge) => sum + Number(charge.amount),
      0
    );

    const collectedRent = propertyPayments.reduce(
      (sum, payment) => sum + Number(payment.amount),
      0
    );

    const outstandingBalance =
      expectedRent - collectedRent;

    const occupancyRate =
      propertyUnits.length === 0
        ? 0
        : Number(
            (
              (occupiedUnits.length /
                propertyUnits.length) *
              100
            ).toFixed(1)
          );

    const collectionRate =
      expectedRent === 0
        ? 0
        : Number(
            (
              (collectedRent /
                expectedRent) *
              100
            ).toFixed(1)
          );

    return {

      propertyId: property.id,

      property: property.name,

      buildings: propertyBuildings.length,

      units: propertyUnits.length,

      occupied: occupiedUnits.length,

      vacant: vacantUnits.length,

      occupancyRate,

      expectedRent,

      collectedRent,

      outstandingBalance,

      collectionRate,

    };

  });

}