import Clock from "../Clock";
import ToastNotifications from "../ToastNotifications";
import styles from "./SystemTray.module.css";

const SystemTray = () => {
  return (
    <section className={styles["system-tray"]}>
      <ToastNotifications />
      <Clock />
    </section>
  );
};
export default SystemTray;
