import styles from "./ToastNotifications.module.css";

const ToastNotifications = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["notification"]}> TEST</div>
      <img src="/images/icons/about-me.png" alt="Notifications" className={styles.icon} />
    </div>
  );
};
export default ToastNotifications;
