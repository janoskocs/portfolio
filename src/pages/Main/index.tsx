import { useState } from "react";
import { WindowType } from "@/pages/Main/types";
import Taskbar from "@/features/Taskbar";
import Desktop from "@/features/Desktop";
import styles from "./Main.module.css";

const Main = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState<boolean>(false);
  const [windows, setWindows] = useState<WindowType[]>([]);

  const openApp = (appName: string) => {
    const isOpenAlready = windows.some((window) => window.appName === appName);
    if (isOpenAlready) return;
    const focus = windows.length > 0 ? Math.max(...windows.map((window) => window.focus)) : 0;
    const position =
      windows.length > 0
        ? { x: windows[windows.length - 1].position.x + 50, y: windows[windows.length - 1].position.y + 50 }
        : { x: 10, y: 10 };

    setWindows((prevWindows) => {
      return [
        ...prevWindows,
        {
          id: Date.now(),
          appName: appName,
          minimised: false,
          focus: focus + 1,
          position: position,
          setWindows: setWindows,
        },
      ];
    });
  };

  return (
    <div className={styles.desktop}>
      <Desktop openApp={openApp} windows={windows} setWindows={setWindows} />
      <Taskbar isStartMenuOpen={isStartMenuOpen} setIsStartMenuOpen={setIsStartMenuOpen} />
    </div>
  );
};

export default Main;

