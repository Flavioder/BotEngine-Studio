import "../styles/ServicesSection.css";
import { Bot, LayoutDashboard, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const icons = [
  <Bot size={28} strokeWidth={2.2} />,
  <LayoutDashboard size={28} strokeWidth={2.2} />,
  <Sparkles size={28} strokeWidth={2.2} />,
];

const types = ["cyan", "purple", "blue"];
const links = ["/chatbot-service", "/website-service", "/combo-service"];
const delays = ["0.1s", "0.2s", "0.3s"];
const popular = [false, false, true];

function ServicesSection() {
  const { t } = useTranslation();
  const items = t("services.items", { returnObjects: true });

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up1");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    });
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <span className="services-label">{t("services.label")}</span>
          <h2>
            {t("services.title")} <span>{t("services.titleSpan")}</span>
          </h2>
        </div>

        <div className="services-grid">
          {items.map((item, index) => (
            <div
              className="service-card fade-up1"
              key={index}
              style={{ transitionDelay: delays[index] }}
            >
              {popular[index] && (
                <div className="badge">{t("services.badge")}</div>
              )}

              <div className={`icon-box ${types[index]}`}>
                <span>{icons[index]}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <ul>
                {item.features.map((f, i) => (
                  <li key={i} className={`feature ${types[index]}`}>
                    <span className="check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <Link to={links[index]} className={`service-btn ${types[index]}`}>
                {t("services.btnMore")}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
