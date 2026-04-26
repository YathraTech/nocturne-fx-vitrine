import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black text-white">
      <p className="text-[10px] uppercase tracking-[0.3em] text-white/50 mb-4">
        Erreur 404
      </p>
      <h1 className="text-5xl md:text-7xl font-medium tracking-tight uppercase mb-4">
        Page introuvable
      </h1>
      <p className="text-sm text-white/60 max-w-md mb-8">
        Cette page n&apos;existe pas ou plus. Retour à la scène principale.
      </p>
      <Button asChild variant="primary" size="md">
        <Link href="/">Retour à l&apos;accueil</Link>
      </Button>
    </main>
  );
}
