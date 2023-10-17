import { useState } from "react";
import DividerLine from "../DividerLine";
import "./ContactWindow.scss";

const ContactWindow = ({ handleOpenWindow, handleCloseWindow }) => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const form = e.target;
    setInput({ ...input, [form.name]: form.value });
  };

  console.log(input);
  return (
    <div className="window">
      <div className="window__title-bar">
        <div className="window__title-img-wrapper">
          <img
            src={`/images/icons/contact-me.png`}
            alt="Old computer"
            className="window__icon"
          />
          <h2 className="window__title">Contact Me</h2>
        </div>
        <button
          className="window__button-close"
          onClick={() => handleCloseWindow("contact-me")}
        >
          X
        </button>
      </div>
      <section className="contact">
        <section className="contact__side">
          <img
            src="/images/icons/contact-me.png"
            alt="Stack of letters in front of Earth."
            className="contact__img"
          />
          <h3 className="contact__title">Let&apos;s work together!</h3>
        </section>
        <DividerLine orientation="horizontal" />
        <section className="contact__side">
          <p className="contact__text">
            Fill out the form below to send me a message.
          </p>
          <p className="contact__text">
            Alternatively, drop me an email at{" "}
            <a href="mailto:janos.kocs@outlook.com" className="contact__email">
              janos.kocs@outlook.com
            </a>
          </p>
          <DividerLine orientation="horizontal" />
          <form
            action="https://formsubmit.co/janos.kocs@outlook.com"
            method="POST"
            className="form"
          >
            <fieldset className="form__fieldset">
              <legend className="form__legend">Send me a message</legend>
              <label htmlFor="name" className="form__label">
                Enter your name...
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="form__name-input"
                placeholder="e.g. John Smith"
                value={input.name}
                onChange={(e) => handleInputChange(e)}
                required
              />
              <label htmlFor="email" className="form__label">
                Enter your email...
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="form__email-input"
                placeholder="e.g. john@outlook.com"
                value={input.email}
                onChange={(e) => handleInputChange(e)}
                required
              />

              <textarea
                name="message"
                id="message"
                className="form__message-input"
                value={input.message}
                onChange={(e) => handleInputChange(e)}
                placeholder="Hi Janos, let's work together..."
                required
              ></textarea>
              <button className="form__send" type="submit">
                Send
              </button>
            </fieldset>
          </form>
        </section>
      </section>
      <div className="window__body">
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
            onClick={() => handleCloseWindow("contact-me")}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
export default ContactWindow;
