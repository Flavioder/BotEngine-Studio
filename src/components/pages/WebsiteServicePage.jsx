import "../styles/WebsiteServicePage.css";
import WebsiteServicePricingSection from "./WebsiteServicePricingSection";
import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Briefcase,
  Hotel,
  Stethoscope,
  ShoppingCart,
  CheckCircle2,
  Palette,
  Smartphone,
  Search,
  MessageSquareText,
  Workflow,
  Code2,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const typeIcons = [
  <LayoutDashboard size={22} />,
  <Briefcase size={22} />,
  <Hotel size={22} />,
  <Stethoscope size={22} />,
  <ShoppingCart size={22} />,
];
const typeDelays = ["0.2s", "0.3s", "0.4s", "0.5s", "0.6s"];

const benefitIcons = [
  <Palette size={22} />,
  <Smartphone size={22} />,
  <Search size={22} />,
  <MessageSquareText size={22} />,
];
const benefitTypes = ["cyan", "purple", "cyan", "purple"];
const benefitDelays = ["0.2s", "0.3s", "0.4s", "0.5s"];

const processIcons = [
  <Workflow size={22} />,
  <Palette size={22} />,
  <Code2 size={22} />,
  <Rocket size={22} />,
];
const processDelays = ["0.2s", "0.3s", "0.4s", "0.5s"];

function WebsiteServicePage() {
  const { t } = useTranslation();
  const types = t("websiteService.types", { returnObjects: true });
  const features = t("websiteService.features", { returnObjects: true });
  const benefits = t("websiteService.benefits", { returnObjects: true });
  const processSteps = t("websiteService.processSteps", {
    returnObjects: true,
  });

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
    <main className="website-service-page">
      {/* HERO */}
      <section className="website-service-hero">
        <div className="website-service-container">
          <span className="website-service-label">
            {t("websiteService.label")}
          </span>
          <h1 className="website-service-title">
            {t("websiteService.title")}{" "}
            <span>{t("websiteService.titleSpan")}</span>
          </h1>
          <p className="website-service-subtitle">
            {t("websiteService.subtitle")}
          </p>
          <div className="website-service-hero-actions">
            <Link
              to="/contact"
              className="website-service-btn website-service-btn-primary"
            >
              {t("websiteService.btnOffer")}
            </Link>
            <Link
              to="/contact"
              className="website-service-btn website-service-btn-secondary"
            >
              {t("websiteService.btnContact")}
            </Link>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="website-service-types">
        <div className="website-service-container">
          <h2 className="website-service-section-title">
            {t("websiteService.typesTitle")}{" "}
            <span>{t("websiteService.typesTitleSpan")}</span>
          </h2>
          <div className="website-service-types-grid">
            {types.map((item, index) => (
              <article
                className="website-service-card fade-up1"
                key={index}
                style={{ transitionDelay: typeDelays[index] }}
              >
                <div className="website-service-icon cyan">
                  {typeIcons[index]}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WebsiteServicePricingSection />

      {/* FEATURES */}
      <section className="website-service-features">
        <div className="website-service-container">
          <h2 className="website-service-section-title">
            {t("websiteService.featuresTitle")}{" "}
            <span>{t("websiteService.featuresTitleSpan")}</span>
          </h2>
          <div className="website-service-features-card fade-in">
            <div className="website-service-features-grid">
              {features.map((feature, index) => (
                <div className="website-service-feature-item" key={index}>
                  <span className="website-service-check">
                    <CheckCircle2 size={18} />
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="website-service-benefits">
        <div className="website-service-container">
          <h2 className="website-service-section-title">
            {t("websiteService.benefitsTitle")}{" "}
            <span>{t("websiteService.benefitsTitleSpan")}</span>
          </h2>
          <div className="website-service-benefits-grid">
            {benefits.map((item, index) => (
              <article
                className="website-service-card fade-up1"
                key={index}
                style={{ transitionDelay: benefitDelays[index] }}
              >
                <div className={`website-service-icon ${benefitTypes[index]}`}>
                  {benefitIcons[index]}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="website-service-process">
        <div className="website-service-container">
          <h2 className="website-service-section-title">
            {t("websiteService.processTitle")}{" "}
            <span>{t("websiteService.processTitleSpan")}</span>
          </h2>
          <div className="website-service-process-grid">
            {processSteps.map((step, index) => (
              <article
                className="website-service-process-card fade-up1"
                key={index}
                style={{ transitionDelay: processDelays[index] }}
              >
                <div className="website-service-process-number">
                  0{index + 1}
                </div>
                <div className="website-service-icon purple">
                  {processIcons[index]}
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="website-service-cta">
        <div className="website-service-container">
          <div className="website-service-cta-card">
            <h2>
              {t("websiteService.ctaTitle")}{" "}
              <span>{t("websiteService.ctaTitleSpan")}</span>
            </h2>
            <p>{t("websiteService.ctaText")}</p>
            <div className="website-service-cta-actions">
              <Link
                to="/contact"
                className="website-service-btn website-service-btn-primary"
              >
                <span>{t("websiteService.ctaBtnOffer")}</span>
                <ArrowRight size={18} />
              </Link>
              <Link
                to="/contact"
                className="website-service-btn website-service-btn-secondary"
              >
                {t("websiteService.ctaBtnContact")}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WebsiteServicePage;
