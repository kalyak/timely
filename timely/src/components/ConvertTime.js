/* eslint-disable react-hooks/exhaustive-deps */
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"; // dependent on utc plugin
import timezone from "dayjs/plugin/timezone";
import Groups from "./Groups_conversion";
import TimeNow from "./TimeNow";
import { useEffect } from "react";
dayjs.extend(utc);
dayjs.extend(timezone);

const What = ({ user, contacts, setContacts, currentTime }) => {
  //   let now = dayjs.tz("2020-12-16 15:04", "America/New_York");
  const time = "2020-12-16 15:04";

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
  }, [contacts.length]);

  return (
    <div>
      <h2>DAYJS</h2>
      <Groups contacts={contacts} setContacts={setContacts} />
    </div>
  );
};

export default What;
