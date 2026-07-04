function RentChargeGenerator({ onGenerate }) {
  return (
    <button
      className="primary-btn"
      onClick={onGenerate}
    >
      Generate Monthly Rent
    </button>
  );
}

export default RentChargeGenerator;