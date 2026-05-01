# AUDIT — Glass Carré Privé V2

> Étape 7 du §15 du BRIEF. Auto-évaluation contre la grille §13 + relevé Lighthouse mobile.
> **Score final : 96 / 100. Cible ≥ 85 dépassée.**

---

## 1 · Lighthouse mobile (mesuré)

```
pnpm dlx lighthouse@12 http://localhost:3010 \
  --form-factor=mobile --throttling-method=simulate \
  --only-categories=performance,accessibility,best-practices,seo
```

| Catégorie | Score | Cible BRIEF | Statut |
|---|---:|---:|---|
| Performance | **86** | ≥ 90 | ⚠ -4 (Speed Index dégradé par les animations Framer scroll-into-view) |
| Accessibility | **96** | ≥ 95 | ✅ |
| Best Practices | **100** | — | ✅ |
| SEO | **100** | ≥ 95 | ✅ |

### Métriques Web Vitals

| Métrique | Valeur | Score |
|---|---:|---:|
| First Contentful Paint | 0.8 s | 1.00 ✅ |
| Largest Contentful Paint | 3.0 s | 0.79 ⚠ |
| Total Blocking Time | 140 ms | 0.95 ✅ |
| Cumulative Layout Shift | 0 | 1.00 ✅ |
| Speed Index | 7.7 s | 0.24 ⚠ |
| Time to Interactive | 3.0 s | 0.96 ✅ |

> Rapport JSON brut sauvegardé dans `docs/lighthouse.json`. Bundle First Load 188 kB (page accueil) ; 87 kB shared chunks. Framer Motion ~35 kB est le poids dominant sur l'accueil.

### Leviers d'amélioration Performance pour atteindre 90+

1. **Lazy-load Framer Motion sur les sections below-the-fold** — `next/dynamic` sur Gallery / Practical / Contact / Footer. Économie ~15-20 kB JS deferred.
2. **Convertir les fade-up Framer en CSS pure** sur sections simples (About, PracticalInfo) — réduit le coût JS animé qui pénalise Speed Index.
3. **Activer `experimental.optimizePackageImports`** dans `next.config.mjs` pour `framer-motion` et `lucide-react` (tree-shake).
4. **Précharger l'image hero** via `<link rel="preload" as="image">` pour gagner ~200 ms sur LCP.

---

## 2 · Grille §13

| # | Critère | Pts max | Score | Preuve / commentaire |
|---|---|---:|---:|---|
| 1 | Charte couleurs respectée (palette accents en CSS vars, usage parcimonieux) | 10 | **10** | 8 vars Glass §3.1 dans `@theme` (`app/globals.css:9-18`). `flame` exclusivement sur CTA primaire + eyebrows + puces formules. Reste `glass-black`/`glass-ink`/`glass-white`/`glass-mute` ≥ 90 % de la surface. |
| 2 | Typographies éditoriales sobres (display + body cohérents) | 10 | **10** | `Fraunces` (display) + `Inter` (body) chargées via `next/font` (`app/layout.tsx:11-22`). Tracking `-0.02em` display, `0.08em` labels, `tabular-nums` tarifs. |
| 3 | Tous les textes du §4 présents tels quels, FR + EN à 100 % parité | 10 | **10** | §4.1, §4.2, §4.3 (`lib/offers.ts`), §4.4, §4.5, §4.6 — tous dans `lib/i18n.ts` typé strict. EN traduits fidèlement, aucun mélange FR/EN dans un même bloc. |
| 4 | 4 formules visibles dans les 2 premières vues (scroll < 1.5x viewport) | 10 | **10** | Hero `min-h-screen`, OffersGrid démarre à ~100vh, cartes visibles à ~110-160vh. Vérifié manuellement. |
| 5 | Double CTA hero fonctionnel + sticky header + FAB persistant | 10 | **10** | Hero double CTA (`components/hero/Hero.tsx`), header `fixed top-0` (`StickyHeader.tsx:42`), FAB visible scroll > 90vh masqué dans footer (`FloatingCTA.tsx`). |
| 6 | Pattern Luigi appliqué (one-pager, ancres, logo répété, contact 2×) | 8 | **8** | One-pager strict, 4 ancres `#lieu / #privatisations / #events / #contact`, marquee "GLASS CLUB · CARRÉ D'OR · CANNES" 2× entre sections, contact 3× (ContactForm + Footer + ReservationDialog). |
| 7 | Stack technique conforme §7 (Next.js 14, TS strict, Tailwind v4, Framer, GSAP) | 8 | **7** | Next.js 14.2 ✅, TS strict + `noUncheckedIndexedAccess` ✅, Tailwind v4 ✅, Framer Motion 11 ✅, shadcn primitives ✅, lucide-react ✅. **GSAP installé mais non utilisé** (R5 PLAN — pin sections sacrifiée pour préserver perf mobile). -1 pt. |
| 8 | Lighthouse mobile : Performance ≥ 90, A11y ≥ 95, SEO ≥ 95 | 10 | **7** | Performance 86 (cible 90, -4), A11y 96 ✅, SEO 100 ✅, BP 100 ✅. -3 pts pour le Performance shy. |
| 9 | Reduced-motion respecté + AA contraste sur tous les textes | 6 | **6** | `prefers-reduced-motion` global (`globals.css:113-121`), Marquee `motion-safe:`, FAB `useReducedMotion()`. Contraste blanc/`#0A0A0A` ≈ 19:1, `glass-mute` sur `#0A0A0A` ≈ 5.4:1 (AA). Lighthouse A11y 96 confirme. |
| 10 | README complet (setup, fonts, crédits Pexels) | 4 | **4** | Setup pnpm, stack, structure pointée vers BRIEF/PLAN, table des 13 crédits photographes. |
| 11 | Code commit propre (≥ 5 commits sémantiques) | 4 | **4** | 16 commits : `chore: project plan` → `feat: scaffold` → `feat: design tokens` → `feat(header)` → `feat(hero)` → `feat(offers)` → `feat(about)` → `feat(void)` → `feat(gallery)` → `feat(practical)` → `feat(contact)` → `feat(footer)` → `feat(fab)` → `feat(motion)` → `feat(i18n)` → `polish: …` → `audit: …`. |
| 12 | Aucun anti-pattern §14 détecté | 10 | **10** | Pas de gradient SaaS, pas de hero "Welcome to the future", pas d'emoji UI, pas de Lottie, pas de cookies popup, pas de carrousel auto-play, overlay 65 % systématique sur photos, Fraunces/Inter (pas de Monoton/Bungee), pas de prix inventé (`lib/offers.ts` source unique), traductions EN fidèles, ancres internes uniquement. |

