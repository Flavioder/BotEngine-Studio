import "../styles/IndustriesSection.css";

const industries = [
  { id: 1, icon: "🏨", title: "Hotele" },
  { id: 2, icon: "🛒", title: "E-Commerce" },
  { id: 3, icon: "🏥", title: "Klinika" },
  { id: 4, icon: "🍽️", title: "Restorante" },
  { id: 5, icon: "🏪", title: "Biznese Lokale" },
];

function IndustriesSection() {
  return (
    <section className="industries-section">
      <div className="industries-container">
        <div className="industries-heading">
          <span className="industries-label">PËR KË</span>
          <h2 className="industries-title">
            Zgjidhje për <span>çdo industri</span>
          </h2>
        </div>

        <div className="industries-grid">
          {industries.map((item) => (
            <article key={item.id} className="industry-card">
              <div className="industry-icon">{item.icon}</div>
              <h3 className="industry-title">{item.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default IndustriesSection;
