function UnitRow({ unit }) {
  return (
    <tr>
      <td>{unit.code}</td>
      <td>{unit.unitNumber}</td>
      <td>{unit.building}</td>
      <td>{unit.type}</td>
      <td>{unit.rent}</td>
      <td>{unit.status}</td>
    </tr>
  );
}

export default UnitRow;