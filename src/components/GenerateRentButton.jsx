import { useState } from "react";

import {
  generateMonthlyRent,
  getCurrentBillingPeriod,
} from "../services/rentGenerationService";

import { useToast } from "../context/ToastContext";
import { useAppRefresh } from "../context/AppRefreshContext";

import { logActivity } from "../features/audit/auditStore";

import Modal from "./Modal";

function GenerateRentButton() {

  const { showToast } = useToast();
  const { refreshApp } = useAppRefresh();

  const [open, setOpen] = useState(false);

  const period = getCurrentBillingPeriod();

  function handleGenerate() {

    const result = generateMonthlyRent(period);

    logActivity({

      module: "Billing",

      action: "Generate Monthly Rent",

      description:

`Billing Period: ${period}

Generated: ${result.generated}

Duplicates: ${result.duplicates}

Skipped: ${result.skipped}`

    });

    showToast(

      `Billing ${period}: ${result.generated} generated, ${result.duplicates} duplicates, ${result.skipped} skipped.`,

      result.generated > 0
        ? "success"
        : "warning"

    );

    setOpen(false);

    refreshApp();

  }

  return (
    <>

      <button
        className="primary-btn"
        onClick={() => setOpen(true)}
      >
        Generate Monthly Rent
      </button>

      <Modal
        isOpen={open}
        title="Generate Monthly Rent"
        onClose={() => setOpen(false)}
        footer={
          <>
            <button
              onClick={() => setOpen(false)}
            >
              Cancel
            </button>

            <button
              className="primary-btn"
              onClick={handleGenerate}
            >
              Generate
            </button>
          </>
        }
      >

        <p>

          <strong>Billing Period:</strong>

          <br />

          {period}

        </p>

        <br />

        <p>

          Rent charges will be generated for all
          eligible active leases.

        </p>

        <p>

          Existing charges for this billing period
          will automatically be skipped.

        </p>

      </Modal>

    </>
  );

}

export default GenerateRentButton;