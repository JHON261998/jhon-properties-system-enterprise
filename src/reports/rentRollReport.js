import { loadCharges } from "../features/rentCharges/chargeStore";
import { getCurrentPeriod } from "../features/businessPeriods/periodStore";

export function getRentRollReport() {
  const period = getCurrentPeriod();

  if (!period) {
    return [];
  }

  const periodName = `${period.month} ${period.year}`;

  const charges = loadCharges().filter(
    (charge) => charge.period === periodName
  );

  return charges
    .map((charge) => ({
      propertyId: charge.propertyId,
      property: charge.property,

      buildingId: charge.buildingId,
      building: charge.building,

      unitId: charge.unitId,
      unit: charge.unit,

      tenantId: charge.tenantId,
      tenant: charge.tenant,

      leaseId: charge.leaseId,

      period: charge.period,

      rent: Number(charge.amount),

      paid: Number(charge.amountPaid),

      balance: Number(charge.balance),

      status: charge.status,
    }))
    .sort((a, b) => {
      if (a.property !== b.property) {
        return a.property.localeCompare(b.property);
      }

      if (a.building !== b.building) {
        return a.building.localeCompare(b.building);
      }

      return a.unit.localeCompare(b.unit);
    });
}