import "../styles/WhySection.css";
import { Zap, Cpu, Palette, Target } from "lucide-react";

const features = [
  {
    id: 1,
    icon: <Zap size={26} />,
    title: "Shpejtësi",
    text: "Dorëzim brenda 48 orëve. Biznesi juaj nuk pret.",
    variant: "cyan",
  },
  {
    id: 2,
    icon: <Cpu size={26} />,
    title: "Automatizim",
    text: "AI që punon 24/7 pa pushim dhe pa gabime.",
    variant: "purple",
  },
  {
    id: 3,
    icon: <Palette size={26} />,
    title: "Dizajn Premium",
    text: "Dizajne unike që ndërtojnë besim dhe profesionalizëm.",
    variant: "cyan",
  },
  {
    id: 4,
    icon: <Target size={26} />,
    title: "Konvertim",
    text: "Çdo element është optimizuar për të kthyer vizitorët në klientë.",
    variant: "purple",
  },
];

function WhySection() {
  return (
    <section className="why-section">
      <div className="why-container">
        <div className="why-heading">
          <span className="why-label">PSE NE</span>
          <h2 className="why-title">
            Pse <span>BotEngineStudio?</span>
          </h2>
        </div>

        <div className="why-grid">
          {features.map((item) => (
            <article key={item.id} className="why-card">
              <div className={`why-icon ${item.variant}`}>{item.icon}</div>

              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhySection;
