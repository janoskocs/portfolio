/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Suspense } from "react";
import Spinner from "@/components/Spinner";
import DesktopIcons from "./components/DesktopIcons";
import { Window } from "@/pages/Main/types";
import styles from "./styles/Desktop.module.css";
import { openAppType } from "@/types/functionTypes";

type DesktopProps = {
  openApp: openAppType;
  windows: Window[];
};
const Desktop = ({ openApp, windows }: DesktopProps) => {
  const ActiveWindows = windows?.map((window) => {
    const WindowComponent = window.component as () => JSX.Element;
    return (
      <Suspense key={window.id} fallback={<Spinner />}>
        <WindowComponent />
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

