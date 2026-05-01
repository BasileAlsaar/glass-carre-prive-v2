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
  void: {
    eyebrow: string;
    /** Headline §4.2 INTOUCHABLE. */
    title: string;
    /** Body §4.2 INTOUCHABLE. */
    body: string;
    imageAlt: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    lede: string;
  };
  practical: {
    eyebrow: string;
    title: string;
    /** Liste §4.4 INTOUCHABLE — labels et values FR. */
    features: ReadonlyArray<{ label: string; value: string }>;
    addressLabel: string;
    address: string;
    viewMap: string;
    /** §4.6 INTOUCHABLE — schedule complet. */
    schedule: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    lede: string;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    typeLabel: string;
    typePlaceholder: string;
    dateLabel: string;
    guestsLabel: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successDescription: string;
    errorTitle: string;
    errorDescription: string;
    requiredHint: string;
    typeOptions: ReadonlyArray<{ value: string; label: string }>;
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
  void: {
    eyebrow: "VOID ACOUSTICS",
    title: "Le Glass — là où le son devient sensation.",
    body: "Au Glass, chaque note résonne avec élégance grâce à notre système audio signé Void Acoustics. Véritable référence dans le monde du son haut de gamme, Void allie design audacieux et précision sonore pour offrir une immersion totale à nos clients.",
    imageAlt: "Vinyl en lecture, gros plan sur les sillons",
  },
  gallery: {
    eyebrow: "GALERIE",
    title: "Une nuit, vue de l'intérieur.",
    lede: "Quelques aperçus du Glass — matières, lumière, ambiance.",
  },
  practical: {
    eyebrow: "INFOS PRATIQUES",
    title: "Tout est prêt.",
    features: [
      { label: "Capacité", value: "jusqu'à 80 pax" },
      {
        label: "Accès",
        value: "3 min à pied du Palais des Festivals, 1 min de la Croisette",
      },
      { label: "Terrasse", value: "30 personnes (jusqu'à 2h30 du matin)" },
      { label: "Branding", value: "possible" },
      { label: "Horaire", value: "17h–05h, 7/7" },
      { label: "Classement", value: "ERP Type P" },
      { label: "Son", value: "système VOID Acoustics" },
      { label: "Bilan 2025", value: "104 événements dont 11 privatisations" },
    ],
    addressLabel: "Adresse",
    address: "6 rue des Frères Pradignac, 06400 Cannes",
    viewMap: "Voir sur Google Maps",
    schedule:
      "Ouvert du jeudi au samedi de 00h à 07h. Ouvert tous les jours pendant les grands congrès : MIPIM, MIPCOM, Cannes Lions, MAPIC, ILTM, TFWA, MIDEM, Festival de Cannes.",
  },
  contact: {
    eyebrow: "PRIVATISATION",
    title: "Parlons de votre soirée.",
    lede: "Réponse sous 24h. Caroline reprend chaque demande personnellement.",
    nameLabel: "Nom complet",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    typeLabel: "Type d'événement",
    typePlaceholder: "Sélectionner",
    dateLabel: "Date souhaitée",
    guestsLabel: "Nombre d'invités",
    messageLabel: "Message",
    messagePlaceholder:
      "Décrivez votre événement : objectif, ambiance, contraintes éventuelles…",
    submitButton: "Envoyer la demande",
    submitting: "Envoi…",
    successTitle: "Demande envoyée.",
    successDescription: "Caroline vous répondra sous 24h.",
    errorTitle: "Erreur d'envoi.",
    errorDescription: "Réessayez ou écrivez à caroline@glasscannes.com.",
    requiredHint: "Champs obligatoires",
    typeOptions: [
      { value: "privatisation-seche", label: "Privatisation sèche (21h–4h)" },
      { value: "apero", label: "Apéro (17h–20h)" },
      { value: "all-inclusive-50", label: "All Inclusive 20–50 pax" },
      { value: "all-inclusive-80", label: "All Inclusive 50–80 pax" },
      { value: "reservation", label: "Réservation de table" },
      { value: "autre", label: "Autre" },
    ],
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
  void: {
    eyebrow: "VOID ACOUSTICS",
    title: "Glass — where sound becomes a feeling.",
    body: "At Glass, every note resonates with elegance, courtesy of our Void Acoustics sound system. A reference in high-end audio, Void combines bold design and sonic precision to deliver total immersion.",
    imageAlt: "Vinyl record close-up, light caught in the grooves",
  },
  gallery: {
    eyebrow: "GALLERY",
    title: "A night, from the inside.",
    lede: "A few glimpses of Glass — materials, light, atmosphere.",
  },
  practical: {
    eyebrow: "VENUE FACTS",
    title: "Everything is set.",
    features: [
      { label: "Capacity", value: "up to 80 pax" },
      {
        label: "Access",
        value: "3 min walk from the Palais des Festivals, 1 min from the Croisette",
      },
      { label: "Terrace", value: "30 people (open until 2:30 AM)" },
      { label: "Branding", value: "available" },
      { label: "Hours", value: "5pm–5am, 7/7" },
      { label: "Classification", value: "ERP Type P" },
      { label: "Sound", value: "VOID Acoustics system" },
      { label: "2025 track record", value: "104 events including 11 privatizations" },
    ],
    addressLabel: "Address",
    address: "6 rue des Frères Pradignac, 06400 Cannes",
    viewMap: "View on Google Maps",
    schedule:
      "Open Thursday to Saturday from 12 AM to 7 AM. Open every day during major congresses such as: MIPIM, MIPCOM, Cannes Lions, MAPIC, ILTM, TFWA, MIDEM, Festival de Cannes.",
  },
  contact: {
    eyebrow: "PRIVATIZATION",
    title: "Let's talk about your event.",
    lede: "Reply within 24h. Caroline handles every request personally.",
    nameLabel: "Full name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    typeLabel: "Event type",
    typePlaceholder: "Select",
    dateLabel: "Preferred date",
    guestsLabel: "Number of guests",
    messageLabel: "Message",
    messagePlaceholder:
      "Tell us about your event — goal, atmosphere, any specific needs…",
    submitButton: "Send request",
    submitting: "Sending…",
    successTitle: "Request sent.",
    successDescription: "Caroline will get back to you within 24h.",
    errorTitle: "Sending error.",
    errorDescription: "Please try again or write to caroline@glasscannes.com.",
    requiredHint: "Required fields",
    typeOptions: [
      { value: "privatisation-seche", label: "Full privatization (9pm–4am)" },
      { value: "apero", label: "Aperitivo (5pm–8pm)" },
      { value: "all-inclusive-50", label: "All Inclusive 20–50 pax" },
      { value: "all-inclusive-80", label: "All Inclusive 50–80 pax" },
      { value: "reservation", label: "Table booking" },
      { value: "autre", label: "Other" },
    ],
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { fr: FR, en: EN };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
