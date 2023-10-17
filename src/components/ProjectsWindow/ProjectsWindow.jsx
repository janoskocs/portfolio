import "./ProjectsWindow.scss";
import { projects } from "../../data/projects";

const ProjectsWindow = ({ handleOpenWindow, handleCloseWindow }) => {
  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-img-wrapper">
          <img
            src={`public/images/icons/projects.png`}
            alt="Open folder"
            className="window__icon"
          />
          <h2 className="window__title">My Projects</h2>
        </div>
        <button
          className="window__button-close"
          onClick={() => handleCloseWindow("projects")}
        >
          X
        </button>
      </div>
      <div className="window__body">
        <section className="projects">
          <div className="options">
            <button
              className="options__btn"
              onClick={() => handleOpenWindow("contact-me")}
            >
              Contact me
            </button>
            <a
              className="options__btn"
              href="https://github.com/janoskocs"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>

          <section className="view"></section>
          <section className="icons"></section>
          <section className="folder-footer">
            <p className="folder-footer__text">
              {!projects && "No projects."}
              {projects && projects.length}{" "}
              {projects && projects.length > 1 ? "objects" : "object"}
            </p>
            <p className="folder-footer__text">515MB</p>
            <p className="folder-footer__text">Projects</p>
          </section>
        </section>
      </div>
    </div>
  );
};
export default ProjectsWindow;
