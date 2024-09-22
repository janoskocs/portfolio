import DesktopIcon from "../DesktopIcon";
import styles from "./DesktopIcons.module.css";

type DesktopIconsProps = {
  openApp: (_appName: string) => void;
};
const DesktopIcons = ({ openApp }: DesktopIconsProps) => {
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions
    <aside className={styles["desktop-icons"]}>
      <DesktopIcon openApp={openApp} icon="about-me.png" iconAlt="computer" title="About me" path="AboutMe" />
      <DesktopIcon openApp={openApp} icon="about-me.png" iconAlt="computer" title="Contact me" path="ContactMe" />
      <DesktopIcon openApp={openApp} icon="about-me.png" iconAlt="computer" title="About me" path="AboutMe" />
      <DesktopIcon openApp={openApp} icon="about-me.png" iconAlt="computer" title="About me" path="AboutMe" />
      <DesktopIcon openApp={openApp} icon="about-me.png" iconAlt="computer" title="About me" path="AboutMe" />
      <DesktopIcon openApp={openApp} icon="about-me.png" iconAlt="computer" title="About me" path="AboutMe" />
    </aside>
  );
};
export default DesktopIcons;
