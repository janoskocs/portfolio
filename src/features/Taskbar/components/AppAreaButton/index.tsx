import styles from "./AppAreaButton.module.css";
type AppAreaButtonProps = {
  title: string;
  icon: string;
  iconAlt: string;
};

const AppAreaButton = ({ title, icon, iconAlt }: AppAreaButtonProps) => {
  return (
    <button className={styles.app}>
      <img src={`/images/icons/${icon}`} alt={iconAlt} className={styles.icon} />
      {title}
    </button>
  );
};
export default AppAreaButton;
