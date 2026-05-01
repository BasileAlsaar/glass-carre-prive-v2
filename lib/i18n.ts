/**
 * Squelette i18n — FR/EN parité 100% (BRIEF §15.5).
 *
 * Les sections étendent ce dictionnaire au fur et à mesure de leur build.
 * Toujours vérifier que la valeur EN existe avant de switcher : un manque =
 * fallback FR avec lang="fr" + // TODO: EN translation (BRIEF §14bis).
 *
 * Le copy factuel du §4 du BRIEF est INTOUCHABLE.
 */

export type Locale = "fr" | "en";

export const LOCALES: readonly Locale[] = ["fr", "en"] as const;
export const DEFAULT_LOCALE: Locale = "fr";

export type Dictionary = {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    venue: string;
    privatization: string;
    events: string;
    contact: string;
  };
  cta: {
    privatize: string;
    book: string;
    privatizeFull: string;
    bookTable: string;
  };
  hero: {
    /** Tagline display sur 2 lignes (BRIEF §6, §6bis.2). */
    taglineLine1: string;
    taglineLine2: string;
    /** Bandeau bas du hero — distance + horaires + 7/7. */
    footnote: string;
  };
  offers: {
    eyebrow: string;
    title: string;
    lede: string;
    priceLabel: string;
    privatizeFormula: string;
  };
  about: {
    eyebrow: string;
    title: string;
    /** Copy §4.1 INTOUCHABLE. */
    body: string;
    chips: readonly string[];
    seeOffers: string;
    imageAlt: string;
  };
};

const FR: Dictionary = {
  meta: {
    title: "Glass Club — Carré d'Or, Cannes",
    description:
      "Bar-club privatisable au cœur du Carré d'Or, à 3 minutes du Palais des Festivals. Privatisation, événements, formules sur mesure.",
  },
  nav: {
    venue: "LE LIEU",
    privatization: "PRIVATISATIONS",
    events: "EVENTS",
    contact: "CONTACT",
  },
  cta: {
    privatize: "PRIVATISER",
    book: "RÉSERVER",
    privatizeFull: "PRIVATISER VOTRE SOIRÉE",
    bookTable: "RÉSERVER UNE TABLE",
  },
  hero: {
    taglineLine1: "Bar-club privatisable",
    taglineLine2: "au cœur du Carré d'Or",
    footnote: "À 3 min du Palais des Festivals · 17h–05h · 7/7",
  },
  offers: {
    eyebrow: "FORMULES",
    title: "Quatre formats de privatisation.",
    lede: "De l'apéro corporate à l'all inclusive jusqu'à 5h, choisissez le format qui correspond à votre soirée.",
    priceLabel: "Tarif",
    privatizeFormula: "Privatiser cette formule",
  },
  about: {
    eyebrow: "LE LIEU",
    title: "Carré d'Or. Cannes.",
    body: "Au cœur de Cannes, le Glass est un bar-club à taille humaine, pensé pour se retrouver et prolonger la nuit dans une atmosphère élégante et décontractée. Situé à seulement 3 minutes à pied du Palais des Festivals, à l'entrée de l'emblématique Carré d'Or, l'établissement bénéficie d'une localisation premium. Entièrement rénové en 2025, le lieu mêle des inspirations des années 70, des matières miroirs et des panneaux acoustiques lumineux, créant un décor immersif et immédiatement identifiable.",
    chips: ["Carré d'Or", "Rénovation 2025", "VOID Acoustics"],
    seeOffers: "Voir les formules",
    imageAlt: "Comptoir du Glass Club, lumière feutrée et matières miroirs",
  },
};

const EN: Dictionary = {
  meta: {
    title: "Glass Club — Carré d'Or, Cannes",
    description:
      "Cocktail bar and club in Cannes, 3 minutes from the Palais des Festivals. Private events, corporate events, venue privatization.",
  },
  nav: {
    venue: "THE VENUE",
    privatization: "PRIVATIZATION",
    events: "EVENTS",
    contact: "CONTACT",
  },
  cta: {
    privatize: "PRIVATIZE",
    book: "BOOK",
    privatizeFull: "PRIVATIZE YOUR EVENING",
    bookTable: "BOOK A TABLE",
  },
  hero: {
    taglineLine1: "A bar-club for private hire",
    taglineLine2: "in the heart of Cannes' Carré d'Or",
    footnote: "3 min from the Palais des Festivals · 5pm–5am · 7/7",
  },
  offers: {
    eyebrow: "PACKAGES",
    title: "Four privatization formats.",
    lede: "From a corporate aperitivo to an all-inclusive night until 5am — pick the format that fits your event.",
    priceLabel: "From",
    privatizeFormula: "Privatize this package",
  },
  about: {
    eyebrow: "THE VENUE",
    title: "Carré d'Or. Cannes.",
    body: "Located just 3 minutes from the Palais des Festivals, Glass Club is a cocktail bar and club in Cannes, ideal for private events, corporate events and venue privatization. Perfect for afterworks, corporate parties, brand launches, networking cocktails, birthdays and private parties, especially during major events such as MIPIM, Cannes Lions, MIPCOM, MAPIC, ILTM, TFWA and the Cannes Film Festival.",
    chips: ["Carré d'Or", "Renovated in 2025", "VOID Acoustics"],
    seeOffers: "See packages",
    imageAlt: "Glass Club bar counter, dim lighting and mirror surfaces",
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { fr: FR, en: EN };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
