"use client";

import Image from "next/image";
import { motion } from "motion/react";
import type { Product } from "@/lib/types";
import { EASE_OUT } from "@/lib/motion";

type ProductCardProps = {
  product: Product;
  index: number;
};

export function ProductCard({ product, index }: ProductCardProps) {
  return (
    <motion.a
      href={`#produit-${product.id}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.6,
        delay: (index % 4) * 0.07,
        ease: EASE_OUT,
      }}
      className="group flex flex-col items-center text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 rounded-xl"
      aria-label={`Voir ${product.name}`}
    >
      <div className="relative w-full aspect-[4/3] mb-5 overflow-hidden rounded-xl bg-[#f4f4f5] transition-all duration-500 group-hover:bg-white group-hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.18)]">
        <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6 transition-transform duration-500 group-hover:-translate-y-1.5">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-contain p-4 md:p-6 grayscale opacity-80 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100"
          />
        </div>
        <span className="absolute top-3 left-3 text-[9px] font-medium tracking-[0.18em] uppercase text-foreground/50 px-2 py-1 rounded-md bg-white/70 backdrop-blur-sm border border-black/5">
          {product.category}
        </span>
      </div>
      <span className="text-[11px] md:text-xs font-medium tracking-wide text-foreground uppercase">
        {product.name}
      </span>
    </motion.a>
  );
}
