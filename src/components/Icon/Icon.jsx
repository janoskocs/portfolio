import "./Icon.scss";

const Icon = ({ name, icon, iconSelectedImage, iconAlt, selected }) => {
  return (
    <div className="icon">
      <img
        src={selected ? iconSelectedImage : icon}
        alt={iconAlt}
        className="icon__image"
      />
      <p
        className={
          selected ? "icon__title icon__title--selected" : "icon__title"
        }
      >
        {name}
      </p>
    </div>
  );
};
export default Icon;
