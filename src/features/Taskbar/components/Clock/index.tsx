import { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return <time>{time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</time>;
};

export default Clock;
