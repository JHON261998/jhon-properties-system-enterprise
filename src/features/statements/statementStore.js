import { loadCharges } from "../rentCharges/chargeStore";
import { loadPayments } from "../payments/paymentStore";
import { loadUnits } from "../units/unitStore";

export function getStatementData() {
  const charges = loadCharges();
  const payments = loadPayments();
  const units = loadUnits();

  const totalRent = charges.reduce(
    (sum, charge) => sum + Number(charge.amount || 0),
    0
  );

  const totalCollected = payments.reduce(
    (sum, payment) => sum + Number(payment.amount || 0),
    0
  );

  const outstanding = charges.reduce(
    (sum, charge) => sum + Number(charge.balance || 0),
    0
  );

  const occupied = units.filter(
    (unit) => unit.status === "Occupied"
  ).length;

  const vacant = units.length - occupied;

  const collectionRate =
    totalRent === 0
      ? 0
      : Math.round((totalCollected / totalRent) * 100);

  const outstandingTenants = charges.filter(
    (charge) => charge.balance > 0
  );

  return {
    totalRent,
    totalCollected,
    outstanding,
    occupied,
    vacant,
    collectionRate,
    outstandingTenants,
  };
}