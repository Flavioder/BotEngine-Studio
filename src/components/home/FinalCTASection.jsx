import { Link } from "react-router-dom";
import "../styles/FinalCTASection.css";
import { MessageCircleMore, Phone } from "lucide-react";

function FinalCTASection() {
  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="final-cta-card">
          <h2 className="final-cta-title">
            Gati të <span>transformoni</span> biznesin?
          </h2>

          <p className="final-cta-text">
            Filloni sot me një konsultim falas. Merrni chatbotin tuaj AI dhe
            website-in modern brenda 48 orëve.
          </p>

          <div className="final-cta-actions">
            <Link to="/contact" className="final-cta-btn final-cta-btn-primary">
              <MessageCircleMore size={20} strokeWidth={2.2} />
              <span>Merr Demo</span>
            </Link>

            <Link
              to="/contact"
              className="final-cta-btn final-cta-btn-secondary"
            >
              <Phone size={20} strokeWidth={2.2} />
              <span>Kontakto</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
