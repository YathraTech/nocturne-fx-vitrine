import type { LucideIcon } from "lucide-react";

export type NavLink = {
  label: string;
  href: string;
};

export type EffectCategory = {
  id: string;
  name: string;
  image: string;
  description: string;
};

export type Product = {
  id: string;
  name: string;
  image: string;
  category: string;
};

export type IconName =
  | "FileText"
  | "Clock"
  | "ShieldCheck"
  | "Truck"
  | "Sparkles";

export type FeatureCard = {
  title: string;
  description: string;
  icon: IconName;
};

export type PartnerStyle =
  | "magicfx"
  | "explo"
  | "djpower"
  | "ohfx"
  | "showven"
  | "look";

export type Partner = {
  name: string;
  style: PartnerStyle;
};

export type SocialKey = "facebook" | "instagram" | "whatsapp";

export type SocialLink = {
  label: string;
  href: string;
  icon: SocialKey;
};

export type FooterColumn = {
  label: string;
  links: NavLink[];
};

export type GalleryCategory =
  | "flamme"
  | "confettis"
  | "co2"
  | "fumee"
  | "etincelles";

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
  /** Image categories — used by the filter chips on /galerie */
  categories: GalleryCategory[];
  /** Optional event/show name for the caption overlay */
  event?: string;
  /** Optional year for the caption overlay */
  year?: number;
  /** Image aspect ratio used for the masonry layout (e.g. "4/5", "16/9") */
  aspect?: "4/5" | "1/1" | "3/4" | "16/9" | "4/3";
};

export type GalleryFilter = {
  key: GalleryCategory | "all";
  label: string;
};

export type IconComponent = LucideIcon;
