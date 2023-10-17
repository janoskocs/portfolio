import "./ProjectLinks.scss";

const ProjectLinks = ({ selectedProject }) => {
  console.log(selectedProject);

  if (selectedProject === "") {
    return (
      <section className="links">
        <fieldset className="links__fieldset">
          <legend className="links__legend">Check out the source code</legend>
          <div className="links__github">
            <a href="/" className="links__btn">
              <img
                src="/images/icons/github.png"
                alt="GitHub"
                className="links__link-img"
              />
              Client
            </a>
            <a href="/" className="links__btn">
              <img
                src="/images/icons/github.png"
                alt="GitHub"
                className="links__link-img"
              />
              Server
            </a>
          </div>
          <a href="" className="links__live">
            <div className="links__live-pulse"></div>
            Live
          </a>
        </fieldset>
      </section>
    );
  }
  return <div>ProjectLinks</div>;
};
export default ProjectLinks;
