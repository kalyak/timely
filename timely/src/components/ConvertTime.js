/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"; // dependent on utc plugin
import timezone from "dayjs/plugin/timezone";
import Groups from "./Groups_conversion";
import TimeNow from "./TimeNow";
import { useEffect, useState } from "react";
// Import the library
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";

dayjs.extend(utc);
dayjs.extend(timezone);

const What = ({ user, contacts, setContacts, currentTime }) => {
  //   let now = dayjs.tz("2020-12-16 15:04", "America/New_York");
  const [time, timeToConvert] = useState(dayjs().format("YYYY-MM-DD HH:mm"));

  const ConvertTime = (timezone) => {
    console.log("retrieving", timezone);
    return dayjs(time).tz(timezone);
  };

  useEffect(() => {
    console.log("dayjs");
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
        // console.log(convertTimeArray[i].toString());
      }
      setContacts(contactsNew);
    }
  }, [contacts.length, time]);

  // const convertTime = (timePicked) => {
  //   console.log("converting");
  //   timeToConvert(timePicked);
  //   console.log(time);

  //   if (contacts.length !== 0) {
  //     console.log("mapping");
  //     const convertTimeArray = contacts.map((contact, i) =>
  //       ConvertTime(contact.timezone)
  //     );
  //     const contactsNew = [...contacts];
  //     for (let i = 0; i < contacts.length; i++) {
  //       const contactToChange = { ...contactsNew[i] };
  //       contactToChange.gmt = convertTimeArray[i].format("Z");
  //       contactToChange.convertedDate = convertTimeArray[i].format(
  //         "ddd, DD-MMM-YYYY"
  //       );
  //       contactToChange.convertedTime = convertTimeArray[i].format("hh:mm A");
  //       contactsNew[i] = contactToChange;
  //       // console.log(convertTimeArray[i].toString());
  //     }
  //     setContacts(contactsNew);
  //   }
  //   console.log("end time change");
  // };

  return (
    <div>
      <h2>Convert Time</h2>

      <form>
        <label htmlFor='date-picker'>Convert from: </label>
        <Datetime
          id='date-picker'
          initialValue={time}
          onChange={(response) => {
            timeToConvert(response.format("YYYY-MM-DD HH:mm"));
          }}
        />
      </form>

      <Groups contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default What;
