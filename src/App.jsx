import "./App.scss";
import DesktopIcons from "src/components/DesktopIcons";
import Desktop from "src/components/Desktop";
import Taskbar from "src/components/Taskbar";
const App = () => {
  return (
    <div className="main-container">
      <div className="desktop-container">
        <DesktopIcons />
        <Desktop />
      </div>
      <Taskbar />
    </div>
  );
};

export default App;
