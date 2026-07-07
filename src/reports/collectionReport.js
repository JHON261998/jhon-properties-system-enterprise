import { loadCharges } from "../features/rentCharges/chargeStore";
import { loadPayments } from "../features/payments/paymentStore";
import { getCurrentPeriod } from "../features/businessPeriods/periodStore";

export function getCollectionReport() {
  const period = getCurrentPeriod();

  if (!period) {
    return null;
  }

  const periodName = `${period.month} ${period.year}`;

  const charges = loadCharges().filter(
    charge => charge.period === periodName
  );

  const payments = loadPayments().filter(
    payment => payment.period === periodName
  );

  const expectedRent = charges.reduce(
    (sum, charge) => sum + Number(charge.amount),
    0
  );

  const collectedRent = payments.reduce(
    (sum, payment) => sum + Number(payment.amount),
    0
  );

  const outstandingBalance =
    expectedRent - collectedRent;

  const collectionRate =
    expectedRent === 0
      ? 0
      : Number(
          (
            (collectedRent / expectedRent) *
            100
          ).toFixed(1)
        );

  return {
    generatedAt: new Date().toLocaleString(),

    period: periodName,

    expectedRent,

    collectedRent,

    outstandingBalance,

    collectionRate,

    totalCharges: charges.length,

    totalPayments: payments.length,
  };
}