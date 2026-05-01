# PROMPT CLAUDE CODE — `GLASS — CARRÉ PRIVÉ`
### Site vitrine premium pour Glass Club Cannes (maquette n°2, axée privatisations)

---

## 0 · VARIABLES DU PROJET *(modifie ces valeurs pour transposer ce prompt à un autre lieu)*

```yaml
client_name:        "Glass Club"
project_codename:   "glass-carre-prive"
city:               "Cannes"
neighborhood:       "Carré d'Or"
landmark_distance:  "3 minutes à pied du Palais des Festivals"
phone:              "+33 6 51 66 21 45"
email:              "caroline@glasscannes.com"
whatsapp:           "33651662145"
address:            "6 rue des Frères Pradignac, 06400 Cannes"
instagram:          "@glass_club_cannes"
languages:          ["fr", "en"]
primary_cta:        "PRIVATISER"
secondary_cta:      "RÉSERVER"
fab_action:         "whatsapp"   # ou "phone" / "email"
```

> Si tu transposes ce prompt à un autre lieu, remplace ces valeurs et le copy §4. Le reste de l'architecture reste réutilisable.

---

## 0bis · COMMENT UTILISER CE PROMPT

Tu es Claude Code, opérant en CLI. Lis l'intégralité de ce brief **avant** d'écrire la moindre ligne. Ne pose pas de question si la réponse est dans le brief. Avance par étapes (`PLAN → SCAFFOLD → BUILD → POLISH → AUDIT`), commit à chaque étape, et restitue à la fin un rapport d'auto-évaluation contre la grille du §13.

> **Nom de code projet** : `glass-carre-prive`
> **Statut** : maquette concurrente (la v1 existe en parallèle, ne pas y toucher)
> **Langue UI** : FR par défaut, EN en switch (parité 100 %)
> **Format de livraison** : monorepo Next.js 14 prêt à `pnpm dev` / `pnpm build`

---

## 1 · RÔLE

Tu es un **architecte front-end senior spécialisé en sites éditoriaux luxe** (hospitality, fashion, art galleries). Tu maîtrises Next.js 14 App Router, TypeScript strict, Tailwind v4, Framer Motion, GSAP ScrollTrigger, et l'écosystème shadcn/ui. Tu connais les conventions de **21st.dev** et tu sais sélectionner des composants premium plutôt que de les réinventer. Tu écris du code lisible, accessible (WCAG AA), performant (Lighthouse ≥ 90 sur les 4 axes en mobile).

Tu n'es **pas** un générateur de templates SaaS. Tu refuses les gradients violets, les emojis, les hero "AI startup", les mockups génériques.

---

## 2 · OBJECTIF UNIQUE & MESURABLE

Construire une **landing page one-pager** pour Glass Club Cannes qui :

1. Convertit en priorité sur la **privatisation** (CTA primaire) et secondairement sur la **réservation de table** (CTA secondaire), via un **double CTA hero** + un **CTA flottant persistant** visible à 100 % du scroll.
2. Affiche les **4 formules de privatisation** dans la première vue accessible au scroll (au plus 1 swipe / 1 scroll depuis le hero).
3. Reproduit fidèlement la **charte Glass Club** (couleurs, typos, ton éditorial 70s/chromatique).
4. Reprend **mot pour mot** les textes clés du site actuel (cf. §4) — interdiction d'inventer de l'information factuelle.
5. S'inspire de la **forme** de https://luigicannes.com (one-pager éditorial, logo-leitmotiv, RESERVATIONS sticky top-right, ancres bas de page) sans copier-coller le visuel.

**Critère d'acceptation final** : un visiteur arrivant sur le site doit pouvoir, en moins de 10 secondes et sans scroll au-delà de 2 vues : (a) voir les 4 formules de prix, (b) cliquer sur "Privatiser" OU "Réserver", (c) trouver le téléphone et le mail.

---

## 3 · CHARTE GRAPHIQUE — DIRECTION VISUELLE

> **Important** : le ton visuel dominant est celui de **glasscannes.com** — dark, minimal, éditorial, photo-led. Pas de 70s psyché, pas de mood board chromatique, pas de gradients liquides. Les couleurs ci-dessous sont une **palette d'accents** issue de l'identité Glass à utiliser avec parcimonie pour CTAs, hover, micro-détails — **pas** comme langage visuel dominant.

