import "../styles/PricingSection.css";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const delays = ["0.5s", "0.3s", "0s"];
const featured = [false, false, true];

function PricingSection() {
  const { t } = useTranslation();
  const plans = t("pricing.plans", { returnObjects: true });

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
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-heading">
          <span className="pricing-label">{t("pricing.label")}</span>
          <h2 className="pricing-title">
            {t("pricing.title")} <span>{t("pricing.titleSpan")}</span>
          </h2>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`pricing-card ${
                featured[index] ? "pricing-card-featured" : ""
              } fade-up1`}
              style={{ transitionDelay: delays[index] }}
            >
              {featured[index] && (
                <div className="pricing-badge">
                  <Star size={12} fill="currentColor" />
                  <span>{t("pricing.badge")}</span>
                </div>
              )}

              <span
                className={`pricing-plan-label ${
                  featured[index] ? "pricing-plan-label-featured" : ""
                }`}
              >
                {plan.label}
              </span>

              <h3 className="pricing-plan-title">{plan.title}</h3>

              <div className="pricing-price-row">
                <span className="pricing-price">
                  {index === 0 ? "€299" : index === 1 ? "€499" : "€799"}
                </span>
                <span className="pricing-suffix">{plan.suffix}</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, i) => (
                  <li key={i} className="pricing-feature-item">
                    <span className="pricing-check">
                      <Check size={14} strokeWidth={2.6} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`pricing-btn ${
                  featured[index]
                    ? "pricing-btn-featured"
                    : "pricing-btn-outline"
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

export default PricingSection;
