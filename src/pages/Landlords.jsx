import { useState } from "react";
import LandlordModal from "../components/LandlordModal";
import LandlordTable from "../components/LandlordTable";

function Landlords() {
  const [open, setOpen] = useState(false);
  const [landlords, setLandlords] = useState([]);

  function addLandlord(landlord) {
    setLandlords([...landlords, landlord]);
    setOpen(false);
  }

  function deleteLandlord(index) {
    setLandlords(
      landlords.filter((_, i) => i !== index)
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