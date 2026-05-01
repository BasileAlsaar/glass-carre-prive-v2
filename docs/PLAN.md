# PLAN — `glass-carre-prive` (V2 · maquette privatisations)

> Statut : étape 1 du §15 du BRIEF. Ce document fige la décomposition avant SCAFFOLD.
> Source de vérité : `.claude/BRIEF.md`. En cas de conflit, le BRIEF gagne.

---

## 1 · Objectif (rappel mesurable)

One-pager Next.js 14 qui, en < 10 s et < 2 vues, expose : (a) les 4 formules de privatisation, (b) double CTA `PRIVATISER` / `RÉSERVER`, (c) téléphone + e-mail. Cible Lighthouse mobile ≥ 90/95/95 (Perf/A11y/SEO). Cible auto-éval §13 ≥ 85/100.

---

## 2 · Inventaire des sections (one-pager, ordre exact §6)

| # | Section | Composant racine | Contenu source | Notes clés |
|---|---|---|---|---|
| 0 | Sticky header + langue + double CTA | `components/header/StickyHeader.tsx` + `LanguageSwitch.tsx` | §6 nav · §10 CTAs | Blur backdrop ; visible en permanence |
| 1 | Hero plein écran | `components/hero/Hero.tsx` + `HeroLogo.tsx` | §4.1 + tagline §6 | Photo nuit + overlay 65 % · double CTA |
| 2 | Grille 4 formules | `components/offers/OffersGrid.tsx` + `OfferCard.tsx` | §4.3 | **Doit apparaître dans les 2 premières vues** |
| 3 | Le Lieu (about) | `components/sections/About.tsx` | §4.1 | Photo intérieur miroir + chip Carré d'Or |
| 4 | VOID Acoustics | `components/sections/VoidAcoustics.tsx` | §4.2 | Visuel speaker / vinyl |
| 5 | Galerie lightbox | `components/sections/Gallery.tsx` | photos `/public/images` | Masonry asymétrique, hover scale + grain |
| 6 | Infos pratiques + map | `components/sections/PracticalInfo.tsx` | §4.4 + §4.6 | Carte Maps style noir minimal |
| 7 | Formulaire contact | `components/sections/ContactForm.tsx` + `app/api/contact/route.ts` | §4.5 | mailto fallback + Resend stub si ENV |
| 8 | Footer | inline dans `page.tsx` ou `components/sections/Footer.tsx` | §4.5 + §4.6 + crédits Pexels | Coordonnées + horaires + réseaux |
| FAB | Bouton flottant WhatsApp | `components/cta/FloatingCTA.tsx` | §6 + §10 | Scroll > 100vh, fade out dans footer |
| Marquee | Bandeaux logo répétés inter-sections | `components/motion/Marquee.tsx` | "GLASS CLUB · CARRÉ D'OR · CANNES" | Pause au hover · reduced-motion → static |
| Reservation | Dialog `RÉSERVER` | `components/cta/ReservationDialog.tsx` | §10 | shadcn Dialog · soumission mailto/webhook |

---

## 3 · Dépendances entre sections

```
SCAFFOLD
   └── DESIGN TOKENS (globals.css §3.1)
          ├── shadcn primitives (Button, Dialog, Form, Input, Select, Sheet)
          ├── lib/i18n.ts          ← bloque toute section qui consomme du copy
          ├── lib/offers.ts        ← bloque OffersGrid (cf. §14bis : prix = constantes)
          └── components/ui/*

Ordre de build (1 commit par section, §15.4) :
  Header → Hero → OffersGrid → About → VoidAcoustics → Gallery
        → PracticalInfo → ContactForm → Footer → FloatingCTA → ReservationDialog → Marquee

i18n (§15.5) appliqué APRÈS toutes les sections, sur copy déjà extrait dans dictionnaires
POLISH (§15.6) en dernier : Framer + GSAP + reduced-motion + focus visible
AUDIT (§15.7) : pnpm build → Lighthouse mobile → docs/AUDIT.md
```

**Règles de séquencement** :
- `lib/offers.ts` et `lib/i18n.ts` créés à l'étape DESIGN TOKENS pour que toute section pioche dedans dès le départ (évite refactor i18n en fin de build).
- `Hero` peut être livré avant que toutes les images Pexels soient téléchargées : il accepte `priority` + `placeholder="blur"` et tolère un fallback `--glass-ink` (cf. §14bis).
- `FloatingCTA` ne dépend que du DOM final pour son IntersectionObserver sur le footer → livré en avant-dernier.
- `ReservationDialog` dépend de shadcn Dialog (à `pnpm dlx shadcn add` au scaffold).

---

## 4 · Stack & paquets à installer (réf §7)

