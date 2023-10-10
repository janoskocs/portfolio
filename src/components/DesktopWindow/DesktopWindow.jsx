import "./DesktopWindow.scss";

const DesktopWindow = ({ type }) => {
  return (
    <div className="window">
      <div className="window__title">{type}</div>
      <div className="window__body">body</div>
    </div>
  );
};
export default DesktopWindow;
