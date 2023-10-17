import "./ProjectLinks.scss";

const ProjectLinks = ({ selectedProject, selectedProjectDetails }) => {
  console.log(selectedProjectDetails);
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
          <a href="" className="links__live links__btn--disabled">
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
        </div>
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
