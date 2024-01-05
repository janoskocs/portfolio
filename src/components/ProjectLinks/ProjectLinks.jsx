import "./ProjectLinks.scss";
import projectDetailImage from "/images/icons/projects.png";

const ProjectLinks = ({
  selectedProject,
  selectedProjectDetails,
  handleOpenWindow,
}) => {
  if (selectedProject === "") {
    return (
      <section className="links">
        <fieldset className="links__fieldset">
          <legend className="links__legend">No project is selected</legend>
          <div className="links__github">
            <a href="/" className="links__btn links__btn--disabled">
              <img
                src="/images/icons/github.png"
                alt="GitHub"
                className="links__link-img"
              />
              Client
            </a>
            <a href="/" className="links__btn links__btn--disabled">
              <img
                src="/images/icons/github.png"
                alt="GitHub"
                className="links__link-img"
              />
              Server
            </a>
          </div>
          <button className="links__live links__btn--disabled">
            <img
              src={projectDetailImage}
              className="links__link-img links__link-img--disabled"
              alt="Learn more about the project"
            />
            Learn more about the project
          </button>
          <a href="#" className="links__live links__btn--disabled">
            <div className="links__live-pulse"></div>
            Live
          </a>
        </fieldset>
      </section>
    );
  }
  return (
    <section className="links">
      <fieldset className="links__fieldset">
        <legend className="links__legend">Check out the source code</legend>
        <div className="links__github">
          {selectedProjectDetails[0].github.general === "no-link" && (
            <>
              <a
                href={selectedProjectDetails[0].github.client_link}
                className="links__btn"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/icons/github.png"
                  alt="GitHub"
                  className="links__link-img"
                />
                Client
              </a>
              <a
                href={selectedProjectDetails[0].github.server_link}
                className="links__btn"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/icons/github.png"
                  alt="GitHub"
                  className="links__link-img"
                />
                Server
              </a>
            </>
          )}

          {selectedProjectDetails[0].github.general !== "no-link" && (
            <>
              <a
                href={selectedProjectDetails[0].github.general}
                className="links__btn links__btn--general"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src="/images/icons/github.png"
                  alt="GitHub"
                  className="links__link-img"
                />
                Repository
              </a>
            </>
          )}
        </div>
        <button
          className="links__live"
          onClick={(e) => handleOpenWindow(selectedProjectDetails[0].name)}
        >
          <img
            src={projectDetailImage}
            className="links__link-img"
            alt="Learn more about the project"
          />
          Learn more about {selectedProjectDetails[0].title}
        </button>
        <a
          href={selectedProjectDetails[0].address}
          className="links__live"
          target="_blank"
          rel="noreferrer"
        >
          <div className="links__live-pulse links__live-pulse--enabled"></div>
          Live
        </a>
      </fieldset>
    </section>
  );
};
export default ProjectLinks;
