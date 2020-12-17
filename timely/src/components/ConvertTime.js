/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc"; // dependent on utc plugin
import { useEffect, useState } from "react";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import Groups from "./Groups_conversion";

dayjs.extend(utc);
dayjs.extend(timezone);

const What = ({ user, contacts, setContacts, currentTime }) => {
  const [time, timeToConvert] = useState(dayjs().format("YYYY-MM-DD HH:mm"));

  const ConvertTime = (timezone) => {
    //console.log("retrieving", timezone);
    return dayjs(time).tz(timezone);
  };

  useEffect(() => {
    //console.log("dayjs");
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
      }
      setContacts(contactsNew);
    }
  }, [contacts.length, time]);

  return (
    <div>
      <div className='h2 text-center'>Convert Time</div>

      <div className='convert-select row justify-content-center text-center'>
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
      </div>

      <Groups contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default What;
