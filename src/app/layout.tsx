import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nocturne-fx.vercel.app"),
  title: {
    default: "Nocturne — Effets spéciaux pour scènes & événements",
    template: "%s · Nocturne FX",
  },
  description:
    "Nocturne FX : prestation, location et conception d'effets spéciaux scéniques. Flammes, CO2, étincelles, confettis, fumée, neige — pour concerts, festivals et événements.",
  keywords: [
    "effets spéciaux",
    "SFX scénique",
    "pyrotechnie",
    "location FX",
    "concert",
    "événementiel",
    "confettis",
    "CO2",
    "étincelles",
    "flammes",
  ],
  authors: [{ name: "Nocturne FX" }],
  creator: "Nocturne FX",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://nocturne-fx.vercel.app",
    siteName: "Nocturne FX",
    title: "Nocturne — Effets spéciaux pour scènes & événements",
    description:
      "Prestation, location et conception d'effets spéciaux scéniques pour vos shows.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nocturne — Effets spéciaux pour scènes & événements",
    description:
      "Prestation, location et conception d'effets spéciaux scéniques pour vos shows.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        {children}
      </body>
    </html>
  );
}
