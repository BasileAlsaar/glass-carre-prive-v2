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
};

export const DICTIONARIES: Record<Locale, Dictionary> = { fr: FR, en: EN };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
