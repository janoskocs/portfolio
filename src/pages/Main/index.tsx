import { useState } from "react";
import Taskbar from "@/features/Taskbar";
import styles from "./Main.module.css";
import Desktop from "@/features/Desktop";
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

