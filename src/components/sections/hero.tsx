"use client";

import Image from "next/image";
import { motion, type Variants } from "motion/react";
import { ArrowDown } from "lucide-react";
import { SITE } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.7,
      delay: 0.2 + i * 0.1,
      ease: EASE_OUT,
    },
  }),
};

export function Hero() {
  const words = SITE.hero.keywords;

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      aria-label="Section d'accueil"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={SITE.hero.backgroundImage}
          alt={SITE.hero.backgroundAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover scale-105"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.55)_70%)]" />
      </div>

      <div className="absolute -bottom-1 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-black z-[1]" />

      <div className="relative z-10 flex-grow flex flex-col items-center justify-end px-4 text-center pt-28 pb-20 md:pb-24 lg:pb-28">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-white/80"
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" />
          </span>
          Disponible pour vos shows 2026
        </motion.div>

        <h1 className="flex items-center justify-center gap-3 md:gap-5 mb-4 text-balance">
          {words.map((word, i) => (
            <span key={word} className="flex items-center gap-3 md:gap-5">
              <motion.span
                variants={wordVariants}
                initial="hidden"
                animate="show"
                custom={i}
                className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-[0.05em] text-white uppercase leading-none"
              >
                {word}
              </motion.span>
              {i < words.length - 1 ? (
                <motion.span
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.1,
                    ease: EASE_OUT,
                  }}
                  className="h-1.5 w-1.5 md:h-2 md:w-2 bg-[var(--color-accent)] shadow-[0_0_14px_rgba(0,255,0,0.55)]"
                  aria-hidden
                />
              ) : null}
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-[10px] md:text-xs font-medium text-white/70 tracking-[0.35em] uppercase mt-1"
        >
          {SITE.tagline.split(" · ").map((piece: string, i: number, arr: string[]) => (
            <span key={piece}>
              {piece}
              {i < arr.length - 1 ? (
                <span className="mx-3 md:mx-4 text-[var(--color-accent)]">·</span>
              ) : null}
            </span>
          ))}
        </motion.p>
      </div>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        href="#effets"
        aria-label="Voir nos effets spéciaux"
        className="hidden md:flex absolute bottom-8 right-8 z-20 items-center gap-3 text-white/50 hover:text-white transition-colors"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Découvrir</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
          className="rounded-full border border-current p-2"
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
