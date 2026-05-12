import "../styles/ContactPage.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

function ContactPage() {
  const { t } = useTranslation();
  const serviceOptions = t("contact.serviceOptions", { returnObjects: true });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const res = await fetch("https://formspree.io/f/xjgllzzn", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
    } else {
      setStatus("error");
    }
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-up1,.grow,.fade-in");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("show");
      });
    });
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-label">{t("contact.label")}</span>
          <h1 className="contact-title">
            {t("contact.title")} <span>{t("contact.titleSpan")}</span>
          </h1>
          <p className="contact-subtitle">{t("contact.subtitle")}</p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* LEFT */}
            <div className="contact-form-card fade-in">
              <div className="contact-card-top">
                <h2>{t("contact.formTitle")}</h2>
                <p>{t("contact.formSubtitle")}</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label>{t("contact.firstName")}</label>
                    <input
                      type="text"
                      name="firstName"
                      placeholder={t("contact.firstNamePlaceholder")}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label>{t("contact.lastName")}</label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder={t("contact.lastNamePlaceholder")}
                      required
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label>{t("contact.email")}</label>
                    <input
                      type="email"
                      name="email"
                      placeholder={t("contact.emailPlaceholder")}
                      required
                    />
                  </div>
                  <div className="contact-field">
                    <label>{t("contact.phone")}</label>
                    <input
                      type="text"
                      name="phone"
                      placeholder={t("contact.phonePlaceholder")}
                    />
                  </div>
                </div>

                <div className="contact-field">
                  <label>{t("contact.service")}</label>
                  <select name="service" defaultValue="">
                    <option value="" disabled>
                      {t("contact.servicePlaceholder")}
                    </option>
                    {serviceOptions.map((option, index) => (
                      <option key={index}>{option}</option>
                    ))}
                  </select>
                </div>

                <div className="contact-field">
                  <label>{t("contact.message")}</label>
                  <textarea
                    name="message"
                    rows="6"
                    placeholder={t("contact.messagePlaceholder")}
                    required
                  ></textarea>
                </div>

                {status === "success" && (
                  <p
                    style={{
                      color: "#18d4ff",
                      marginBottom: "12px",
                      fontWeight: "600",
                    }}
                  >
                    ✓ Mesazhi u dërgua me sukses!
                  </p>
                )}
                {status === "error" && (
                  <p
                    style={{
                      color: "#ff4d4d",
                      marginBottom: "12px",
                      fontWeight: "600",
                    }}
                  >
                    ✗ Diçka shkoi keq. Provo përsëri.
                  </p>
                )}

                <button type="submit" className="contact-submit-btn">
                  <Send size={18} strokeWidth={2.3} />
                  <span>{t("contact.submitBtn")}</span>
                </button>
              </form>
            </div>

            {/* RIGHT */}
            <div className="contact-info-column">
              <div className="contact-info-card fade-up1">
                <div className="contact-info-icon cyan">
                  <Mail size={20} />
                </div>
                <div>
                  <h3>{t("contact.emailLabel")}</h3>
                  <p>botenginestudio@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-card fade-up1">
                <div className="contact-info-icon purple">
                  <Phone size={20} />
                </div>
                <div>
                  <h3>{t("contact.phoneLabel")}</h3>
                  <p>+355 69 447 1238</p>
                </div>
              </div>

              <div className="contact-info-card fade-up1">
                <div className="contact-info-icon cyan">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3>{t("contact.locationLabel")}</h3>
                  <p>{t("contact.location")}</p>
                </div>
              </div>

              <div className="contact-social-card fade-up1">
                <h3>{t("contact.followTitle")}</h3>
                <p>{t("contact.followText")}</p>
                <div className="contact-social">
                  <a
                    href="https://www.instagram.com/botenginestudio?igsh=MTZuYXU4aHZ1aWlnZw=="
                    aria-label="Instagram"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ContactPage;
