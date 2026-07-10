import { applyLateFees } from "../services/lateFeeService";

function ApplyLateFeesButton() {

  function handleApply() {

    const result = applyLateFees();

    alert(

`Late Fee Processing Complete

Late Fees Applied : ${result.applied}

Total Charges : ${result.totalCharges}`

    );

    window.location.reload();

  }

  return (

    <button
      className="primary-btn"
      onClick={handleApply}
    >
      Apply Late Fees
    </button>

  );

}

export default ApplyLateFeesButton;