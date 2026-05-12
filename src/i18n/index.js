import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import sq from "./locales/sq.json";
import en from "./locales/en.json";
import it from "./locales/it.json";
import de from "./locales/de.json";

i18n.use(initReactI18next).init({
  resources: {
    sq: { translation: sq },
    en: { translation: en },
    it: { translation: it },
    de: { translation: de },
  },
  lng: localStorage.getItem("lang") || "sq", // default shqip
  fallbackLng: "sq",
  interpolation: { escapeValue: false },
});

export default i18n;
