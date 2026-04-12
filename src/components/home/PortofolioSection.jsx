import "../styles/PortofolioSection.css";
import { Building2, ShoppingBag, Stethoscope } from "lucide-react";

const portfolioItems = [
  {
    id: 1,
    title: "Hotel Luxury",
    subtitle: "Website + Chatbot",
    icon: <Building2 size={44} strokeWidth={1.9} />,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80",
    variant: "teal-purple",
  },
  {
    id: 2,
    title: "E-Commerce Store",
    subtitle: "Website + AI Assistant",
    icon: <ShoppingBag size={44} strokeWidth={1.9} />,
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    variant: "purple-teal",
  },
  {
    id: 3,
    title: "Klinikë Dentare",
    subtitle: "Chatbot Reservation",
    icon: <Stethoscope size={44} strokeWidth={1.9} />,
    image:
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
    variant: "teal-indigo",
  },
];

function PortofolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      <div className="portfolio-container">
        <div className="portfolio-heading">
          <span className="portfolio-label">PORTFOLIO</span>
          <h2 className="portfolio-title">
            Projektet <span>tona</span>
          </h2>
        </div>

        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <article key={item.id} className={`portfolio-card ${item.variant}`}>
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
              </div>

              <div className="portfolio-overlay"></div>

              <div className="portfolio-content">
                <div className="portfolio-default-content">
                  <div className="portfolio-icon-wrap">{item.icon}</div>
                  <h3 className="portfolio-card-title">{item.title}</h3>
                  <p className="portfolio-card-subtitle">{item.subtitle}</p>
                </div>

                <div className="portfolio-hover-content">
                  <button className="portfolio-btn">Shiko Projektin</button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortofolioSection;
