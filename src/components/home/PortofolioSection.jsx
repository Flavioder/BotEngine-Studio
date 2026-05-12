// src/components/PortofolioSection.jsx
import "../styles/PortofolioSection.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { portfolioItems } from "../../data/portofolioData";

function PortofolioSection() {
  const navigate = useNavigate();
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
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-heading">
          <span className="portfolio-label">{t("portfolio.label")}</span>
          <h2 className="portfolio-title">
            {t("portfolio.title")} <span>{t("portfolio.titleSpan")}</span>
          </h2>
        </div>

        <div className="portfolio-grid fade-up1">
          {portfolioItems.map((item) => (
            <article
              key={item.id}
              className={`portfolio-card ${item.variant}`}
              onClick={() => navigate(`/portfolio/${item.slug}`)}
              style={{ cursor: "pointer" }}
            >
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="portfolio-overlay"></div>

              <div className="portfolio-content">
                <div className="portfolio-default-content">
                  <div className="portfolio-icon-wrap">{item.icon}</div>
                  <h3 className="portfolio-card-title">{item.title}</h3>
                  <p className="portfolio-card-subtitle">{item.subtitle}</p>
                </div>

                <div className="portfolio-hover-content">
                  <button className="portfolio-btn">
                    {t("portfolio.btnView")}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortofolioSection;
