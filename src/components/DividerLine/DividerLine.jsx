import "./DividerLine.scss";

const DividerLine = ({ orientation }) => {
  return <hr className={`${orientation}-line`} />;
};
export default DividerLine;
