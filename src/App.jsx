import "./App.scss";
import DesktopIcons from "./components/DesktopIcons/DesktopIcons";
import Desktop from "./components/Desktop/Desktop";
import Taskbar from "./components/Taskbar/Taskbar";
const App = () => {
  return (
    <>
      <DesktopIcons />
      <Desktop />
      <Taskbar />
    </>
  );
};

export default App;
