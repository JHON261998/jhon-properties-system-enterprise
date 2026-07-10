import { useState } from "react";
import Modal from "./Modal";

function ModalTester() {

  const [open, setOpen] = useState(false);

  return (
    <>

      <button
        className="primary-btn"
        onClick={() => setOpen(true)}
      >
        Test Modal
      </button>

      <Modal
        isOpen={open}
        title="Enterprise Modal"
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
              onClick={() => setOpen(false)}
            >
              Save
            </button>
          </>
        }
      >
        <p>

          The Enterprise Modal System is now operational.

        </p>
      </Modal>

    </>
  );
}

export default ModalTester;