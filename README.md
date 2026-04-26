# Nocturne — Site vitrine FX

Site vitrine pour **Nocturne / FYVE FX** : prestation, location et conception
d'effets spéciaux scéniques (flammes, CO2, étincelles, confettis, fumée, neige…).

> Construit avec Next.js 16 (App Router · Turbopack), Tailwind v4, Motion (Framer
> Motion) et Lucide. Architecture DRY, composants réutilisables, animations
> orchestrées, accessibilité et SEO de série.

## Stack technique

| Couche       | Outil                                     |
| ------------ | ----------------------------------------- |
| Framework    | Next.js 16 (App Router, Turbopack)        |
| UI           | React 19 + TypeScript strict              |
| Style        | Tailwind CSS v4 (theme tokens)            |
| Composants   | Primitives type shadcn (CVA + Radix Slot) |
| Animation    | `motion` (Framer Motion v11+)             |
| Icônes       | `lucide-react`                            |
| SEO          | App Router `metadata`, sitemap, robots    |

## Architecture

```
src/
├─ app/                      # routes (page, layout, sitemap, robots, 404)
├─ components/
│  ├─ brand/logo.tsx         # logo réutilisable header + footer
│  ├─ cards/                 # cartes (effet, produit)
│  ├─ icons/social-icons.tsx # SVG sociaux custom
│  ├─ sections/              # blocs page (hero, effets, produits, …)
│  └─ ui/                    # primitives (button, input, container, reveal…)
└─ lib/
   ├─ data.ts                # contenu centralisé (DRY)
   ├─ types.ts               # types partagés
   ├─ motion.ts              # easings partagés
   └─ utils.ts               # helper cn (clsx + tailwind-merge)
```

**Principe DRY :** tout le contenu (navigation, effets, produits, partenaires,
liens du footer, paragraphes "à propos") vit dans `src/lib/data.ts`. Les
composants ne dupliquent ni la donnée, ni les easings, ni les classes Tailwind
récurrentes (extraites dans `cva` / `cn`).

## Sections

1. **Hero** — image plein écran, accroche typographique animée (FX · Live · Pyro),
   pastille "disponibilité", indicateur de scroll.
2. **Special Effects** — grille 3×3 de catégories d'effets, hover image scale +
   description progressive.
3. **Références** — carrousel horizontal de produits, contrôles ChevronLeft /
   ChevronRight avec état activé/désactivé selon scroll.
4. **Showcase** — bandeau d'ambiance avec parallax visuel.
5. **À propos / Contact** — récit éditorial + formulaire de contact accessible
   (états idle / loading / success).
6. **Avantages** — 3 features avec icônes Lucide.
7. **Partenaires** — logos type marque (MagicFX, Explo, DJPower, Oh!FX, Showven,
   Look Solutions) en niveaux de gris au repos, couleur au survol.
8. **Footer** — navigation par catégorie, liens sociaux, mentions légales.

## UX / Accessibilité

- Lien d'évitement clavier (skip link) en haut de page.
- Focus visible cohérent sur l'ensemble des composants interactifs.
- `prefers-reduced-motion` pris en charge globalement (CSS).
- `aria-label`, `aria-expanded`, `aria-labelledby` sur la nav et les sections.
- Images via `next/image` avec `sizes` adaptés (LCP optimisé).
- Métadonnées Open Graph et Twitter Card prêtes pour le partage social.

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm run start
```

## Déploiement

Le site est prêt pour [Vercel](https://vercel.com) — il suffit d'importer le
dépôt et de cliquer sur "Deploy". Aucune variable d'environnement requise pour
la version vitrine.

## Brancher le formulaire de contact

`src/components/sections/contact-form.tsx` simule l'envoi. Pour une intégration
réelle, créer une route API (`src/app/api/contact/route.ts`) qui pousse vers
Resend / Postmark / Formspree, puis remplacer le `setTimeout` par un `fetch`.
