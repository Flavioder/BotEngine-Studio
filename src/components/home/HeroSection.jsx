import "../styles/Hero.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";

function HeroSection() {
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
    <section className="hero-section" id="home">
      <div className="hero-inner">
        <div className="hero-left fade-up1">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            AI-Powered Solutions
          </div>

          <h1 className="hero-title">
            Automatizo biznesin
            <br />
            tënd <span>&amp; rrit shitjet</span>
          </h1>

          <p className="hero-description">
            Chatbot inteligjent + Website modern që përgjigjet në sekonda dhe
            konverton vizitorët në klientë
          </p>

          <div className="hero-actions">
            <a href="#pricing" className="hero-btn hero-btn-primary">
              <span>Shiko Paketat</span>
              <span className="hero-btn-arrow">→</span>
            </a>

            <Link to="/contact" className="hero-btn hero-btn-secondary">
              Merr Demo
            </Link>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-check">✓</span>
              <span>24/7 Automatik</span>
            </div>

            <div className="hero-feature">
              <span className="hero-check">✓</span>
              <span>Setup në 48h</span>
            </div>

            <div className="hero-feature">
              <span className="hero-check">✓</span>
              <span>ROI i lartë</span>
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
