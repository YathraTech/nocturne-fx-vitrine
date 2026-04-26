import Image from "next/image";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/data";

type LogoProps = {
  className?: string;
  /** Reserved for future visual variants (e.g. monochrome on light surfaces). */
  variant?: "light" | "dark";
};

export function Logo({ className }: LogoProps) {
  return (
    <span
      className={cn("flex items-center select-none", className)}
      aria-label={SITE.name}
    >
      <Image
        src="/images/logo-nokturne.png"
        alt={`${SITE.name} — logo`}
        width={520}
        height={130}
        priority
        sizes="(min-width: 1024px) 180px, 150px"
        className="h-9 md:h-10 w-auto object-contain drop-shadow-[0_0_12px_rgba(0,255,0,0.25)]"
      />
    </span>
  );
}
