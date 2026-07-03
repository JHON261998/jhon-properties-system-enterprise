function LandlordRow({ landlord, index, onDelete }) {
  return (
    <tr>
      <td>{landlord.name}</td>
      <td>{landlord.phone}</td>
      <td>{landlord.email}</td>
      <td>0</td>
      <td>Active</td>

      <td>
        <button
          className="danger-btn"
          onClick={() => onDelete(index)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default LandlordRow;