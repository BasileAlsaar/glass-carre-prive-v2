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

