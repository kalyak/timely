import { useEffect } from "react";
import dayjs from "dayjs";

const Groups = ({ contacts, setContacts, currentTime }) => {
  // console.log("Groups contact", contacts);

  const ConvertTime = (timezone) => {
    console.log("retrieving", timezone);
    return dayjs(currentTime).tz(timezone);
  };

  useEffect(() => {
    if (contacts.length !== 0) {
      const convertTimeArray = contacts.map((contact, i) =>
        ConvertTime(contact.timezone)
      );
      const contactsNew = [...contacts];
      for (let i = 0; i < contacts.length; i++) {
        const contactToChange = { ...contactsNew[i] };
        contactToChange.gmt = convertTimeArray[i].format("Z");
        contactToChange.convertedDate = convertTimeArray[i].format(
          "ddd, DD-MMM-YYYY"
        );
        contactToChange.convertedTime = convertTimeArray[i].format("hh:mm A");
        contactsNew[i] = contactToChange;
        console.log(convertTimeArray[i].toString());
      }
      setContacts(contactsNew);
    }
  }, [contacts.length]);

  const displayContacts = contacts.map((contact, i) => {
    return (
      <tr key={contact.name}>
        <td>{contact.name}</td>
        <td>{contact.country}</td>
        <td>{contact.countrycode}</td>
        <td>{contact.timezone}</td>
        <td>{contact.gmt}</td>
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
