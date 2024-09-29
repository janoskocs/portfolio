/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import DesktopIcons from "./components/DesktopIcons";
import { WindowType } from "@/pages/Main/types";
import styles from "./styles/Desktop.module.css";
import { openAppType } from "@/types/functionTypes";
import { lazyImport } from "@/utils/lazyImport";
import { Suspense } from "react";
import Spinner from "@/components/Spinner";

type DesktopProps = {
  openApp: openAppType;
  setWindows: (_value: React.SetStateAction<WindowType[]>) => void;
  windows: WindowType[];
};
const Desktop = ({ openApp, setWindows, windows }: DesktopProps) => {
  const ActiveWindows = windows?.map((window) => {
    const AppComponent = lazyImport(`../pages/${window.appName}`);
    // Modal for error loading component
    if (!AppComponent) return;
    return (
      <Suspense key={window.id} fallback={<Spinner />}>
        <AppComponent
          windows={windows}
          key={window.id}
          id={window.id}
          appName={window.appName}
          position={window.position}
          focus={window.focus}
          minimised={window.minimised}
          setWindows={setWindows}
        />
      </Suspense>
    );
  });

  return (
    <main className={styles.desktop}>
      <DesktopIcons openApp={openApp} />
      {ActiveWindows}
    </main>
  );
};
export default Desktop;

