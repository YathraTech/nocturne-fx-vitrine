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

export type IconComponent = LucideIcon;
