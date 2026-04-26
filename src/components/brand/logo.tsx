import { cn } from "@/lib/utils";
import { SITE } from "@/lib/data";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function Logo({ className, variant = "light" }: LogoProps) {
  const ink = variant === "light" ? "text-white" : "text-foreground";

  return (
    <div className={cn("flex items-center gap-3", ink, className)}>
      <span
        aria-hidden
        className={cn(
          "relative flex h-9 w-9 items-center justify-center rounded-md border",
          variant === "light"
            ? "border-white/30 bg-white/5"
            : "border-black/15 bg-black/[0.02]"
        )}
      >
        <span
          className={cn(
            "h-3.5 w-3.5 rotate-45 border",
            variant === "light" ? "border-white/70" : "border-black/60"
          )}
        />
        <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_8px_rgba(220,38,38,0.7)]" />
      </span>
      <span className="text-base md:text-lg font-medium tracking-[0.18em] uppercase">
        {SITE.name}
      </span>
    </div>
  );
}
