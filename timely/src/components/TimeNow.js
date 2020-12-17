import { useEffect } from "react";
import dayjs from "dayjs";

const TimeNow = ({ user, currentTime, setCurrentTime, currTimezone }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const date = dayjs().format("ddd, DD MMM YYYY");
      const time = dayjs().tz().format("hh:mm:ss A");
      const gmt = dayjs().format("Z");
      setCurrentTime({ date: date, time: time, gmt: gmt });
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className='container border text-center'>
      <div className='row align-self-start'>
        <div className='col'>Current User: {user}</div>{" "}
        <div className='col'>
          GMT:
          <span className='font-weight-bold'>{currentTime.gmt}</span>
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col'>
          Current Date:
          <span className='font-weight-bold'>{currentTime.date}</span>
        </div>
        <div className='col'>
          Current Time:
          <span className='font-weight-bold'>{currentTime.time}</span>
        </div>
      </div>
    </div>
  );
};

export default TimeNow;