```
runtime   : node 20 LTS, pnpm
framework : next@14.2+, react@18, typescript strict
styling   : tailwindcss@4 (config @theme dans globals.css), shadcn/ui
motion    : framer-motion, gsap (+ ScrollTrigger, dynamic import côté client)
fonts     : next/font → Fraunces (display) + Inter (body) ; fallback system-ui / Georgia
icons     : lucide-react
images    : next/image
qa        : eslint, prettier, @typescript-eslint
```

Pas de Bootstrap / MUI / styled-components / Redux / GraphQL / CMS.

---

## 5 · Données & assets à préparer

| Ressource | Source | Destination | Statut |
|---|---|---|---|
| Logo Glass blanc | fourni | `public/logo/glass-logo-blanc.png` | ✅ présent |
| Logo SVG (idéal) | site source | `public/logo/glass-logo.svg` | ❌ à extraire — fallback wordmark sinon (§14bis) |
| 9 photos Pexels (§9 requêtes 1–9) | pexels.com | `public/images/` | ❌ vide — à télécharger pendant SCAFFOLD |
| Crédits photographes | manuel | footer + `README.md` | à remplir au fil des téléchargements |
| Webfonts Fraunces / Inter | next/font (Google) | runtime | ok via next/font |
| Constantes formules | §4.3 | `lib/offers.ts` | à créer en DESIGN TOKENS |
| Dictionnaires FR/EN | §4 | `lib/i18n.ts` | EN partiel : §4.1 EN fourni, §4.6 EN fourni ; reste à traduire fidèlement |

---

## 6 · i18n — politique de parité

