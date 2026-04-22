import "../styles/ServicesSection.css";
import { Bot, LayoutDashboard, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const services = [
  {
    id: 1,
    icon: <Bot size={28} strokeWidth={2.2} />,
    title: "AI Chatbot Automation",
    text: "Chatbot inteligjent 24/7 që kualifikon lead-e, përgjigjet pyetjeve dhe rrit shitjet automatikisht.",
    features: [
      "Përgjigje në sekonda",
      "Integrim me WhatsApp/Instagram",
      "Analitikë të detajuara",
    ],
    type: "cyan",
    link: "/chatbot-service", // 🔥
    delay: "0.1s",
  },
  {
    id: 2,
    icon: <LayoutDashboard size={28} strokeWidth={2.2} />,
    title: "Website Development",
    text: "Website modern, i shpejtë dhe i optimizuar për konvertim që përfaqëson biznesin tuaj profesionalisht.",
    features: ["Responsive design", "SEO optimizim", "Shpejtësi e lartë"],
    type: "purple",
    link: "/website-service", // 🔥 (do e krijosh më vonë)
    delay: "0.2s",
  },
  {
    id: 3,
    icon: <Sparkles size={28} strokeWidth={2.2} />,
    title: "Website + Chatbot Combo",
    text: "Paketa e plotë: website premium + chatbot AI për një prezencë dixhitale komplet dhe konvertim maksimal.",
    features: [
      "Gjithçka në një paketë",
      "Çmim i reduktuar",
      "Suport prioritar",
    ],
    type: "blue",
    popular: true,
    link: "/combo-service", // ose page tjetër
    delay: "0.3s",
  },
];
function ServicesSection() {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up1");

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
    <section className="services-section" id="services">
      <div className="services-container">
        <div className="services-heading">
          <span className="services-label">SHËRBIMET</span>
          <h2>
            Zgjidhje të <span>plota dixhitale</span>
          </h2>
        </div>

        <div className="services-grid ">
          {services.map((item) => (
            <div
              className="service-card fade-up1"
              key={item.id}
              style={{ transitionDelay: `${item.delay}` }}
            >
              {item.popular && <div className="badge">Popular</div>}

              <div className={`icon-box ${item.type}`}>
                <span>{item.icon}</span>
              </div>

              <h3>{item.title}</h3>
              <p>{item.text}</p>

              <ul>
                {item.features.map((f, i) => (
                  <li key={i} className={`feature ${item.type}`}>
                    <span className="check">✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              {/* 🔥 BUTTON */}
              <Link to={item.link} className={`service-btn ${item.type}`}>
                Shiko më shumë →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
