# Content Audit — Events / Membership / Blog

> Audit Phase 0 du lot CHANGE 5 / 6 / 7. Date : 2026-05-02.
> Contrainte : aucune invention. Contenu = glasscannes.com (V1 production)
> ou /Users/admin/glass-cannes-site/ (V1 local) ou fallback "à venir".

## Sources auditées

### glasscannes.com production

| URL | Status | Contenu utile |
|---|---|---|
| `/events-1` | 200 | Tagline d'intro uniquement, AUCUNE event card listée |
| `/membership` | 200 | Paragraphe concept unique, pas de tiers, pas de prix, pas de form |
| `/blog` | 200 | 4 titres d'articles + excerpts (pas accessibles en bulk via WebFetch) |
| `/post/les-meilleurs-bars-clubs-de-cannes-pour-les-amateurs-de-house` | 200 | 1 article complet, daté 4 nov. 2025 |
| `/events`, `/evenements`, `/news`, `/actualites`, `/programmation` | non testés | — |

### V1 local — `/Users/admin/glass-cannes-site/`

Structure Next 16 App Router avec `src/app/[locale]/...` :
- `src/app/[locale]/events/page.tsx` + `events/[slug]/page.tsx`
- `src/app/[locale]/membership/page.tsx`
- `src/app/[locale]/(marketing)/magazine/page.tsx` + `magazine/[slug]/page.tsx`
- `src/content/events/events.ts` — **14 événements seed/factices** (cf. note)
- `content/magazine/{fr,en}/*.mdx` — **3 articles** complets, FR + EN
- `src/messages/{fr,en}.json` — strings UI complètes

**Note importante sur events.ts** : le code source du V1 contient un commentaire « V8 Lot 5 — try Shotgun API first, fall back to the seed array if env creds are missing or the upstream call fails ». Les 14 événements (Sera Oya, Loumi, Kosmic B2B Marv, Playkid, etc.) sont **du seed data inventé** servant de fallback ; la source réelle est l'API Shotgun.live. **Je ne les recopie pas dans le V2** sans validation client (risque d'invention).

---

## CHANGE 5 — Events

**Décision : empty state + tagline glasscannes.com.**

| Élément | Source | Action |
|---|---|---|
| Tagline d'intro | `glasscannes.com/events-1` | Reprise verbatim FR/EN |
| Liste événements | aucune sur glasscannes.com (seed V1 = invention) | `EVENTS = []`, empty state UI |
| Lien Shotgun | `shotgun.live/fr/venues/glass` (constants V1) | CTA externe |
| Lien Instagram | `@glass_club_cannes` | CTA externe |

Tagline retenue (verbatim glasscannes.com) :
> "From international selectors to the underground rising stars, each week at the Glass is carefully curated to keep the floor alive. Check out the next nights. Pick your vibe. Show up."

Traduction FR fidèle (DeepL-grade) :
> "Des sélecteurs internationaux aux étoiles montantes underground, chaque semaine au Glass est soigneusement programmée pour faire vivre le dancefloor. Découvrez les prochaines nuits. Choisissez votre ambiance. Venez."

---

## CHANGE 6 — Membership

**Décision : Variante C, page concept sobre.**

glasscannes.com production a une page Membership *minimaliste* :
- AUCUN tier
- AUCUN prix
- AUCUN form
- 1 paragraphe concept

V1 local a 3 tiers (Classic / Gold / Black) avec « Sur recommandation » / « Sur invitation » comme prix — c'est du contenu V1 *probablement* ajouté par le dev V1, pas confirmé production.

→ Suivant la consigne « Si absente ou minimaliste → page concept simple », je ne reprends QUE le paragraphe glasscannes.com.

| Élément | Source | Action |
|---|---|---|
| Concept body FR | `glasscannes.com/membership` | Reprise verbatim |
| Concept body EN | (absent en source) | Traduction fidèle DeepL-grade |
| Tiers | non confirmés | **OMIS** (variante C) |
| Form | non présent en source | Lien vers `#contact-form?type=membership` |

Concept retenu (verbatim glasscannes.com) :
> "Être membre du Glass, c'est vivre Cannes autrement. Une carte, des avantages exclusifs, et une place au cœur de la fête. Un cercle d'initiés pour célébrer, rencontrer, partager — pendant les festivals comme toute l'année."

Traduction EN :
> "Being a Glass member means experiencing Cannes differently. A card, exclusive perks, and a seat at the heart of the celebration. An insiders' circle to celebrate, meet, share — during the festivals and all year round."

---

## CHANGE 7 — Blog

**Décision : 3 articles V1 local copiés intégralement (FR + EN), images covers rapatriées.**

V1 local a 3 articles MDX éditoriaux complets, déjà bilingues, avec covers.
Le contenu est substantiel et cohérent (signé "Caroline", la propriétaire, dans le frontmatter). Je le considère comme **contenu V1 acceptable** au sens de la consigne ("soit du V1 local").

Articles importés :

| Slug | Title FR | Date | Author | Cover |
|---|---|---|---|---|
| `void-acoustics-pourquoi-le-son-compte` | Void Acoustics : pourquoi on a choisi ce son | 2026-03-12 | Caroline | `void-acoustics-cover.jpg` |
| `art-de-cocktail-apres-minuit` | L'art du cocktail après minuit | 2026-01-18 | Caroline | `cocktail-cover.jpg` |
| `cannes-au-dela-du-festival` | Cannes, au-delà du Festival | 2026-02-28 | Caroline | `cannes-festivals-cover.jpg` |

Source fichier : `/Users/admin/glass-cannes-site/content/magazine/{fr,en}/*.mdx`
Source covers : `/Users/admin/glass-cannes-site/public/images/magazine/*.jpg`

**Articles glasscannes.com production NON importés** (les 4 « Top X bars de Cannes ») : titres générique-SEO, contenu non récupéré en intégralité, mauvais format pour un blog éditorial Glass premium. À discuter avec le client si on veut les réintégrer.

---

## Questions ouvertes pour la suite

À résoudre avec le client avant la production :

1. **Events** — On branche l'API Shotgun.live (la source réelle V1 production) ou on attend que Caroline fournisse une liste manuelle d'événements ? Tant que pas tranché, la page reste en empty state.

2. **Membership** — On reste sur la variante C concept seul, ou on ajoute le système Classic / Gold / Black de V1 local (« Sur recommandation » / « Sur invitation », pas de prix numériques) ? Le client doit valider que ce système est bien le sien.

3. **Blog** — On garde les 3 articles V1 local (Void Acoustics, Cocktail, Cannes Festivals), ou on tente d'importer aussi les 4 articles SEO de glasscannes.com (« Top 5 bars festifs… ») ? Ces derniers sont moins éditoriaux mais peut-être stratégiques pour le SEO.

4. **Images events/blog** — On copie celles du V1 local quand elles existent, sinon on fait sans. Pas de Pexels supplémentaire (cf. consigne « aucune invention »).
