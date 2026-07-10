import {
  getOccupancyReport,
  getCollectionReport,
  getPropertyReport,
  getBuildingReport,
  getTenantLedger,
  getRentRollReport,
} from "../reports";

import { loadCharges } from "../features/rentCharges/chargeStore";

import { getDashboardStats } from "./dashboardService";

export function getExecutiveDashboard() {
  const stats = getDashboardStats();

  const occupancy = getOccupancyReport();

  const collections = getCollectionReport();

  const properties = getPropertyReport();

  const buildings = getBuildingReport();

  const tenantLedger = getTenantLedger();

  const rentRoll = getRentRollReport();

  const charges = loadCharges();

  const overdueCharges = charges.filter(
    (charge) =>
      charge.status !== "Paid" &&
      charge.lateFeeApplied
  );

  const overdueCount =
    overdueCharges.length;

  const totalLateFees =
    overdueCharges.reduce(
      (sum, charge) =>
        sum + Number(charge.lateFee || 0),
      0
    );

  return {
    // KPI Statistics
    stats,

    // Report Engines
    occupancy,
    collections,

    // Executive Dashboard Widgets
    propertyPerformance: properties,

    buildings,
    tenantLedger,
    rentRoll,

    overdueCount,

    totalLateFees,
  };
}