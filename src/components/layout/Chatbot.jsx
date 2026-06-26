import { useEffect } from "react";

const Chatbot = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
    script1.async = true;

    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.src =
        "https://files.bpcontent.cloud/2026/05/15/14/20260515144407-B6K9WL69.js";
      script2.defer = true;

      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    return () => {
      if (script1.parentNode) {
        document.body.removeChild(script1);
      }
    };
  }, []);

  return null;
};

export default Chatbot;
