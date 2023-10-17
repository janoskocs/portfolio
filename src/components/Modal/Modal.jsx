import "./Modal.scss";

const Modal = () => {
  return (
    <div className="modal">
      <section className="modal__window">
        <div className="modal__title-bar">
          <div className="modal__title-img-wrapper">
            <img
              src="/images/icons/about-me.png"
              alt="PLACEHOLDER"
              className="modal__icon"
            />
            <h2 className="modal__title">Thank you</h2>
          </div>
          <button className="modal__button-close">X</button>
        </div>
        <section className="modal__body">
          <div className="modal__body-wrapper">
            <img
              src="/images/icons/about-me.png"
              alt="PLACEHOLDER"
              className="modal__image"
            />
            <p className="modal__text">Your email was sent, thank you!</p>
          </div>
          <button className="modal__ok-btn">OK</button>
        </section>
      </section>
    </div>
  );
};
export default Modal;