- Switch FR/EN top-left du header (réf Luigi · §5).
- Default FR ; auto-detect navigateur → EN si non-FR (§14bis : pas de redirection forcée).
- Dictionnaire plat `lib/i18n.ts` (pas de next-intl, §12).
- Copy EN existant à reprendre **mot pour mot** : §4.1 EN, §4.6 EN.
- Copy EN à produire fidèlement (DeepL exact, pas d'approximation) pour : §4.2, §4.3 (4 formules), §4.4, §4.5 labels.
- Si une traduction EN reste incomplète au moment du commit i18n → afficher FR avec `lang="fr"` + `// TODO: EN translation` (§14bis), jamais de mélange dans un même bloc.

---

## 7 · CTAs — câblage (réf §10)

- `PRIVATISER` (primaire, flame) : présent en hero · header · FAB · pied de chaque carte formule · footer. Action = scroll vers `#contact-form` + pré-remplit `type d'événement` selon contexte (formule cliquée).
- `RÉSERVER` (secondaire, outline flame) : hero + header. Action = ouverture `ReservationDialog`.
- FAB WhatsApp : visible scroll > 100vh, masqué dans footer (IntersectionObserver), `wa.me/33651662145?text=...`. Mobile = bottom-center full-width 56px ; desktop = bottom-right 64×64. Pulse 4s sauf reduced-motion.

---

## 8 · Animations & motion (réf §11)

- Hero : fade-in logo + tagline stagger 120 ms, ease-out-expo 1 s.
- Cartes formules : fade-up + rotateX 8°→0, stagger 120 ms au scroll-into-view.
- Marquee : 60 s/loop, pause au hover, reduced-motion → static.
- GSAP pin §3 + §4 desktop ≥ 1024px (`useMatchMedia`), désactivé mobile (§14bis saccades).
- Dividers : trait 1 px qui se trace au scroll-into-view (1.2 s).
- Galerie : scale 1.03 + grain overlay 0→0.4 / 400 ms au hover.
- FAB : spring scale 0→1 (stiffness 300, damping 20).
- **Performance** : transform/opacity uniquement. Pas de box-shadow ni filter:blur animés.
- `prefers-reduced-motion: reduce` → toutes les transitions désactivées.

---

## 9 · Accessibilité & SEO (cibles auto-éval)

- Contraste AA garanti par overlay 65 % sur photos (texte blanc) et tokens noirs profonds.
- Focus visible (outline 2 px white offset 4 px) sur tous les CTAs et liens.
- Navigation clavier complète : header, ancres, dialog, formulaire, FAB.
- HTML sémantique : `<header><main><section id="..."><footer>` ; landmarks ARIA seulement si requis.
- No-JS fallback : hero, copy, formules, footer lisibles ; form `<form action="mailto:...">` (§14bis).
- SEO : `metadata` Next 14 (title, description, OG image, canonical, lang alternate FR/EN), `sitemap.ts`, `robots.ts`, JSON-LD `LocalBusiness` (adresse + horaires §4.4/4.6).
- Images : `next/image` partout, `priority` hero, `loading="lazy"` ailleurs, `alt` descriptifs FR/EN.

---

## 10 · Plan de commits (conventionnels, §15)

```
1. chore: project plan                           ← ce document
2. feat: scaffold next.js + tailwind + shadcn
3. feat: design tokens — colors, fonts, spacing  (+ lib/offers.ts + lib/i18n.ts)
4. feat(header): sticky header + language switch + double cta
5. feat(hero): hero full-bleed + double cta + tagline
6. feat(offers): 4-card pricing grid
7. feat(about): le lieu section
8. feat(void): void acoustics section
9. feat(gallery): masonry lightbox gallery
10. feat(practical): infos pratiques + map
11. feat(contact): form + api route + mailto fallback
12. feat(footer): footer + credits
13. feat(fab): floating whatsapp cta
14. feat(motion): marquee + dividers + section transitions
15. feat(i18n): FR/EN parity
16. polish: animations, reduced-motion, focus states
17. audit: lighthouse + a11y + report (docs/AUDIT.md)
```

À chaque commit : `pnpm lint && pnpm typecheck` verts (§15 fin).

---

## 11 · Risques identifiés & parades

| # | Risque | Probabilité | Impact | Parade |
|---|---|---|---|---|
| R1 | Logo SVG non extractible du site source | moyenne | bas | Wordmark `Glass Club` font display + `// TODO` dans `docs/TODO.md` (§14bis) |
| R2 | Pexels ne renvoie pas de visuel cohérent (palette / RGPD visages) | moyenne | moyen | Élargir la requête, sinon `<div>` `--glass-ink` + commentaire `// IMG MISSING`. Jamais d'IA (§9). |
| R3 | Webfonts Fraunces/Inter latence > 3 s ou 404 | faible | bas | `font-display: swap` + fallback `system-ui` / `Georgia` (§14bis) |
| R4 | Tailwind v4 `@theme` instable au scaffold | faible | moyen | Pin version stable v4, lire release notes au moment du scaffold ; sinon retomber sur v3.4 documenté en README — décision tracée dans `docs/AUDIT.md` |
| R5 | GSAP ScrollTrigger trop lourd → Perf < 90 mobile | moyenne | moyen | `dynamic import` côté client uniquement, pin sections désactivé < 1024px (§14bis) |
| R6 | Lighthouse Perf < 90 (LCP hero) | moyenne | élevé | `priority` + `sizes` corrects sur image hero, `next/image` partout, code-split GSAP, `font-display: swap` |
| R7 | Form sans backend Resend → soumission perdue | élevée (par défaut) | moyen | Fallback `mailto:` qui pré-remplit sujet + corps (§14bis). Webhook activé seulement si `RESEND_API_KEY` en ENV. |
| R8 | Traductions EN approximatives (anti-pattern §14) | moyenne | moyen | EN existant repris mot pour mot ; reste = DeepL exact ; sinon `// TODO: EN translation` + fallback FR avec `lang="fr"` |
| R9 | Édition future des prix dispersée dans le JSX | moyenne | bas | Source unique : `lib/offers.ts` typé (§14bis) |
| R10 | Anti-patterns §14 introduits par habitude (gradients SaaS, hero "Welcome to…") | élevée | élevé | Checklist §14 jouée à chaque revue de section avant commit |
| R11 | Header sticky qui masque les ancres au scroll | moyenne | bas | `scroll-margin-top` sur les `<section id>` égal à la hauteur du header |
| R12 | FAB qui chevauche le formulaire mobile | moyenne | bas | IntersectionObserver sur `#contact-form` ET footer → fade out sur les deux |
| R13 | Build Vercel échoue en Edge runtime sur API contact | faible | moyen | Forcer `runtime = 'nodejs'` sur `app/api/contact/route.ts` (§14bis) + doc README |
| R14 | Carte Google Maps bloquée par CSP / coût clé API | faible | bas | Iframe Maps embed (sans clé) ou image statique stylée — décision au moment de la section |
| R15 | Score §13 < 85 | moyenne | élevé | Audit intermédiaire après §15.6 POLISH ; correctifs ciblés sur les critères les plus pondérés (Charte/Typo/Copy/Formules/CTAs/Lighthouse = 60 pts cumulés) |

---

## 12 · Critères "Definition of Done" du PLAN

- [x] Toutes les sections du §6 sont listées avec composant racine et contenu source.
- [x] Ordre de build et dépendances explicites, alignés sur §15.
- [x] Risques §14bis couverts par une parade nommée.
- [x] Politique i18n, motion, a11y, SEO posée avant le code.
- [x] Aucun copy §4 réécrit ici (intouchable).
- [x] Aucun anti-pattern §14 introduit dans la stratégie.

---

> **Prochaine étape (en attente de OK)** : §15.2 SCAFFOLD — `pnpm create next-app` (TS strict, App Router, ESLint, sans `src/`), Tailwind v4, shadcn init + Button/Dialog/Form/Input/Select/Sheet, fonts Fraunces + Inter, structure de dossiers §12, premier commit `feat: scaffold next.js + tailwind + shadcn`.
