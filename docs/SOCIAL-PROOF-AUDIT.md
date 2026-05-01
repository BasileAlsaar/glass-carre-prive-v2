# Key Figures — Social Proof Audit (simplified)

> Audit préalable au composant `components/sections/KeyFigures.tsx`.
> Date de l'audit initial : 2026-05-01. Simplification (FIX A) : 2026-05-01.
>
> **Note** : ce document conservait à l'origine 3 sections (chiffres, témoignages, logos).
> Suite à FIX A, témoignages et logos ont été retirés du composant — seuls les chiffres sont conservés.

## Chiffres clés retenus pour la section

| Chiffre | Source | Statut |
|---|---|---|
| **4,9 / 5** — Avis Google | Google Search snippet (snapshot 2026-05-01, ~102 reviews) | Confirmé |
| **104** — Événements en 2025 | §4.4 BRIEF + glasscannes.com `/privatisation` | Confirmé |
| **11** — Privatisations en 2025 | §4.4 BRIEF + glasscannes.com `/privatisation` | Confirmé |
| **80** — Capacité (pax) | §4.4 BRIEF + glasscannes.com home / `/privatisation` / `/about-3` | Confirmé |

**Aucun chiffre inventé.** Tous traçables sur le BRIEF + le site V1 production.

## Sections retirées (FIX A)

- ~~Témoignages Tripadvisor (Max C., Jade A., Yannick B.)~~ — supprimé du composant et de l'i18n.
- ~~Grille de logos congrès~~ — supprimé du composant et de l'i18n.

→ La section ne contient plus que le bandeau de 4 chiffres animés count-up Framer Motion (1.4s ease-out-cubic, statique en `prefers-reduced-motion`).

## Sources retenues

- §4.4 du BRIEF (`/Users/admin/glass-carre-prive-v2/.claude/BRIEF.md`)
- [glasscannes.com /privatisation](https://glasscannes.com/privatisation)
- Google Search snippet 2026-05-01 (note 4,9/5)
