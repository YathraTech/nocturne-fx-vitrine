import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { EffectsGrid } from "@/components/sections/effects-grid";
import { Products } from "@/components/sections/products";
import { Showcase } from "@/components/sections/showcase";
import { AboutContact } from "@/components/sections/about-contact";
import { Partners } from "@/components/sections/partners";
import { Footer } from "@/components/sections/footer";

export default function HomePage() {
  return (
    <>
      <a
        href="#effets"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-foreground focus:text-white focus:px-4 focus:py-2 focus:text-sm"
      >
        Aller au contenu
      </a>
      <Header />
      <main className="flex-1">
        <Hero />
        <EffectsGrid />
        <Products />
        <Showcase />
        <AboutContact />
        <Partners />
      </main>
      <Footer />
    </>
  );
}
