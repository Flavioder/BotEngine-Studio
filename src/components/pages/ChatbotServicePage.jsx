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

const problems = [
  {
    title: "Përgjigje të vonuara",
    text: "Klientët largohen kur nuk marrin përgjigje menjëherë në DM ose në website.",
    icon: <Clock3 size={22} />,
    delay: "0.1s",
  },
  {
    title: "Humbje lead-esh",
    text: "Pa automatizim, shumë vizitorë largohen pa lënë kontakt dhe pa bërë hapin tjetër.",
    icon: <Users size={22} />,
    delay: "0.2s",
  },
  {
    title: "Përsëritje e pyetjeve",
    text: "Biznesi humbet kohë duke iu përgjigjur të njëjtave pyetje çdo ditë.",
    icon: <MessageSquareMore size={22} />,
    delay: "0.3s",
  },
];

const features = [
  "Përgjigje automatike 24/7",
  "Lead capture dhe mbledhje kontaktesh",
  "FAQ të personalizuara sipas biznesit",
  "Drejtim i klientit drejt porosisë ose booking",
  "Follow-up automatik",
  "Tone of voice sipas brand-it tuaj",
];

const integrations = [
  {
    name: "Instagram",
    icon: <FaInstagram size={24} />,
    delay: "0.2s",
  },
  {
    name: "WhatsApp",
    icon: <MessageCircle size={24} />,
    delay: "0.3s",
  },
  {
    name: "Website",
    icon: <Globe size={24} />,
    delay: "0.4s",
  },
];

const processSteps = [
  {
    title: "Analizë e biznesit",
    text: "Kuptojmë produktin, pyetjet e klientëve dhe objektivin e chatbot-it.",
    icon: <Bot size={22} />,
    delay: "0.3s",
  },
  {
    title: "Ndërtim & trajnimi",
    text: "Krijojmë flow-t, përgjigjet dhe logjikën sipas skenarëve realë të biznesit tuaj.",
    icon: <Workflow size={22} />,
    delay: "0.4s",
  },
  {
    title: "Integrim",
    text: "E lidhim chatbot-in me kanalet ku klientët tuaj komunikojnë më shumë.",
    icon: <Settings size={22} />,
    delay: "0.5s",
  },
  {
    title: "Launch & optimizim",
    text: "Publikojmë chatbot-in dhe e përmirësojmë sipas përdorimit real.",
    icon: <Rocket size={22} />,
    delay: "0.6s",
  },
];

function ChatbotServicePage() {
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
    <main className="chatbot-page">
      <section className="chatbot-hero">
        <div className="chatbot-container">
          <span className="chatbot-label">CHATBOT SERVICE</span>

          <h1 className="chatbot-title">
            Chatbot AI që <span>përgjigjet, ndihmon dhe konverton</span>
          </h1>

          <p className="chatbot-subtitle">
            Një chatbot i personalizuar për biznesin tuaj që punon 24/7,
            përgjigjet në sekonda dhe kthen vizitorët në klientë pa humbur kohë.
          </p>

          <div className="chatbot-hero-actions">
            <Link to="/contact" className="chatbot-btn chatbot-btn-primary">
              Merr Demo
            </Link>
            <Link to="/contact" className="chatbot-btn chatbot-btn-secondary">
              Kërko Ofertë
            </Link>
          </div>
        </div>
      </section>

      <section className="chatbot-intro">
        <div className="chatbot-container chatbot-intro-grid fade-up1">
          <div className="chatbot-intro-card">
            <div className="chatbot-icon cyan">
              <Bot size={28} />
            </div>
            <h2>Çfarë është chatbot-i ynë?</h2>
            <p>
              Chatbot-i ynë është një asistent virtual i trajnuar për biznesin
              tuaj. Ai përgjigjet automatikisht ndaj pyetjeve, ndihmon klientin
              të gjejë informacionin e duhur dhe e çon drejt veprimit të
              dëshiruar: porosi, booking, kontakt ose lead.
            </p>
          </div>

          <div className="chatbot-preview-card">
            <div className="chatbot-preview-top">
              <span className="chatbot-status-dot"></span>
              <span>BotEngine AI · Online</span>
            </div>

            <div className="chatbot-preview-messages">
              <div className="chatbot-msg chatbot-msg-bot">
                Përshëndetje 👋 Si mund t’ju ndihmoj?
              </div>
              <div className="chatbot-msg chatbot-msg-user">
                Dua të di çmimet
              </div>
              <div className="chatbot-msg chatbot-msg-bot">
                Sigurisht. Paketat fillojnë nga një setup fillestar dhe mund të
                personalizohen sipas biznesit tuaj.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="chatbot-problems">
        <div className="chatbot-container">
          <h2 className="chatbot-section-title">
            Çfarë problemesh <span>zgjidh?</span>
          </h2>

          <div className="chatbot-grid-3">
            {problems.map((item, index) => (
              <article
                className="chatbot-card fade-up1"
                key={index}
                style={{ transitionDelay: `${item.delay}` }}
              >
                <div className="chatbot-icon purple">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ChatbotPricingSection />

      <section className="chatbot-features">
        <div className="chatbot-container">
          <h2 className="chatbot-section-title">
            Features që bëjnë <span>diferencën</span>
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

      <section className="chatbot-integrations">
        <div className="chatbot-container">
          <h2 className="chatbot-section-title">
            Integrime me <span>kanalet kryesore</span>
          </h2>

          <div className="chatbot-integrations-grid">
            {integrations.map((item, index) => (
              <article
                className="chatbot-integration-card fade-up1"
                key={index}
                style={{ transitionDelay: `${item.delay}` }}
              >
                <div className="chatbot-icon cyan">{item.icon}</div>
                <h3>{item.name}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="chatbot-process">
        <div className="chatbot-container">
          <h2 className="chatbot-section-title">
            Procesi i <span>implementimit</span>
          </h2>

          <div className="chatbot-process-grid">
            {processSteps.map((step, index) => (
              <article
                className="chatbot-process-card fade-up1"
                key={index}
                style={{ transitionDelay: `${step.delay}` }}
              >
                <div className="chatbot-process-number">0{index + 1}</div>

                <div className="chatbot-icon purple">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="chatbot-cta">
        <div className="chatbot-container">
          <div className="chatbot-cta-card">
            <h2>
              Gati për një chatbot që <span>punon për ju 24/7?</span>
            </h2>

            <p>
              Merrni një demo ose një ofertë të personalizuar sipas biznesit,
              industrisë dhe kanalit ku doni ta implementoni.
            </p>

            <div className="chatbot-cta-actions">
              <Link to="/contact" className="chatbot-btn chatbot-btn-primary">
                <span>Merr Demo</span>
                <ArrowRight size={18} />
              </Link>

              <Link to="/contact" className="chatbot-btn chatbot-btn-secondary">
                Kërko Ofertë
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ChatbotServicePage;
