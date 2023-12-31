import "./Icon.scss";

const Icon = ({
  name,
  title,
  icon,
  iconSelectedImage,
  iconAlt,
  selectedProject,
  handleSelectProject,
}) => {
  const selected = selectedProject === name ? true : false;

  return (
    <button className="icon" onClick={() => handleSelectProject(name)}>
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
        {title}
      </p>
    </button>
  );
};
export default Icon;
