import React from "react";
import styles from "./StartMenu.module.css";

type StartMenuProps = {
  isOpen: boolean;
};

const StartMenu = ({ isOpen }: StartMenuProps) => {
  return (
    <nav className={`${styles.start} ${isOpen ? styles.open : ""}`}>
      <ul>
        <li>Program 1</li>
        <li>Program 2</li>
        <li>Program 3</li>
      </ul>
    </nav>
  );
};

export default StartMenu;

