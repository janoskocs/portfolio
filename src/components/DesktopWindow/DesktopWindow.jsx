import "./DesktopWindow.scss";

const DesktopWindow = ({ type }) => {
  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-img-wrapper">
          <img
            src={`public/images/icons/contactme.png`}
            alt=""
            className="window__icon"
          />
          <h2 className="window__title">{type}</h2>
        </div>
      </div>
      <div className="window__body">body</div>
    </div>
  );
};
export default DesktopWindow;
