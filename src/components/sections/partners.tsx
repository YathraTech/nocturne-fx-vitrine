"use client";

import { motion } from "motion/react";
import { Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { PARTNERS } from "@/lib/data";
import type { Partner } from "@/lib/types";

function PartnerLogo({ partner }: { partner: Partner }) {
  switch (partner.style) {
    case "magicfx":
      return (
        <span className="font-bold tracking-tighter text-xl">
          <span className="text-[var(--color-accent)]">MAGIC</span>
          <span className="text-foreground">FX</span>
        </span>
      );
    case "explo":
      return (
        <span className="text-[var(--color-accent)] font-bold tracking-tight text-xl uppercase">
          Explo
        </span>
      );
    case "djpower":
      return (
        <span className="text-emerald-600 font-medium tracking-tight text-lg uppercase flex items-center gap-1.5">
          <Zap className="h-4 w-4" strokeWidth={2} />
          DJPower
        </span>
      );
    case "ohfx":
      return (
        <span className="text-orange-500 font-bold italic tracking-tight text-xl">
          Oh!FX
        </span>
      );
    case "showven":
      return (
        <span className="text-[var(--color-accent)] font-medium tracking-[0.25em] text-base uppercase">
          Showven
        </span>
      );
    case "look":
      return (
        <span className="bg-blue-600 text-white px-2.5 py-1.5 rounded text-xs font-semibold flex flex-col leading-tight">
          <span>Look</span>
          <span>Solutions</span>
        </span>
      );
    default:
      return <span>{partner.name}</span>;
  }
}

export function Partners() {
  return (
    <section
      id="partners"
      className="w-full bg-[var(--color-surface)] pb-20 md:pb-28"
      aria-label="Nos partenaires"
    >
      <Container>
        <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[var(--color-muted-soft)] mb-8">
          Nos partenaires
        </p>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.07 } },
          }}
          className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 md:gap-x-16 opacity-80 grayscale hover:grayscale-0 transition-[filter] duration-700"
        >
          {PARTNERS.map((partner) => (
            <motion.li
              key={partner.name}
              variants={{
                hidden: { opacity: 0, y: 12 },
                show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              className="flex items-center"
            >
              <PartnerLogo partner={partner} />
            </motion.li>
          ))}
        </motion.ul>
      </Container>
    </section>
  );
}
