import styles from "./ToastNotifications.module.css";

const ToastNotifications = () => {
  return (
    <div className={styles["container"]}>
      <div className={styles["notification"]}>
        <div className={styles["title-container"]}>
          <h4 className={styles.title}>Title</h4>
          <button className={styles.close}>x</button>
        </div>

        <p>Content</p>
        <div className={styles["notification-actions"]}>
          <button>Accept</button>
          <button>Decline</button>
        </div>
      </div>
      <img src="/images/icons/about-me.png" alt="Notifications" className={styles.icon} />
    </div>
  );
};
export default ToastNotifications;
