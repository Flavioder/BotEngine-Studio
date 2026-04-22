import "../styles/Footer.css";
import { Mail, Phone, Bot } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
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
            <Link to="/chatbot-service">AI Chatbot</Link>
            <Link to="/website-service">Web Development</Link>
            <Link to="/combo-service">Premium Combo</Link>
          </div>

          <div className="footer-links">
            <h4>Kompania</h4>
            <a href="/#portfolio">Portfolio</a>
            <Link to="/contact">Kontakt</Link>
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

            <a href="tel:+355694471238" className="footer-contact-item">
              <Phone size={17} />
              <span>+355 69 447 1238</span>
            </a>
            <a
              href="https://www.instagram.com/botenginestudio?igsh=MTZuYXU4aHZ1aWlnZw=="
              className="footer-contact-item"
            >
              <FaInstagram size={17} />
              <span>@BotEngineStudio</span>
            </a>
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
