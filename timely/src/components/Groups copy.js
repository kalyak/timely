/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { throttle } from "lodash";

const Groups = ({ contacts, setContacts }) => {
  const [timezoneURLS, setTimezoneURL] = useState([]);
  console.log("Groups contact", contacts);

  useEffect(() => {
    console.log("load");
    // contacts.map((contact, i) => callforUpdate(contact.timezone, i));
    // Promise.all(
    //   contacts.map((contact, i) => anAsyncFunction(contact.timezone, i))
    // );
    contacts.map((contact) =>
      setTimezoneURL([
        ...timezoneURLS,
        `http://api.timezonedb.com/v2.1/get-time-zone?key=BSB22B2ARR6V&format=json&by=zone&zone=${contact.timezone}&fields=gmtOffset`,
      ])
    );
  }, [contacts.length]);

  console.log(timezoneURLS);

  Promise.allSettled(timezoneURLS.map((url) => axios.get(url))).then(
    (results) => {
      // (*)
      results.forEach((result, num) => {
        if (result.status == "fulfilled") {
          console.log(`${timezoneURLS[num]}: ${result.value.status}`);
        }
        if (result.status == "rejected") {
          console(`${timezoneURLS[num]}: ${result.reason}`);
        }
      });
    }
  );

  // const callforUpdate = (timezone, i) => {
  //   const updateGMTOffset = (newTimezone, i) => {
  //     if (contacts.length !== 0) {
  //       console.log("retrieving", timezone);
  //       const contactsNew = [...contacts];
  //       const contactToChange = { ...contactsNew[i] };
  //       contactToChange.convertedTime = parseInt(newTimezone) / 3600;
  //       contactsNew[i] = contactToChange;
  //       setContacts(contactsNew);
  //     }
  //   };

  //   axios
  //     .get(
  //       `http://api.timezonedb.com/v2.1/get-time-zone?key=BSB22B2ARR6V&format=json&by=zone&zone=${timezone}&fields=gmtOffset`
  //     )
  //     .then((response) => {
  //       console.log(response.data.gmtOffset);
  //       updateGMTOffset(response.data.gmtOffset, i);
  //     });

  //   return Promise.resolve("ok");
  // };

  // const anAsyncFunction = async (timezone, i) => {
  //   return callforUpdate(timezone, i);
  // };

  const displayContacts = contacts.map((contact, i) => {
    // getGMTOffset(contact.timezone);
    return (
      <tr key={contact.name}>
        <td>{contact.name}</td>
        <td>{contact.country}</td>
        <td>{contact.countrycode}</td>
        <td>{contact.timezone}</td>
        <td>{contact.gmt}</td>
        <td>{contact.convertedTime}</td>
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
