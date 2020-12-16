import { useEffect } from "react";
import dayjs from "dayjs";

const TimeNow = ({ user, currentTime, setCurrentTime }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const date = dayjs().format("ddd, DD MMM YYYY");
      const time = dayjs().format("hh:mm:ss A");
      const timezone = dayjs().format("Z");
      setCurrentTime({ date: date, time: time, timezone: timezone });
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      Welcome {user}, it is now {currentTime.time} on {currentTime.date}. You
      are in timezone GMT {currentTime.timezone}.
      {/* Welcome {user}, it is now {currentTime} */}
    </div>
  );
};

export default TimeNow;
