import {
  createLease,
} from "../features/leases/leaseStore";

import {
  markUnitOccupied,
} from "../features/units/unitStore";

export function createNewLease(data, leases) {
  const lease = createLease(
    data,
    leases.length
  );

  markUnitOccupied(data.unitId);

  return lease;
}