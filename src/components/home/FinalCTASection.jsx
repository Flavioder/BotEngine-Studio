import { Link } from "react-router-dom";
import "../styles/FinalCTASection.css";
import { MessageCircleMore, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";

function FinalCTASection() {
  const { t } = useTranslation();

  return (
    <section className="final-cta-section">
      <div className="final-cta-container">
        <div className="final-cta-card">
          <h2 className="final-cta-title">
            {t("finalCta.title")} <span>{t("finalCta.titleSpan")}</span>{" "}
            {t("finalCta.titleEnd")}
          </h2>
          <p className="final-cta-text">{t("finalCta.text")}</p>
          <div className="final-cta-actions">
            <Link to="/contact" className="final-cta-btn final-cta-btn-primary">
              <MessageCircleMore size={20} strokeWidth={2.2} />
              <span>{t("finalCta.btnDemo")}</span>
            </Link>
            <Link
              to="/contact"
              className="final-cta-btn final-cta-btn-secondary"
            >
              <Phone size={20} strokeWidth={2.2} />
              <span>{t("finalCta.btnContact")}</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinalCTASection;
