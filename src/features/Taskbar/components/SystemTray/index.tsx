import Clock from "../Clock";
import styles from "./SystemTray.module.css";
const SystemTray = () => {
  return (
    <section className={styles["system-tray"]}>
      <Clock />
    </section>
  );
};
export default SystemTray;
