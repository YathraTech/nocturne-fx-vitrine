import type {
  EffectCategory,
  FeatureCard,
  FooterColumn,
  GalleryFilter,
  GalleryItem,
  NavLink,
  Partner,
  Product,
  SocialLink,
} from "./types";

export const SITE = {
  name: "Nokturne",
  brand: "Nokturne",
  tagline: "Prestation · Location · Conception",
  hero: {
    keywords: ["FX", "Live", "Pyro"] as const,
    backgroundImage: "/images/hero-bg.png",
    backgroundAlt: "Scène de concert avec effets pyrotechniques",
  },
  description:
    "Prestataire, loueur et distributeur spécialisé en effets spéciaux scéniques et pyrotechniques. Basé au Sud de Paris, nous intervenons partout en France et à l'étranger.",
  contactEmail: "contact@nokturne.fr",
  yearFounded: 2020,
  copyright: `© ${new Date().getFullYear()} Nokturne — Tous droits réservés`,
} as const;

export const NAVIGATION: NavLink[] = [
  { label: "Accueil", href: "/" },
  { label: "Catalogue", href: "/#effets" },
  { label: "Références", href: "/#references" },
  { label: "Galerie", href: "/galerie" },
  { label: "Devis", href: "/#contact" },
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
  "Fondée en 2020 d'une solide expérience dans la conception et l'exploitation d'événements, Nokturne est née d'une réflexion claire : offrir aux publics une expérience d'événement inoubliable.",
  "Au-delà d'emmener nos publics à travers des créations scéniques, nous souhaitons les embarquer dans une expérience unique et émotionnelle grâce aux SFX.",
  "De la location à l'expertise en passant par le conseil, nous sommes votre partenaire pour imaginer vos shows exceptionnels, tout en vous simplifiant l'accès aux SFX.",
  "N'hésitez pas à nous solliciter pour une prestation ou simplement de la location de matériel.",
  "Pour toute demande technique (audio, éclairage, vidéo…), notre équipe vous oriente vers le bon partenaire de production.",
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

export const GALLERY_HERO = {
  title: "Galerie",
  subtitle: "Notre travail parle de lui-même.",
  // Reuses the homepage hero image so brand identity is consistent.
  // Drop a /public/images/galerie-hero.jpg here later to override.
  image: "/images/hero-bg.png",
} as const;

export const GALLERY_FILTERS: GalleryFilter[] = [
  { key: "all", label: "Tout" },
  { key: "flamme", label: "Flamme" },
  { key: "confettis", label: "Confettis" },
  { key: "co2", label: "CO2" },
  { key: "fumee", label: "Fumée" },
  { key: "etincelles", label: "Étincelles" },
];

/**
 * Galerie d'événements.
 *
 * Pour ajouter une vraie photo :
 * 1. Pose le fichier dans /public/images/gallery/ (ou utilise une URL).
 * 2. Ajoute un objet ici avec id unique, src, alt descriptif, catégories,
 *    et optionnellement event + year + aspect.
 * 3. La grille et les filtres se mettent à jour automatiquement.
 */
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "festival-flamme-1",
    src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1600&auto=format&fit=crop",
    alt: "Cascade d'étincelles devant un public en festival",
    categories: ["etincelles"],
    event: "Festival Lyon",
    year: 2024,
    aspect: "4/5",
  },
  {
    id: "concert-flamme-1",
    src: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=1600&auto=format&fit=crop",
    alt: "Foule éclairée par des flammes scéniques rouges",
    categories: ["flamme"],
    event: "Tournée 2024",
    year: 2024,
    aspect: "4/5",
  },
  {
    id: "co2-1",
    src: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?q=80&w=1600&auto=format&fit=crop",
    alt: "Jets cryogéniques CO2 sur scène",
    categories: ["co2"],
    event: "Showcase Paris",
    year: 2024,
    aspect: "4/5",
  },
  {
    id: "concert-flamme-2",
    src: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=1600&auto=format&fit=crop",
    alt: "Public en contre-jour pendant un live",
    categories: ["flamme", "fumee"],
    event: "Garorock",
    year: 2023,
    aspect: "4/5",
  },
  {
    id: "confettis-1",
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1600&auto=format&fit=crop",
    alt: "Pluie de confettis multicolores",
    categories: ["confettis"],
    event: "Stade de France",
    year: 2024,
    aspect: "4/3",
  },
  {
    id: "fumee-1",
    src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1600&auto=format&fit=crop",
    alt: "Brume basse sur scène avec faisceaux lumière",
    categories: ["fumee"],
    event: "Festival Solidays",
    year: 2024,
    aspect: "1/1",
  },
  {
    id: "concert-flamme-3",
    src: "https://images.unsplash.com/photo-1459749411175-04bf5292ceea?q=80&w=1600&auto=format&fit=crop",
    alt: "Scène ouverte avec arrière plan vert et public dense",
    categories: ["flamme"],
    event: "Hellfest",
    year: 2023,
    aspect: "16/9",
  },
  {
    id: "etincelles-2",
    src: "https://images.unsplash.com/photo-1493676304819-0d7a8d026dcf?q=80&w=1600&auto=format&fit=crop",
    alt: "Pyrotechnie froide en bord de scène",
    categories: ["etincelles", "flamme"],
    event: "Mariage privé",
    year: 2024,
    aspect: "4/5",
  },
  {
    id: "co2-2",
    src: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=1600&auto=format&fit=crop",
    alt: "Boîte de nuit avec cryogenèse CO2 et lasers verts",
    categories: ["co2", "fumee"],
    event: "Club Privilège",
    year: 2025,
    aspect: "1/1",
  },
  {
    id: "fumee-2",
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?q=80&w=1600&auto=format&fit=crop",
    alt: "Faisceaux dans la fumée avec silhouette d'artiste",
    categories: ["fumee"],
    event: "Olympia",
    year: 2024,
    aspect: "4/5",
  },
  {
    id: "confettis-2",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=1600&auto=format&fit=crop",
    alt: "Lancer de confettis pendant un final de show",
    categories: ["confettis"],
    event: "Tour de France",
    year: 2024,
    aspect: "3/4",
  },
  {
    id: "etincelles-3",
    src: "https://images.unsplash.com/photo-1485217988980-11786ced9454?q=80&w=1600&auto=format&fit=crop",
    alt: "Étincelles froides en arc devant la scène",
    categories: ["etincelles"],
    event: "Gala d'entreprise",
    year: 2025,
    aspect: "4/5",
  },
];
