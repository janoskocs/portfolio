/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import DesktopIcons from "./components/DesktopIcons";
import styles from "./styles/Desktop.module.css";

type DesktopProps = {
  openApp: (_appName: string) => void;
};
const Desktop = ({ openApp }: DesktopProps) => {
  return (
    <main className={styles.desktop}>
      <DesktopIcons openApp={openApp} />
    </main>
  );
};
export default Desktop;

