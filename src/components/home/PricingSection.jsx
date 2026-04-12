import "../styles/PricingSection.css";
import { Check, Star } from "lucide-react";

const plans = [
  {
    id: 1,
    label: "STARTER",
    title: "Chatbot Starter",
    price: "€149",
    suffix: "/muaj",
    features: [
      "Chatbot AI i personalizuar",
      "Integrim në website",
      "Raporte mujore",
      "Suport email",
    ],
    buttonText: "Fillo Tani",
    featured: false,
  },
  {
    id: 2,
    label: "PROFESSIONAL",
    title: "Website Professional",
    price: "€499",
    suffix: "/njëherë",
    features: [
      "Website modern responsive",
      "Deri 7 faqe",
      "SEO bazë",
      "Hosting 1 vit",
      "SSL certifikatë",
    ],
    buttonText: "Fillo Tani",
    featured: false,
  },
  {
    id: 3,
    label: "PREMIUM",
    title: "Premium Combo",
    price: "€799",
    suffix: "/njëherë + €99/muaj",
    features: [
      "Website premium (deri 12 faqe)",
      "Chatbot AI i avancuar",
      "WhatsApp + Instagram integrim",
      "Analitikë të avancuara",
      "Suport prioritar 24/7",
      "Hosting + domain falas",
    ],
    buttonText: "Merr Premium",
    featured: true,
    badge: "Rekomanduar",
  },
];

function PricingSection() {
  return (
    <section className="pricing-section" id="pricing">
      <div className="pricing-container">
        <div className="pricing-heading">
          <span className="pricing-label">ÇMIMET</span>
          <h2 className="pricing-title">
            Zgjidhni <span>paketën tuaj</span>
          </h2>
        </div>

        <div className="pricing-grid">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={`pricing-card ${
                plan.featured ? "pricing-card-featured" : ""
              }`}
            >
              {plan.featured && (
                <div className="pricing-badge">
                  <Star size={12} fill="currentColor" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <span
                className={`pricing-plan-label ${
                  plan.featured ? "pricing-plan-label-featured" : ""
                }`}
              >
                {plan.label}
              </span>

              <h3 className="pricing-plan-title">{plan.title}</h3>

              <div className="pricing-price-row">
                <span className="pricing-price">{plan.price}</span>
                <span className="pricing-suffix">{plan.suffix}</span>
              </div>

              <ul className="pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="pricing-feature-item">
                    <span className="pricing-check">
                      <Check size={14} strokeWidth={2.6} />
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`pricing-btn ${
                  plan.featured ? "pricing-btn-featured" : "pricing-btn-outline"
                }`}
              >
                {plan.buttonText}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
