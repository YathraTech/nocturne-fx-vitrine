import * as React from "react";
import type { SocialKey } from "@/lib/types";

type IconProps = React.SVGProps<SVGSVGElement>;

function FacebookIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5.04 3.69 9.22 8.52 9.95v-7.04H7.83v-2.91h2.57V9.85c0-2.55 1.52-3.96 3.84-3.96 1.11 0 2.27.2 2.27.2v2.5h-1.28c-1.26 0-1.65.78-1.65 1.59v1.91h2.81l-.45 2.91h-2.36V22c4.83-.73 8.52-4.91 8.52-9.94z" />
    </svg>
  );
}

function InstagramIcon(props: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function WhatsAppIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden {...props}>
      <path d="M19.05 4.92A10.1 10.1 0 0 0 12 2C6.48 2 2 6.48 2 12c0 1.74.45 3.38 1.25 4.81L2 22l5.35-1.14A9.97 9.97 0 0 0 12 22c5.52 0 10-4.48 10-10 0-2.69-1.05-5.22-2.95-7.08zM12 20.3a8.3 8.3 0 0 1-4.23-1.16l-.3-.18-3.18.68.68-3.1-.2-.32A8.3 8.3 0 1 1 20.3 12c0 4.58-3.72 8.3-8.3 8.3zm4.5-5.78c-.25-.13-1.46-.72-1.69-.8-.23-.08-.4-.13-.56.13-.17.25-.64.8-.78.96-.14.17-.29.18-.54.06-.25-.13-1.05-.39-2-1.24a7.5 7.5 0 0 1-1.39-1.73c-.14-.25-.02-.39.11-.51.11-.12.25-.3.38-.45.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.44-.06-.13-.56-1.36-.77-1.86-.2-.49-.4-.43-.55-.43h-.47c-.16 0-.42.06-.64.31-.22.25-.85.83-.85 2.02 0 1.19.87 2.34.99 2.5.13.16 1.7 2.6 4.13 3.65.58.25 1.03.4 1.38.51.58.18 1.1.16 1.51.1.46-.07 1.46-.6 1.66-1.18.21-.58.21-1.07.14-1.18-.06-.11-.23-.17-.48-.3z" />
    </svg>
  );
}

const SOCIAL_MAP: Record<SocialKey, React.FC<IconProps>> = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  whatsapp: WhatsAppIcon,
};

export function SocialIcon({
  name,
  className,
  ...props
}: { name: SocialKey } & IconProps) {
  const Icon = SOCIAL_MAP[name];
  return <Icon className={className} {...props} />;
}
