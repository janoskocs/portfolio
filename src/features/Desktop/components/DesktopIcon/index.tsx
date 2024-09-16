import styles from "./DesktopIcon.module.css";
type DesktopIconProps = {
  icon: string;
  iconAlt: string;
  title: string;
};
const DesktopIcon = ({ icon, iconAlt, title }: DesktopIconProps) => {
  return (
    <button className={styles.icon}>
      <img src={`/images/icons/${icon}`} alt={`${iconAlt}`} className={styles.iconImage} />
      <p className={styles.title}>{title}</p>
    </button>
  );
};
export default DesktopIcon;
