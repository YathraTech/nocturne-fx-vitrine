"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { EffectCategory } from "@/lib/types";
import { EASE_OUT } from "@/lib/motion";

type EffectCardProps = {
  effect: EffectCategory;
  index: number;
};

export function EffectCard({ effect, index }: EffectCardProps) {
  return (
    <motion.a
      href={`#effet-${effect.id}`}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 3) * 0.08,
        ease: EASE_OUT,
      }}
      className="group relative block overflow-hidden rounded-xl aspect-[16/10] bg-neutral-100 focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 focus-visible:outline-none"
      aria-label={`Effet ${effect.name}`}
    >
      <Image
        src={effect.image}
        alt={effect.name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[var(--color-accent)]/40 via-transparent to-transparent" />

      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
        <div className="flex items-end justify-between gap-4">
          <div className="flex flex-col items-start gap-2">
            <span className="inline-flex items-center bg-black/55 backdrop-blur-md border border-white/15 rounded-md px-4 py-2.5 md:px-5 md:py-3 text-sm md:text-base font-semibold tracking-[0.12em] uppercase text-white shadow-[0_4px_18px_-4px_rgba(0,0,0,0.5)]">
              {effect.name}
            </span>
            <span className="block text-[11px] md:text-xs text-white/80 max-w-[24ch] line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-500">
              {effect.description}
            </span>
          </div>
          <span
            aria-hidden
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/10 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 -translate-y-1 group-hover:translate-y-0 transition-all duration-500"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </motion.a>
  );
}
