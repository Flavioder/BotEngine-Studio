import "../styles/ProcessSection.css";
import { MessageCircle, Box, Code2, Rocket } from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const icons = [
  <MessageCircle size={34} strokeWidth={2.1} />,
  <Box size={34} strokeWidth={2.1} />,
  <Code2 size={34} strokeWidth={2.1} />,
  <Rocket size={34} strokeWidth={2.1} />,
];

const variants = ["cyan", "blue", "purple", "cyan"];
const ids = ["01", "02", "03", "04"];

function ProcessSection() {
  const { t } = useTranslation();
  const steps = t("process.steps", { returnObjects: true });

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
    <section className="process-section">
      <div className="process-container">
        <div className="process-heading">
          <span className="process-label">{t("process.label")}</span>
          <h2 className="process-title">
            {t("process.title")} <span>{t("process.titleSpan")}</span>
          </h2>
        </div>

        <div className="process-timeline fade-up1">
          <div className="process-line"></div>
          {steps.map((step, index) => (
            <div className="process-step" key={index}>
              <div className={`process-icon-card ${variants[index]}`}>
                {icons[index]}
              </div>
              <span className="process-number">{ids[index]}</span>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
