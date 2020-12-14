import { useEffect, useState } from "react";

const TimeNow = ({ user }) => {
  const [time, setTime] = useState(new Date().toLocaleString());
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);
    return () => clearInterval(interval);
  });

  return <div>{time}</div>;
};

export default TimeNow;
