import { useEffect, useState } from "react";

import BusinessPeriodModal from "../components/BusinessPeriodModal";
import BusinessPeriodTable from "../components/BusinessPeriodTable";

import {
  loadPeriods,
  savePeriods,
  createPeriod,
  closePeriod,
  openPeriod,
} from "../features/businessPeriods/periodStore";

function BusinessPeriods() {
  const [periods, setPeriods] = useState(loadPeriods);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    savePeriods(periods);
  }, [periods]);

  function addPeriod(data) {
    const period = createPeriod(data, periods.length);

    setPeriods([...periods, period]);

    setOpen(false);
  }

  function handleClose(id) {
    closePeriod(id);
    setPeriods(loadPeriods());
  }

  function handleOpen(id) {
    openPeriod(id);
    setPeriods(loadPeriods());
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Business Periods</h1>
          <p>Manage accounting periods.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setOpen(true)}
        >
          + New Period
        </button>
      </div>

      <BusinessPeriodTable
        periods={periods}
        onOpen={handleOpen}
        onClose={handleClose}
      />

      <BusinessPeriodModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={addPeriod}
      />
    </>
  );
}

export default BusinessPeriods;