import "./ProjectDetailWindow.scss";
import { projects } from "../../data/projects";
import DividerLine from "../DividerLine";
import ImageSlideShow from "../ImageSlideShow";

const ProjectDetailWindow = ({
  activeProject,
  handleCloseWindow,
  handleOpenWindow,
}) => {
  const selectedProject = projects.find(
    (project) => project.name === activeProject
  );

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
          onClick={() => handleCloseWindow(selectedProject.name)}
        >
          X
        </button>
      </div>
      <div className="window__body">
        <section className="project-detail">
          <div className="explorer">
            <div className="explorer__container">
              <img
                className="explorer__image"
                src={selectedProject.icon}
                alt={selectedProject.iconAlt}
              />
              <h3 className="explorer__title">
                C:\Projects\{selectedProject.title}
              </h3>
            </div>

            <section className="tech-details">
              <div className="tech-details__container">
                <ul className="tech-details__list">
                  {selectedProject.techstack.map((tech) => {
                    return (
                      <li className="tech-details__item">
                        <img
                          className="tech-details__image"
                          src={`/images/skills/${tech}.png`}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
            {/* <DividerLine orientation="horizontal" colour={true} /> */}
            {/* <p className="explorer__text">
              Published: {selectedProject.published_at}
            </p> */}
            <p className="explorer__text">{selectedProject.long_description}</p>
            <ImageSlideShow images={selectedProject.screenshots} />
          </div>

          {/* <section className="project-info">
            <p className="project-info__text">
              {selectedProject.long_description}
            </p>
          </section> */}
        </section>

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
            onClick={() => handleCloseWindow(selectedProject.name)}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailWindow;
