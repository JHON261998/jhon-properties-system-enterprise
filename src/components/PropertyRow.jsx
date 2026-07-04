function PropertyRow({ property }) {
  return (
    <tr>
      <td>{property.code}</td>
      <td>{property.name}</td>
      <td>{property.landlord}</td>
      <td>{property.manager}</td>
      <td>{property.status}</td>
      <td>{property.createdAt}</td>
    </tr>
  );
}

export default PropertyRow;