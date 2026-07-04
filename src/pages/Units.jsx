import { useEffect, useState } from "react";

import UnitModal from "../components/UnitModal";
import UnitTable from "../components/UnitTable";

import {
  loadUnits,
  saveUnits,
  createUnit,
} from "../features/units/unitStore";

function Units() {
  const [units, setUnits] = useState(loadUnits);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    saveUnits(units);
  }, [units]);

  function addUnit(data) {
    const unit = createUnit(data, units.length);

    setUnits([...units, unit]);

    setOpen(false);
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Units</h1>
          <p>Manage all rentable units.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setOpen(true)}
        >
          + Add Unit
        </button>
      </div>

      <UnitTable units={units} />

      <UnitModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={addUnit}
      />
    </>
  );
}

export default Units;