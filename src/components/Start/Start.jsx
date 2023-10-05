import "./Start.scss";
import logo from "../../../public/images/skills/logo.png";

const Start = ({ showStartMenu }) => {
  return (
    <nav className={showStartMenu ? "start" : "start start--hidden"}>
      <section className="start__title-wrapper">
        <img src={logo} alt="Microchip" className="start__logo" />
        <h1 className="start__title">János Kócs | Portfolio</h1>
      </section>
      <ul className="start__list">
        <li className="start__list-item">
          <button className="start__button">
            <img src={logo} alt="About me" className="start__menu-icon" />
            Placeholder
          </button>
        </li>
        <li className="start__list-item">
          <button className="start__button">
            <img src={logo} alt="GitHub" className="start__menu-icon" />
            GitHub Page
          </button>
        </li>
        <li className="start__list-item">
          <button className="start__button">
            <img src={logo} alt="LinkedIn" className="start__menu-icon" />
            LinkedIn Profile
          </button>
        </li>
        <li className="start__list-item">
          <button className="start__button">
            <img src={logo} alt="My projects" className="start__menu-icon" />
            My Projects
          </button>
        </li>
        <li className="start__list-item">
          <button className="start__button">
            <img src={logo} alt="Contact me" className="start__menu-icon" />
            Contact Me
          </button>
        </li>
        <li className="start__list-item">
          <button className="start__button">
            <img src={logo} alt="About me" className="start__menu-icon" />
            About Me
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Start;
