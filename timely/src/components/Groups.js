const Groups = ({ contacts, setContacts }) => {
  console.log("Groups contact", contacts);

  const displayContacts = contacts.map((contact, i) => {
    return (
      <tr key={contact.name}>
        <td>{contact.name}</td>
        <td>{contact.country}</td>
        <td>{contact.countrycode}</td>
        <td>{contact.timezone}</td>
        <td>{contact.gmt / 3600}</td>
        <td>{contact.latestGmt}</td>
      </tr>
    );
  });

  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Name</th>
          <th scope='col'>Country</th>
          <th scope='col'>Country Code</th>
          <th scope='col'>Timezone</th>
          <th scope='col'>GMT</th>
          <th scope='col'>GMT / UTC</th>
        </tr>
      </thead>
      <tbody>{displayContacts}</tbody>
    </table>
  );
};

export default Groups;
