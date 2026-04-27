import "../styles/WebsiteServicePricingSection.css";
import { Check, Star } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const websitePlans = [
  {
    id: 1,
    label: "STARTER",
    title: "Landing Page",
    price: "€199",
    suffix: "nga",
    description:
      "Për oferta, lead generation dhe prezantim të fokusuar të një shërbimi ose produkti.",
    features: [
      "1 faqe (Landing Page)",
      "Dizajn modern & i pastër",
      "Responsive (mobile/tablet)",
      "CTA për konvertim (butona, seksione)",
      "Form kontakti",
      "Integrim WhatsApp",
      "SEO bazë (tituj, strukturë)",
      "Ngarkim i shpejtë",
    ],
    buttonText: "Kërko Ofertë",
    featured: false,
    delay: "0.3s",
  },
  {
    id: 2,
    label: "BUSINESS",
    title: "Business Website",
    price: "€399",
    suffix: "nga",
    description:
      "Për biznese që duan një prezencë profesionale dhe konvertuese online.",
    features: [
      "Deri në 5 faqe (Home, About, Services, Contact...)",
      "Dizajn premium dhe profesional",
      "Responsive në të gjitha pajisjet",
      "Strukturë për konvertim (UX/UI)",
      "Form kontakti i avancuar",
      "Integrim WhatsApp + CTA buttons",
      "SEO bazë (strukturë + meta)",
      "Optimizim performance",
      "Animacione moderne (smooth UI)",
    ],
    buttonText: "Më i zgjedhuri",
    featured: true,
    badge: "Më i zgjedhuri",
    delay: "0.4s",
  },
  {
    id: 3,
    label: "PREMIUM",
    title: "Premium Website",
    price: "€699",
    suffix: "nga",
    description:
      "Për hotele, klinika dhe biznese që duan një prezencë të fortë dhe unike.",
    features: [
      "Deri në 10+ faqe",
      "Dizajn unik (jo template)",
      "UX/UI i avancuar për konvertim",
      "Strukturë e personalizuar sipas biznesit",

      "Dashboard admin (panel menaxhimi)",
      "Menaxhim përmbajtje (tekst, foto, seksione)",

      "Forma të avancuara (lead capture)",
      "Ruajtje automatike e lead-eve",
      "Domain + Hosting 1 vit/Free",
      "SEO bazë + strukturë për Google",
      "Optimizim performance i avancuar",

      "Animacione premium & micro-interactions",
      "Suport prioritar",
    ],
    buttonText: "Kërko Premium",
    featured: false,
    delay: "0.5s",
  },
];

function WebsiteServicePricingSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up1,.grow,.fade-in");

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
    <section className="website-service-pricing">
      <div className="website-service-container">
        <h2 className="website-service-section-title">
          Paketa dhe <span>çmime fillestare</span>
        </h2>

        <div className="website-service-pricing-grid">
          {websitePlans.map((plan) => (
            <article
              key={plan.id}
              className={`website-service-pricing-card grow ${
                plan.featured ? "website-service-pricing-card-featured" : ""
              } `}
            >
              {plan.featured && (
                <div className="website-service-pricing-badge">
                  <Star size={12} fill="currentColor" />
                  <span>{plan.badge}</span>
                </div>
              )}

              <span
                className={`website-service-pricing-label ${
                  plan.featured ? "website-service-pricing-label-featured" : ""
                }`}
              >
                {plan.label}
              </span>

              <h3 className="website-service-pricing-title">{plan.title}</h3>

              <div className="website-service-pricing-price-row">
                <span className="website-service-pricing-price">
                  {plan.price}
                </span>
                <span className="website-service-pricing-suffix">
                  {plan.suffix}
                </span>
              </div>

              <p className="website-service-pricing-description">
                {plan.description}
              </p>

              <ul className="website-service-pricing-features">
                {plan.features.map((feature, index) => (
                  <li key={index} className="website-service-pricing-feature">
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
                  plan.featured
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
