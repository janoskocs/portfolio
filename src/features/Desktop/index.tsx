/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { Suspense } from "react";
import Spinner from "@/components/Spinner";
import DesktopIcons from "./components/DesktopIcons";
import Window from "./components/Window";
import styles from "./styles/Desktop.module.css";

type DesktopProps = {
  openApp: (_appName: string) => void;
  PageComponent: React.ReactNode | null;
};
const Desktop = ({ openApp, PageComponent }: DesktopProps) => {
  return (
    <main className={styles.desktop}>
      <DesktopIcons openApp={openApp} />
      <Window>
        <Suspense fallback={<Spinner />}>{PageComponent}</Suspense>
      </Window>
    </main>
  );
};
export default Desktop;

