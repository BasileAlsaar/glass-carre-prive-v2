/**
 * Source unique des 4 formules de privatisation (BRIEF §4.3).
 * Une modif tarif = une ligne ici (cf. §14bis du BRIEF, risque R9).
 *
 * Le copy est INTOUCHABLE — repris mot pour mot du §4.3.
 */

export type OfferId =
  | "privatisation-seche"
  | "apero"
  | "all-inclusive-50"
  | "all-inclusive-80";

/** Une grille tarifaire (capacité ↔ prix). Multi-tier pour la formule APÉRO. */
export type OfferTier = {
  capacity: string;
  price: string;
  /** Surcoût optionnel d'une option open bar attachée à ce tier. */
  openBar?: string;
};

/** Mention contextuelle (Optionnel, Non inclus, Option open bar…). */
export type OfferOption = {
  label: string;
  detail: string;
};

export type Offer = {
  /** Id stable kebab-case — utilisé pour ancres CTA (#contact-form?type=<id>). */
  id: OfferId;
  /** Nom display (en capitales dans l'UI). */
  name: string;
  /** Plage horaire — ex: "21h–4h". */
  schedule: string;
  /** Capacité globale optionnelle si la formule a un tier unique. */
  capacity?: string;
  /** 4-5 puces max (BRIEF §6bis.1). Copy §4.3 intouchable. */
  highlights: readonly string[];
  /** Mentions complémentaires : optionnel / non inclus / open bar. */
  options?: readonly OfferOption[];
  /** Au moins 1 tier ; multi-tier pour APÉRO (20-50 / 50-80). */
  tiers: readonly OfferTier[];
  /** Lien CTA — ancre vers le formulaire avec pré-remplissage. */
  ctaHref: `#contact-form?type=${OfferId}`;
  /** Photo officielle client (V1 assets). */
  imageSrc: `/images/formule-${OfferId}.jpg`;
};

export const OFFERS: readonly Offer[] = [
  {
    id: "privatisation-seche",
    name: "PRIVATISATION SÈCHE",
    schedule: "21h–4h",
    capacity: "Jusqu'à 30 personnes",
    highlights: [
      "Mise à disposition exclusive d'une terrasse jusqu'à 30 personnes",
      "Agent de sécurité dédié",
      "Hôtesse d'accueil professionnelle",
    ],
    options: [
      { label: "Optionnel", detail: "DJ set personnalisé, service traiteur" },
      { label: "Non inclus", detail: "boissons (à fournir), aucun stock disponible" },
    ],
    tiers: [
      {
        capacity: "Jusqu'à 30 personnes",
        price: "à partir de 3 900 € HT",
      },
    ],
    ctaHref: "#contact-form?type=privatisation-seche",
    imageSrc: "/images/formule-privatisation-seche.jpg",
  },
  {
    id: "apero",
    name: "APÉRO",
    schedule: "17h–20h",
    highlights: [
      "2 consommations par invité (vin, bière, champagne ou prosecco)",
      "Planches fromages & charcuteries",
      "DJ, hôte(sse) d'accueil, 1 agent de sécurité, 2 barmans, 1 serveur",
      "Bracelets nominatifs, stockage sécurisé, wifi, climatisation",
      "Terrasse extérieure (jusqu'à 30 personnes)",
    ],
    tiers: [
      {
        capacity: "20–50 personnes",
        price: "2 800 € HT",
        openBar: "open bar 1h en option : +1 000 €",
      },
      {
        capacity: "50–80 personnes",
        price: "3 500 € HT",
        openBar: "open bar 1h en option : +1 500 €",
      },
    ],
    ctaHref: "#contact-form?type=apero",
    imageSrc: "/images/formule-apero.jpg",
  },
  {
    id: "all-inclusive-50",
    name: "ALL INCLUSIVE",
    schedule: "19h–02h",
    capacity: "20 à 50 personnes",
    highlights: [
      "DJ, barmans & serveurs professionnels",
      "200 tickets boissons (cocktails, bière, soft…)",
      "Hôte(sse) d'accueil + hôte(sse) vestiaire",
      "Deux agents de sécurité, bracelets nominatifs",
      "Stockage sécurisé, wifi, clim, terrasse extérieure (30 pax)",
    ],
    options: [{ label: "Option open bar", detail: "+1 000 € (1h) / +1 600 € (2h)" }],
    tiers: [
      {
        capacity: "20 à 50 personnes",
        price: "6 700 € HT",
      },
    ],
    ctaHref: "#contact-form?type=all-inclusive-50",
    imageSrc: "/images/formule-all-inclusive-50.jpg",
  },
  {
    id: "all-inclusive-80",
    name: "ALL INCLUSIVE",
    schedule: "19h–05h",
    capacity: "50 à 80 personnes",
    highlights: [
      "DJ, barmans & serveurs professionnels",
      "320 tickets boissons (cocktails, bière, vin…)",
      "Hôte(sse) d'accueil + hôte vestiaire",
      "Deux agents de sécurité, bracelets nominatifs",
      "Stockage sécurisé, wifi, clim, terrasse privatisée (30 pax)",
    ],
    options: [{ label: "Option open bar", detail: "+1 200 € (1h) / +2 000 € (2h)" }],
    tiers: [
      {
        capacity: "50 à 80 personnes",
        price: "8 380 € HT",
      },
    ],
    ctaHref: "#contact-form?type=all-inclusive-80",
    imageSrc: "/images/formule-all-inclusive-80.jpg",
  },
] as const;

export function getOfferById(id: OfferId): Offer {
  const offer = OFFERS.find((o) => o.id === id);
  if (!offer) throw new Error(`Offer not found: ${id}`);
  return offer;
}
