# Glass Club — Carré Privé (V2)

Maquette n°2 du site Glass Club Cannes, axée privatisations.
One-pager Next.js 14 + Tailwind v4 + shadcn/ui.

## Setup

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build && pnpm start
pnpm lint
pnpm typecheck
```

Node 20 LTS minimum. pnpm 10.x.

## Stack

- Next.js 14 (App Router, RSC, TypeScript strict)
- Tailwind CSS v4 (config `@theme` dans `app/globals.css`)
- shadcn/ui (Button, Dialog, Form, Input, Select, Sheet)
- Framer Motion + GSAP ScrollTrigger
- next/font : Fraunces (display) + Inter (body)
- lucide-react

## Structure

Voir `.claude/BRIEF.md §12` et `docs/PLAN.md`.

## Documents

- `.claude/BRIEF.md` — brief intégral
- `docs/PLAN.md` — décomposition (étape 1 §15)
- `docs/AUDIT.md` — auto-évaluation §13 (étape 7 §15)

## Crédits photo

Toutes les photos proviennent de [Pexels](https://www.pexels.com/fr).
Crédits photographes listés dans le footer du site.

| Section | Photographe | URL |
|---|---|---|
| Hero | Gustavo Trotta | https://www.pexels.com/photo/14470108/ |
| About / Le Lieu | konrads-photo | https://www.pexels.com/photo/14882031/ |
| VOID Acoustics | Eva Bronzini | https://www.pexels.com/photo/7605653/ |
| Galerie 1 | Jos Penaran | https://www.pexels.com/photo/22234333/ |
| Galerie 2 | Vaibky | https://www.pexels.com/photo/237744/ |
| Galerie 3 | Anna McDonald | https://www.pexels.com/photo/27409956/ |
| Galerie 4 | Vovkapanda | https://www.pexels.com/photo/12628523/ |
| Galerie 5 | Rafael Guajardo | https://www.pexels.com/photo/604671/ |
| Galerie 6 | beratilgin | https://www.pexels.com/photo/17651216/ |
| Galerie 7 | jibanesports | https://www.pexels.com/photo/4818319/ |
| Galerie 8 | Carlo Giovanni Ghiardelli | https://www.pexels.com/photo/35294184/ |
| Galerie 9 | Branimir Klaric | https://www.pexels.com/photo/9501874/ |
| Practical / Cannes | Spolyakov | https://www.pexels.com/photo/16761844/ |