### 3.1 · Palette d'accents (à intégrer en CSS vars)

```
/* Base — domine ~85 % de la surface */
--glass-black:     #0A0A0A   /* fond principal, sections */
--glass-ink:       #141414   /* élévation cards, surfaces secondaires */
--glass-white:     #FFFFFF   /* texte principal sur sombre */
--glass-mute:      #8A8A8A   /* texte secondaire, labels */

/* Accents Glass — issus de l'identité, à utiliser uniquement pour CTAs, hover, traits */
--glass-flame:     #F2501F   /* CTA primaire "PRIVATISER" */
--glass-burgundy:  #641707   /* hover CTA, traits éditoriaux */
--glass-blood:     #8B0404   /* accent profond, soulignements */
--glass-rose:      #F77CA0   /* hover doux, focus states */
```

**Règle stricte** : un seul accent à la fois par bloc. Le `flame` est réservé au CTA primaire et à 2-3 micro-éléments éditoriaux (chiffre clé, soulignement). Le reste du site est **noir, blanc, photo**. C'est l'image qui porte la couleur, pas l'UI.

### 3.2 · Typographies — éditorial moderne

Choisis une combinaison sobre et éditoriale, **pas** de Prisma/Voguer (réservés au logo et supports print). Stack recommandée :

| Usage | Font | Source |
|---|---|---|
| Display / titres hero | **Fraunces** ou **PP Editorial New** | Google Fonts / fontshare |
| Body / UI / nav | **Inter** ou **Söhne** ou **Geist** | Google Fonts / local |
| Logo wordmark | logo Glass existant en SVG (extraire du site) | asset |

Tracking serré sur les capitales (`letter-spacing: -0.02em` sur display, `0.08em` sur les labels uppercase). Les chiffres en variant tabular pour les tarifs.

### 3.3 · Univers visuel (mood)

