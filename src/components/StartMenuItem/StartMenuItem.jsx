import "./StartMenuItem.scss";

const StartMenuItem = ({
  name,
  alt,
  icon,
  action,
  type,
  address,
  setActiveWindow,
  setShowStartMenu,
}) => {
  if (type === "menu") {
    return (
      <li className="start__list-item">
        <button
          className="start__button"
          onClick={() => {
            setShowStartMenu(false);
            setActiveWindow(action);
          }}
        >
          <img src={icon} alt={alt} className="start__menu-icon" />
          {name}
        </button>
      </li>
    );
  } else if (type === "link") {
    return (
      <li className="start__list-item">
        <a
          className="start__button"
          href={address}
          target="_blank"
          rel="noreferrer"
        >
          <img src={icon} alt={alt} className="start__menu-icon" />
          {name}
        </a>
      </li>
    );
  }
};
export default StartMenuItem;
