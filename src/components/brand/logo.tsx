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
        width={928}
        height={277}
        priority
        sizes="(min-width: 1024px) 260px, 220px"
        className="h-14 md:h-16 lg:h-[68px] w-auto object-contain drop-shadow-[0_0_18px_rgba(0,255,0,0.28)]"
      />
    </span>
  );
}
