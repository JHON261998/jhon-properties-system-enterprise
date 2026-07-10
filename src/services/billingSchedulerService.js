import {
  generateMonthlyRent,
  getCurrentBillingPeriod,
} from "./rentGenerationService";

import { logActivity } from "../features/audit/auditStore";

const STORAGE_KEY = "billingScheduler";

export function loadSchedulerState() {
  const saved = localStorage.getItem(STORAGE_KEY);

  return saved
    ? JSON.parse(saved)
    : {
        lastBillingPeriod: null,
      };
}

export function saveSchedulerState(state) {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(state)
  );
}

export function runBillingScheduler() {

  const period = getCurrentBillingPeriod();

  const scheduler = loadSchedulerState();

  if (scheduler.lastBillingPeriod === period) {
    return {
      executed: false,
      reason: "Already Generated",
    };
  }

  const result = generateMonthlyRent(period);

  scheduler.lastBillingPeriod = period;

  saveSchedulerState(scheduler);

  logActivity({
    module: "Billing",
    action: "Automatic Monthly Billing",
    description:
`Billing Period: ${period}

Generated: ${result.generated}

Duplicates: ${result.duplicates}

Skipped: ${result.skipped}`
  });

  return {
    executed: true,
    result,
  };
}