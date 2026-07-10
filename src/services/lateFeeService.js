import {
  loadCharges,
  saveCharges,
} from "../features/rentCharges/chargeStore";

import { logActivity } from "../features/audit/auditStore";

import {
  getGraceDeadline,
} from "./gracePeriodService";

const DEFAULT_LATE_FEE_PERCENT = 5;

function isOverdue(charge) {

  if (!charge.dueDate) {
    return false;
  }

  const today = new Date();

  const deadline =
    getGraceDeadline(charge.dueDate);

  return today > deadline;

}

export function applyLateFees() {

  const charges = loadCharges();

  let applied = 0;

  const updated = charges.map((charge) => {

    // Skip paid charges
    if (charge.status === "Paid") {
      return charge;
    }

    // Skip charges that are not yet overdue
    if (!isOverdue(charge)) {
      return charge;
    }

    // Prevent duplicate late fees
    if (charge.lateFeeApplied) {
      return charge;
    }

    const amount = Number(
      charge.balance || charge.amount
    );

    const lateFee =
      Math.round(
        amount * DEFAULT_LATE_FEE_PERCENT
      ) / 100;

    applied++;

    return {

      ...charge,

      lateFee,

      balance:
        Number(charge.balance) + lateFee,

      lateFeeApplied: true,

      lateFeeDate:
        new Date().toLocaleDateString(),

    };

  });

  saveCharges(updated);

  if (applied > 0) {

    logActivity({

      module: "Billing",

      action: "Late Fee Applied",

      description:
`${applied} rent charge(s) received late fees.`

    });

  }

  return {

    applied,

    totalCharges: updated.length,

  };

}