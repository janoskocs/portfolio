import styles from "@/features/Taskbar/styles/Taskbar.module.css";
import StartButton from "./components/StartButton";
import AppArea from "./components/AppArea";
import SystemTray from "./components/SystemTray";

const index = () => {
  return (
    <section className={styles.taskbar}>
      <StartButton />
      <AppArea />
      <SystemTray />
    </section>
  );
};
export default index;
