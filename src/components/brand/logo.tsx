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
      className={cn("inline-flex items-center select-none", className)}
      aria-label={SITE.name}
    >
      <Image
        src="/images/logo-nokturne.png"
        alt={`${SITE.name} — logo`}
        width={900}
        height={380}
        priority
        sizes="(min-width: 1024px) 240px, 200px"
        className="h-12 md:h-14 lg:h-16 w-auto object-contain drop-shadow-[0_0_14px_rgba(0,255,0,0.25)]"
      />
    </span>
  );
}
