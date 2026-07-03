function LandlordRow({ landlord, onDelete }) {
  return (
    <tr>
      <td>{landlord.id}</td>
      <td>{landlord.name}</td>
      <td>{landlord.nationalId}</td>
      <td>{landlord.phone}</td>
      <td>{landlord.email}</td>
      <td>{landlord.status}</td>

      <td>
        <button
          className="danger-btn"
          onClick={() => onDelete(landlord.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default LandlordRow;