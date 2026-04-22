import "./App.css";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import ScrollToHash from "./components/layout/ScrollToHash";
import ScrollToTop from "./components/layout/ScrollToTop";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Footer from "./components/layout/Footer";
import AboutPage from "./components/pages/AboutPage";
import ContactPage from "./components/pages/ContactPage";
import ChatbotServicePage from "./components/pages/ChatbotServicePage";
import WebsiteServicePage from "./components/pages/WebsiteServicePage";
import ComboServicePage from "./components/pages/ComboServicePage";
function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/chatbot-service" element={<ChatbotServicePage />} />
        <Route path="/website-service" element={<WebsiteServicePage />} />
        <Route path="/combo-service" element={<ComboServicePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
