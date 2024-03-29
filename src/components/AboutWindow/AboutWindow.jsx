import DividerLine from "../DividerLine";
import "./AboutWindow.scss";
import { skills } from "src/data/skills";
import { version } from "src/data/version";

const AboutWindow = ({ handleOpenWindow, handleCloseWindow }) => {
  const skillsJSX = skills.map((skill) => {
    return (
      <div key={skill.id} className="about__skill">
        <img src={skill.image} alt={skill.alt} className="about__skill-icon" />
        <p className="about__skill-title">{skill.name}</p>
      </div>
    );
  });

  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-img-wrapper">
          <img
            src={`/images/icons/about-me.png`}
            alt="Old computer"
            className="window__icon"
          />
          <h2 className="window__title">About Me</h2>
        </div>
        <button
          className="window__button-close"
          onClick={() => handleCloseWindow("about-me")}
        >
          X
        </button>
      </div>
      <div className="window__body">
        <section className="about">
          <img
            src={`/images/icons/janoskocs_mycomputer1.png`}
            alt="Janos Kocs on a computer screen"
            className="about__image"
          />
          <div className="about__side">
            <h3 className="about__title">
              János Kócs | Software Engineer {version}
            </h3>
            <DividerLine orientation="horizontal" />
            <p className="about__text">
              Hey there, I&apos;m János, I&apos;m making the web more
              interactive. When I was a kid, my computer ran Windows 98, and it
              was the coolest thing ever. That&apos;s where I got the
              inspiration for my epic portfolio website.
            </p>
            <DividerLine orientation="horizontal" />

            <p className="about__text">
              I make these components work together:
            </p>
            <div className="about__skills">{skillsJSX}</div>
          </div>
        </section>
        <div className="window__control-btns">
          <DividerLine orientation="horizontal" />
          <button
            className="window__cta-btn"
            autoFocus={true}
            onClick={() => handleOpenWindow("projects")}
          >
            What I do
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
export default AboutWindow;
