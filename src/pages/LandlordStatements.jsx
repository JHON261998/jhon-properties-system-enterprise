import StatementSummary from "../components/StatementSummary";
import OutstandingTenantsTable from "../components/OutstandingTenantsTable";

import { getStatementData } from "../features/statements/statementStore";

function LandlordStatements() {
  const data = getStatementData();

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Landlord Statements</h1>
          <p>Live financial summary for landlords.</p>
        </div>
      </div>

      <StatementSummary data={data} />

      <div style={{ marginTop: "30px" }}>
        <h2>Outstanding Tenants</h2>

        <OutstandingTenantsTable
          tenants={data.outstandingTenants}
        />
      </div>
    </>
  );
}

export default LandlordStatements;