import "./Start.scss";
import logo from "../../../public/images/skills/logo.png";

const Start = ({ showStartMenu }) => {
  return (
    <nav className={showStartMenu ? "start" : "start start--hidden"}>
      <section className="start__title-wrapper">
        <img src={logo} alt="Microchip" className="start__image" />
        <h1 className="start__title">János Kócs | Portfolio</h1>
      </section>
      <ul className="start__list">
        <li className="start__list-item">Menu 1</li>
        <li className="start__list-item">Menu 2</li>
        <li className="start__list-item">Menu 3</li>
        <li className="start__list-item">Menu 1</li>
        <li className="start__list-item">Menu 2</li>
        <li className="start__list-item">Menu 3</li>
      </ul>
    </nav>
  );
};
export default Start;
