import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";

import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const closeMenu = () => setMenuOpen(false);
  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="container navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          BotEngine<span>Studio</span>
        </Link>

        <nav className="navbar-menu desktop-menu">
          <Link
            to="/#home"
            className={`navbar-link ${
              location.pathname === "/" ? "active" : ""
            }`}
          >
            {t("navbar.home")}
          </Link>
          <Link to="/#services" className="navbar-link">
            {t("navbar.services")}
          </Link>
          <Link to="/#pricing" className="navbar-link">
            {t("navbar.packages")}
          </Link>
          <Link to="/#portfolio" className="navbar-link">
            {t("navbar.portfolio")}
          </Link>
          <Link
            to="/about"
            className={`navbar-link ${isActive("/about") ? "active" : ""}`}
          >
            {t("navbar.about")}
          </Link>
        </nav>

        <div className="navbar-actions desktop-actions">
          <Link to="/contact" className="navbar-btn">
            {t("navbar.getStarted")}
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
            {t("navbar.home")}
          </Link>
          <Link to="/#services" className="mobile-nav-link" onClick={closeMenu}>
            {t("navbar.services")}
          </Link>
          <Link to="/#pricing" className="mobile-nav-link" onClick={closeMenu}>
            {t("navbar.packages")}
          </Link>
          <Link
            to="/#portfolio"
            className="mobile-nav-link"
            onClick={closeMenu}
          >
            {t("navbar.portfolio")}
          </Link>
          <Link to="/about" className="mobile-nav-link" onClick={closeMenu}>
            {t("navbar.about")}
          </Link>
          <Link to="/contact" className="mobile-nav-btn" onClick={closeMenu}>
            {t("navbar.getStarted")}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
