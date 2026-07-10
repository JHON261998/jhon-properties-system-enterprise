import {
  loadCharges,
} from "../features/rentCharges/chargeStore";

import {
  getCurrentBillingPeriod,
} from "../services/rentGenerationService";

function BillingStatusWidget() {

  const period = getCurrentBillingPeriod();

  const charges = loadCharges();

  const alreadyGenerated =
    charges.some(
      charge => charge.period === period
    );

  return (

    <div className="dashboard-widget">

      <h2>Monthly Billing Status</h2>

      <h1>

        {alreadyGenerated
          ? "✅"
          : "⚠️"}

      </h1>

      <p>

        {alreadyGenerated

          ? `${period} rent has already been generated.`

          : `${period} rent has NOT been generated.`}

      </p>

    </div>

  );

}

export default BillingStatusWidget;