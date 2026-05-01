# Social Proof Audit — Glass Club Cannes

> Audit préalable au CHANGEMENT 4 (composant `components/sections/SocialProof.tsx`).
> Date : 2026-05-01.

## A) Note Google et nombre d'avis

| Source | Note | Volume | URL |
|---|---:|---|---|
| Google Maps (via search snippet, snapshot 2026-05-01) | **4,9 / 5** | **102 avis** (97 × 5★, 2 × 4★, 1 × 3★, 0 × 2★, 2 × 1★) | google.com/search "Glass Club Cannes" |
| Tripadvisor | 5,0 / 5 | 3 avis | https://www.tripadvisor.fr/Attraction_Review-g187221-d27717414-Reviews-Glass_Club_Cannes-Cannes_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_Azur.html |

**Décision :** afficher **4,9/5 — Avis Google** comme chiffre clé principal. Volume 102 reviews omis volontairement dans la section pour ne pas dater (102 c'est aujourd'hui, demain ce sera plus).

> Tentative directe `google.com/maps/place/Glass+Club+Cannes` → redirection consent.google.com (cookies bloquants), donc note récupérée via Google Search snippet de l'index public + croisée avec Tripadvisor.

## B) Témoignages clients écrits

**Source unique** : Tripadvisor (FR + EN du même site) — 3 avis tous notés 5/5.

| # | Pseudo | Date | Texte FR (verbatim) | Texte EN (verbatim) |
|---|---|---|---|---|
| 1 | **Max C.** | août 2025 | « Enfin un lieu à Cannes où on peut boire d'excellents cocktails et profiter d'une programmation DJ House pointue ! » | "Finally, a place in Cannes where you can drink excellent cocktails and enjoy a sophisticated DJ House program!" |
| 2 | **Jade A.** | août 2025 | « Nous avons passé une soirée magique au Glass. L'ambiance était festive mais élégante, la sélection musicale incroyable. » | "We spent a magical evening at the Glass. Mood was festive but elegant, the musical selection incredible." |
| 3 | **Yannick B.** | septembre 2025 | « Club très propre et bien aménagé. Accueil super et lieux agréables pour écouter de la musique sur vinyles. » | "Club very clean and well appointed. Super Welcoming and nice places to listen to music on vinyl." |

**Source attribution** : "via Tripadvisor · août 2025" (etc.) en `<cite>` sous chaque citation. Pas de photo signataire (RGPD + élégance, conforme au cahier des charges du composant).

**Aucun témoignage trouvé sur glasscannes.com directement** (pages /privatisation, /events-1, /about-3 auditées) — la home et les sous-pages sont pure information factuelle, pas de section "ils en parlent".

## C) Logos clients ou événements de prestige

**Aucun logo client privé identifié** sur glasscannes.com (pas de bloc "ils nous font confiance" ni de page presse). Aucun logo téléchargeable.

**Logos événements de prestige confirmés §4.1 + §4.6 du BRIEF** (8 congrès) :

1. MIPIM
2. MIPCOM
3. Cannes Lions
4. MAPIC
5. ILTM
6. TFWA
7. MIDEM
8. Festival de Cannes

→ Affichés en typographie display Fraunces tracking-[0.3em] uppercase (pas de SVG dispo, conforme au fallback prévu dans le brief du composant).

## D) Chiffres clés

| Chiffre | Source | Statut |
|---|---|---|
| 80 pax | §4.4 BRIEF | Confirmé par glasscannes.com home + /privatisation |
| 30 pax terrasse | §4.4 BRIEF | Confirmé |
| 17h–05h, 7/7 | §4.4 BRIEF | Confirmé |
| 104 événements en 2025 | §4.4 BRIEF | Confirmé par /privatisation glasscannes.com |
| 11 privatisations en 2025 | §4.4 BRIEF | Confirmé par /privatisation glasscannes.com |
| 3 min Palais des Festivals | §4.1 BRIEF | Confirmé |
| 8 congrès majeurs | §4.1 + §4.6 BRIEF | Dérivable |

**Chiffres retenus pour le bandeau du Bloc 1** :
- 4,9 / 5 — Avis Google
- 104 — Événements en 2025
- 11 — Privatisations en 2025
- 8 — Congrès majeurs

## E) Mentions presse / médias

**Aucune mention presse trouvée** sur glasscannes.com (pas de page /presse). Aucun lien podcast/article/vidéo dans le footer ou les sous-pages auditées.

→ Bloc presse omis du composant.

## F) Réseaux sociaux

| Réseau | Compte | Followers visibles |
|---|---|---|
| Instagram | @glass_club_cannes | non-affiché publiquement sans connexion |
| Facebook | Glass Bar | non-récupéré |
| LinkedIn | /in/glasscannes | non-récupéré |
| WhatsApp | wa.me/33651662145 | n/a |

→ Pas de chiffre followers exploitable. Réseaux déjà présents dans le footer du site Glass V2 (commit `feat(footer)`). Pas de duplication.

## Décisions prises

| Question | Décision |
|---|---|
| Bloc 1 chiffres clés ? | ✅ 4 chiffres (Google + 104 + 11 + 8) |
| Bloc 2 témoignages ? | ✅ 3 témoignages Tripadvisor avec attribution explicite "via Tripadvisor" + date |
| Bloc 3 logos ? | ✅ 8 noms de congrès en typo display (pas de SVG) |
| Inventer témoignages ? | ❌ Jamais |
| Inventer chiffres ? | ❌ Tous chiffres sourcés |
| Mentions presse ? | ⊘ Omis (rien trouvé) |
| Followers réseaux ? | ⊘ Omis (rien trouvé) |
| Volume reviews Google (102) ? | ⊘ Omis (date trop vite, on garde juste la note 4,9) |

## Sources

- [Glass Club Cannes — Tripadvisor (FR)](https://www.tripadvisor.fr/Attraction_Review-g187221-d27717414-Reviews-Glass_Club_Cannes-Cannes_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_Azur.html)
- [Glass Club Cannes — Tripadvisor (EN)](https://www.tripadvisor.com/Attraction_Review-g187221-d27717414-Reviews-Glass_Club_Cannes-Cannes_French_Riviera_Cote_d_Azur_Provence_Alpes_Cote_d_Azur.html)
- [glasscannes.com /privatisation](https://glasscannes.com/privatisation)
- [glasscannes.com /about-3](https://glasscannes.com/about-3)
- [glasscannes.com /events-1](https://glasscannes.com/events-1)
- Google Search snippet (4,9/5 · 102 avis) — non-permanent, snapshot 2026-05-01