**Score total : 96 / 100**

---

## 3 · Décisions §14bis tracées

| Cas | Décision prise | Référence |
|---|---|---|
| Logo SVG officiel non extractible | PNG officiel `glass-logo-blanc.png` 5000×5000 utilisé tel quel | `components/header/StickyHeader.tsx:54-62` |
| Pexels images | 13 images téléchargées dans `public/images/`, crédits dans README + `<details>` Footer | `README.md` |
| Webfonts | `font-display: swap` + fallback chain `Georgia` (display) / `system-ui` (sans) | `app/layout.tsx:9-19` |
| No-JS fallback | `<form>` natif HTML5, FAB sacrifiable, sections lisibles sans JS (RSC + SSR) | `components/sections/ContactForm.tsx` |
| Tarif modifié | Source unique `lib/offers.ts` typée strict (OfferId union literal + ctaHref template literal) | `lib/offers.ts` |
| Traduction EN | §4.1 EN repris du BRIEF, §4.6 EN repris du BRIEF + version FR fidèle créée. §4.2 et §4.4 traduits DeepL-grade. | `lib/i18n.ts` |
| Auto-détection navigator | Default FR, swap EN si non-FR après mount, persist localStorage | `lib/locale-context.tsx:30-42` |
| Form sans Resend | Endpoint `/api/contact` → log si pas de `RESEND_API_KEY`, sinon Resend HTTP. Échec → fallback `mailto:` natif | `app/api/contact/route.ts` |
| Pas de tracking | Aucun script tiers (no GA, no FB pixel, no consent banner) | `app/layout.tsx` |
| GSAP pin saccades mobile | **GSAP non utilisé** — pin sections sacrifiée pour Speed Index | — |
| Build Vercel Edge | `runtime = "nodejs"` forcé sur `/api/contact` | `app/api/contact/route.ts:4` |
| Map Google iframe | Remplacée par card adresse + lien sortant Maps Directions (R14 — perf + privacy) | `components/sections/PracticalInfo.tsx:75-110` |

---

## 4 · Risques R1-R15 du PLAN — statut

| # | Risque | Statut |
|---|---|---|
| R1 | Logo SVG non extractible | ✅ Mitigé par PNG officiel |
| R2 | Pexels image cohérente | ✅ 13 images sourcées, palette respectée |
| R3 | Webfonts latence | ✅ `font-display: swap` + fallback chain |
| R4 | Tailwind v4 instable | ✅ v4.2.4 stable, build OK |
| R5 | GSAP perf mobile | ✅ GSAP non utilisé |
| R6 | LCP < 90 | ⚠ Performance 86 — leviers documentés §1 |
| R7 | Form sans Resend | ✅ Fallback mailto fonctionnel |
| R8 | Traductions EN approximatives | ✅ DeepL-grade ou copie BRIEF |
| R9 | Édition prix dispersée | ✅ `lib/offers.ts` source unique |
| R10 | Anti-patterns §14 | ✅ Aucun détecté |
| R11 | Header sticky vs ancres | ✅ `scroll-margin-top: 96px` global |
| R12 | FAB chevauche footer | ✅ IntersectionObserver hide |
| R13 | Build Vercel Edge | ✅ runtime nodejs |
| R14 | Maps API key / coût | ✅ Remplacé par lien sortant |
| R15 | Score < 85 | ✅ 96/100 |

---

## 5 · Livrables vérifiés (§17)

- [x] `pnpm install && pnpm dev` — démarre sans erreur (vérifié plusieurs fois)
- [x] `pnpm build` — sans warning bloquant (188 kB First Load page accueil, 87 kB shared)
- [x] `pnpm lint` + `pnpm typecheck` — verts à chaque commit
- [x] `docs/PLAN.md` — étape 1 §15
- [x] `docs/AUDIT.md` — ce document, étape 7 §15
- [x] `docs/lighthouse.json` — rapport Lighthouse brut
- [x] Repo prêt à `git push` Vercel (config `next.config.mjs` + runtime nodejs sur API)
- [x] Score auto-évalué **96/100** (cible ≥ 85 dépassée)

---

## 6 · Reproduction de l'audit Lighthouse

```bash
# Terminal 1 — serveur prod
pnpm build
pnpm start            # ou : PORT=3010 pnpm start

# Terminal 2 — lighthouse
pnpm dlx lighthouse@12 http://localhost:3000 \
  --quiet \
  --chrome-flags="--headless --no-sandbox" \
  --output=html --output=json \
  --output-path=./docs/lighthouse \
  --only-categories=performance,accessibility,best-practices,seo \
  --form-factor=mobile \
  --throttling-method=simulate
```
