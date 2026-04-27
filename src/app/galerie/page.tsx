import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { Gallery } from "@/components/sections/gallery";
import { Container } from "@/components/ui/container";
import { GALLERY_HERO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Galerie d'événements réalisés par Nokturne — concerts, festivals, soirées et galas. Flammes, confettis, CO2, fumée, étincelles.",
  openGraph: {
    title: "Galerie · Nokturne",
    description:
      "Galerie d'événements réalisés par Nokturne — concerts, festivals, soirées et galas.",
  },
};

export default function GaleriePage() {
  return (
    <>
      <a
        href="#galerie-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-foreground focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Aller au contenu
      </a>
      <Header variant="solid" />

      <main id="galerie-content" className="flex-1">
        <section
          aria-label="Galerie — accroche"
          className="relative w-full h-[55vh] md:h-[60vh] min-h-[360px] flex items-end overflow-hidden"
        >
          <Image
            src={GALLERY_HERO.image}
            alt="Concert avec effets pyrotechniques"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/95" />

          <Container className="relative z-10 pb-12 md:pb-16">
            <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/60 mb-3">
              Nos shows
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase text-white">
              {GALLERY_HERO.title}
            </h1>
            <p className="mt-4 max-w-xl text-sm md:text-base text-white/70 leading-relaxed">
              Une sélection d&apos;événements live, festivals, galas et soirées
              privées sur lesquels Nokturne a opéré flammes, confettis, CO2,
              fumée et étincelles.
            </p>
          </Container>
        </section>

        <Gallery />
      </main>

      <Footer />
    </>
  );
}
