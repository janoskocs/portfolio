import "./App.scss";
import DesktopIcons from "src/components/DesktopIcons";
import Desktop from "src/components/Desktop";
import Taskbar from "src/components/Taskbar";
import Start from "./components/Start";
import Modal from "./components/Modal";

import { useState } from "react";
const App = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [windows, setWindows] = useState(["about-me"]);
  const [activeWindow, setActiveWindow] = useState("about-me");

  const handleOpenWindow = (windowToOpen) => {
    if (!windows.includes(windowToOpen)) {
      setWindows([...windows, windowToOpen]);
    }
    setActiveWindow(windowToOpen);
  };

  const handleCloseWindow = (windowToClose) => {
    setWindows((prevWindows) =>
      prevWindows.filter((window) => window !== windowToClose)
    );
    setActiveWindow("");
  };

  const checkEmailSent = () => {
    let isEmailSent = sessionStorage.getItem("emailSent");
    if (isEmailSent) {
      console.log("your email was sent");
      console.log(isEmailSent);
    }
  };

  checkEmailSent();
  return (
    <div className="main-container">
      <div className="desktop-container">
        <DesktopIcons />
        <Desktop
          activeWindow={activeWindow}
          handleOpenWindow={handleOpenWindow}
          handleCloseWindow={handleCloseWindow}
        />
      </div>
      <Start
        showStartMenu={showStartMenu}
        setShowStartMenu={setShowStartMenu}
        handleOpenWindow={handleOpenWindow}
      />
      <Taskbar
        setShowStartMenu={setShowStartMenu}
        windows={windows}
        activeWindow={activeWindow}
        setActiveWindow={setActiveWindow}
      />
      <Modal />
    </div>
  );
};

export default App;
