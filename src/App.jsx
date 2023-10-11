import "./App.scss";
import DesktopIcons from "src/components/DesktopIcons";
import Desktop from "src/components/Desktop";
import Taskbar from "src/components/Taskbar";
import Start from "./components/Start";
import { useState } from "react";
const App = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  // const [windows, setWindows] = useState([]);
  const [activeWindow, setActiveWindow] = useState("about-me");

  console.log(activeWindow);
  return (
    <div className="main-container">
      <div className="desktop-container">
        <DesktopIcons />
        <Desktop activeWindow={activeWindow} />
      </div>
      <Start
        showStartMenu={showStartMenu}
        setShowStartMenu={setShowStartMenu}
        setActiveWindow={setActiveWindow}
      />
      <Taskbar setShowStartMenu={setShowStartMenu} />
    </div>
  );
};

export default App;
