import "../styles/Hero.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

function HeroSection() {
  const { t } = useTranslation();

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
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-left fade-up1">
          <h1 className="hero-title">
            {t("hero.title")}
            <br />
            <span>{t("hero.titleSpan")}</span>
          </h1>

          <p className="hero-description">{t("hero.subtitle")}</p>

          <div className="hero-actions">
            <a href="#pricing" className="hero-btn hero-btn-primary">
              <span>{t("hero.btnPackages")}</span>
              <span className="hero-btn-arrow">→</span>
            </a>
            <Link to="/contact" className="hero-btn hero-btn-secondary">
              {t("hero.btnDemo")}
            </Link>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-check">✓</span>
              <span>{t("hero.feature1")}</span>
            </div>
            <div className="hero-feature">
              <span className="hero-check">✓</span>
              <span>{t("hero.feature2")}</span>
            </div>
            <div className="hero-feature">
              <span className="hero-check">✓</span>
              <span>{t("hero.feature3")}</span>
            </div>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="/images/Robot dhe paneli i analizave.png"
            alt="Chatbot Dashboard"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
