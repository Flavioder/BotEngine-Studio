import "../styles/ChatbotPricingSection.css";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const chatbotPlans = [
  {
    id: 1,
    label: "BASIC",
    title: "Fillimi",
    subtitle: "Për biznese që duan automatizim bazë",
    price: "299€",
    features: [
      "FAQ Bot (pyetje të zakonshme)",
      "Lead Capture Bot (mbledh kontakte)",
      "Integrim në website",
      "Setup + testim",
    ],
    buttonText: "Kërko Ofertë",
    featured: false,
    type: "basic",
    delay: "0.2s",
  },
  {
    id: 2,
    label: "GROWTH",
    title: "Shitje + Automatizim",
    subtitle: "Për biznese që duan rezultate reale",
    price: "499€",
    features: [
      "FAQ Bot",
      "Lead Capture Bot",
      "Sales Funnel Bot",
      "Cart Recovery Bot",
      "Integrim në website + optimizim",
      "Strukturë për konvertim",
    ],
    buttonText: "Më i zgjedhuri",
    featured: true,
    badge: "Më i zgjedhuri",
    type: "growth",
    delay: "0.3s",
  },
  {
    id: 3,
    label: "PRO",
    title: "Automatizim i plotë",
    subtitle: "Për biznese serioze (hotele, e-commerce, shërbime)",
    price: "700€ – 1000€+",
    features: [
      "Gjithçka nga Growth",
      "Booking / Reservation Bot",
      "Follow-up Bot",
      "Custom flows sipas biznesit",
      "Integrim multi-channel",
      "Strategji konvertimi",
    ],
    buttonText: "Kërko Premium",
    featured: false,
    type: "pro",
    delay: "0.4s",
  },
];

function ChatbotPricingSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(".grow");

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
    <section className="chatbot-pricing-section">
      <div className="chatbot-container">
        <h2 className="chatbot-section-title">
          Paketat dhe <span>çmimet e chatbot-it</span>
        </h2>

        <div className="chatbot-pricing-grid">
          {chatbotPlans.map((plan) => (
            <article
              key={plan.id}
              className={`chatbot-pricing-card ${
                plan.featured ? "chatbot-pricing-card-featured" : ""
              } grow`}
              style={{ transitionDelay: `${plan.delay}` }}
            >
              {plan.featured && (
                <div className="chatbot-pricing-badge">
                  <Star size={12} fill="currentColor" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <span
                className={`chatbot-pricing-label ${
                  plan.featured ? "chatbot-pricing-label-featured" : ""
                }`}
              >
                {plan.label}
              </span>

              <h3 className="chatbot-pricing-title">{plan.title}</h3>
              <p className="chatbot-pricing-subtitle">{plan.subtitle}</p>

              <div className="chatbot-pricing-price">{plan.price}</div>

              <ul className="chatbot-pricing-features">
                {plan.features.map((feature, index) => (
                  <li
                    key={index}
                    className={`chatbot-pricing-feature ${plan.type}`}
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
                  plan.featured
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