- **Photographie reine** : nuit, clair-obscur, peu de visages identifiables, ambiance club premium
- **Surfaces noires profondes** avec léger grain ou bruit subtil pour éviter l'aplat plat
- **Filets fins blancs ou flame** comme dividers (1px, jamais d'ombres lourdes)
- **Mouvement discret** : entrées en fade, parallax léger, marquee texte. Aucun effet "psyché"
- Référence d'ambiance : sites de palaces, restos étoilés Croisette, éditoriaux Vogue Hommes nuit

---

## 4 · CONTENU TEXTUEL — À REPRENDRE TEL QUEL

> **Règle absolue** : tu ne reformules pas, tu ne traduis pas approximativement. Le contenu factuel ci-dessous provient de glasscannes.com et doit apparaître **mot pour mot** sur le site. Tu peux ajouter des micro-titres, des labels d'UI ("VOIR LA FORMULE", "DEMANDER UN DEVIS"), mais le copy ci-dessous est intouchable.

### 4.1 · Pitch principal (hero / about)

> **FR** — Au cœur de Cannes, le Glass est un bar-club à taille humaine, pensé pour se retrouver et prolonger la nuit dans une atmosphère élégante et décontractée. Situé à seulement 3 minutes à pied du Palais des Festivals, à l'entrée de l'emblématique Carré d'Or, l'établissement bénéficie d'une localisation premium. Entièrement rénové en 2025, le lieu mêle des inspirations des années 70, des matières miroirs et des panneaux acoustiques lumineux, créant un décor immersif et immédiatement identifiable.

> **EN** — Located just 3 minutes from the Palais des Festivals, Glass Club is a cocktail bar and club in Cannes, ideal for private events, corporate events and venue privatization. Perfect for afterworks, corporate parties, brand launches, networking cocktails, birthdays and private parties, especially during major events such as MIPIM, Cannes Lions, MIPCOM, MAPIC, ILTM, TFWA and the Cannes Film Festival.

### 4.2 · Bloc "VOID Acoustics"

> **LE GLASS — LÀ OÙ LE SON DEVIENT SENSATION**
> Au Glass, chaque note résonne avec élégance grâce à notre système audio signé **Void Acoustics**. Véritable référence dans le monde du son haut de gamme, Void allie design audacieux et précision sonore pour offrir une immersion totale à nos clients.

### 4.3 · Les 4 formules de privatisation (CŒUR DU SITE — À AFFICHER EN GRID DÈS LE FOLD 2)

#### Formule 1 — **PRIVATISATION SÈCHE** *(21h–4h)*
- Mise à disposition exclusive d'une terrasse jusqu'à 30 personnes
- Agent de sécurité dédié
- Hôtesse d'accueil professionnelle
- *Optionnel* : DJ set personnalisé, service traiteur
- *Non inclus* : boissons (à fournir), aucun stock disponible
- **Tarif : à partir de 3 900 € HT**

#### Formule 2 — **APÉRO** *(17h–20h)*
- 2 consommations par invité (vin, bière, champagne ou prosecco)
- Planches fromages & charcuteries
- DJ, hôte(sse) d'accueil, 1 agent de sécurité, 2 barmans, 1 serveur
- Bracelets nominatifs, stockage sécurisé, wifi, climatisation
- Terrasse extérieure (jusqu'à 30 personnes)
- **20–50 personnes : 2 800 € HT** *(open bar 1h en option : +1 000 €)*
- **50–80 personnes : 3 500 € HT** *(open bar 1h en option : +1 500 €)*

#### Formule 3 — **ALL INCLUSIVE** *(19h–02h)* — *20 à 50 personnes*
- DJ, barmans & serveurs professionnels
- **200 tickets boissons** (cocktails, bière, soft…)
- Hôte(sse) d'accueil + hôte(sse) vestiaire
- Deux agents de sécurité, bracelets nominatifs
- Stockage sécurisé, wifi, clim, terrasse extérieure (30 pax)
- *Option open bar* : +1 000 € (1h) / +1 600 € (2h)
- **Tarif : 6 700 € HT**

#### Formule 4 — **ALL INCLUSIVE** *(19h–05h)* — *50 à 80 personnes*
- DJ, barmans & serveurs professionnels
- **320 tickets boissons** (cocktails, bière, vin…)
- Hôte(sse) d'accueil + hôte vestiaire
- Deux agents de sécurité, bracelets nominatifs
- Stockage sécurisé, wifi, clim, terrasse privatisée (30 pax)
- *Option open bar* : +1 200 € (1h) / +2 000 € (2h)
- **Tarif : 8 380 € HT**

### 4.4 · Infos pratiques

- **Capacité** : jusqu'à 80 pax
- **Accès** : 3 min à pied du Palais des Festivals, 1 min de la Croisette
- **Terrasse** 30 personnes (jusqu'à 2h30 du matin)
- **Branding possible**
- **Horaire** : 17h–05h, 7/7
- **Classement** : ERP Type P
- **Son** : système VOID Acoustics
- **Bilan 2025** : 104 événements dont 11 privatisations

### 4.5 · Contact (footer + CTA)

```
+33 6 51 66 21 45
caroline@glasscannes.com
6 rue des Frères Pradignac, 06400 Cannes
WhatsApp : wa.me/33651662145
Instagram : @glass_club_cannes
LinkedIn : /in/glasscannes
Facebook : Glass-Bar
```

### 4.6 · Horaires

> Open Thursday to Saturday from 12 AM to 7 AM. Open every day during major congresses such as: **MIPIM, MIPCOM, Cannes Lions, MAPIC, ILTM, TFWA, MIDEM, Festival de Cannes.**

---

## 5 · RÉFÉRENCE DE FORME — luigicannes.com

**Tu n'imites pas le visuel** (Luigi est crème/dorure/Italie ; Glass est rouge/orange/club 70s). Tu reprends la **structure et les patterns d'interaction** :

| Pattern Luigi | Adaptation Glass |
|---|---|
| One-pager avec ancres internes | ✅ identique |
| Logo "FRAME LUIGI" répété en motif graphique | Logo `GLASS CLUB` (Prisma) répété en bandeaux marquee verticaux entre sections |
| Top-right `RESERVATIONS` sticky | Top-right **DOUBLE CTA** : `PRIVATISER` (primaire flame) + `RÉSERVER` (secondaire outline) |
| Ancres bas de page : A PROPOS / PIANO-BAR / EN CUISINE / CONTACT | Ancres : `LE LIEU` / `PRIVATISATIONS` / `EVENTS` / `CONTACT` |
| FR/EN switch top-left | ✅ identique |
| Sections séparées par image full-bleed récurrente | Sections séparées par **photo nuit full-bleed** + filet 1px flame, pas de gradient |
| Bloc contact répété 2× (milieu et bas) | ✅ identique |
| Typo très peu hiérarchisée, ultra-éditoriale | ✅ Prisma pour les hero-titles, Questrial pour le reste |

---

## 6 · ARCHITECTURE DU ONE-PAGER (ordre exact)

```
┌─────────────────────────────────────────────────┐
│ STICKY HEADER — toujours visible               │
│   [GLASS CLUB logo]   [LE LIEU][PRIVAT.][EVENTS][CONTACT]   [FR/EN]  [PRIVATISER ▶][RÉSERVER]
└─────────────────────────────────────────────────┘
│
│  § 1 — HERO PLEIN ÉCRAN
│        Vidéo/photo nuit + overlay noir 65%
│        Logo SVG Glass Club (issu du site original) + tagline
│        Tagline display: "Bar-club privatisable au cœur du Carré d'Or"
│        DOUBLE CTA :  [PRIVATISER VOTRE SOIRÉE →]   [RÉSERVER UNE TABLE]
│        Footer hero: "À 3 min du Palais des Festivals · 17h–05h · 7/7"
│
│  § 2 — GRILLE DES 4 FORMULES (immédiatement après hero, sans transition longue)
│        Bento 4 cartes (2x2 desktop, stack mobile)
│        Chaque carte : nom formule · plage horaire · capacité · tarif HT · CTA "VOIR LE DÉTAIL"
│        Ouverture en modale ou expansion in-place du détail complet
│
│  § 3 — LE LIEU (about)
│        Texte 4.1 + photo intérieur miroir + chip "Carré d'Or"
│
│  § 4 — VOID ACOUSTICS
│        Bloc 4.2 + visuel speaker / vinyl du mood board
│
│  § 5 — GALERIE (lightbox)
│        9 images en grille asymétrique, hover scale + grain
│
│  § 6 — INFOS PRATIQUES
│        Bloc 4.4 en list pictogramme + carte Google Maps minimaliste (style noir)
│
│  § 7 — FORMULAIRE CONTACT PRIVATISATION
│        Champs: nom, email, téléphone, type d'événement (select), date, message
│        Soumission → mailto: caroline@glasscannes.com OU webhook Resend si ENV fourni
│
│  § 8 — FOOTER
│        Coordonnées 4.5 + horaires 4.6 + réseaux + mentions légales
│
└── BOUTON FLOTTANT FAB BOTTOM-RIGHT ──────────────
    Toujours visible dès scroll > 100vh.
    Pastille flame #F2501F, icône WhatsApp + label "PRIVATISER"
    Clic → ancre vers § 7 + ouverture WhatsApp
```

---

## 6bis · EXEMPLES DE RENDU ATTENDU *(verrous visuels)*

### 6bis.1 · Carte formule — JSX cible (à respecter en structure et tokens)

```tsx
// components/offers/OfferCard.tsx
import { ArrowRight } from "lucide-react";

type OfferCardProps = {
  name: string;          // ex: "ALL INCLUSIVE"
  schedule: string;      // ex: "19h–02h"
  capacity: string;      // ex: "20 à 50 personnes"
  highlights: string[];  // 4-5 puces max
  price: string;         // ex: "6 700 € HT"
  ctaHref: string;       // "#contact-form?type=all-inclusive-50"
};

export function OfferCard({ name, schedule, capacity, highlights, price, ctaHref }: OfferCardProps) {
  return (
    <article className="group relative flex flex-col bg-[var(--glass-ink)] border border-white/8 p-8 md:p-10 transition-colors hover:border-[var(--glass-flame)]/40">
      <header className="flex items-baseline justify-between border-b border-white/10 pb-4">
        <h3 className="font-display text-2xl tracking-tight text-white">{name}</h3>
        <span className="text-xs uppercase tracking-[0.18em] text-white/50">{schedule}</span>
      </header>
      <p className="mt-3 text-sm text-white/60">{capacity}</p>
      <ul className="mt-6 space-y-2 text-sm text-white/80">
        {highlights.map((h) => (
          <li key={h} className="flex gap-2 before:mt-2 before:block before:h-px before:w-3 before:flex-none before:bg-[var(--glass-flame)]">
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <footer className="mt-auto pt-8 flex items-end justify-between">
        <span className="font-display text-3xl tabular-nums text-white">{price}</span>
        <a href={ctaHref} className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-[var(--glass-flame)] hover:gap-3 transition-all">
          Privatiser <ArrowRight size={14} />
        </a>
      </footer>
    </article>
  );
}
```

**À retenir** : `font-display` sur les titres et prix · accent `flame` réservé au filet de puce + label CTA · `tabular-nums` sur les prix · bordure 1px qui s'illumine au hover · pas de shadow.

### 6bis.2 · Hero — bon vs mauvais

✅ **BON** :
```
┌────────────────────────────────────────────────┐
│ [logo Glass]  LE LIEU · PRIVATISATIONS · …  FR/EN  [PRIVATISER ▶][RÉSERVER]
│
│         photo nuit, clair-obscur, overlay noir 65 %
│
│              GLASS CLUB
│         Bar-club privatisable
│         au cœur du Carré d'Or
│
│      [PRIVATISER VOTRE SOIRÉE →]   [RÉSERVER UNE TABLE]
│
│      À 3 min du Palais des Festivals · 17h–05h · 7/7
└────────────────────────────────────────────────┘
```

❌ **MAUVAIS** (à refuser net) :
- Hero centré "Welcome to the future of nightlife" en gradient violet/cyan
- Vidéo loop avec mannequins qui sourient en plan rapproché
- 3 CTAs ou plus, hiérarchie visuelle cassée
- Texte blanc directement sur photo sans overlay → contraste AA non atteint

### 6bis.3 · FAB — comportement précis

```
État initial (scroll < 100vh):  invisible (opacity 0, pointer-events none)
État actif (scroll ≥ 100vh):    visible bottom-right, 64×64px, fond flame, icône WhatsApp blanc
Hover/focus:                    scale(1.05), outline 2px white offset 4px (a11y)
Footer atteint:                 fade out (intersect observer sur footer)
Mobile (≤ 768px):              bottom-center, full-width 56px de haut, label "PRIVATISER" visible
Reduced motion:                 pas de pulse, transitions instantanées
```

---

## 7 · STACK TECHNIQUE OBLIGATOIRE

```
- Next.js 14.2+ (App Router, RSC)
- TypeScript strict
- Tailwind CSS v4 (configuration via @theme dans globals.css)
- shadcn/ui (Button, Dialog, Form, Input, Select, Sheet)
- Framer Motion (animations d'entrée, stagger, layout)
- GSAP + ScrollTrigger (parallax hero, marquee horizontal, pin sections)
- next/font pour les webfonts éditoriales (Fraunces / Inter ou équivalents)
- next/image pour toutes les photos (priority sur hero)
- lucide-react pour les icônes
- pnpm pour la gestion de paquets
- ESLint + Prettier configurés
- Node 20 LTS minimum
```

**Pas de** : Bootstrap, MUI, styled-components, Redux, GraphQL, CMS headless. C'est statique.

---

## 8 · COMPOSANTS À PIOCHER SUR 21st.dev

Va sur https://21st.dev et **adapte** (ne copie pas brut) ces patterns. Si un composant n'existe pas tel quel, recompose à partir de plusieurs primitives.

| Section | Composant 21st.dev recherché | Tag de recherche |
|---|---|---|
| Header sticky | "Sticky Header with Blur Backdrop" | `header`, `sticky`, `blur` |
| Hero double CTA | "Hero Split CTA" / "Cinematic Hero" | `hero`, `dual-cta` |
| Grille formules | "Bento Grid Pricing" / "Feature Cards" | `bento`, `pricing`, `cards` |
| Marquee logo | "Vertical / Horizontal Marquee" | `marquee`, `infinite-scroll` |
| Galerie | "Masonry Lightbox Gallery" | `gallery`, `lightbox`, `masonry` |
| FAB persistant | "Floating Action Button" | `fab`, `floating`, `cta` |
| Form contact | "Multi-step Contact Form" / shadcn Form | `form`, `contact` |
| Section transition | "Image Divider Full-Bleed" / "Cinematic Section Break" | `divider`, `cinematic`, `image` |

À chaque emprunt, **note dans un commentaire** la source : `// adapted from 21st.dev/components/<slug>`.

---

## 9 · BANQUE D'IMAGES — Pexels (https://www.pexels.com/fr)

**Aucune image AI-générée.** Aucun stock générique "réunion souriante". Tu téléverses tout en `/public/images/` et tu utilises `next/image` avec `priority` sur le hero.

Requêtes Pexels à effectuer (sélectionner 3–5 images max par requête, critères ci-dessous) :

```
1. "nightclub bokeh red"          → hero option A
2. "cocktail bar ambient lighting" → hero option B  
3. "dj booth crowd hands up"      → section events
4. "champagne pour slow motion"   → divider
5. "disco mirror ball blur"       → galerie
6. "vinyl record macro"           → section VOID Acoustics
7. "cannes croisette night"       → section Le Lieu
8. "luxury terrace evening"       → terrasse
9. "smoke neon abstract"          → transition
```

**Critères de tri** :
- Grain visible / texture analogique > 4K plat
- Tons rouges, oranges, ambrés, noirs profonds (cohérent palette)
- **Aucun visage net identifiable** au premier plan (RGPD + élégance)
- Format paysage 16:9 ou portrait 4:5 (jamais 1:1 hero)

Place les **crédits photographe Pexels** en bas de page dans une section discrete `Crédits photo`.

---

## 10 · CTAs & RÉSERVATION — Logique exacte

### CTA primaire — `PRIVATISER`
- Couleur : fond `--glass-flame` (#F2501F), texte blanc
- Action : scroll vers `#contact-form` (§ 7) + pré-remplit le champ "type d'événement" = "Privatisation"
- Présent : hero, header sticky, FAB, fin de chaque carte formule, footer

### CTA secondaire — `RÉSERVER`
- Couleur : outline `--glass-flame` 1.5px, texte flame, fond transparent
- Action : ouvre une `<Dialog>` shadcn avec :
  - Choix nb de personnes
  - Date (calendrier)
  - Créneau (jeudi/vendredi/samedi 00h–07h ou "événement spécial")
  - Coordonnées
  - Soumission → `mailto:` ou webhook
- Présent : hero, header sticky

### FAB persistant — `WhatsApp PRIVATISER`
- Pastille ronde 64px en `bottom-right` desktop, `bottom-center` mobile
- Apparait après 100vh de scroll, disparait dans le footer
- Animation pulse subtile (scale 1 → 1.05) toutes les 4s
- Clic mobile : ouvre `https://wa.me/33651662145?text=Bonjour%2C%20je%20souhaite%20privatiser%20le%20Glass%20Club`
- Clic desktop : même URL en nouvel onglet

---

## 11 · ANIMATIONS — Règles précises

```
- Hero entrance: fade-in logo SVG + tagline stagger (delay 120ms), 1s ease-out-expo
- Cartes formules: fade-up + slight rotate-x (8deg → 0), stagger 120ms au scroll-into-view
- Marquee texte "GLASS CLUB · CARRÉ D'OR · CANNES": défilement infini horizontal, 60s/loop, pause au hover
- Sections: pin GSAP sur §3 et §4 pour effet "step-by-step" desktop uniquement
- Dividers: filet 1px qui se trace de gauche à droite au scroll-into-view (1.2s)
- Hover photos galerie: scale 1.03 + grain overlay opacity 0→0.4 en 400ms
- FAB: scale 0 → 1 avec spring (stiffness 300, damping 20) à l'apparition
- Réduction motion: respecter `prefers-reduced-motion: reduce` (toutes animations désactivées)
```

**Performance** : aucune animation n'utilise `box-shadow` ou `filter: blur()` animés. Préférer `transform` et `opacity`.

---

## 12 · STRUCTURE DE FICHIERS ATTENDUE

```
glass-carre-prive/
├── app/
│   ├── layout.tsx              # fonts + metadata SEO + analytics placeholder
│   ├── page.tsx                # one-pager — assemble toutes les sections
│   ├── globals.css             # @theme tokens + base
│   └── api/
│       └── contact/route.ts    # endpoint POST formulaire (Resend stub)
├── components/
│   ├── header/
│   │   ├── StickyHeader.tsx
│   │   └── LanguageSwitch.tsx
│   ├── hero/
│   │   ├── Hero.tsx
│   │   └── HeroLogo.tsx        # logo SVG Glass + tagline
│   ├── offers/
│   │   ├── OffersGrid.tsx
│   │   └── OfferCard.tsx
│   ├── sections/
│   │   ├── About.tsx
│   │   ├── VoidAcoustics.tsx
│   │   ├── Gallery.tsx
│   │   ├── PracticalInfo.tsx
│   │   └── ContactForm.tsx
│   ├── ui/                     # shadcn primitives
│   ├── motion/
│   │   ├── Marquee.tsx
│   │   └── GradientDivider.tsx
│   └── cta/
│       ├── FloatingCTA.tsx
│       └── ReservationDialog.tsx
├── lib/
│   ├── i18n.ts                 # dictionnaire FR/EN simple (pas next-intl)
│   └── utils.ts
├── public/
│   ├── fonts/                  # webfonts éditoriales (Fraunces, Inter, etc.)
│   ├── logo/                   # SVG Glass Club extrait du site
│   └── images/                 # toutes les photos Pexels (renommées)
├── README.md                   # setup, licences fonts, crédits Pexels, scripts
├── tailwind.config.ts
├── tsconfig.json
└── package.json
```

---

## 13 · GRILLE D'AUTO-ÉVALUATION (à exécuter en fin de build)

Évalue ton propre livrable sur 100 points. **Cible minimum : 85.**

| Critère | Pts |
|---|---|
| Charte couleurs respectée (palette accents en CSS vars, usage parcimonieux) | 10 |
| Typographies éditoriales sobres appliquées (display + body cohérents) | 10 |
| Tous les textes du §4 présents tels quels, FR + EN à 100 % parité | 10 |
| 4 formules visibles dans les 2 premières vues (vérification scroll < 1.5x viewport) | 10 |
| Double CTA hero fonctionnel + sticky header + FAB persistant | 10 |
| Pattern Luigi appliqué (one-pager, ancres, logo répété, contact 2×) | 8 |
| Stack technique conforme §7 (Next.js, TS strict, Tailwind v4, Framer, GSAP) | 8 |
| Lighthouse mobile : Performance ≥ 90, A11y ≥ 95, SEO ≥ 95 | 10 |
| Reduced-motion respecté + AA contraste sur tous les textes | 6 |
| README complet (setup, fonts à acheter, crédits Pexels) | 4 |
| Code commit propre (≥ 5 commits sémantiques) | 4 |
| Aucun anti-pattern §14 détecté | 10 |

**Reporte ce tableau rempli en fin de session, avec preuves (screenshots Lighthouse, captures sections).**

---

## 14 · ANTI-PATTERNS — REFUS ABSOLU

❌ Gradients violet/cyan SaaS-style
❌ Hero centré "Build the future of X"
❌ Emojis dans l'UI (sauf si demandé par client)
❌ Stock photos "business meeting handshake"
❌ Lottie animations génériques
❌ Cookies popup intrusive en première vue
❌ Carrousel auto-play infini sur le hero
❌ Texte blanc sur photo non-flouté/non-overlay → contraste cassé
❌ Police décorative (Monoton, Bungee, etc.) en titre — rester sur éditorial sobre
❌ Inventer un nom de DJ, un événement futur, un prix non listé
❌ Traduire approximativement le copy FR en EN — utiliser les blocs EN fournis ou DeepL exact
❌ Linker vers des pages internes inexistantes (one-pager strict)

---

## 14bis · CAS LIMITES & PROTOCOLES DE FALLBACK

Pour chaque cas, applique le protocole indiqué après `→` sans demander confirmation.

| Cas | Protocole d'action |
|---|---|
| Logo SVG Glass non extractible du site source | → Crée un placeholder typographique sobre (wordmark `Glass Club` en font display, letter-spacing -0.02em). Note `// TODO: replace with official SVG logo` + ouvre une issue dans `docs/TODO.md`. |
| Pexels ne renvoie pas l'image attendue (req §9) | → Élargis la requête (ex : "nightclub bokeh red" → "nightclub bokeh"). Si toujours rien : place un `<div>` avec couleur de fond `--glass-ink` + commentaire `// IMG MISSING: <query>`. Ne génère **jamais** d'image AI. |
| Webfont qui ne charge pas (latence > 3s ou 404) | → Fallback automatique sur `system-ui` pour body et `Georgia, serif` pour display. Le rendu doit rester lisible et hiérarchisé même sans webfont. Test avec `font-display: swap`. |
| JavaScript désactivé (no-JS) | → Hero, copy, formules, footer doivent rester lisibles et navigables (HTML sémantique + CSS only). FAB et animations sont sacrifiables ; le formulaire `<form action="mailto:...">` reste fonctionnel en fallback. |
| Tarif d'une formule modifié | → Ne touche pas au code. Tous les prix vivent dans `lib/offers.ts` comme constantes typées : `export const OFFERS: Offer[] = [...]`. Une modif = une ligne de constante. |
| Traduction EN incomplète sur un bloc | → Affiche le FR avec un attribut `lang="fr"` explicite + `// TODO: EN translation` en commentaire. Ne fais **pas** de traduction approximative. Pas de mélange FR/EN dans un même bloc visible. |
| Utilisateur en dehors de FR/EN (auto-détection navigateur) | → Default sur EN. Switch FR/EN reste accessible top-left. Pas de dialog d'auto-redirection. |
| Form contact soumis sans backend Resend configuré | → Fallback `mailto:` qui pré-remplit sujet + corps avec les valeurs du formulaire, ouverture dans le client mail natif. |
| Cookies / tracking | → Aucun script tiers par défaut (pas de GA, pas de FB pixel). Si demandé plus tard, implémentation conditionnée à un consentement explicite. Banner cookies seulement si analytics activées. |
| Lighthouse mobile < 90 sur Performance | → Audit en `pnpm build && pnpm start` puis Lighthouse mobile. Leviers prioritaires : `next/image` priority hero, `loading="lazy"` partout ailleurs, code-split GSAP en dynamic import, `font-display: swap`. Reporte les scores avant/après dans `docs/AUDIT.md`. |
| Section §6 demande pin GSAP mais saccades sur mobile | → Désactive le pin sous 1024px (`useMatchMedia`). Sur mobile, scroll natif uniquement. |
| Build qui échoue sur Vercel (Edge runtime) | → Force `runtime = 'nodejs'` sur les routes API. Documente dans le README. |

---

## 15 · WORKFLOW CLAUDE CODE — ÉTAPES

1. **PLAN** (commit `chore: project plan`)
   Crée `docs/PLAN.md` qui liste les sections, dépendances, ordre de build, risques.

2. **SCAFFOLD** (commit `feat: scaffold next.js + tailwind + shadcn`)
   Init Next.js 14, configure Tailwind v4, installe shadcn primitives, ajoute fonts.

3. **DESIGN TOKENS** (commit `feat: design tokens — colors, fonts, spacing`)
   Crée `globals.css` avec les 9 couleurs en CSS vars + typo scales.

4. **SECTIONS UNE PAR UNE** (1 commit par section)
   Header → Hero → OffersGrid → About → VoidAcoustics → Gallery → PracticalInfo → ContactForm → Footer → FloatingCTA.

5. **i18n** (commit `feat: FR/EN parity`)
   Implémente le switch et duplique tous les strings.

6. **POLISH** (commit `polish: animations, reduced-motion, focus states`)
   Framer + GSAP + accessibilité clavier.

7. **AUDIT** (commit `audit: lighthouse + a11y + report`)
   Run `pnpm build`, screenshot Lighthouse mobile, remplis la grille §13, dépose dans `docs/AUDIT.md`.

À chaque étape : `pnpm lint && pnpm typecheck` doivent passer **vert**.

---

## 16 · QUESTIONS QUE TU NE POSES PAS

- "Quelle est la palette ?" → §3.1 (accents Glass sur base noire)
- "Quels textes utiliser ?" → §4
- "Quelle structure ?" → §6
- "Quelle stack ?" → §7
- "Où trouver les images ?" → §9

Si une info **réellement** manque (ex : version SVG du logo Glass non extractible), tu utilises un placeholder typographique sobre et tu notes dans le README.

---

## 17 · LIVRABLE FINAL

Un repo `glass-carre-prive` qui :
1. Tourne en `pnpm install && pnpm dev` sans erreur
2. Build en `pnpm build` sans warning bloquant
3. Contient `docs/PLAN.md` et `docs/AUDIT.md`
4. Score ≥ 85/100 sur la grille §13 (auto-évalué + reporté)
5. Est prêt à être déployé sur Vercel en `git push`

**Go. Commence par le PLAN, montre-le-moi, attends `OK` avant le SCAFFOLD.**
