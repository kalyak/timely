import axios from "axios";
import { useState } from "react";

const Groups = ({ contacts }) => {
  const [GMTarray, setGMTarray] = useState([]);

  const getGMTOffset = (timezone) => {
    const qu = (timezoneData) => {
      //   setGMTarray((oldArray) => [...oldArray, timezoneData.gmtOffset / 3600]);
      console.log(timezoneData.gmtOffset);
    };
    axios
      .get(
        `http://api.timezonedb.com/v2.1/get-time-zone?key=BSB22B2ARR6V&format=json&by=zone&zone=${timezone}&fields=gmtOffset`
      )
      .then((response) => {
        console.log(response.data);
        qu(response.data);
      });
  };

  const displayContacts = contacts.map((contact, i) => {
    getGMTOffset(contact.timezone);
    return (
      <tr key={contact.name}>
        <td>{contact.name}</td>
        <td>{contact.country}</td>
        <td>{contact.countrycode}</td>
        <td>{contact.timezone}</td>
        <td>{contact.gmt}</td>
        <td>{GMTarray[i]}</td>
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
