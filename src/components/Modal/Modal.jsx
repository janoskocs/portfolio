import "./Modal.scss";

import cv from "../../data/cv.txt";

const Modal = ({
  showSentMailModal,
  setShowSentMailModal,
  showDownloadModal,
  setShowDownloadModal,
}) => {
  const handleHideModal = () => {
    sessionStorage.clear();
    setShowSentMailModal(false);
    setShowDownloadModal(false);
  };

  if (showDownloadModal) {
    return (
      <div className={showDownloadModal ? "modal" : "modal modal--hidden"}>
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
            <button className="modal__button-close" onClick={handleHideModal}>
              X
            </button>
          </div>
          <section className="modal__body">
            <div className="modal__body-wrapper">
              <img
                src="/images/icons/about-me.png"
                alt="PLACEHOLDER"
                className="modal__image"
              />
              <p className="modal__text">
                Click on the button below to download my CV!
              </p>
            </div>
            <a
              className="modal__ok-btn"
              onClick={handleHideModal}
              href={cv}
              download="cv"
              target="_blank"
              rel="noreferrer"
            >
              Download
            </a>
          </section>
        </section>
      </div>
    );
  }

  return (
    <div className={showSentMailModal ? "modal" : "modal modal--hidden"}>
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
          <button className="modal__button-close" onClick={handleHideModal}>
            X
          </button>
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
          <button className="modal__ok-btn" onClick={handleHideModal}>
            OK
          </button>
        </section>
      </section>
    </div>
  );
};
export default Modal;
