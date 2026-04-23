import "../styles/WebsiteServicePage.css";
import WebsiteServicePricingSection from "./WebsiteServicePricingSection";
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

const websiteTypes = [
  {
    title: "Landing Page",
    text: "Faqe e fokusuar për oferta, lead capture dhe konvertim të shpejtë.",
    icon: <LayoutDashboard size={22} />,
    delay:"0.2s",
  },
  {
    title: "Website Biznesi",
    text: "Prezencë profesionale online për kompani, shërbime dhe brand-e lokale.",
    icon: <Briefcase size={22} />,
    delay:"0.3s",

  },
  {
    title: "Website për Hotel",
    text: "Prezantim elegant i dhomave, shërbimeve dhe mundësi për rezervime.",
    icon: <Hotel size={22} />,
    delay:"0.4s",

  },
  {
    title: "Website për Klinikë",
    text: "Faqe moderne për besim, informim dhe kontakt të shpejtë me pacientët.",
    icon: <Stethoscope size={22} />,
    delay:"0.5s",

  },
  {
    title: "E-Commerce",
    text: "Dyqan online me strukturë të qartë për produkte, oferta dhe shitje.",
    icon: <ShoppingCart size={22} />,
    delay:"0.6s",

  },
];

const features = [
  "Dizajn modern dhe premium.",
  "Responsive në telefon, tablet dhe desktop.",
  "SEO bazë për strukturë dhe përmbajtje.",
  "Form kontaktesh të personalizuar.",
  "Buton WhatsApp për kontakt të shpejtë.",
  "Domain & hosting falas per 1 vit.",
];

const benefits = [
  {
    title: "Dizajn që krijon besim",
    text: "Ndërtojmë website që duken profesionalë dhe i japin biznesit tuaj prezencë serioze.",
    icon: <Palette size={22} />,
    type: "cyan",
    delay:"0.2s",

  },
  {
    title: "Responsive në çdo pajisje",
    text: "Faqja juaj funksionon dhe duket bukur në desktop, tablet dhe mobile.",
    icon: <Smartphone size={22} />,
    type: "purple",
    delay:"0.3s",

  },
  {
    title: "SEO bazë e integruar",
    text: "Strukturë e optimizuar që ndihmon Google ta kuptojë dhe indeksojë faqen.",
    icon: <Search size={22} />,
    type: "cyan",
    delay:"0.4s",

  },
  {
    title: "Forma & integrime",
    text: "Mund të shtojmë contact form, WhatsApp dhe chatbot për më shumë lead-e.",
    icon: <MessageSquareText size={22} />,
    type: "purple",
    delay:"0.5s",

  },
];

const processSteps = [
  {
    title: "Konsultim & strategji",
    text: "Diskutojmë biznesin, objektivin dhe llojin e faqes që ju nevojitet.",
    icon: <Workflow size={22} />,
    delay:"0.2s",

  },
  {
    title: "Dizajn & strukturë",
    text: "Krijojmë layout-in, hierarkinë e përmbajtjes dhe eksperiencën e përdoruesit.",
    icon: <Palette size={22} />,
    delay:"0.3s",

  },
  {
    title: "Zhvillim",
    text: "Ndërtojmë faqen me fokus te shpejtësia, pastërtia dhe konvertimi.",
    icon: <Code2 size={22} />,
    delay:"0.4s",

  },
  {
    title: "Launch",
    text: "Faqja publikohet dhe bëhet gati për klientët tuaj realë.",
    icon: <Rocket size={22} />,
    delay:"0.5s",

  },
];

function WebsiteServicePage() {
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
    <main className="website-service-page">
      <section className="website-service-hero">
        <div className="website-service-container">
          <span className="website-service-label">WEBSITE SERVICE</span>

          <h1 className="website-service-title">
            Website modern që <span>duket mirë dhe konverton</span>
          </h1>

          <p className="website-service-subtitle">
            Krijojmë website profesionale për biznese, hotele, klinika, landing
            pages dhe e-commerce — me dizajn premium, responsive dhe strukturë
            të menduar për rezultate.
          </p>

          <div className="website-service-hero-actions">
            <a
              href="/contact"
              className="website-service-btn website-service-btn-primary"
            >
              Merr Ofertë
            </a>
            <a
              href="/contact"
              className="website-service-btn website-service-btn-secondary"
            >
              Kontakto
            </a>
          </div>
        </div>
      </section>

      <section className="website-service-types">
        <div className="website-service-container">
          <h2 className="website-service-section-title">
            Çfarë lloj <span>website-sh ndërtojmë?</span>
          </h2>

          <div className="website-service-types-grid">
            {websiteTypes.map((item, index) => (
              <article className="website-service-card fade-up1" key={index} style={{transitionDelay:`${item.delay}`}}>
                <div className="website-service-icon cyan">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <WebsiteServicePricingSection />

      <section className="website-service-features">
        <div className="website-service-container">
          <h2 className="website-service-section-title">
            Çfarë <span>përfshin?</span>
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

      <section className="website-service-benefits">
        <div className="website-service-container">
          <h2 className="website-service-section-title">
            Pse ka rëndësi një <span>website i ndërtuar si duhet?</span>
          </h2>

          <div className="website-service-benefits-grid">
            {benefits.map((item, index) => (
              <article className="website-service-card fade-up1" key={index} style={{transitionDelay:`${item.delay}`}}>
                <div className={`website-service-icon ${item.type}`}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="website-service-process">
        <div className="website-service-container">
          <h2 className="website-service-section-title">
            Si funksionon <span>procesi?</span>
          </h2>

          <div className="website-service-process-grid">
            {processSteps.map((step, index) => (
              <article className="website-service-process-card fade-up1" key={index} style={{transitionDelay:`${step.delay}`}}>
                <div className="website-service-process-number">
                  0{index + 1}
                </div>

                <div className="website-service-icon purple">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="website-service-cta">
        <div className="website-service-container">
          <div className="website-service-cta-card">
            <h2>
              Gati për një website që{" "}
              <span>e ngre biznesin tuaj në nivel tjetër?</span>
            </h2>

            <p>
              Na tregoni çfarë lloj faqeje ju duhet dhe ne ju kthejmë një
              zgjidhje të qartë, moderne dhe të personalizuar për biznesin tuaj.
            </p>

            <div className="website-service-cta-actions">
              <a
                href="/contact"
                className="website-service-btn website-service-btn-primary"
              >
                <span>Kërko Ofertë</span>
                <ArrowRight size={18} />
              </a>

              <a
                href="/contact"
                className="website-service-btn website-service-btn-secondary"
              >
                Shkruaj Tani
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default WebsiteServicePage;
