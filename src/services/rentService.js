import {
  loadCharges,
  createCharge,
} from "../features/rentCharges/chargeStore";

import { loadLeases } from "../features/leases/leaseStore";

import { getCurrentPeriod } from "../features/businessPeriods/periodStore";

export function generateMonthlyCharges() {
  const leases = loadLeases();
  const period = getCurrentPeriod();

  if (!period) {
    throw new Error("No current business period selected.");
  }

  const charges = loadCharges();

  leases.forEach((lease) => {
    const exists = charges.find(
      (charge) =>
        charge.leaseId === lease.id &&
        charge.period === `${period.month} ${period.year}`
    );

    if (exists) return;

    charges.push(
      createCharge(
        {
          // Lease reference
          leaseId: lease.id,

          // FULL tenant context
          tenantId: lease.tenantId,
          tenant: lease.tenant,

          // FULL unit context
          unitId: lease.unitId,
          unit: lease.unit,

          // FULL building context
          buildingId: lease.buildingId,
          building: lease.building,

          // FULL property context
          propertyId: lease.propertyId,
          property: lease.property,

          // Billing period
          period: `${period.month} ${period.year}`,

          // Rent amount
          amount: lease.rent,
        },
        charges.length
      )
    );
  });

  return charges;
}