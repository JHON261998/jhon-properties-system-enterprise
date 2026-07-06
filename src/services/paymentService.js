import {
  createPayment,
} from "../features/payments/paymentStore";

import {
  updateChargePayment,
} from "../features/rentCharges/chargeStore";

export function receivePayment(data, payments) {
  const payment = createPayment(
    data,
    payments.length
  );

  updateChargePayment(
    data.chargeId,
    Number(data.amount)
  );

  return payment;
}