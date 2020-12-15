import { useEffect, useState } from "react";
import moment from "moment";

const TimeNow = ({ user }) => {
  const [timeGMTOffset, setTimeGMT] = useState(
    moment().utcOffset("+00:00").format(" hh:mm:ss a")
  );
  const [time, setTime] = useState(
    moment().utcOffset("+05:30").format(" hh:mm:ss a")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      //   setTime(new Date().toLocaleString());
      setTime(moment().utcOffset("+05:30").format(" hh:mm:ss a"));
      setTimeGMT(moment().utcOffset("+00:00").format(" hh:mm:ss a"));
    }, 1000);
    return () => clearInterval(interval);
  });

  return (
    <div>
      <div>{time}</div>
      {/* <div>{timeGMTOffset}</div> */}
    </div>
  );
};

export default TimeNow;
