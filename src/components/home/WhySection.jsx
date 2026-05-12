import "../styles/WhySection.css";
import { Zap, Cpu, Palette, Target } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const icons = [
  <Zap size={26} />,
  <Cpu size={26} />,
  <Palette size={26} />,
  <Target size={26} />,
];
const variants = ["cyan", "purple", "cyan", "purple"];
const delays = ["0.2s", "0.3s", "0.4s", "0.5s"];

function WhySection() {
  const { t } = useTranslation();
  const items = t("why.items", { returnObjects: true });

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
    <section className="why-section">
      <div className="why-container">
        <div className="why-heading">
          <span className="why-label">{t("why.label")}</span>
          <h2 className="why-title">
            {t("why.title")} <span>{t("why.titleSpan")}</span>
          </h2>
        </div>

        <div className="why-grid">
          {items.map((item, index) => (
            <article
              key={index}
              className="why-card fade-up1"
              style={{ transitionDelay: delays[index] }}
            >
              <div className={`why-icon ${variants[index]}`}>
                {icons[index]}
              </div>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySection;
