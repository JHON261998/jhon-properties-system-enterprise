import { useEffect, useState } from "react";

import TenantModal from "../components/TenantModal";
import TenantTable from "../components/TenantTable";

import {
  loadTenants,
  saveTenants,
  createTenant,
} from "../features/tenants/tenantStore";

function Tenants() {
  const [tenants, setTenants] = useState(loadTenants);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    saveTenants(tenants);
  }, [tenants]);

  function addTenant(data) {
    const tenant = createTenant(data, tenants.length);

    setTenants([...tenants, tenant]);

    setOpen(false);
  }

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Tenants</h1>
          <p>Manage all tenants.</p>
        </div>

        <button
          className="primary-btn"
          onClick={() => setOpen(true)}
        >
          + Add Tenant
        </button>
      </div>

      <TenantTable tenants={tenants} />

      <TenantModal
        open={open}
        onClose={() => setOpen(false)}
        onSave={addTenant}
      />
    </>
  );
}

export default Tenants;