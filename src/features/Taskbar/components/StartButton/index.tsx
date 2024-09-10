import styles from "./StartButton.module.css";

const StartButton = () => {
  return (
    <div className={styles["start-button-container"]}>
      <button className={styles["start-button"]}>
        <img src="/images/logos/logocolour.png" alt="Start" className={styles["start-icon"]} />
        Start
      </button>
    </div>
  );
};
export default StartButton;
