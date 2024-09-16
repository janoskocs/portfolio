import { useState } from "react";
import Taskbar from "@/features/Taskbar";
import Desktop from "@/features/Desktop";
import styles from "./Main.module.css";
const Main = () => {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState<boolean>(false);

  return (
    <div className={styles.desktop}>
      <Desktop setIsStartMenuOpen={setIsStartMenuOpen} />
      <Taskbar isStartMenuOpen={isStartMenuOpen} setIsStartMenuOpen={setIsStartMenuOpen} />
    </div>
  );
};

export default Main;

