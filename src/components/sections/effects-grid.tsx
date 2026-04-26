import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { EffectCard } from "@/components/cards/effect-card";
import { EFFECTS } from "@/lib/data";

export function EffectsGrid() {
  return (
    <section
      id="effets"
      className="relative w-full bg-black text-white"
      aria-labelledby="effects-heading"
    >
      <div
        className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black to-transparent pointer-events-none"
        aria-hidden
      />
      <Container className="relative py-20 md:py-28">
        <SectionHeader eyebrow="Catalogue" title="Special Effects" tone="dark" />
        <div
          id="effects-heading"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
        >
          {EFFECTS.map((effect, i) => (
            <EffectCard key={effect.id} effect={effect} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
