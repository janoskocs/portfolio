import { useState } from "react";
import { lazyImport } from "@/utils/lazyImport";
import Taskbar from "@/features/Taskbar";
import Desktop from "@/features/Desktop";
import styles from "./Main.module.css";
const Main = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState<boolean>(false);
  const [PageComponent, setPageComponent] = useState<React.ReactNode | null>(null);

  const openApp = (appName: string) => {
    console.log(appName);
    const AppComponent = lazyImport(`../pages/${appName}`);
    console.log(AppComponent);
    setPageComponent(<AppComponent />);
  };

  return (
    <div className={styles.desktop}>
      <Desktop openApp={openApp} PageComponent={PageComponent} />
      <Taskbar isStartMenuOpen={isStartMenuOpen} setIsStartMenuOpen={setIsStartMenuOpen} />
    </div>
  );
};

export default Main;

