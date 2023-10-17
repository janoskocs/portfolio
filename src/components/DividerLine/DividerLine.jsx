import "./DividerLine.scss";

const DividerLine = ({ orientation, colour = false }) => {
  if (colour)
    return <hr className={`${orientation}-line ${orientation}-line--colour`} />;
  return <hr className={`${orientation}-line`} />;
};
export default DividerLine;
