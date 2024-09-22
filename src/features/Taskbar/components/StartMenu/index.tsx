import styles from "./StartMenu.module.css";

type StartMenuProps = {
  isOpen: boolean;
};

const StartMenu = ({ isOpen }: StartMenuProps) => {
  return (
    <nav className={`${styles.start} ${isOpen ? styles.open : ""}`}>
      <aside className={styles.side}>
        <img src="/images/logos/logocolour.png" alt="Computer chip" className={styles.logo} />
        <h1 className={styles.title}>János Kócs | Portfolio</h1>
      </aside>
      <ul className={styles.list}>
        <li className={styles["list-item"]}>
          <button className={styles.button}>
            <img src="/images/icons/about-me.png" alt="About me" className={styles.icon} />
            About me
          </button>
        </li>
        <li className={styles["list-item"]}>
          <button className={styles.button}>
            <img src="/images/icons/about-me.png" alt="About me" className={styles.icon} />
            Contact me
          </button>
        </li>
        <li className={styles["list-item"]}>
          <button className={styles.button}>
            <img src="/images/icons/about-me.png" alt="About me" className={styles.icon} />
            Visit my blog
          </button>
        </li>
        <li className={styles["list-item"]}>
          <button className={styles.button}>
            <img src="/images/icons/about-me.png" alt="About me" className={styles.icon} />
            About me
          </button>
        </li>
        <li className={styles["list-item"]}>
          <button className={styles.button}>
            <img src="/images/icons/about-me.png" alt="About me" className={styles.icon} />
            Contact me
          </button>
        </li>
        <li className={styles["list-item"]}>
          <button className={styles.button}>
            <img src="/images/icons/about-me.png" alt="About me" className={styles.icon} />
            Visit my blog
          </button>
        </li>
        <li className={styles["list-item"]}>
          <button className={styles.button}>
            <img src="/images/icons/about-me.png" alt="About me" className={styles.icon} />
            About me
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default StartMenu;

