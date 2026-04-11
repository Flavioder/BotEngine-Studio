import "../styles/Footer.css";
import { Mail, Phone, Bot } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-brand-top">
              <div className="footer-logo-icon">
                <Bot size={18} strokeWidth={2.2} />
              </div>
              <h3 className="footer-logo-text">
                Bot<span>Engine</span>Studio
              </h3>
            </div>

            <p>
              Automatizim inteligjent dhe dizajn premium
              <br />
              për biznese moderne.
            </p>
          </div>

          <div className="footer-links">
            <h4>Shërbimet</h4>
            <a href="#services">AI Chatbot</a>
            <a href="#services">Web Development</a>
            <a href="#services">Premium Combo</a>
          </div>

          <div className="footer-links">
            <h4>Kompania</h4>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Kontakt</a>
          </div>

          <div className="footer-contact">
            <h4>Na kontaktoni</h4>

            <a
              href="mailto:info@botenginestudio.com"
              className="footer-contact-item"
            >
              <Mail size={17} />
              <span>info@botenginestudio.com</span>
            </a>

            <a href="tel:+38344000000" className="footer-contact-item">
              <Phone size={17} />
              <span>+383 44 000 000</span>
            </a>

            <div className="footer-social">
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© 2025 BotEngineStudio. Të gjitha të drejtat e rezervuara.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
