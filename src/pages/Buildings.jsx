import { useEffect, useState } from "react";

import BuildingModal from "../components/BuildingModal";
import BuildingTable from "../components/BuildingTable";

import {
  loadBuildings,
  saveBuildings,
  createBuilding,
} from "../features/buildings/buildingStore";

function Buildings() {
  const [buildings, setBuildings] = useState(loadBuildings);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    saveBuildings(buildings);
  }, [buildings]);

  function addBuilding(data) {
    const building = createBuilding(data, buildings.length);

    setBuildings([...buildings, building]);

    setOpen(false);
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Buildings</h1>
          <p>Manage buildings under each property.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setOpen(true)}
        >
          + Add Building
        </button>
      </div>

      <BuildingTable buildings={buildings} />

      <BuildingModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={addBuilding}
      />
    </>
  );
}

export default Buildings;