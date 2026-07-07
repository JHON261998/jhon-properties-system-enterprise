import {
  getOccupancyReport,
  getCollectionReport,
  getPropertyReport,
  getBuildingReport,
  getTenantLedger,
  getRentRollReport,
} from "../reports";

import { getDashboardStats } from "./dashboardService";

export function getExecutiveDashboard() {
  const stats = getDashboardStats();

  const occupancy = getOccupancyReport();

  const collections = getCollectionReport();

  const properties = getPropertyReport();

  const buildings = getBuildingReport();

  const tenantLedger = getTenantLedger();

  const rentRoll = getRentRollReport();

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
  };
}