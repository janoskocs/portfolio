import "./AboutWindow.scss";
import { skills } from "src/data/skills";

const AboutWindow = () => {
  const skillsJSX = skills.map((skill) => {
    return (
      <div key={skill.id} className="about__skill">
        <img src={skill.image} alt={skill.alt} />
        <p className="about__skill-title">{skill.name}</p>
      </div>
    );
  });

  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-img-wrapper">
          <img
            src={`public/images/icons/mycomp.png`}
            alt="Old computer"
            className="window__icon"
          />
          <h2 className="window__title">About Me</h2>
        </div>
        <button className="window__button-close">X</button>
      </div>
      <div className="window__body">
        <section className="about">
          <img
            src={`public/images/icons/janoskocs_mycomputer1.png`}
            alt="Janos Kocs on a computer screen"
            className="about__img"
          />
          <div className="about__side">
            <h3 className="about__title">
              János Kócs | Software Engineer v3.0
            </h3>
            <hr />
            <p className="about__text">
              Hey there, I&apos;m János, I just completed a tech bootcamp and
              now I&apos;m making the web more interactive. When I was a kid, my
              computer ran Windows 98, and it was the coolest thing ever.
              That&apos;s where I got the inspiration for my epic portfolio
              website.
            </p>
            <hr />
            <p className="about__text">I am based in London, UK.</p>
            <p className="about__text">
              I make these components work together:
            </p>
            <div className="about__skills">{skillsJSX}</div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default AboutWindow;
