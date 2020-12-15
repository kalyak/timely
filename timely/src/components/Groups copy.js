/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

const Groups = ({ contacts, setContacts }) => {
  console.log("Groups contact", contacts);

  // useEffect(() => {
  //   console.log("load");
  //   axios
  //     .all([
  //       axios.get(
  //         `http://api.timezonedb.com/v2.1/get-time-zone?key=BSB22B2ARR6V&format=json&by=zone&zone=Asia/Taipei&fields=gmtOffset`
  //       ),
  //       // axios.get(
  //       //   `http://api.timezonedb.com/v2.1/get-time-zone?key=BSB22B2ARR6V&format=json&by=zone&zone=America/Los_Angeles&fields=gmtOffset`
  //       // ),
  //       // axios.get(
  //       //   `http://api.timezonedb.com/v2.1/get-time-zone?key=BSB22B2ARR6V&format=json&by=zone&zone=Asia/Singapore&fields=gmtOffset`
  //       // ),
  //     ])
  //     .then((latestGMTs) => {
  //       setContacts((contacts) => [
  //         ...contacts,
  //         ...[1],
  //         { latestGmt: latestGMTs[1] },
  //       ]);
  //     });
  // });

  useEffect(() => {
    console.log("load");
    if (contacts.length !== 0) {
      console.log("changing");
      const contactsNew = [...contacts];
      const contactToChange = { ...contactsNew[3] };
      contactToChange.latestGmt = 5;
      contactsNew[3] = contactToChange;
      setContacts(contactsNew);
    }
  }, [contacts.length]);

  const displayContacts = contacts.map((contact, i) => {
    // getGMTOffset(contact.timezone);
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
