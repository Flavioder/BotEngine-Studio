import "../styles/AboutPage.css";
import { Target, Eye, Zap, Cpu, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const valueIcons = [
  <Zap size={24} />,
  <Cpu size={24} />,
  <Palette size={24} />,
];
const valueIconClasses = ["cyan", "purple", "cyan"];
const valueDelays = ["0.2s", "0.4s", "0.6s"];

function AboutPage() {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true });

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
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">
          <span className="about-label">{t("about.label")}</span>
          <h1 className="about-title">
            {t("about.title")} <span>{t("about.titleSpan")}</span>{" "}
            {t("about.titleEnd")}
          </h1>
          <p className="about-subtitle">{t("about.subtitle")}</p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-mission">
        <div className="about-container about-grid-2">
          <div className="about-card grow">
            <div className="about-icon cyan">
              <Target size={26} />
            </div>
            <h3>{t("about.missionTitle")}</h3>
            <p>{t("about.missionText")}</p>
          </div>

          <div className="about-card grow">
            <div className="about-icon purple">
              <Eye size={26} />
            </div>
            <h3>{t("about.visionTitle")}</h3>
            <p>{t("about.visionText")}</p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="about-container">
          <h2 className="about-section-title">
            {t("about.storyTitle")} <span>{t("about.storyTitleSpan")}</span>
          </h2>
          <p className="about-text">{t("about.storyText1")}</p>
          <p className="about-text">{t("about.storyText2")}</p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-container">
          <h2 className="about-section-title">
            {t("about.valuesTitle")} <span>{t("about.valuesTitleSpan")}</span>
          </h2>

          <div className="about-grid-3 fade-up1">
            {values.map((item, index) => (
              <div
                className="about-card"
                key={index}
                style={{ transitionDelay: valueDelays[index] }}
              >
                <div className={`about-icon ${valueIconClasses[index]}`}>
                  {valueIcons[index]}
                </div>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">
          <h2>
            {t("about.ctaTitle")} <span>{t("about.ctaTitleSpan")}</span>
          </h2>
          <Link to="/contact" className="about-btn">
            {t("about.ctaBtn")}
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
