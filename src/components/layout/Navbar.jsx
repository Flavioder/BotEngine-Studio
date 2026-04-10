import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-dot"></span>
          BotEngine<span>Studio</span>
        </Link>

        <nav className="navbar-menu">
          <NavLink to="/" className="navbar-link">
            Home
          </NavLink>

          <NavLink to="/services" className="navbar-link">
            Services
          </NavLink>

          <NavLink to="/packages" className="navbar-link">
            Packages
          </NavLink>

          <NavLink to="/portfolio" className="navbar-link">
            Portfolio
          </NavLink>

          <NavLink to="/about" className="navbar-link">
            About
          </NavLink>
        </nav>

        <div className="navbar-actions">
          <Link to="/contact" className="navbar-btn">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
