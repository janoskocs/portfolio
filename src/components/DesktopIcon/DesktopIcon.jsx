import "./DesktopIcon.scss";

const DesktopIcon = ({
  name,
  alt,
  icon,
  action,
  type,
  address,
  handleOpenWindow,
}) => {
  if (type === "menu") {
    return (
      <li className="nav-icons__list-item">
        <button
          className="nav-icons__button"
          onClick={() => {
            handleOpenWindow(action);
          }}
        >
          <img src={icon} alt={alt} className="nav-icons__menu-icon" />
          {name}
        </button>
      </li>
    );
  } else if (type === "link") {
    return (
      <li className="nav-icons__list-item">
        <a
          className="nav-icons__button"
          href={address}
          target="_blank"
          rel="noreferrer"
        >
          <img src={icon} alt={alt} className="nav-icons__menu-icon" />
          {name}
        </a>
      </li>
    );
  }
};
export default DesktopIcon;
