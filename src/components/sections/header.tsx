"use client";

import * as React from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/brand/logo";
import { Button } from "@/components/ui/button";
import { NAVIGATION } from "@/lib/data";
import { EASE_OUT } from "@/lib/motion";
import { cn } from "@/lib/utils";

type HeaderProps = {
  variant?: "transparent" | "solid";
};

export function Header({ variant = "transparent" }: HeaderProps) {
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const onSurface = variant === "solid" || scrolled;

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        onSurface
          ? "bg-black/80 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"
      )}
    >
      <nav
        className="w-full max-w-7xl mx-auto px-6 md:px-12 py-4 md:py-5 flex items-center justify-between"
        aria-label="Navigation principale"
      >
        <a
          href="#hero"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 rounded-md"
        >
          <Logo variant="light" />
          <span className="sr-only">Retour en haut</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs font-medium text-white/80 hover:text-white uppercase tracking-[0.18em] transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <Button asChild variant="primary" size="sm">
            <a href="#contact">Contact</a>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-white p-2 -mr-2"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: EASE_OUT }}
            className="lg:hidden bg-black/95 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {NAVIGATION.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.25 }}
                  className="text-base font-medium text-white uppercase tracking-[0.18em]"
                >
                  {item.label}
                </motion.a>
              ))}
              <Button asChild variant="primary" size="md" className="mt-2 self-start">
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact
                </a>
              </Button>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
