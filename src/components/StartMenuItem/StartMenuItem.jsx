import "./StartMenuItem.scss";

const StartMenuItem = ({ name, alt, icon, action, type, address }) => {
  return (
    <li className="start__list-item">
      <button className="start__button">
        <img src={icon} alt={alt} className="start__menu-icon" />
        {name}
      </button>
    </li>
  );
};
export default StartMenuItem;
