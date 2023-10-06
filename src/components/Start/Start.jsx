import StartMenuItem from "../StartMenuItem";
import "./Start.scss";
import logo from "/images/skills/logo.png";
import { menuItems } from "src/data/menuItems";

const Start = ({ showStartMenu, setActiveWindow }) => {
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
            setActiveWindow={setActiveWindow}
          />
        ))}
      </ul>
    </nav>
  );
};
export default Start;
