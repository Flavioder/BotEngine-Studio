import "../styles/Hero.css";

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot"></span>
            AI-Powered Solutions
          </div>

          <h1 className="hero-title">
            Automatizo biznesin
            <br />
            tënd <span>&amp; rrit shitjet</span>
          </h1>

          <p className="hero-description">
            Chatbot inteligjent + Website modern që përgjigjet në sekonda dhe
            konverton vizitorët në klientë
          </p>

          <div className="hero-actions">
            <a href="#packages" className="hero-btn hero-btn-primary">
              <span>Shiko Paketat</span>
              <span className="hero-btn-arrow">→</span>
            </a>

            <a href="#contact" className="hero-btn hero-btn-secondary">
              Merr Demo
            </a>
          </div>

          <div className="hero-features">
            <div className="hero-feature">
              <span className="hero-check">✓</span>
              <span>24/7 Automatik</span>
            </div>

            <div className="hero-feature">
              <span className="hero-check">✓</span>
              <span>Setup në 48h</span>
            </div>

            <div className="hero-feature">
              <span className="hero-check">✓</span>
              <span>ROI i lartë</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-stats-card">
            <p className="hero-stats-label">Konvertimet</p>
            <h3 className="hero-stats-value">+340%</h3>
            <p className="hero-stats-growth">↗ +28% këtë javë</p>

            <div className="hero-chart">
              <svg
                viewBox="0 0 180 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M8 63C22 60 35 56 47 56C58 56 68 48 80 49C91 50 100 38 112 39C124 40 136 28 149 31C159 33 167 20 174 21"
                  stroke="url(#lineGradient)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="lineGradient"
                    x1="8"
                    y1="63"
                    x2="174"
                    y2="21"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#00D1FF" />
                    <stop offset="1" stopColor="#7B4DFF" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="hero-chat-card">
            <div className="hero-chat-header">
              <div className="hero-chat-avatar">
                <div className="hero-chat-avatar-inner">⌂</div>
              </div>

              <div className="hero-chat-title-wrap">
                <h4>BotEngine AI</h4>
                <div className="hero-chat-status">
                  <span className="hero-online-dot"></span>
                  <span>Online</span>
                </div>
              </div>
            </div>

            <div className="hero-chat-divider"></div>

            <div className="hero-chat-body">
              <div className="hero-message hero-message-bot hero-message-small">
                Përshëndetje! 👋 Si mund t'ju ndihmoj?
              </div>

              <div className="hero-message hero-message-user">
                Dua të di çmimet
              </div>

              <div className="hero-message hero-message-bot">
                Natyrisht! Paketat fillojnë nga €149/muaj. Dëshironi demo? 🚀
              </div>
            </div>

            <div className="hero-chat-divider hero-chat-divider-bottom"></div>

            <div className="hero-chat-input-row">
              <div className="hero-chat-input">
                <span>Shkruani mesazhin...</span>
              </div>

              <button className="hero-send-btn" aria-label="Send message">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 3L10 14"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3L14 21L10 14L3 10L21 3Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
