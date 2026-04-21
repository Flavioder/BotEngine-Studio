import "../styles/ProcessSection.css";
import { MessageCircle, Box, Code2, Rocket } from "lucide-react";
import { useEffect } from "react";

const steps = [
  {
    id: "01",
    title: "Konsultim",
    text: "Diskutojmë nevojat e biznesit tuaj",
    icon: <MessageCircle size={34} strokeWidth={2.1} />,
    variant: "cyan",
  },
  {
    id: "02",
    title: "Zgjedhja e Paketës",
    text: "Zgjidhni paketën e duhur",
    icon: <Box size={34} strokeWidth={2.1} />,
    variant: "blue",
  },
  {
    id: "03",
    title: "Zhvillimi",
    text: "Krijojmë zgjidhjen tuaj",
    icon: <Code2 size={34} strokeWidth={2.1} />,
    variant: "purple",
  },
  {
    id: "04",
    title: "Implementimi",
    text: "Lansojmë dhe monitorojmë",
    icon: <Rocket size={34} strokeWidth={2.1} />,
    variant: "cyan",
  },
];

function ProcessSection() {
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
    <section className="process-section ">
      <div className="process-container ">
        <div className="process-heading">
          <span className="process-label">PROCESI</span>
          <h2 className="process-title">
            Si <span>funksionon?</span>
          </h2>
        </div>

        <div className="process-timeline fade-up1">
          <div className="process-line"></div>

          {steps.map((step) => (
            <div className="process-step" key={step.id}>
              <div className={`process-icon-card ${step.variant}`}>
                {step.icon}
              </div>

              <span className="process-number">{step.id}</span>
              <h3 className="process-step-title">{step.title}</h3>
              <p className="process-step-text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
