function TenantRow({ tenant }) {
  return (
    <tr>
      <td>{tenant.code}</td>
      <td>{tenant.fullName}</td>
      <td>{tenant.phone}</td>
      <td>{tenant.idNumber}</td>
      <td>{tenant.email}</td>
      <td>{tenant.status}</td>
    </tr>
  );
}

export default TenantRow;