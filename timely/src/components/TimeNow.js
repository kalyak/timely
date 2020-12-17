import { useEffect } from "react";
import dayjs from "dayjs";

const TimeNow = ({ user, currentTime, setCurrentTime, currTimezone }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      const date = dayjs().format("ddd, DD MMM YYYY");
      const time = dayjs().format("hh:mm:ss A");
      const gmt = dayjs().format("Z");
      // const timezone = dayjs().format("z");
      setCurrentTime({ date: date, time: time, gmt: gmt });
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className='container border text-center'>
      <div className='row align-self-start'>
        <div className='col'>Current User: </div>
        <div className='col'>
          Current Date:
          <span className='font-weight-bold'>{currentTime.date}</span>
        </div>
        <div className='col'>
          Current Time:
          <span className='font-weight-bold'>{currentTime.time}</span>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <span className='font-weight-bold'>{user}</span>
        </div>
        <div className='col'>
          Location:
          <span className='font-weight-bold'>{currTimezone}</span>
        </div>
        <div className='col'>
          GMT:
          <span className='font-weight-bold'>{currentTime.gmt}</span>
        </div>
      </div>
      {/* Welcome {user}, it is now {currentTime.time} on {currentTime.date}. You
      are in timezone GMT {currentTime.gmt}.
      Welcome {user}, it is now {currentTime} */}
    </div>
  );
};

export default TimeNow;
