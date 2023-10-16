import { calcTime } from "src/utils/clock";
import "./Taskbar.scss";
import startLogo from "/images/logos/logocolour.png";
import DividerLine from "../DividerLine";
import { useState } from "react";

const Taskbar = ({ setShowStartMenu }) => {
  const [time, setTime] = useState(calcTime());

  setInterval(() => {
    setTime(calcTime());
  }, 60 * 1000);
  const handleShowStartMenu = () => {
    setShowStartMenu((current) => !current);
  };

  return (
    <footer className="taskbar">
      <button className="taskbar__start" onClick={handleShowStartMenu}>
        <img src={startLogo} alt="Start Icon" className="taskbar__start-icon" />
        Start
      </button>
      <DividerLine orientation="vertical" />
      <section className="taskbar__tasks"></section>
      <section className="taskbar__time">
        <p className="taskbar__clock">{time}</p>
      </section>
    </footer>
  );
};

export default Taskbar;
