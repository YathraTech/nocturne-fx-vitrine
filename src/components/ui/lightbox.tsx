"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryItem } from "@/lib/types";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type LightboxProps = {
  items: GalleryItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const isOpen = index !== null;
  const total = items.length;

  const goPrev = React.useCallback(() => {
    if (index === null || total === 0) return;
    onIndexChange((index - 1 + total) % total);
  }, [index, total, onIndexChange]);

  const goNext = React.useCallback(() => {
    if (index === null || total === 0) return;
    onIndexChange((index + 1) % total);
  }, [index, total, onIndexChange]);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") goPrev();
      else if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose, goPrev, goNext]);

  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const item = isOpen ? items[index!] : null;

  return (
    <AnimatePresence>
      {isOpen && item ? (
        <motion.div
          key="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: EASE_OUT }}
          className="fixed inset-0 z-[120] bg-black/90 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          onClick={onClose}
        >
          <button
            type="button"
            aria-label="Fermer"
            onClick={onClose}
            className={cn(
              "absolute top-4 right-4 md:top-6 md:right-6 z-20 flex h-11 w-11 items-center justify-center rounded-full",
              "border border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
            )}
          >
            <X className="h-5 w-5" />
          </button>

          {total > 1 ? (
            <>
              <NavButton
                direction="prev"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
              />
              <NavButton
                direction="next"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
              />
            </>
          ) : null}

          <div className="absolute inset-0 flex items-center justify-center p-4 md:p-12 lg:p-16">
            <AnimatePresence mode="wait">
              <motion.figure
                key={item.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.3, ease: EASE_OUT }}
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-6xl h-full max-h-[80vh] flex flex-col items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 80vw, 100vw"
                    priority
                    className="object-contain"
                  />
                </div>
                {item.event ? (
                  <figcaption className="mt-4 flex items-center gap-3 text-white/80 text-sm">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">
                      {item.year ?? "—"}
                    </span>
                    <span className="h-px w-6 bg-white/20" />
                    <span>{item.event}</span>
                  </figcaption>
                ) : null}
                <p className="mt-2 text-[11px] uppercase tracking-[0.25em] text-white/40">
                  {index! + 1} / {total}
                </p>
              </motion.figure>
            </AnimatePresence>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function NavButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next";
  onClick: (e: React.MouseEvent) => void;
}) {
  const Icon = direction === "prev" ? ChevronLeft : ChevronRight;
  const side = direction === "prev" ? "left-4 md:left-8" : "right-4 md:right-8";
  return (
    <button
      type="button"
      aria-label={direction === "prev" ? "Image précédente" : "Image suivante"}
      onClick={onClick}
      className={cn(
        "absolute top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 md:h-14 md:w-14 items-center justify-center rounded-full",
        "border border-white/15 bg-white/5 text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40",
        side
      )}
    >
      <Icon className="h-6 w-6" />
    </button>
  );
}
