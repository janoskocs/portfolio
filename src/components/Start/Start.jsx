import "./Start.scss";

const Start = ({ showStartMenu }) => {
  return (
    <nav className={showStartMenu ? "start" : "start--hidden"}>
      <ul className="start__list">
        <li className="start__list-item">Menu 1</li>
        <li className="start__list-item">Menu 2</li>
        <li className="start__list-item">Menu 3</li>
      </ul>
    </nav>
  );
};
export default Start;
