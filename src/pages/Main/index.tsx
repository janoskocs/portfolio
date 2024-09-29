import { useState } from "react";
import { lazyImport } from "@/utils/lazyImport";
import { Window } from "@/pages/Main/types";
import Taskbar from "@/features/Taskbar";
import Desktop from "@/features/Desktop";
import styles from "./Main.module.css";

const Main = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState<boolean>(false);
  const [windows, setWindows] = useState<Window[]>([]);

  const openApp = (appName: string, position: { x: number; y: number }, zIndex: number) => {
    const AppComponent = lazyImport(`../pages/${appName}`);
    const isOpenAlready = windows.some((window) => window.appName === appName);
    if (isOpenAlready) return;

    setWindows((prevWindows) => {
      return [
        ...prevWindows,
        {
          id: Date.now(),
          component: () => <AppComponent position={{ x: position.x, y: position.y }} zIndex={zIndex} />,
          appName: appName,
        },
      ];
    });
  };

  return (
    <div className={styles.desktop}>
      <Desktop openApp={openApp} windows={windows} />
      <Taskbar isStartMenuOpen={isStartMenuOpen} setIsStartMenuOpen={setIsStartMenuOpen} />
    </div>
  );
};

export default Main;

