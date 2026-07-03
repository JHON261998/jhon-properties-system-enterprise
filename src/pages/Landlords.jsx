import { useState } from "react";
import LandlordModal from "../components/LandlordModal";

function Landlords() {

  const [open,setOpen]=useState(false);

  return (
    <>

      <div className="page-header">

        <div>
          <h1>Landlords</h1>
          <p>Manage all property owners.</p>
        </div>

        <button
          className="primary-btn"
          onClick={()=>setOpen(true)}
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
            </tr>
          </thead>

          <tbody>
            <tr>
              <td colSpan={5} className="empty-state">
                No landlords registered.
              </td>
            </tr>
          </tbody>

        </table>

      </div>

      <LandlordModal
  open={open}
  onClose={() => setOpen(false)}
/>

    </>
  );
}

export default Landlords;