/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */

import DesktopIcons from "./components/DesktopIcons";
import Window from "./components/Window";
import styles from "./styles/Desktop.module.css";

type DesktopProps = {
  setIsStartMenuOpen: (_isStartMenuOpen: boolean) => void;
};

const Test = () => {
  return (
    <div>
      <h1>Window 1</h1>
      <p>Content</p>
    </div>
  );
};
const Desktop = ({ setIsStartMenuOpen }: DesktopProps) => {
  return (
    <main className={styles.desktop}>
      <DesktopIcons setIsStartMenuOpen={setIsStartMenuOpen} />
      <Window>
        <Test />
      </Window>
    </main>
  );
};
export default Desktop;

