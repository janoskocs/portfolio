import styles from "./AppArea.module.css";
import AppAreaButton from "../AppAreaButton";
const AppArea = () => {
  return (
    <section className={styles["app-area"]}>
      <AppAreaButton title="About Me" icon="about-me.png" iconAlt="computer" />
      <AppAreaButton title="Contact Me" icon="contact-me.png" iconAlt="post" />
      <AppAreaButton title="Projects" icon="projects.png" iconAlt="open folder" />
    </section>
  );
};
export default AppArea;
