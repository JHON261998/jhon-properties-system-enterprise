import {
  loadLeases,
} from "../features/leases/leaseStore";

import {
  loadCharges,
  saveCharges,
  createCharge,
} from "../features/rentCharges/chargeStore";

export function getCurrentBillingPeriod() {

  const now = new Date();

  return now.toLocaleDateString(
    "en-US",
    {
      month: "long",
      year: "numeric",
    }
  );

}

export function generateMonthlyRent(period) {

  const leases = loadLeases();

  const charges = loadCharges();

  const updatedCharges = [...charges];

  let generated = 0;
  let skipped = 0;
  let duplicates = 0;

  leases.forEach((lease) => {

    if (lease.status !== "Active") {
      skipped++;
      return;
    }

    const alreadyExists = charges.some((charge) =>

      charge.leaseId === lease.id &&
      charge.period === period

    );

    if (alreadyExists) {

      duplicates++;

      return;

    }

    const charge = createCharge(
      {
        leaseId: lease.id,

        tenantId: lease.tenantId,
        tenant: lease.tenant,

        propertyId: lease.propertyId,
        property: lease.property,

        buildingId: lease.buildingId,
        building: lease.building,

        unitId: lease.unitId,
        unit: lease.unit,

        amount: Number(lease.rent),

        period,
      },
      updatedCharges.length
    );

    updatedCharges.push(charge);

    generated++;

  });

  saveCharges(updatedCharges);

  return {

    generated,

    skipped,

    duplicates,

    total: updatedCharges.length,

  };

}