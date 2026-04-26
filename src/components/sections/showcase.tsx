"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { SHOWCASE_IMAGE } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";

export function Showcase() {
  return (
    <section className="w-full bg-white" aria-hidden="true">
      <Container className="py-12 pb-20 md:pb-28">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: EASE_OUT }}
          className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-2xl shadow-[0_40px_80px_-30px_rgba(0,0,0,0.4)]"
        >
          <Image
            src={SHOWCASE_IMAGE.src}
            alt={SHOWCASE_IMAGE.alt}
            fill
            sizes="(min-width: 1280px) 1200px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 flex items-end justify-between gap-6">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/70 mb-2">
                Showreel
              </p>
              <p className="text-xl md:text-3xl font-medium tracking-tight text-white text-balance max-w-2xl">
                Des shows pensés à la seconde près, pour des émotions à la hauteur
                de votre scène.
              </p>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
