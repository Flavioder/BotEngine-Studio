import "../styles/ChatbotPricingSection.css";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const featured = [false, true, false];
const types = ["basic", "growth", "pro"];
const delays = ["0.2s", "0.3s", "0.4s"];
const prices = ["299€", "499€", "700€ – 1000€+"];

function ChatbotPricingSection() {
  const { t } = useTranslation();
  const plans = t("chatbot.plans", { returnObjects: true });

  useEffect(() => {
    const elements = document.querySelectorAll(".grow");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    });
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <section className="chatbot-pricing-section">
      <div className="chatbot-container">
        <h2 className="chatbot-section-title">
          {t("chatbot.pricingTitle")}{" "}
          <span>{t("chatbot.pricingTitleSpan")}</span>
        </h2>

        <div className="chatbot-pricing-grid">
          {plans.map((plan, index) => (
            <article
              key={index}
              className={`chatbot-pricing-card ${
                featured[index] ? "chatbot-pricing-card-featured" : ""
              } grow`}
              style={{ transitionDelay: delays[index] }}
            >
              {featured[index] && (
                <div className="chatbot-pricing-badge">
                  <Star size={12} fill="currentColor" />
                  <span>{t("chatbot.pricingBadge")}</span>
                </div>
              )}

              <span
                className={`chatbot-pricing-label ${
                  featured[index] ? "chatbot-pricing-label-featured" : ""
                }`}
              >
                {plan.label}
              </span>

              <h3 className="chatbot-pricing-title">{plan.title}</h3>
              <p className="chatbot-pricing-subtitle">{plan.subtitle}</p>

              <div className="chatbot-pricing-price">{prices[index]}</div>

              <ul className="chatbot-pricing-features">
                {plan.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`chatbot-pricing-feature ${types[index]}`}
                  >
                    <span className="chatbot-pricing-check">
                      <Check size={14} strokeWidth={2.8} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/contact"
                className={`chatbot-pricing-btn ${
                  featured[index]
                    ? "chatbot-pricing-btn-featured"
                    : "chatbot-pricing-btn-outline"
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

export default ChatbotPricingSection;
