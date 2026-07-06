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
          leaseId: lease.id,
          tenant: lease.tenant,
          unit: lease.unit,
          period: `${period.month} ${period.year}`,
          amount: lease.rent,
        },
        charges.length
      )
    );
  });

  return charges;
}