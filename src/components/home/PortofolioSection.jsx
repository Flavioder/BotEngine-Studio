// src/components/PortofolioSection.jsx
import "../styles/PortofolioSection.css";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { portfolioItems } from "../../data/portofolioData";
function PortofolioSection() {
  const navigate = useNavigate();

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up1");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-heading">
          <span className="portfolio-label">PORTFOLIO</span>
          <h2 className="portfolio-title">
            Projektet <span>tona</span>
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
                  <button className="portfolio-btn">Shiko Projektin</button>
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
