import "./App.scss";
import DesktopIcons from "./components/DesktopIcons";
import Desktop from "./components/Desktop";
import Taskbar from "./components/Taskbar";
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
