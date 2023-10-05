import { calcTime } from "src/utils/clock";
import "./Taskbar.scss";
import { useState } from "react";

const Taskbar = () => {
  const [time, setTime] = useState(calcTime());

  setInterval(() => {
    setTime(calcTime());
  }, 60 * 1000);

  return (
    <footer className="taskbar">
      <button className="taskbar__start">Start</button>
      <section className="taskbar__tasks"></section>
      <section className="taskbar__time">
        <p className="taskbar__clock">{time}</p>
      </section>
    </footer>
  );
};

export default Taskbar;
