import "../styles/ChatbotServicePage.css";
import ChatbotPricingSection from "./ChatbotPricingSection";
import { Link } from "react-router-dom";
import {
  Bot,
  MessageSquareMore,
  Clock3,
  Users,
  CheckCircle2,
  Globe,
  MessageCircle,
  Workflow,
  Settings,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const problemIcons = [
  <Clock3 size={22} />,
  <Users size={22} />,
  <MessageSquareMore size={22} />,
];
const processIcons = [
  <Bot size={22} />,
  <Workflow size={22} />,
  <Settings size={22} />,
  <Rocket size={22} />,
];
const processDelays = ["0.3s", "0.4s", "0.5s", "0.6s"];
const problemDelays = ["0.1s", "0.2s", "0.3s"];
const integrations = [
  { name: "Instagram", icon: <FaInstagram size={24} />, delay: "0.2s" },
  { name: "WhatsApp", icon: <MessageCircle size={24} />, delay: "0.3s" },
  { name: "Website", icon: <Globe size={24} />, delay: "0.4s" },
];

function ChatbotServicePage() {
  const { t } = useTranslation();
  const problems = t("chatbot.problems", { returnObjects: true });
  const features = t("chatbot.features", { returnObjects: true });
  const processSteps = t("chatbot.processSteps", { returnObjects: true });

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
    <main className="chatbot-page">
      {/* HERO */}
      <section className="chatbot-hero">
        <div className="chatbot-container">
          <span className="chatbot-label">{t("chatbot.label")}</span>
          <h1 className="chatbot-title">
            {t("chatbot.title")} <span>{t("chatbot.titleSpan")}</span>
          </h1>
          <p className="chatbot-subtitle">{t("chatbot.subtitle")}</p>
          <div className="chatbot-hero-actions">
            <Link to="/contact" className="chatbot-btn chatbot-btn-primary">
              {t("chatbot.btnDemo")}
            </Link>
            <Link to="/contact" className="chatbot-btn chatbot-btn-secondary">
              {t("chatbot.btnOffer")}
            </Link>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="chatbot-intro">
        <div className="chatbot-container chatbot-intro-grid fade-up1">
          <div className="chatbot-intro-card">
            <div className="chatbot-icon cyan">
              <Bot size={28} />
            </div>
            <h2>{t("chatbot.whatTitle")}</h2>
            <p>{t("chatbot.whatText")}</p>
          </div>

          <div className="chatbot-preview-card">
            <div className="chatbot-preview-top">
              <span className="chatbot-status-dot"></span>
              <span>{t("chatbot.previewStatus")}</span>
            </div>
            <div className="chatbot-preview-messages">
              <div className="chatbot-msg chatbot-msg-bot">
                {t("chatbot.previewMsg1")}
              </div>
              <div className="chatbot-msg chatbot-msg-user">
                {t("chatbot.previewMsg2")}
              </div>
              <div className="chatbot-msg chatbot-msg-bot">
                {t("chatbot.previewMsg3")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="chatbot-problems">
        <div className="chatbot-container">
          <h2 className="chatbot-section-title">
            {t("chatbot.problemsTitle")}{" "}
            <span>{t("chatbot.problemsTitleSpan")}</span>
          </h2>
          <div className="chatbot-grid-3">
            {problems.map((item, index) => (
              <article
                className="chatbot-card fade-up1"
                key={index}
                style={{ transitionDelay: problemDelays[index] }}
              >
                <div className="chatbot-icon purple">{problemIcons[index]}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ChatbotPricingSection />

      {/* FEATURES */}
      <section className="chatbot-features">
        <div className="chatbot-container">
          <h2 className="chatbot-section-title">
            {t("chatbot.featuresTitle")}{" "}
            <span>{t("chatbot.featuresTitleSpan")}</span>
          </h2>
          <div className="chatbot-features-card fade-in">
            <div className="chatbot-features-grid">
              {features.map((feature, index) => (
                <div className="chatbot-feature-item" key={index}>
                  <span className="chatbot-check">
                    <CheckCircle2 size={18} />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="chatbot-integrations">
        <div className="chatbot-container">
          <h2 className="chatbot-section-title">
            {t("chatbot.integrationsTitle")}{" "}
            <span>{t("chatbot.integrationsTitleSpan")}</span>
          </h2>
          <div className="chatbot-integrations-grid">
            {integrations.map((item, index) => (
              <article
                className="chatbot-integration-card fade-up1"
                key={index}
                style={{ transitionDelay: item.delay }}
              >
                <div className="chatbot-icon cyan">{item.icon}</div>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="chatbot-process">
        <div className="chatbot-container">
          <h2 className="chatbot-section-title">
            {t("chatbot.processTitle")}{" "}
            <span>{t("chatbot.processTitleSpan")}</span>
          </h2>
          <div className="chatbot-process-grid">
            {processSteps.map((step, index) => (
              <article
                className="chatbot-process-card fade-up1"
                key={index}
                style={{ transitionDelay: processDelays[index] }}
              >
                <div className="chatbot-process-number">0{index + 1}</div>
                <div className="chatbot-icon purple">{processIcons[index]}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="chatbot-cta">
        <div className="chatbot-container">
          <div className="chatbot-cta-card">
            <h2>
              {t("chatbot.ctaTitle")} <span>{t("chatbot.ctaTitleSpan")}</span>
            </h2>
            <p>{t("chatbot.ctaText")}</p>
            <div className="chatbot-cta-actions">
              <Link to="/contact" className="chatbot-btn chatbot-btn-primary">
                <span>{t("chatbot.ctaBtnDemo")}</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="chatbot-btn chatbot-btn-secondary">
                {t("chatbot.ctaBtnOffer")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ChatbotServicePage;
