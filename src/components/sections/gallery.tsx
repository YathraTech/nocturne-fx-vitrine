"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Lightbox } from "@/components/ui/lightbox";
import { GALLERY_FILTERS, GALLERY_ITEMS } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";
import type { GalleryCategory, GalleryItem } from "@/lib/types";
import { cn } from "@/lib/utils";

const ASPECT_CLASS: Record<NonNullable<GalleryItem["aspect"]>, string> = {
  "4/5": "aspect-[4/5]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
};

export function Gallery() {
  const [filter, setFilter] = React.useState<GalleryCategory | "all">("all");
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const items = React.useMemo(() => {
    if (filter === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((it) => it.categories.includes(filter));
  }, [filter]);

  // Reset the open lightbox when filtering reduces the visible set.
  React.useEffect(() => {
    setOpenIndex(null);
  }, [filter]);

  return (
    <section className="relative w-full bg-white pt-24 md:pt-28 pb-20 md:pb-28">
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: EASE_OUT }}
          className="text-center text-sm md:text-base text-[var(--color-muted)] mb-8"
        >
          Notre travail parle de lui-même.
        </motion.p>

        <div
          role="tablist"
          aria-label="Filtres galerie"
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          {GALLERY_FILTERS.map((f) => {
            const active = f.key === filter;
            return (
              <button
                key={f.key}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setFilter(f.key)}
                className={cn(
                  "relative h-9 px-4 rounded-full text-xs font-medium uppercase tracking-[0.18em] transition-colors",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30",
                  active
                    ? "text-white"
                    : "text-foreground/70 hover:text-foreground bg-black/[0.03] hover:bg-black/[0.06]"
                )}
              >
                {active ? (
                  <motion.span
                    layoutId="gallery-filter-pill"
                    className="absolute inset-0 rounded-full bg-foreground"
                    transition={{ type: "spring", duration: 0.45, bounce: 0.18 }}
                  />
                ) : null}
                <span className="relative">{f.label}</span>
              </button>
            );
          })}
        </div>

        <motion.div
          layout
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {items.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setOpenIndex(i)}
                aria-label={`Agrandir : ${item.alt}`}
                layout
                initial={{ opacity: 0, y: 16, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{
                  duration: 0.4,
                  delay: (i % 8) * 0.035,
                  ease: EASE_OUT,
                }}
                className={cn(
                  "group relative overflow-hidden rounded-xl bg-neutral-100 cursor-zoom-in",
                  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2",
                  ASPECT_CLASS[item.aspect ?? "4/5"]
                )}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 33vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />
                {item.event ? (
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5 flex flex-col items-start gap-1 text-white text-left opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <span className="text-[10px] uppercase tracking-[0.25em] text-white/70">
                      {item.year ?? "—"}
                    </span>
                    <span className="text-sm font-medium">{item.event}</span>
                  </div>
                ) : null}
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {items.length === 0 ? (
          <div className="mt-12 text-center text-sm text-[var(--color-muted)]">
            Aucune photo pour ce filtre — pour le moment.
          </div>
        ) : null}
      </Container>

      <Lightbox
        items={items}
        index={openIndex}
        onClose={() => setOpenIndex(null)}
        onIndexChange={setOpenIndex}
      />
    </section>
  );
}
