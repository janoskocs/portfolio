import { useState } from "react";
import DividerLine from "../DividerLine";
import "./CVWindow.scss";

const CVWindow = ({ handleCloseWindow }) => {
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    sessionStorage.clear();
    sessionStorage.setItem("downloadCV", "true");
  };
  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-img-wrapper">
          <img
            src={`/images/icons/my-CV.png`}
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
        <img src="/images/icons/my-CV.png" alt="Text" className="cv__img" />
        <DividerLine orientation={"horizontal"} />
        <p className="cv__text">
          To download my CV, please enter your email below.
        </p>
        <p className="cv__text">
          Please note this was updated on the
          <span className="cv__highlight"> 20th of October, 2023</span>.
        </p>
        <p className="cv__text cv__text--disclaimer">
          Your email address will not be retained, sold, or utilised for unwanted marketing communications. This notification indicates the download of my CV via email, and as part of my commitment to privacy, this data will be deleted within 30 days. Thank you for your understanding.
        </p>
        <form
          action="https://formsubmit.co/janos.kocs@outlook.com"
          method="POST"
          className="cv-form"
          onSubmit={handleSubmit}
        >
          <fieldset className="cv-form__fieldset">
            <legend className="cv-form__legend">Enter your email</legend>
            <input
              className="cv-form__input"
              name="email"
              type="email"
              placeholder="For e.g. jane@msn.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="hidden"
              name="_next"
              value="https://janoskocs.com"
            ></input>
            <input type="hidden" name="_subject" value="CV Download"></input>
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
