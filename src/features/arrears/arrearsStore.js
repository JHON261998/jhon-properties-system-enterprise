import { loadCharges } from "../rentCharges/chargeStore";

export function getArrears() {
  const charges = loadCharges();

  return charges
    .filter((charge) => charge.balance > 0)
    .map((charge) => ({
      ...charge,
      arrears: charge.balance,
    }));
}