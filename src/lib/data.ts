import type {
  EffectCategory,
  FeatureCard,
  FooterColumn,
  NavLink,
  Partner,
  Product,
  SocialLink,
} from "./types";

export const SITE = {
  name: "Nocturne",
  brand: "FYVE FX",
  tagline: "Prestation · Location · Conception",
  hero: {
    keywords: ["FX", "Live", "Pyro"] as const,
    backgroundImage: "/images/hero-bg.png",
    backgroundAlt: "Scène de concert avec effets pyrotechniques",
  },
  description:
    "Prestataire, loueur et distributeur spécialisé en effets spéciaux scéniques et pyrotechniques. Basé au Sud de Paris, nous intervenons partout en France et à l'étranger.",
  contactEmail: "contact@fyve-fx.fr",
  yearFounded: 2020,
  copyright: `© ${new Date().getFullYear()} ${"FYVE FX"} — FYVE PRODUCTION`,
} as const;

export const NAVIGATION: NavLink[] = [
  { label: "Accueil", href: "#hero" },
  { label: "Catalogue", href: "#effets" },
  { label: "Références", href: "#references" },
  { label: "À propos", href: "#about" },
  { label: "Devis", href: "#contact" },
];

export const EFFECTS: EffectCategory[] = [
  {
    id: "flamme",
    name: "Flamme",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    description: "Jets de flammes contrôlés pour intros et drops impactants.",
  },
  {
    id: "confettis",
    name: "Confettis",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop",
    description: "Lancers de confettis biodégradables, papier ou métallique.",
  },
  {
    id: "co2",
    name: "CO2",
    image:
      "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop",
    description: "Jets cryogéniques pour rafraîchir le public et booster vos drops.",
  },
  {
    id: "etincelles",
    name: "Étincelles",
    image:
      "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    description: "Cascades d'étincelles froides — sûres et indoor.",
  },
  {
    id: "fumee",
    name: "Fumée",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg",
    description: "Hazer, fog, brouillard lourd. Atmosphère parfaite.",
  },
  {
    id: "bulles",
    name: "Bulles",
    image:
      "https://images.unsplash.com/photo-1519683109079-d5f539e1542f?q=80&w=1600&auto=format&fit=crop",
    description: "Effet onirique pour clubs, événements famille, mariages.",
  },
  {
    id: "neige",
    name: "Neige",
    image:
      "https://images.unsplash.com/photo-1483989883855-763728e1935b?q=80&w=1600&auto=format&fit=crop",
    description: "Neige artificielle volumique pour scènes hivernales.",
  },
  {
    id: "air",
    name: "Air",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp",
    description: "Stadium shots & jets puissants pour grandes scènes.",
  },
  {
    id: "controleurs",
    name: "Contrôleurs",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp",
    description: "Pilotage DMX, timecode, pads — précis et synchronisé.",
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "stadiumshot",
    name: "MagicFX — Stadiumshot II",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg",
    category: "Confettis",
  },
  {
    id: "explo-gx2",
    name: "Explo — GX2 230V",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    category: "Étincelles",
  },
  {
    id: "flameblazer",
    name: "MagicFX — Flameblazer",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg",
    category: "Flamme",
  },
  {
    id: "eco2jet",
    name: "MagicFX — ECO2JET",
    image:
      "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp",
    category: "CO2",
  },
];

export const SHOWCASE_IMAGE = {
  src: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=2400&auto=format&fit=crop",
  alt: "Atmosphère de concert avec effets de lumière",
} as const;

export const FEATURES: FeatureCard[] = [
  {
    title: "Demandez votre devis en ligne",
    description: "Prestation, Location, Vente, Installation",
    icon: "FileText",
  },
  {
    title: "Réponse rapide sous 24/48h",
    description: "Sous réserve de disponibilité",
    icon: "Clock",
  },
  {
    title: "Location réservée aux professionnels",
    description: "Certains effets nécessitent une supervision par un professionnel",
    icon: "ShieldCheck",
  },
];

export const PARTNERS: Partner[] = [
  { name: "MagicFX", style: "magicfx" },
  { name: "Explo", style: "explo" },
  { name: "DJPower", style: "djpower" },
  { name: "Oh!FX", style: "ohfx" },
  { name: "Showven", style: "showven" },
  { name: "Look Solutions", style: "look" },
];

export const ABOUT_PARAGRAPHS: string[] = [
  "Fondée en 2020 d'une solide expérience dans la conception et l'exploitation d'événements, FYVE FX est l'aboutissement d'une réflexion de la société FYVE PRODUCTION pour offrir aux publics une expérience de l'événement inoubliable.",
  "Au-delà d'emmener nos publics à travers des créations scéniques, nous souhaitons les embarquer dans une expérience unique et émotionnelle grâce aux SFX.",
  "De la location à l'expertise en passant par le conseil, nous sommes votre partenaire pour imaginer vos shows exceptionnels, tout en vous simplifiant l'accès aux SFX.",
  "N'hésitez pas à nous solliciter pour une prestation ou simplement de la location de matériel.",
  "Pour toutes autres demandes techniques (audio, éclairage, vidéo…) merci de prendre contact directement avec FYVE PRODUCTION.",
  "À très vite !",
];

export const ABOUT_SIGNATURE = "Lucas, Quentin & Yohan";

export const SOCIALS: SocialLink[] = [
  { label: "Facebook", href: "https://facebook.com", icon: "facebook" },
  { label: "Instagram", href: "https://instagram.com", icon: "instagram" },
  { label: "WhatsApp", href: "https://wa.me/", icon: "whatsapp" },
];

export const FOOTER_COLUMNS: FooterColumn[] = [
  {
    label: "Catégories",
    links: [
      "Flamme",
      "Confettis",
      "CO2",
      "Étincelles",
      "Fumée",
      "Bulles",
      "Neige",
      "Air",
      "Rideaux",
      "Contrôleurs",
      "Accessoires",
    ].map((l) => ({ label: l, href: "#effets" })),
  },
  {
    label: "Consommables",
    links: [
      { label: "Confettis", href: "#" },
      { label: "Liquides", href: "#" },
      { label: "Poudre", href: "#" },
      { label: "Gaz", href: "#" },
    ],
  },
];

export const FOOTER_LEGAL: NavLink[] = [
  { label: "Produits", href: "#references" },
  { label: "Catégories", href: "#effets" },
  { label: "Marques", href: "#partners" },
];

export const FOOTER_BOTTOM: NavLink[] = [
  { label: "Contact", href: "#contact" },
  { label: "Mentions légales", href: "#" },
  { label: "Plan de site", href: "#" },
];
