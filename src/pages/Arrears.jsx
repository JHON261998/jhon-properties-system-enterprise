import ArrearsTable from "../components/ArrearsTable";
import { getArrears } from "../features/arrears/arrearsStore";

function Arrears() {
  const arrears = getArrears();

  return (
    <>
      <div className="page-header">
        <div>
          <h1>Arrears</h1>
          <p>Outstanding rent balances.</p>
        </div>
      </div>

      <ArrearsTable arrears={arrears} />
    </>
  );
}

export default Arrears;