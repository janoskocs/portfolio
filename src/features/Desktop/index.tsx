import DesktopIcons from "./components/DesktopIcons";
import styles from "./styles/Desktop.module.css";

type DesktopProps = {
  setIsStartMenuOpen: (_isStartMenuOpen: boolean) => void;
};
const Desktop = ({ setIsStartMenuOpen }: DesktopProps) => {
  return (
    <main className={styles.desktop}>
      <DesktopIcons setIsStartMenuOpen={setIsStartMenuOpen} />
    </main>
  );
};
export default Desktop;
