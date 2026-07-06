import { loadProperties } from "../features/properties/propertyStore";
import { loadBuildings } from "../features/buildings/buildingStore";
import { loadUnits } from "../features/units/unitStore";
import { loadTenants } from "../features/tenants/tenantStore";
import { loadLeases } from "../features/leases/leaseStore";
import { loadCharges } from "../features/rentCharges/chargeStore";
import { loadPayments } from "../features/payments/paymentStore";

export function getDashboardStats() {
  const properties = loadProperties();
  const buildings = loadBuildings();
  const units = loadUnits();
  const tenants = loadTenants();
  const leases = loadLeases();
  const charges = loadCharges();
  const payments = loadPayments();

  const occupiedUnits = units.filter(
    (unit) => unit.status === "Occupied"
  ).length;

  const vacantUnits = units.filter(
    (unit) => unit.status !== "Occupied"
  ).length;

  const totalRentCharged = charges.reduce(
    (sum, charge) => sum + Number(charge.amount || 0),
    0
  );

  const totalCollected = payments.reduce(
    (sum, payment) => sum + Number(payment.amount || 0),
    0
  );

  const outstandingBalance = charges.reduce(
    (sum, charge) => sum + Number(charge.balance || 0),
    0
  );

  return {
    properties: properties.length,
    buildings: buildings.length,
    units: units.length,
    occupiedUnits,
    vacantUnits,
    tenants: tenants.length,
    leases: leases.length,
    rentCharges: charges.length,
    payments: payments.length,
    totalRentCharged,
    totalCollected,
    outstandingBalance,
  };
}