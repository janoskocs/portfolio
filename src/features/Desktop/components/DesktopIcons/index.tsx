import DesktopIcon from "../DesktopIcon";
import styles from "./DesktopIcons.module.css";

type DesktopIconsProps = {
  setIsStartMenuOpen: (_isStartMenuOpen: boolean) => void;
};
const DesktopIcons = ({ setIsStartMenuOpen }: DesktopIconsProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <aside className={styles["desktop-icons"]} onClick={() => setIsStartMenuOpen(false)}>
      <DesktopIcon icon="about-me.png" iconAlt="computer" title="About me" />
      <DesktopIcon icon="about-me.png" iconAlt="computer" title="About me" />
      <DesktopIcon icon="about-me.png" iconAlt="computer" title="About me" />
      <DesktopIcon icon="about-me.png" iconAlt="computer" title="About me" />
      <DesktopIcon icon="about-me.png" iconAlt="computer" title="About me" />
      <DesktopIcon icon="about-me.png" iconAlt="computer" title="About me" />
      <DesktopIcon icon="about-me.png" iconAlt="computer" title="About me" />
      <DesktopIcon icon="about-me.png" iconAlt="computer" title="About me" />
    </aside>
  );
};
export default DesktopIcons;
