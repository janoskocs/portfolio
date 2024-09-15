import { useState } from "react";
import styles from "./ToastNotification.module.css";

const ToastNotification = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const notificationClassName = `${styles.notification} ${isActive && styles.active}`;

  const handleClose = () => {
    setIsActive(false);
  };
  return (
    <div className={notificationClassName}>
      <div className={styles["title-container"]}>
        <h4 className={styles.title}>Title</h4>
        <button className={styles.close} onClick={handleClose}>
          x
        </button>
      </div>

      <p>Content</p>
      <div className={styles["notification-actions"]}>
        <button>Accept</button>
        <button>Decline</button>
      </div>
    </div>
  );
};
export default ToastNotification;
