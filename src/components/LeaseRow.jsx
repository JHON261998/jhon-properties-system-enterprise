function LeaseRow({ lease }) {
  return (
    <tr>
      <td>{lease.code}</td>
      <td>{lease.tenant}</td>
      <td>{lease.unit}</td>
      <td>{lease.startDate}</td>
      <td>{lease.endDate}</td>
      <td>{lease.rent}</td>
      <td>{lease.status}</td>
    </tr>
  );
}

export default LeaseRow;