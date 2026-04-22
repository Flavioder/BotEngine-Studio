import "../styles/AboutPage.css";
import { Target, Eye, Zap, Cpu, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
function AboutPage() {
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
    <main className="about-page">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-container">
          <span className="about-label">RRETH NESH</span>

          <h1 className="about-title">
            Ne ndërtojmë <span>experienca dixhitale</span> që sjellin klientë
          </h1>

          <p className="about-subtitle">
            BotEngineStudio nuk është thjesht një agjenci. Ne krijojmë sisteme
            që automatizojnë, optimizojnë dhe rrisin biznesin tuaj çdo ditë.
          </p>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="about-mission">
        <div className="about-container about-grid-2">
          <div className="about-card">
            <div className="about-icon cyan">
              <Target size={26} />
            </div>
            <h3>Misioni ynë</h3>
            <p>
              Të ndihmojmë bizneset të rriten më shpejt duke përdorur AI,
              automatizim dhe dizajn modern që konverton.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon purple">
              <Eye size={26} />
            </div>
            <h3>Vizioni ynë</h3>
            <p>
              Të bëhemi standardi i ri për prezencën online të bizneseve moderne
              në Shqipëri dhe më gjerë.
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="about-story">
        <div className="about-container">
          <h2 className="about-section-title">
            Pse ekziston <span>BotEngineStudio?</span>
          </h2>

          <p className="about-text">
            Shumë biznese humbasin klientë çdo ditë për një arsye të thjeshtë:
            përgjigjen vonë, nuk kanë prezencë profesionale online dhe nuk
            përdorin automatizim.
          </p>

          <p className="about-text">
            Ne e ndërtuam BotEngineStudio për të zgjidhur këtë problem.
            Kombinojmë teknologjinë AI me dizajn modern për të krijuar sisteme
            që punojnë për ju 24/7.
          </p>
        </div>
      </section>

      {/* VALUES */}
      <section className="about-values">
        <div className="about-container">
          <h2 className="about-section-title">
            Çfarë na <span>dallon?</span>
          </h2>

          <div className="about-grid-3">
            <div className="about-card">
              <div className="about-icon cyan">
                <Zap size={24} />
              </div>
              <h4>Shpejtësi</h4>
              <p>Implementim brenda 48 orëve.</p>
            </div>

            <div className="about-card">
              <div className="about-icon purple">
                <Cpu size={24} />
              </div>
              <h4>Automatizim</h4>
              <p>Sisteme që punojnë pa ndërhyrje.</p>
            </div>

            <div className="about-card">
              <div className="about-icon cyan">
                <Palette size={24} />
              </div>
              <h4>Dizajn Premium</h4>
              <p>Website që krijon besim dhe konvertim.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">
          <h2>
            Gati të punojmë <span>së bashku?</span>
          </h2>

          <Link to="/contact" className="about-btn">
            Fillojmë Tani
          </Link>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
