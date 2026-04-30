import { Clock, FileText, ShieldCheck, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { ContactForm } from "@/components/sections/contact-form";
import { ABOUT_PARAGRAPHS, FEATURES, SITE } from "@/lib/data";
import type { IconName } from "@/lib/types";

const FEATURE_ICONS: Record<IconName, LucideIcon> = {
  FileText,
  Clock,
  ShieldCheck,
  Truck: ShieldCheck,
  Sparkles: ShieldCheck,
};

export function AboutContact() {
  return (
    <section
      id="about"
      className="w-full bg-[var(--color-surface)] py-20 md:py-32 border-t border-black/5"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
          <Reveal as="article">
            <div className="relative bg-white p-8 md:p-12 rounded-2xl shadow-[0_2px_30px_-12px_rgba(0,0,0,0.08)] border border-black/[0.04] overflow-hidden">
              <div className="absolute top-0 right-0 h-32 w-32 bg-[var(--color-accent)]/5 rounded-full blur-3xl" />
              <div className="relative">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted-soft)] mb-2">
                  Notre histoire
                </p>
                <h3
                  id="about-heading"
                  className="text-2xl md:text-3xl font-medium tracking-tight uppercase text-foreground"
                >
                  {SITE.brand}
                </h3>
                <p className="text-[10px] text-[var(--color-muted-soft)] uppercase tracking-[0.3em] mt-1.5">
                  Special Effects · since {SITE.yearFounded}
                </p>

                <div className="mt-8 space-y-5 text-[15px] text-[var(--color-muted)] leading-relaxed">
                  {ABOUT_PARAGRAPHS.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal as="div" delay={0.1} className="flex flex-col justify-center lg:pl-4">
            <div id="contact" className="scroll-mt-28">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted-soft)] mb-2">
                Devis · Conseil
              </p>
              <h2 className="text-2xl md:text-3xl font-medium tracking-tight uppercase text-foreground mb-2">
                Contactez-nous
              </h2>
              <p className="text-sm text-[var(--color-muted)] mb-8 max-w-md">
                Décrivez votre projet et notre équipe revient vers vous sous 24/48h
                avec une proposition adaptée.
              </p>
              <ContactForm />
            </div>
          </Reveal>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
          {FEATURES.map((feature, i) => {
            const Icon = FEATURE_ICONS[feature.icon];
            return (
              <Reveal as="li" key={feature.title} delay={i * 0.07}>
                <div className="h-full bg-white border border-black/5 rounded-xl p-6 md:p-7 flex items-start gap-4 transition-all duration-300 hover:border-black/15 hover:shadow-[0_12px_40px_-20px_rgba(0,0,0,0.2)]">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-foreground text-white">
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-foreground">
                      {feature.title}
                    </p>
                    <p className="text-xs text-[var(--color-muted)] mt-1.5 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
