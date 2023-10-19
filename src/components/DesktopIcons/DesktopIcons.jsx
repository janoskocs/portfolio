import { menuItems } from "src/data/menuItems";
import DesktopIcon from "../DesktopIcon";
import "./DesktopIcons.scss";

const DesktopIcons = ({ handleOpenWindow }) => {
  return (
    <nav className="nav-icons">
      <ul className="nav-icons__list">
        {menuItems.map((item) => (
          <DesktopIcon
            key={item.id}
            name={item.name}
            alt={item.alt}
            icon={item.icon}
            action={item.action}
            type={item.type}
            address={item.address}
            handleOpenWindow={handleOpenWindow}
          />
        ))}
      </ul>
    </nav>
  );
};

export default DesktopIcons;
