# Glass Club Cannes — Maquette V2

## Brief
Lis .claude/BRIEF.md INTÉGRALEMENT avant toute action.
Il contient le prompt complet : variables, charte, copy mot pour mot,
structure, stack, animations, anti-patterns, grille d'éval et workflow.

## Workflow obligatoire
Suis strictement le §15 du BRIEF :
1. PLAN          - docs/PLAN.md (attendre OK avant de continuer)
2. SCAFFOLD      - Next.js 14 + Tailwind v4 + shadcn
3. DESIGN TOKENS - globals.css avec CSS vars du §3.1
4. SECTIONS      - une par une, 1 commit par section
5. i18n          - FR/EN parité 100%
6. POLISH        - animations + reduced-motion + a11y
7. AUDIT         - Lighthouse + grille §13 dans docs/AUDIT.md

Commit sémantique à chaque étape. Lint et typecheck doivent passer vert.

## Assets fournis
- public/logo/glass-logo-blanc.png — logo officiel Glass Club
- public/images/ — photos de l ancien site (à recycler en priorité)

## Cible qualité
Score minimum 85/100 sur la grille §13. Reporter dans docs/AUDIT.md.

## Contraintes critiques
- Le copy du §4 du BRIEF est intouchable (mot pour mot)
- La V1 existe en parallèle, ne pas la référencer
- Aucune image AI-générée
- Anti-patterns §14 strictement interdits
