import styles from "./AppArea.module.css";
const index = () => {
  return (
    <section className={styles["app-area"]}>
      <button className={styles.app}>
        <img src="/images/icons/about-me.png" alt="computer" className={styles.icon} />
        About Me
      </button>
      <button className={styles.app}>
        <img src="/images/icons/contact-me.png" alt="computer" className={styles.icon} />
        Contact Me
      </button>
      <button className={styles.app}>
        <img src="/images/icons/projects.png" alt="computer" className={styles.icon} />
        Projects
      </button>
    </section>
  );
};
export default index;
