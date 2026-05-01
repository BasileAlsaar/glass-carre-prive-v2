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
};

export const DICTIONARIES: Record<Locale, Dictionary> = { fr: FR, en: EN };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
