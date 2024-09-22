import { useState, LazyExoticComponent, ComponentType, Suspense } from "react";
import { lazyImport } from "@/utils/lazyImport";
import Taskbar from "@/features/Taskbar";
import Desktop from "@/features/Desktop";
import styles from "./Main.module.css";
import Spinner from "@/components/Spinner";

type Window = {
  id: number;
  component: React.ReactNode | LazyExoticComponent<ComponentType<unknown>>;
};
const Main = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState<boolean>(false);
  const [windows, setWindows] = useState<Window[]>([]);

  const openApp = (appName: string) => {
    console.log(appName);
    const AppComponent = lazyImport(`../pages/${appName}`);
    setWindows((prevWindows) => {
      return [
        ...prevWindows,
        {
          id: Date.now(),
          component: AppComponent,
        },
      ];
    });
  };

  const ActiveWindows = windows.map((window) => {
    const WindowComponent = window.component as LazyExoticComponent<ComponentType<unknown>>;
    return (
      <Suspense key={window.id} fallback={<Spinner />}>
        <WindowComponent />
      </Suspense>
    );
  });

  return (
    <div className={styles.desktop}>
      <Desktop openApp={openApp} />
      <Taskbar isStartMenuOpen={isStartMenuOpen} setIsStartMenuOpen={setIsStartMenuOpen} />
      {ActiveWindows}
    </div>
  );
};

export default Main;

