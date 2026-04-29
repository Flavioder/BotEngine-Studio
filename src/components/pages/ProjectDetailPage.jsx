// src/components/pages/ProjectDetailPage.jsx
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { portfolioItems } from "../../data/portofolioData";
import "../styles/ProjectDetailPage.css";

function ProjectDetailPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = portfolioItems.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="pdp-notfound">
        <p>Projekti nuk u gjet.</p>
        <button onClick={() => navigate("/#portfolio")}>← Kthehu</button>
      </div>
    );
  }

  return (
    <div className="pdp-wrapper">
      {/* Hero */}
      <div
        className="pdp-hero"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        <div className="pdp-hero-overlay" />
        <div className="pdp-hero-content">
          <button
            className="pdp-back-btn"
            onClick={() => navigate("/#portfolio")}
          >
            <ArrowLeft size={16} />
            Kthehu te Portfolio
          </button>
          <div
            className="pdp-status-badge"
            data-status={project.status === "Kompletuar" ? "done" : "wip"}
          >
            {project.status === "Kompletuar" ? "✓ Kompletuar" : "⏳ Në Progres"}
          </div>
          <div className="pdp-hero-icon">{project.icon}</div>
          <h1 className="pdp-hero-title">{project.title}</h1>
          <p className="pdp-hero-subtitle">{project.subtitle}</p>
          <div className="pdp-tags">
            {project.tags.map((tag) => (
              <span key={tag} className="pdp-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="pdp-body">
        {/* Metrics */}
        <div className="pdp-metrics">
          {project.metrics.map((m, i) => (
            <div key={i} className="pdp-metric">
              <div className="pdp-metric-val">{m.val}</div>
              <div className="pdp-metric-lbl">{m.lbl}</div>
            </div>
          ))}
        </div>

        {/* Përshkrimi */}
        <div className="pdp-section">
          <span className="pdp-section-label">RRETH PROJEKTIT</span>
          <p className="pdp-desc">{project.fullDesc}</p>
        </div>

        {/* Galeria e imazheve reale */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="pdp-section">
            <span className="pdp-section-label">PAMJA E PROJEKTIT</span>
            <div className="pdp-gallery">
              {project.gallery.map((img, i) => (
                <div key={i} className="pdp-gallery-item">
                  <img src={img} alt={`${project.title} screenshot ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        <div className="pdp-section">
          <span className="pdp-section-label">FUNKSIONALITETET</span>
          <div className="pdp-features-grid">
            {project.features.map((f, i) => (
              <div key={i} className="pdp-feature-card">
                <span className="pdp-feature-icon">{f.icon}</span>
                <div>
                  <div className="pdp-feature-name">{f.name}</div>
                  <div className="pdp-feature-desc">{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stack */}
        <div className="pdp-section">
          <span className="pdp-section-label">TEKNOLOGJITË</span>
          <div className="pdp-stack">
            {project.stack.map((s) => (
              <span key={s} className="pdp-stack-pill">
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="pdp-cta-row">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="pdp-btn-primary"
            >
              <ExternalLink size={16} />
              Shiko Live
            </a>
          )}
          <button
            className="pdp-btn-primary"
            style={{
              background: "transparent",
              color: "#4fc3f7",
              border: "1px solid rgba(79,195,247,0.4)",
            }}
            onClick={() => navigate("/contact")}
          >
            Kërko një projekt të ngjashëm
          </button>
          <button
            className="pdp-btn-secondary"
            onClick={() => navigate("/#portfolio")}
          >
            ← Projekte të tjera
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetailPage;
