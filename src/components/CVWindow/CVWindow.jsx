import DividerLine from "../DividerLine";
import "./CVWindow.scss";

const CVWindow = ({ handleCloseWindow }) => {
  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-img-wrapper">
          <img
            src={`/images/icons/contact-me.png`}
            alt="Old computer"
            className="window__icon"
          />
          <h2 className="window__title">My CV</h2>
        </div>
        <button
          className="window__button-close"
          onClick={() => handleCloseWindow("my-CV")}
        >
          X
        </button>
      </div>
      <section className="cv">
        <h3 className="cv__title">Download my CV</h3>
        <img src="/images/icons/my-cv.png" alt="Text" className="cv__img" />
        <DividerLine orientation={"horizontal"} />
        <p className="cv__text">
          To download my CV, please enter your email below.
        </p>
        <p className="cv__text">
          Please note this was updated on the
          <span className="cv__highlight"> 20th of October, 2023</span>.
        </p>
        <form action="" className="cv-form">
          <fieldset className="cv-form__fieldset">
            <legend className="cv-form__legend">Enter your email</legend>
            <input
              className="cv-form__input"
              name="email"
              type="email"
              placeholder="For e.g. jane@msn.com"
              required
            />
            <button className="cv-form__submit" type="submit">
              Download
            </button>
          </fieldset>
        </form>
      </section>
    </div>
  );
};
export default CVWindow;
