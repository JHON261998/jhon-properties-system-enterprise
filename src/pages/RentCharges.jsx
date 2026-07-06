import { useEffect, useState } from "react";

import RentChargeTable from "../components/RentChargeTable";
import RentChargeGenerator from "../components/RentChargeGenerator";

import {
  loadCharges,
  saveCharges,
} from "../features/rentCharges/chargeStore";

import { generateMonthlyCharges } from "../services/rentService";

function RentCharges() {
  const [charges, setCharges] = useState(loadCharges);

  useEffect(() => {
    saveCharges(charges);
  }, [charges]);

  function handleGenerateCharges() {
    try {
      const updatedCharges = generateMonthlyCharges();
      setCharges(updatedCharges);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Rent Charges</h1>
          <p>Generate monthly rent charges.</p>
        </div>

        <RentChargeGenerator
          onGenerate={handleGenerateCharges}
        />
      </div>

      <RentChargeTable charges={charges} />
    </>
  );
}

export default RentCharges;