import styles from "./StartButton.module.css";

type StartButtonProps = {
  onClick: () => void;
};
const StartButton = ({ onClick }: StartButtonProps) => {
  return (
    <div className={styles["start-button-container"]}>
      <button className={styles["start-button"]} onClick={onClick}>
        <img src="/images/logos/logocolour.png" alt="Start" className={styles["start-icon"]} />
        Start
      </button>
    </div>
  );
};
export default StartButton;
