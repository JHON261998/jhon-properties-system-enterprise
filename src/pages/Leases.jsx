import { useEffect, useState } from "react";

import LeaseModal from "../components/LeaseModal";
import LeaseTable from "../components/LeaseTable";

import {
  loadLeases,
  saveLeases,
} from "../features/leases/leaseStore";

import { createNewLease } from "../services/leaseService";

function Leases() {
  const [leases, setLeases] = useState(loadLeases);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    saveLeases(leases);
  }, [leases]);

  function handleCreateLease(data) {
    const lease = createNewLease(
      data,
      leases
    );

    setLeases([
      ...leases,
      lease,
    ]);

    setOpen(false);
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Leases</h1>
          <p>Manage active leases.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setOpen(true)}
        >
          + Create Lease
        </button>
      </div>

      <LeaseTable leases={leases} />

      <LeaseModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={handleCreateLease}
      />
    </>
  );
}

export default Leases;