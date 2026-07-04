function BuildingRow({ building }) {
  return (
    <tr>
      <td>{building.code}</td>
      <td>{building.name}</td>
      <td>{building.property}</td>
      <td>{building.status}</td>
      <td>{building.createdAt}</td>
    </tr>
  );
}

export default BuildingRow;