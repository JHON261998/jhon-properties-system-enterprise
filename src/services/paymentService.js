import {
  createPayment,
} from "../features/payments/paymentStore";

import {
  loadCharges,
  updateChargePayment,
} from "../features/rentCharges/chargeStore";

export function receivePayment(data, payments) {
  const charges = loadCharges();

  console.log("========== PAYMENT SERVICE ==========");
  console.log("Incoming Data:", data);
  console.log("All Charges:", charges);

  const charge = charges.find(
    (c) => String(c.id) === String(data.chargeId)
  );

  console.log("Selected Charge:", charge);

  if (!charge) {
    throw new Error("Rent charge not found.");
  }

  const paymentData = {
    ...data,

    // Business Context
    leaseId: charge.leaseId,

    propertyId: charge.propertyId,
    property: charge.property,

    buildingId: charge.buildingId,
    building: charge.building,

    unitId: charge.unitId,
    unit: charge.unit,

    tenantId: charge.tenantId,
    tenant: charge.tenant,

    // Accounting Context
    period: charge.period,
  };

  console.log("Payment Data Before createPayment():", paymentData);

  const payment = createPayment(
    paymentData,
    payments.length
  );

  console.log("Payment Object Returned:", payment);

  updateChargePayment(
    data.chargeId,
    Number(data.amount)
  );

  console.log("====================================");

  return payment;
}