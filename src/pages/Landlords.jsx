import { useEffect, useState } from "react";

import LandlordModal from "../components/LandlordModal";
import LandlordTable from "../components/LandlordTable";

import {
  loadLandlords,
  saveLandlords,
  createLandlord,
} from "../features/landlords/landlordStore";

function Landlords() {
  const [open, setOpen] = useState(false);

  const [landlords, setLandlords] = useState(loadLandlords);

  useEffect(() => {
    saveLandlords(landlords);
  }, [landlords]);

  function addLandlord(data) {
    const landlord = createLandlord(data);

    setLandlords([...landlords, landlord]);

    setOpen(false);
  }

  function deleteLandlord(id) {
    setLandlords(
      landlords.filter((landlord) => landlord.id !== id)
    );
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Landlords</h1>
          <p>Manage all property owners.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setOpen(true)}
        >
          + Add Landlord
        </button>
      </div>

      <LandlordTable
        landlords={landlords}
        onDelete={deleteLandlord}
      />

      <LandlordModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={addLandlord}
      />
    </>
  );
}

export default Landlords;