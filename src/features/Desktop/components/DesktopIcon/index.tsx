import styles from "./DesktopIcon.module.css";
import { openAppType } from "@/types/functionTypes";
type DesktopIconProps = {
  icon: string;
  iconAlt: string;
  title: string;
  path: string;
  openApp: openAppType;
};
const DesktopIcon = ({ icon, iconAlt, title, openApp, path }: DesktopIconProps) => {
  return (
    <button
      className={styles.icon}
      onClick={() => {
        openApp(path, { x: 10, y: 10 }, 1);
      }}
    >
      <img src={`/images/icons/${icon}`} alt={`${iconAlt}`} className={styles.iconImage} />
      <p className={styles.title}>{title}</p>
    </button>
  );
};
export default DesktopIcon;
