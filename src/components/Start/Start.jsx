import StartMenuItem from "../StartMenuItem";
import "./Start.scss";
import logo from "/images/skills/logo.png";
import { menuItems } from "src/data/menuItems";

const Start = ({ showStartMenu }) => {
  console.log(menuItems);
  return (
    <nav className={showStartMenu ? "start" : "start start--hidden"}>
      <section className="start__title-wrapper">
        <img src={logo} alt="Microchip" className="start__logo" />
        <h1 className="start__title">János Kócs | Portfolio</h1>
      </section>
      <ul className="start__list">
        {menuItems.map((item) => (
          <StartMenuItem
            key={item.id}
            name={item.name}
            alt={item.alt}
            icon={item.icon}
            action={item.action}
            type={item.type}
            address={item.address}
          />
        ))}
        {/* <li className="start__list-item">
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
        </li> */}
      </ul>
    </nav>
  );
};
export default Start;
