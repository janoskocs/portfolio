import styles from "./StartMenu.module.css";

type StartMenuProps = {
  isOpen: boolean;
};

const StartMenu = ({ isOpen }: StartMenuProps) => {
  return (
    <nav className={`${styles.start} ${isOpen ? styles.open : ""}`}>
      <aside className={styles.side}>
        <img src="/images/logos/logocolour.png" alt="Computer chip" className={styles.logo} />
        <h2 className={styles.title}>János Kócs</h2>
      </aside>
      <ul className={styles.list}>
        <li>Program 1</li>
        <li>Program 2</li>
        <li>Program 3</li>
      </ul>
    </nav>
  );
};

export default StartMenu;

