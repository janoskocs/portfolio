import "./ProjectDetailWindow.scss";
import { projects } from "../../data/projects";
import DividerLine from "../DividerLine";
const ProjectDetailWindow = ({
  activeProject,
  handleCloseWindow,
  handleOpenWindow,
}) => {
  const selectedProject = projects.find(
    (project) => project.name === activeProject
  );
  console.log(selectedProject);
  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-img-wrapper">
          <img
            src={selectedProject.icon}
            alt={selectedProject.iconAlt}
            className="window__icon"
          />
          <h2 className="window__title">{selectedProject.title}</h2>
        </div>
        <button
          className="window__button-close"
          onClick={() => handleCloseWindow("about-me")}
        >
          X
        </button>
      </div>
      <div className="window__body">
        {/* <section className="about">

        </section> */}

        <div className="window__control-btns">
          <DividerLine orientation="horizontal" />
          <button
            className="window__cta-btn"
            autoFocus={true}
            onClick={() => handleOpenWindow("projects")}
          >
            Go back to projects
          </button>
          <button
            className="window__close-btn"
            onClick={() => handleCloseWindow("about-me")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailWindow;
