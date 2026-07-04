import { useEffect, useState } from "react";

import RentChargeTable from "../components/RentChargeTable";
import RentChargeGenerator from "../components/RentChargeGenerator";

import {
  loadCharges,
  saveCharges,
  createCharge,
} from "../features/rentCharges/chargeStore";

import { loadLeases } from "../features/leases/leaseStore";
import { getCurrentPeriod } from "../features/businessPeriods/periodStore";

function RentCharges() {
  const [charges, setCharges] = useState(loadCharges);

  useEffect(() => {
    saveCharges(charges);
  }, [charges]);

  function generateCharges() {
    const leases = loadLeases();
    const period = getCurrentPeriod();

    if (!period) {
      alert("Please select a Current Business Period.");
      return;
    }

    const existing = [...charges];

    leases.forEach((lease) => {
      const alreadyExists = existing.find(
        (charge) =>
          charge.leaseId === lease.id &&
          charge.period === `${period.month} ${period.year}`
      );

      if (alreadyExists) return;

      existing.push(
        createCharge(
          {
            leaseId: lease.id,
            period: `${period.month} ${period.year}`,
            tenant: lease.tenant,
            unit: lease.unit,
            amount: lease.rent,
          },
          existing.length
        )
      );
    });

    setCharges(existing);
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Rent Charges</h1>
          <p>Generate monthly rent charges.</p>
        </div>

        <RentChargeGenerator
          onGenerate={generateCharges}
        />
      </div>

      <RentChargeTable charges={charges} />
    </>
  );
}

export default RentCharges;