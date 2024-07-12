import "./Ocado.scss";

const Ocado = () => {
  return (
    <div className="ocado">
      <nav className="nav">
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
            <a className="nav__link" href="/">
              janoskocs.com
            </a>
          </li>
          <li className="nav__list-item">
            <a href="#intro">Hello</a>
          </li>
          <li className="nav__list-item">
            <a href="#">Question 1</a>
          </li>
        </ul>
      </nav>
      <main>
        <section className="section intro" id="intro"></section>
        <section className="section question-1"></section>
        <section className="section question-2"></section>
        <section className="section question-3"></section>
        <section className="section question-4"></section>
        <section className="section end"></section>
      </main>
    </div>
  );
};

export default Ocado;
