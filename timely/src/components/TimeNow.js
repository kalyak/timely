import { useEffect, useState } from "react";
import moment from "moment";

const TimeNow = ({ user }) => {
  const [time, setTime] = useState(
    moment().utcOffset("+08:00").format(" hh:mm:ss a")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      //   setTime(new Date().toLocaleString());
      setTime(moment().utcOffset("+08:00").format(" hh:mm:ss a"));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      Time for {user} is {time}
    </div>
  );
};

export default TimeNow;
