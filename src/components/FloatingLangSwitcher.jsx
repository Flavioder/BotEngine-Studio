import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Languages } from "lucide-react";
import "./styles/FloatingLangSwitcher.css";

const languages = [
  { code: "sq", label: "SQ" },
  { code: "en", label: "EN" },
  { code: "it", label: "IT" },
  { code: "de", label: "DE" },
];

function FloatingLangSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    localStorage.setItem("lang", code);
    setOpen(false);
  };

  return (
    <div className="floating-lang">
      {open && (
        <div className="floating-lang-options">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={i18n.language === lang.code ? "active" : ""}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}

      <button
        className="floating-lang-btn"
        onClick={() => setOpen((prev) => !prev)}
      >
        <Languages size={20} />
      </button>
    </div>
  );
}

export default FloatingLangSwitcher;
