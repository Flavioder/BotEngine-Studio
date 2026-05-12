import "../styles/WebsiteServicePricingSection.css";
import { Check, Star } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const featured = [false, true, false];
const delays = ["0.3s", "0.4s", "0.5s"];
const prices = ["€199", "€399", "€699"];

function WebsiteServicePricingSection() {
  const { t } = useTranslation();
  const plans = t("websiteService.plans", { returnObjects: true });

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
    <section className="website-service-pricing">
      <div className="website-service-container">
        <h2 className="website-service-section-title">
          {t("websiteService.pricingTitle")}{" "}
          <span>{t("websiteService.pricingTitleSpan")}</span>
        </h2>

        <div className="website-service-pricing-grid">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`website-service-pricing-card grow ${
                featured[index] ? "website-service-pricing-card-featured" : ""
              }`}
              style={{ transitionDelay: delays[index] }}
            >
              {featured[index] && (
                <div className="website-service-pricing-badge">
                  <Star size={12} fill="currentColor" />
                  <span>{t("websiteService.pricingBadge")}</span>
                </div>
              )}

              <span
                className={`website-service-pricing-label ${
                  featured[index]
                    ? "website-service-pricing-label-featured"
                    : ""
                }`}
              >
                {plan.label}
              </span>

              <h3 className="website-service-pricing-title">{plan.title}</h3>

              <div className="website-service-pricing-price-row">
                <span className="website-service-pricing-price">
                  {prices[index]}
                </span>
                <span className="website-service-pricing-suffix">
                  {plan.suffix}
                </span>
              </div>

              <p className="website-service-pricing-description">
                {plan.description}
              </p>

              <ul className="website-service-pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="website-service-pricing-feature">
                    <span className="website-service-pricing-check">
                      <Check size={14} strokeWidth={2.6} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`website-service-pricing-btn ${
                  featured[index]
                    ? "website-service-pricing-btn-featured"
                    : "website-service-pricing-btn-outline"
                }`}
              >
                {plan.buttonText}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WebsiteServicePricingSection;
