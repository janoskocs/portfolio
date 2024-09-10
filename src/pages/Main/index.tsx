import Taskbar from "@/features/Taskbar";
import styles from "./Main.module.css";
const index = () => {
  return (
    <div className={styles.desktop}>
      {/* <h1>Hello MAIN</h1> */}
      <Taskbar />
    </div>
  );
};

export default index;

