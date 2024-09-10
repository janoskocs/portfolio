import styles from "./Divider.module.css";

type DividerProps = {
  orientation: string;
};

const Divider = ({ orientation }: DividerProps) => {
  const classes = styles.divider + " " + styles[orientation];

  if (orientation === "horizontal") {
    return <hr className={classes} />;
  } else if (orientation === "vertical") {
    return <hr className={classes} />;
  }
};
export default Divider;
