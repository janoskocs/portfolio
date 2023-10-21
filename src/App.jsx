import "./App.scss";
import DesktopIcons from "src/components/DesktopIcons";
import Desktop from "src/components/Desktop";
import Taskbar from "src/components/Taskbar";
import Start from "./components/Start";
import Modal from "./components/Modal";

import { useEffect, useState } from "react";
const App = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [windows, setWindows] = useState(["about-me"]);
  const [activeWindow, setActiveWindow] = useState("about-me");
  const [showSentMailModal, setShowSentMailModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);

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
      setShowSentMailModal(true);
    } else {
      setShowSentMailModal(false);
    }
  };

  const checkCVDownload = () => {
    let isCVDownloaded = sessionStorage.getItem("downloadCV");
    if (isCVDownloaded) {
      setShowDownloadModal(true);
      handleOpenWindow("my-CV");
    } else {
      setShowDownloadModal(false);
    }
  };

  useEffect(() => {
    checkEmailSent();
    checkCVDownload();
  }, []);

  return (
    <div className="main-container">
      <div className="desktop-container">
        <DesktopIcons handleOpenWindow={handleOpenWindow} />
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
      <Modal
        setShowDownloadModal={setShowDownloadModal}
        showDownloadModal={showDownloadModal}
        showSentMailModal={showSentMailModal}
        setShowSentMailModal={setShowSentMailModal}
      />
    </div>
  );
};

export default App;
