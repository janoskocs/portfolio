import { calcTime } from "src/utils/clock";
import "./Taskbar.scss";
import startLogo from "/images/logos/logocolour.png";
import DividerLine from "../DividerLine";
import Task from "../Task";
import { useState } from "react";

const Taskbar = ({
  setShowStartMenu,
  windows,
  activeWindow,
  setActiveWindow,
}) => {
  const [time, setTime] = useState(calcTime());

  setInterval(() => {
    setTime(calcTime());
  }, 60 * 1000);
  const handleShowStartMenu = () => {
    setShowStartMenu((current) => !current);
  };

  const taskbar = windows.map((window) => {
    if (activeWindow === window) {
      return (
        <Task
          key={window}
          active={true}
          window={window}
          setActiveWindow={setActiveWindow}
        />
      );
    } else {
      return (
        <Task
          key={window}
          active={false}
          window={window}
          setActiveWindow={setActiveWindow}
        />
      );
    }
  });

  return (
    <footer className="taskbar">
      <button className="taskbar__start" onClick={handleShowStartMenu}>
        <img src={startLogo} alt="Start Icon" className="taskbar__start-icon" />
        Start
      </button>
      <DividerLine orientation="vertical" />
      <section className="taskbar__tasks">{taskbar}</section>
      <section className="taskbar__time">
        <p className="taskbar__clock">{time}</p>
      </section>
    </footer>
  );
};

export default Taskbar;
