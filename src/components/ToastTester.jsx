import { useToast } from "../context/ToastContext";

function ToastTester() {

  const { showToast } = useToast();

  return (

    <button
      className="primary-btn"
      onClick={() =>
        showToast(
          "Enterprise Toast System Online"
        )
      }
    >
      Test Toast
    </button>

  );

}

export default ToastTester;