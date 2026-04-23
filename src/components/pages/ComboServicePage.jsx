import "../styles/ComboServicePage.css";
import { Bot, Globe, TrendingUp, ArrowRight } from "lucide-react";
import { useEffect } from "react";

function ComboServicePage() {

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
    <section className="combo-page">
      <div className="combo-container">
        {/* HERO */}
        <div className="combo-hero">
          <h1>
            Website + <span>AI Chatbot</span> në një paketë
          </h1>

          <p>
            Krijojmë një prezencë dixhitale që nuk është vetëm e bukur, por
            konverton vizitorët në klientë automatikisht.
          </p>

          <div className="combo-cta">
            <a href="/contact" className="combo-service-btn combo-btn-primary">
              Merr Demo
            </a>
            <a href="/packages" className="combo-service-btn combo-btn-outline">
              Shiko Paketat
            </a>
          </div>
        </div>

        {/* PROBLEM */}
        <div className="combo-problem">
          <h2>Pse bizneset humbasin klientë?</h2>

          <div className="combo-problem-grid">
            <div>Website pa konvertim ❌</div>
            <div>Përgjigje të vonuara ❌</div>
            <div>Lead-e të humbura ❌</div>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="combo-solution">
          <h2>Zgjidhja jonë 🔥</h2>

          <div className="solution-grid fade-up1">
            <div className="solution-card" style={{transitionDelay:`0.2s`}}>
              <Globe />
              <h3>Website Premium</h3>
              <p>Design modern i fokusuar në shitje</p>
            </div>

            <div className="solution-card" style={{transitionDelay:`0.3s`}}>
              <Bot />
              <h3>AI Chatbot</h3>
              <p>Automatizon komunikimin 24/7</p>
            </div>

            <div className="solution-card" style={{transitionDelay:`0.4s`}}>
              <TrendingUp />
              <h3>Rritje Konvertimesh</h3>
              <p>System që kthen vizitorët në klientë</p>
            </div>
          </div>
        </div>

        {/* FEATURES */}
        <div className="combo-features">
          <h2>Çfarë përfshin paketa</h2>

          <div className="features-grid fade-up1">
            <div style={{transitionDelay:"0.2s"}}>
              <h4>Website</h4>
              <ul>
                <li>Landing page / multi-page</li>
                <li>Responsive design</li>
                <li>SEO bazë</li>
                <li>Form kontaktesh</li>
              </ul>
            </div>

            <div style={{transitionDelay:"0.2s"}}>
              <h4>Chatbot</h4>
              <ul>
                <li>FAQ + Lead capture</li>
                <li>Sales automation</li>
                <li>Përgjigje 24/7</li>
                <li>WhatsApp / Instagram integrim</li>
              </ul>
            </div>
          </div>
        </div>

        {/* PROCESS */}
        <div className="combo-process ">
          <h2>Si funksionon?</h2>

          <div className="process-steps fade-up1">
            <div style={{transitionDelay:"0.2s"}}>1. Konsultim</div>
            <div style={{transitionDelay:"0.3s"}}>2. Strategji</div>
            <div style={{transitionDelay:"0.4s"}}>3. Zhvillim</div>
            <div style={{transitionDelay:"0.5s"}}>4. Launch 🚀</div>
          </div>
        </div>

        {/* CTA FINAL */}
        <section className="website-service-cta">
          <div className="website-service-container">
            <div className="website-service-cta-card">
              <h2>
                Gati për një website që{" "}
                <span>e ngre biznesin tuaj në nivel tjetër?</span>
              </h2>

              <p>
                Na tregoni çfarë lloj faqeje ju duhet dhe ne ju kthejmë një
                zgjidhje të qartë, moderne dhe të personalizuar për biznesin
                tuaj.
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
      </div>
    </section>
  );
}

export default ComboServicePage;
