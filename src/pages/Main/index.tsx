import Taskbar from "@/features/Taskbar";
import styles from "./Main.module.css";
import Desktop from "@/features/Desktop";
const index = () => {
  return (
    <div className={styles.desktop}>
      <Desktop />
      <Taskbar />
    </div>
  );
};

export default index;

