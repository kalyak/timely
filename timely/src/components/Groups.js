const Groups = ({ contacts }) => {
  const displayContacts = contacts.map((contact) => (
    <tr key={contact.name}>
      <td>{contact.name}</td>
      <td>{contact.country}</td>
      <td>{contact.countrycode}</td>
      <td>{contact.timezone}</td>
    </tr>
  ));

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Country</th>
          <th scope='col'>Country Code</th>
          <th scope='col'>Timezone</th>
        </tr>
      </thead>
      <tbody>{displayContacts}</tbody>
    </table>
  );
};

export default Groups;
