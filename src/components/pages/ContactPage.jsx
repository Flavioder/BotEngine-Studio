import "../styles/ContactPage.css";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaInstagram, FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { useEffect } from "react";

function ContactPage() {
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
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-container">
          <span className="contact-label">KONTAKT</span>

          <h1 className="contact-title">
            Le të flasim për <span>projektin tuaj</span>
          </h1>

          <p className="contact-subtitle">
            Na shkruani për website, chatbot AI ose një zgjidhje të plotë për
            biznesin tuaj. Do t’ju kthejmë përgjigje sa më shpejt.
          </p>
        </div>
      </section>

      <section className="contact-main">
        <div className="contact-container">
          <div className="contact-grid">
            {/* LEFT */}
            <div className="contact-form-card fade-in">
              <div className="contact-card-top">
                <h2>Na dërgo një mesazh</h2>
                <p>
                  Plotëso formularin dhe ne do t’ju kontaktojmë për të kuptuar
                  më mirë nevojat e biznesit tuaj.
                </p>
              </div>

              <form className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-field">
                    <label>Emri</label>
                    <input type="text" placeholder="Shkruani emrin tuaj" />
                  </div>

                  <div className="contact-field">
                    <label>Mbiemri</label>
                    <input type="text" placeholder="Shkruani mbiemrin tuaj" />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-field">
                    <label>Email</label>
                    <input type="email" placeholder="email@shembull.com" />
                  </div>

                  <div className="contact-field">
                    <label>Telefoni</label>
                    <input type="text" placeholder="+355..." />
                  </div>
                </div>

                <div className="contact-field">
                  <label>Shërbimi që ju intereson</label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Zgjidhni një opsion
                    </option>
                    <option>AI Chatbot</option>
                    <option>Website Development</option>
                    <option>Website + Chatbot Combo</option>
                    <option>Tjetër</option>
                  </select>
                </div>

                <div className="contact-field">
                  <label>Mesazhi</label>
                  <textarea
                    rows="6"
                    placeholder="Na tregoni pak më shumë për projektin ose biznesin tuaj..."
                  ></textarea>
                </div>

                <button type="submit" className="contact-submit-btn">
                  <Send size={18} strokeWidth={2.3} />
                  <span>Dërgo Mesazhin</span>
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
                  <h3>Email</h3>
                  <p>botenginestudio@gmail.com</p>
                </div>
              </div>

              <div className="contact-info-card fade-up1">
                <div className="contact-info-icon purple">
                  <Phone size={20} />
                </div>
                <div>
                  <h3>Telefon</h3>
                  <p>+355 69 447 1238</p>
                </div>
              </div>

              <div className="contact-info-card fade-up1">
                <div className="contact-info-icon cyan">
                  <MapPin size={20} />
                </div>
                <div>
                  <h3>Vendndodhja</h3>
                  <p>Tiranë, Shqipëri</p>
                </div>
              </div>

              <div className="contact-social-card fade-up1">
                <h3>Na ndiqni</h3>
                <p>
                  Qëndroni të lidhur me ne dhe shikoni projektet dhe risitë
                  tona.
                </p>

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
