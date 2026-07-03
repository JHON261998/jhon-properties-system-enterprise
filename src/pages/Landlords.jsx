import { useEffect, useState } from "react";
import LandlordModal from "../components/LandlordModal";
import LandlordTable from "../components/LandlordTable";

function Landlords() {
  const [open, setOpen] = useState(false);

  const [landlords, setLandlords] = useState(() => {
    const saved = localStorage.getItem("landlords");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("landlords", JSON.stringify(landlords));
  }, [landlords]);

  function addLandlord(landlord) {
    const newLandlord = {
      id: `L-${Date.now()}`,
      ...landlord,
    };

    setLandlords([...landlords, newLandlord]);
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