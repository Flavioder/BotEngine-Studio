import "../styles/IndustriesSection.css";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const icons = ["🏨", "🛒", "🏥", "🍽️", "🏪"];
const delays = ["0.1s", "0.2s", "0.3s", "0.4s", "0.5s"];

function IndustriesSection() {
  const { t } = useTranslation();
  const items = t("industries.items", { returnObjects: true });

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
    <section className="industries-section">
      <div className="industries-container">
        <div className="industries-heading">
          <span className="industries-label">{t("industries.label")}</span>
          <h2 className="industries-title">
            {t("industries.title")} <span>{t("industries.titleSpan")}</span>
          </h2>
        </div>

        <div className="industries-grid">
          {items.map((item, index) => (
            <article
              key={index}
              className="industry-card fade-up1"
              style={{ transitionDelay: delays[index] }}
            >
              <div className="industry-icon">{icons[index]}</div>
              <h3 className="industry-title">{item}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
