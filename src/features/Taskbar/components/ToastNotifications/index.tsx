import { useState } from "react";
import ToastNotification from "../ToastNotification";
import styles from "./ToastNotifications.module.css";

type Notification = {
  id: string;
  icon: string;
};

const ToastNotifications = () => {
  const [notifications] = useState<Notification[]>([
    {
      id: "1",
      icon: "about-me.png",
    },
  ]);

  return (
    <div className={styles.container}>
      {notifications.map((notification) => {
        return (
          <div key={notification.id}>
            <ToastNotification />
            <button className={styles.button}>
              <img src={`/images/icons/${notification.icon}`} alt="Notifications" className={styles.icon} />
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default ToastNotifications;

