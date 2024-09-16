import styles from "./StartButton.module.css";

type StartButtonProps = {
  onClick: () => void;
};
const StartButton = ({ onClick }: StartButtonProps) => {
  return (
    <button className={styles["start-button"]} onClick={onClick}>
      <img src="/images/logos/logocolour.png" alt="Start" className={styles["start-icon"]} />
      Start
    </button>
  );
};
export default StartButton;

