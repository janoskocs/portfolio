import styles from "./DesktopIcon.module.css";
type DesktopIconProps = {
  icon: string;
  iconAlt: string;
  title: string;
  path: string;
  openApp: (_appName: string) => void;
};
const DesktopIcon = ({ icon, iconAlt, title, openApp, path }: DesktopIconProps) => {
  return (
    <button
      className={styles.icon}
      onClick={() => {
        openApp(path);
      }}
    >
      <img src={`/images/icons/${icon}`} alt={`${iconAlt}`} className={styles.iconImage} />
      <p className={styles.title}>{title}</p>
    </button>
  );
};
export default DesktopIcon;
