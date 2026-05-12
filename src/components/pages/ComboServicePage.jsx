import "../styles/ComboServicePage.css";
import { Bot, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const solutionIcons = [<Globe />, <Bot />, <TrendingUp />];

function ComboServicePage() {
  const { t } = useTranslation();
  const problemItems = t("combo.problemItems", { returnObjects: true });
  const solutions = t("combo.solutions", { returnObjects: true });
  const websiteFeatures = t("combo.websiteFeatures", { returnObjects: true });
  const chatbotFeatures = t("combo.chatbotFeatures", { returnObjects: true });
  const processSteps = t("combo.processSteps", { returnObjects: true });

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up1,.grow,.fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    });
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="combo-page">
      <div className="combo-container">
        {/* HERO */}
        <div className="combo-hero">
          <h1>
            {t("combo.title")} <span>{t("combo.titleSpan")}</span>{" "}
            {t("combo.titleEnd")}
          </h1>
          <p>{t("combo.subtitle")}</p>
          <div className="combo-cta">
            <Link to="/contact" className="combo-service-btn combo-btn-primary">
              {t("combo.btnDemo")}
            </Link>
            <Link
              to="/packages"
              className="combo-service-btn combo-btn-outline"
            >
              {t("combo.btnPackages")}
            </Link>
          </div>
        </div>

        {/* PROBLEM */}
        <div className="combo-problem">
          <h2>{t("combo.problemTitle")}</h2>
          <div className="combo-problem-grid">
            {problemItems.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        </div>

        {/* SOLUTION */}
        <div className="combo-solution">
          <h2>{t("combo.solutionTitle")}</h2>
          <div className="solution-grid fade-up1">
            {solutions.map((item, index) => (
              <div
                className="solution-card"
                key={index}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                {solutionIcons[index]}
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURES */}
        <div className="combo-features">
          <h2>{t("combo.featuresTitle")}</h2>
          <div className="features-grid fade-up1">
            <div style={{ transitionDelay: "0.2s" }}>
              <h4>{t("combo.websiteTitle")}</h4>
              <ul>
                {websiteFeatures.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div style={{ transitionDelay: "0.2s" }}>
              <h4>{t("combo.chatbotTitle")}</h4>
              <ul>
                {chatbotFeatures.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="combo-process">
          <h2>{t("combo.processTitle")}</h2>
          <div className="process-steps fade-up1">
            {processSteps.map((step, index) => (
              <div
                key={index}
                style={{ transitionDelay: `${0.2 + index * 0.1}s` }}
              >
                {step}
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <section className="website-service-cta">
          <div className="website-service-container">
            <div className="website-service-cta-card">
              <h2>
                {t("combo.ctaTitle")} <span>{t("combo.ctaTitleSpan")}</span>
              </h2>
              <p>{t("combo.ctaText")}</p>
              <div className="website-service-cta-actions">
                <Link
                  to="/contact"
                  className="website-service-btn website-service-btn-primary"
                >
                  <span>{t("combo.ctaBtnOffer")}</span>
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/contact"
                  className="website-service-btn website-service-btn-secondary"
                >
                  {t("combo.ctaBtnContact")}
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default ComboServicePage;
