import "../styles/Footer.css";
import { Mail, Phone, Bot } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* BRAND */}
          <div className="footer-brand">
            <div className="footer-brand-top">
              <div className="footer-logo-icon">
                <Bot size={18} strokeWidth={2.2} />
              </div>

              <h3 className="footer-logo-text">
                Bot<span>Engine</span>Studio
              </h3>
            </div>

            <p>{t("footer.tagline")}</p>
          </div>

          {/* SERVICES */}
          <div className="footer-links">
            <h4>{t("footer.services")}</h4>

            <Link to="/chatbot-service">{t("footer.links.aiChatbot")}</Link>

            <Link to="/website-service">{t("footer.links.webDev")}</Link>

            <Link to="/combo-service">{t("footer.links.combo")}</Link>
          </div>

          {/* COMPANY */}
          <div className="footer-links">
            <h4>{t("footer.company")}</h4>

            <a href="/#portfolio">{t("footer.links.portfolio")}</a>

            <Link to="/contact">{t("footer.links.contact")}</Link>
          </div>

          {/* CONTACT */}
          <div className="footer-contact">
            <h4>{t("footer.contactTitle")}</h4>

            {/* EMAIL */}
            <a
              href="https://mail.google.com/mail/?view=cm&to=botenginestudio@gmail.com&su=Kërkesë%20për%20Shërbim"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <Mail size={17} />
              <span>botenginestudio@gmail.com</span>
            </a>

            {/* PHONE */}
            <a href="tel:+355694471238" className="footer-contact-item">
              <Phone size={17} />
              <span>+355 69 447 1238</span>
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/botenginestudio?igsh=MTZuYXU4aHZ1aWlnZw=="
              target="_blank"
              rel="noopener noreferrer"
              className="footer-contact-item"
            >
              <FaInstagram size={17} />
              <span>@BotEngineStudio</span>
            </a>
          </div>
        </div>

        <div className="footer-divider"></div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
