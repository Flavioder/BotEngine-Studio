import "../styles/ProblemSection.css";
import { Clock3, UserRoundX, MonitorX } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const icons = [
  <Clock3 size={28} strokeWidth={2.2} />,
  <UserRoundX size={28} strokeWidth={2.2} />,
  <MonitorX size={28} strokeWidth={2.2} />,
];

const iconClasses = [
  "problem-icon-red",
  "problem-icon-gold",
  "problem-icon-purple",
];
const delays = ["0.1s", "0.2s", "0.3s"];

function ProblemSection() {
  const { t } = useTranslation();
  const items = t("problems.items", { returnObjects: true });

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
    <section className="problem-section">
      <div className="problem-container">
        <div className="problem-heading">
          <span className="problem-label">{t("problems.label")}</span>
          <h2 className="problem-title">
            {t("problems.title")} <span>{t("problems.titleSpan")}</span>
          </h2>
        </div>

        <div className="problem-grid">
          {items.map((item, index) => (
            <article
              key={index}
              className="problem-card fade-up1"
              style={{ transitionDelay: delays[index] }}
            >
              <div className={`problem-icon-box ${iconClasses[index]}`}>
                {icons[index]}
              </div>
              <h3 className="problem-card-title">{item.title}</h3>
              <p className="problem-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
