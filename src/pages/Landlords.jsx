import { useState } from "react";
import LandlordModal from "../components/LandlordModal";

function Landlords() {
  const [open, setOpen] = useState(false);

  const [landlords, setLandlords] = useState([]);

  function addLandlord(landlord) {
    setLandlords([...landlords, landlord]);
    setOpen(false);
  }

  function deleteLandlord(index) {
    setLandlords(landlords.filter((_, i) => i !== index));
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

      <div className="table-container">
        <table className="jps-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Properties</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {landlords.length === 0 ? (
              <tr>
                <td colSpan={6} className="empty-state">
                  No landlords registered.
                </td>
              </tr>
            ) : (
              landlords.map((landlord, index) => (
                <tr key={index}>
                  <td>{landlord.name}</td>
                  <td>{landlord.phone}</td>
                  <td>{landlord.email}</td>
                  <td>0</td>
                  <td>Active</td>
                  <td>
                    <button
                      className="danger-btn"
                      onClick={() => deleteLandlord(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <LandlordModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={addLandlord}
      />
    </>
  );
}

export default Landlords;