import MainForm from "./MainForm";
import Modal from './Modal';

const Main = () => {
  return (
    <section className="main-section">
      <Modal />
      <nav className="main-nav desktop-nav">
        <a href="index.html" className="main-nav__brand">
          <img src="/images/logo.png" alt="Fylo Logo" />
        </a>

        <ul className="main-nav__items social-icons">
          <i className="fab fa-twitter social-icon"></i>
          <i className="fab fa-facebook-f social-icon"></i>
        </ul>
      </nav>
      <h1 className="main-section__title">COVID-19 Solidarity Response Fund</h1>
      <p className="main-section__text">
        As COVID-19 spreads, it poses a grave danger, especially in communities with struggling health systems. Vulnerable people are being hit the hardest by the outbreak: it is driving families deeper into hunger and poverty.
        <br /><br />
        In some hard-to-reach areas, <span className="glade">Glade Foundation</span> is the only organization providing healthcare - we must step up and respond to this pandemic. With your help, we can expand our water, sanitation, hygiene, and health programs to save more lives. Will you join us?
      </p>
      <MainForm />
      <hr />
      <div className="main-section__footer-links">
        <button className="main-section__footer--button" data-bs-toggle="modal" data-bs-target="#gladeModal">Request for assistance</button>
        <a href="https://developer.glade.ng/" className="main-section__link">Powered by GladePay</a>
      </div>
    </section>
  );
}

export default Main;