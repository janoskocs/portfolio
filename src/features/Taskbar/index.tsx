import styles from "@/features/Taskbar/styles/Taskbar.module.css";
import StartButton from "./components/StartButton";
import AppArea from "./components/AppArea";
import SystemTray from "./components/SystemTray";
import Divider from "@/components/Divider";
import StartMenu from "./components/StartMenu";

type TaskbarProps = {
  isStartMenuOpen: boolean;
  setIsStartMenuOpen: (_isStartMenuOpen: boolean | ((_prev: boolean) => boolean)) => void;
};
const Taskbar = ({ isStartMenuOpen, setIsStartMenuOpen }: TaskbarProps) => {
  const handleStartMenu = () => {
    setIsStartMenuOpen((prev) => !prev);
  };

  return (
    <>
      <StartMenu isOpen={isStartMenuOpen} />
      <footer className={styles.taskbar}>
        <StartButton onClick={handleStartMenu} />
        <Divider orientation="vertical" />
        <AppArea />
        <SystemTray />
      </footer>
    </>
  );
};
export default Taskbar;

