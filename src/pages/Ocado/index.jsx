import "./Ocado.scss";

const Ocado = () => {
  return (
    <div className="ocado">
      <nav className="nav">
        <div className="nav__container">
          <a className="nav__link nav__link--logo" href="janoskocs.com">
            <img
              className="nav__image"
              src="/images/ocado/logo.png"
              alt="janos x ocado"
              title="janos x ocado"
            />
          </a>
          <ul className="nav__list">
            <li className="nav__list-item">
              <a className="nav__link" href="#intro">
                Hello
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#question1">
                Question 1
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#question2">
                Question 2
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#question3">
                Question 3
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#question4">
                Question 4
              </a>
            </li>
            <li className="nav__list-item">
              <a className="nav__link" href="#end">
                Questions?
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <main>
        <section className="section intro" id="intro">
          <div className="section__container">
            <h2 className="section__title">Hello :{")"}</h2>
            <h3 className="section__sub-title">welcome to my presentation</h3>
            <p className="section__description">
              I am Janos, a JavaScript developer.
            </p>

            <p className="section__description">
              Thank you so much for giving me the opportunity to take this test.
            </p>
            <p className="section__description">
              The goal for this landing page is to demonstrate my skills in and
              the way I approach problem solving.
            </p>
            <ul className="section__list">
              <li className="section__list-item"></li>
            </ul>
          </div>
        </section>
        <section className="section question-1" id="question1">
          <div className="section__container"></div>
        </section>
        <section className="section question-2" id="question2">
          <div className="section__container"></div>
        </section>
        <section className="section question-3" id="question3">
          <div className="section__container"></div>
        </section>
        <section className="section question-4" id="question4">
          <div className="section__container"></div>
        </section>
        <section className="section end" id="end">
          <div className="section__container"></div>
        </section>
      </main>
    </div>
  );
};

export default Ocado;
