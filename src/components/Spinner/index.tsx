import styles from "./Spinner.module.css";

const Spinner = () => {
  return <div className={styles.loader} data-testid="spinner"></div>;
};

export default Spinner;
