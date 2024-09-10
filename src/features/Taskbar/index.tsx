import styles from "@/features/Taskbar/styles/Taskbar.module.css";
import StartButton from "./components/StartButton";
import AppArea from "./components/AppArea";
import SystemTray from "./components/SystemTray";
import Divider from "@/components/Divider";

const index = () => {
  return (
    <section className={styles.taskbar}>
      <StartButton />
      <Divider orientation="vertical" />
      <AppArea />
      <SystemTray />
    </section>
  );
};
export default index;
