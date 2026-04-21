import "../styles/IndustriesSection.css";
import { useEffect } from "react";

const industries = [
  { id: 1, icon: "🏨", title: "Hotele" ,delay:"0.1s"},
  { id: 2, icon: "🛒", title: "E-Commerce",delay:"0.2s" },
  { id: 3, icon: "🏥", title: "Klinika" ,delay:"0.3s"},
  { id: 4, icon: "🍽️", title: "Restorante",delay:"0.4s" },
  { id: 5, icon: "🏪", title: "Biznese Lokale",delay:"0.5s" },
];

function IndustriesSection() {
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
    <section className="industries-section">
      <div className="industries-container">
        <div className="industries-heading">
          <span className="industries-label">PËR KË</span>
          <h2 className="industries-title">
            Zgjidhje për <span>çdo industri</span>
          </h2>
        </div>

        <div className="industries-grid ">
          {industries.map((item) => (
            <article key={item.id} className="industry-card fade-up1" style={{transitionDelay:`${item.delay}`}}>
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
