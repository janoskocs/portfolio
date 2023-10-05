import "./App.scss";
import DesktopIcons from "src/components/DesktopIcons";
import Desktop from "src/components/Desktop";
import Taskbar from "src/components/Taskbar";
import Start from "./components/Start";
import { useState } from "react";
const App = () => {
  const [showStartMenu, setShowStartMenu] = useState(false);

  return (
    <div className="main-container">
      <div className="desktop-container">
        <DesktopIcons />
        <Desktop />
      </div>
      <Start showStartMenu={showStartMenu} />
      <Taskbar setShowStartMenu={setShowStartMenu} />
    </div>
  );
};

export default App;
