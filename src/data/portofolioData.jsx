// src/data/portofolioData.jsx
import { Globe, Bot, Scissors } from "lucide-react";

export const portfolioItems = [
  {
    id: 1,
    slug: "website-chatbot",
    title: "Personalizime Magjike",
    subtitle: "Website + Chatbot i Integruar",
    icon: <Globe size={44} strokeWidth={1.9} />,
    image: "/images/personalizime-hero.png",
    gallery: [
      "/images/personalizime-web-mobile.jpg",
      "/images/personalizime-chatbot.jpg",
    ],
    variant: "teal-purple",
    tags: ["Web Development", "Chatbot", "E-Commerce"],
    shortDesc:
      "Faqe webi elegante për dhurata të personalizuara me chatbot të integruar që ndihmon klientët të porosisin.",
    fullDesc:
      "Personalizime Magjike është një platformë e krijuar për dhurata unike si Greeting Cards, Children's Books dhe Photo Albums. Faqja ka dizajn elegant me ngjyra rozë dhe krem, të optimizuar plotësisht për mobile. Chatbot-i është i integruar direkt brenda faqes — klienti fillon bisedën duke zgjedhur kategorinë (Libra, Dhurata, Të tjera) dhe chatbot-i e udhëzon hap pas hapi deri te porosia finale, pa pasur nevojë të dalë nga faqja.",
    features: [
      {
        icon: "🎁",
        name: "Katalog Produktesh",
        desc: "Greeting Cards, Children's Books, Photo Albums të personalizuara",
      },
      {
        icon: "💬",
        name: "Chatbot i Integruar",
        desc: "Ndihmon klientët të zgjedhin produktin dhe të bëjnë porosi",
      },
      {
        icon: "📱",
        name: "Mobile Optimizuar",
        desc: "Dizajn i përsosur për smartphone — navigim i lehtë",
      },
      {
        icon: "🎨",
        name: "Dizajn Elegant",
        desc: "Estetikë rozë/krem me ndjesi luksoze dhe moderne",
      },
    ],
    stack: ["React", "CSS3", "Chatbot Integration", "Vercel"],
    metrics: [
      { val: "24/7", lbl: "Chatbot aktiv" },
      { val: "3", lbl: "Kategori produktesh" },
      { val: "100%", lbl: "Mobile friendly" },
    ],
    liveUrl: "https://www.personalizimemagjike.com/",
    status: "Kompletuar",
  },
  {
    id: 2,
    slug: "chatbot-automatizim",
    title: "LR Products Store",
    subtitle: "Chatbot Porosie + Automatizim Email",
    icon: <Bot size={44} strokeWidth={1.9} />,
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    variant: "purple-teal",
    tags: ["Chatbot", "Automatizim", "Porosi Online"],
    shortDesc:
      "Chatbot i plotë për dyqan produktesh LR — informon klientët, merr porosinë dhe dërgon email automatik te të dyja palët.",
    fullDesc:
      "Një sistem i automatizuar porosie i ndërtuar me Botpress për dyqan produktesh LR. Klienti hap chatbot-in, pyet për produkte dhe merr informacion të detajuar. Pasi zgjedh produktin, chatbot-i mbledh automatikisht emrin, emailin, numrin e telefonit dhe adresën e dërgimit. Menjëherë pas kompletimit të porosisë, klienti merr email konfirmimi dhe biznesi merr njoftim të plotë me të gjitha detajet e porosisë — zero ndërhyrje manuale e nevojshme.",
    features: [
      {
        icon: "🛍️",
        name: "Informacion Produktesh",
        desc: "Klienti pyet dhe merr detaje të plota për produktet LR",
      },
      {
        icon: "📝",
        name: "Mbledhje Porosie",
        desc: "Mbledh emër, email, telefon dhe adresë dërgimi automatikisht",
      },
      {
        icon: "📧",
        name: "Email te Klienti",
        desc: "Konfirmim automatik i porosisë menjëherë pas finalizimit",
      },
      {
        icon: "🔔",
        name: "Njoftim te Biznesi",
        desc: "Porosia e plotë i shkon biznesit me email automatik",
      },
    ],
    stack: ["Botpress", "Email Automation", "Webhook", "AI Flow"],
    metrics: [
      { val: "100%", lbl: "Automatizim" },
      { val: "2x", lbl: "Email automatik" },
      { val: "0", lbl: "Ndërhyrje manuale" },
    ],
    liveUrl:
      "https://cdn.botpress.cloud/webchat/v3.6/shareable.html?configUrl=https://files.bpcontent.cloud/2026/01/08/14/20260108142836-RIP8JCP3.json",
    status: "Kompletuar",
  },
  {
    id: 3,
    slug: "beauty-salon",
    title: "Beauty & Nail Salon",
    subtitle: "Website për Parukeri, Estetik & Nail Salon",
    icon: <Scissors size={44} strokeWidth={1.9} />,
    image:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
    variant: "teal-indigo",
    tags: ["Web Development", "Beauty", "Booking"],
    shortDesc:
      "Website elegante për salon bukurie që kombinon shërbimet e parukeri, estetikë dhe nail art në një platformë.",
    fullDesc:
      "Një website i dizajnuar me kujdes për sallone bukurie që ofrojnë shërbime të ndryshme. Platforma kombinon parukeri, estetikë dhe nail salon në një faqe të vetme elegante. Klientët mund të shikojnë shërbimet, galerinë e punimeve dhe të rezervojnë takime lehtësisht.",
    features: [
      {
        icon: "✂️",
        name: "Parukeri & Estetikë",
        desc: "Shfaqje e plotë e të gjitha shërbimeve",
      },
      {
        icon: "💅",
        name: "Nail Salon",
        desc: "Galeri punimesh dhe listë shërbimesh nail art",
      },
      {
        icon: "📅",
        name: "Sistem Rezervimi",
        desc: "Klientët rezervojnë takim direkt nga faqja",
      },
      {
        icon: "🖼️",
        name: "Galeri Punimesh",
        desc: "Portofoli visual i punimeve të kryera",
      },
    ],
    stack: ["React", "Vite", "CSS3", "EmailJS"],
    metrics: [
      { val: "3in1", lbl: "Shërbime" },
      { val: "📅", lbl: "Rezervim Online" },
      { val: "✨", lbl: "Dizajn Premium" },
    ],
    liveUrl: "",
    status: "Në Progres",
  },
];
