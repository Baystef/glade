const Nav = () => {
  return (
    <nav className="main-nav mobile-nav">
      <a href="/" className="main-nav__brand">
        <img src="/images/logo.png" width="100px" alt="Glade Logo" />
      </a>

      <ul className="main-nav__items social-icons">
        <i className="fab fa-twitter social-icon"></i>
        <i className="fab fa-facebook-f social-icon"></i>
      </ul>
    </nav>
  );
}

export default Nav;