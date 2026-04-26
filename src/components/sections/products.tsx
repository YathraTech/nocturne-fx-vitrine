"use client";

import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeader } from "@/components/ui/section-header";
import { ProductCard } from "@/components/cards/product-card";
import { PRODUCTS } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Products() {
  const trackRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(false);

  const update = React.useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  React.useEffect(() => {
    update();
    const el = trackRef.current;
    if (!el) return;
    const ro = new ResizeObserver(update);
    ro.observe(el);
    el.addEventListener("scroll", update, { passive: true });
    return () => {
      ro.disconnect();
      el.removeEventListener("scroll", update);
    };
  }, [update]);

  const scrollBy = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: "smooth" });
  };

  return (
    <section
      id="references"
      className="relative w-full bg-white"
      aria-labelledby="products-heading"
    >
      <Container className="py-12 md:py-24">
        <SectionHeader
          eyebrow="Catalogue"
          title="Nos meilleures références"
          action={
            <a
              href="#contact"
              className="text-sm font-medium text-[var(--color-muted)] hover:text-foreground transition-colors underline-offset-4 hover:underline"
            >
              Voir tous les produits →
            </a>
          }
        />

        <div className="relative" id="products-heading">
          <button
            type="button"
            aria-label="Précédent"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            className={cn(
              "hidden sm:flex items-center justify-center absolute left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-black/10 bg-white/90 backdrop-blur shadow-md text-foreground transition-all",
              "hover:bg-white hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            )}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth scrollbar-hidden -mx-4 px-4 [&::-webkit-scrollbar]:hidden"
            style={{ scrollbarWidth: "none" }}
          >
            {PRODUCTS.map((product, i) => (
              <div
                key={product.id}
                className="snap-start shrink-0 w-[80%] sm:w-[45%] lg:w-[24%]"
              >
                <ProductCard product={product} index={i} />
              </div>
            ))}
          </div>

          <button
            type="button"
            aria-label="Suivant"
            onClick={() => scrollBy(1)}
            disabled={!canScrollRight}
            className={cn(
              "hidden sm:flex items-center justify-center absolute right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full border border-black/10 bg-white/90 backdrop-blur shadow-md text-foreground transition-all",
              "hover:bg-white hover:scale-105 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100"
            )}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </Container>
    </section>
  );
}
