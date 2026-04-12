import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-dot"></span>
          BotEngine<span>Studio</span>
        </Link>

        <nav className="navbar-menu desktop-menu">
          <Link
            to="/#home"
            className={`navbar-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>

          <Link to="/#services" className="navbar-link">
            Services
          </Link>

          <Link to="/#pricing" className="navbar-link">
            Packages
          </Link>

          <Link to="/#portfolio" className="navbar-link">
            Portfolio
          </Link>

          <Link
            to="/about"
            className={`navbar-link ${isActive("/about") ? "active" : ""}`}
          >
            About
          </Link>
        </nav>

        <div className="navbar-actions desktop-actions">
          <Link to="/contact" className="navbar-btn">
            Get Started
          </Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <div className={`mobile-nav ${menuOpen ? "open" : ""}`}>
        <nav className="mobile-nav-menu">
          <Link to="/#home" className="mobile-nav-link" onClick={closeMenu}>
            Home
          </Link>

          <Link to="/#services" className="mobile-nav-link" onClick={closeMenu}>
            Services
          </Link>

          <Link to="/#pricing" className="mobile-nav-link" onClick={closeMenu}>
            Packages
          </Link>

          <Link
            to="/#portfolio"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            Portfolio
          </Link>

          <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
            About
          </Link>

          <Link to="/contact" className="mobile-nav-btn" onClick={closeMenu}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
