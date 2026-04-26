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
      className={cn(
        "relative block h-10 md:h-12 w-[170px] md:w-[200px] overflow-hidden select-none",
        className
      )}
      aria-label={SITE.name}
    >
      <Image
        src="/images/logo-nokturne.png"
        alt={`${SITE.name} — logo`}
        fill
        priority
        sizes="220px"
        className="object-contain scale-[2.6] origin-center drop-shadow-[0_0_14px_rgba(0,255,0,0.25)]"
      />
    </span>
  );
}
