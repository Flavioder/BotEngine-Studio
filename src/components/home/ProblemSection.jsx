import "../styles/ProblemSection.css";
import { Clock3, UserRoundX, MonitorX } from "lucide-react";
import { useEffect } from "react";

const problems = [
  {
    id: 1,
    icon: <Clock3 size={28} strokeWidth={2.2} />,
    title: "Përgjigje të ngadalta",
    text: "Klientët presin orë të tëra për përgjigje. 78% e blerësve blejnë nga biznesi i parë që përgjigjet.",
    iconClass: "problem-icon-red",
    active: false,
    delay: "0.1s",
  },
  {
    id: 2,
    icon: <UserRoundX size={28} strokeWidth={2.2} />,
    title: "Lead-e të humbura",
    text: "Pa automatizim, vizitorët largohen pa lënë kontakt. Mundësitë humbasin çdo ditë.",
    iconClass: "problem-icon-gold",
    active: false,
    delay: "0.2s",
  },
  {
    id: 3,
    icon: <MonitorX size={28} strokeWidth={2.2} />,
    title: "Website joprofesional",
    text: "Një website i dobët ul besueshmërinë. 94% e përshtypjeve të para janë bazuar në dizajn.",
    iconClass: "problem-icon-purple",
    active: false,
    delay: "0.3s",
  },
];

function ProblemSection() {
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
    <section className="problem-section">
      <div className="problem-container">
        <div className="problem-heading">
          <span className="problem-label">PROBLEMET</span>
          <h2 className="problem-title">
            A po i <span>humbni klientët?</span>
          </h2>
        </div>

        <div className="problem-grid">
          {problems.map((item) => (
            <article
              key={item.id}
              className={`problem-card ${
                item.active ? "problem-card-active" : ""
              } fade-up1`}
              style={{ transitionDelay: `${item.delay}` }}
            >
              <div className={`problem-icon-box ${item.iconClass}`}>
                {item.icon}
              </div>

              <h3 className="problem-card-title">{item.title}</h3>
              <p className="problem-card-text">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProblemSection;
