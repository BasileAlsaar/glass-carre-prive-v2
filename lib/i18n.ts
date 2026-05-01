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
    privatization: string;
    menu: string;
    events: string;
    membership: string;
    blog: string;
    about: string;
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
    included: string;
    options: string;
    choose: string;
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
  footer: {
    contactLabel: string;
    socialLabel: string;
    hoursLabel: string;
    hoursShort: string;
    legalLabel: string;
    creditsLabel: string;
    copyright: string;
    tagline: string;
    links: {
      whatsapp: string;
      instagram: string;
      linkedin: string;
      facebook: string;
    };
  };
  reservation: {
    description: string;
    guestsLabel: string;
    dateLabel: string;
    slotLabel: string;
    slotPlaceholder: string;
    slotOptions: ReadonlyArray<{ value: string; label: string }>;
    nameLabel: string;
    emailLabel: string;
    phoneLabel: string;
    submitButton: string;
    submitting: string;
    successTitle: string;
    successDescription: string;
    errorMessage: string;
    orContact: string;
  };
  /** Alt text utilitaires pour images factuelles. */
  alts: {
    practicalCannes: string;
  };
  events: {
    title: string;
    subtitle: string;
    /** Tagline d'accueil — verbatim glasscannes.com/events-1 (FR traduit fidèle). */
    intro: string;
    emptyEyebrow: string;
    emptyTitle: string;
    emptyMessage: string;
    emptyFestivalNote: string;
    statusUpcoming: string;
    statusSoldOut: string;
    statusReplay: string;
    statusCancelled: string;
    ctaBooking: string;
    ctaInfo: string;
    ctaInstagram: string;
    ctaShotgun: string;
    ctaPrivatize: string;
  };
  membership: {
    title: string;
    eyebrow: string;
    subtitle: string;
    /** Body verbatim glasscannes.com/membership. */
    body: string;
    cta: string;
    pageLabel: string;
    tiersEyebrow: string;
    tiersTitle: string;
    /** Note discrète sous la grille des tiers (règles de cooptation). */
    tiersIntro: string;
    ctaRequest: string;
    badgeMostRequested: string;
    introOnlyNote: string;
  };
  blog: {
    title: string;
    subtitle: string;
    emptyMessage: string;
    backToList: string;
    readMore: string;
    minRead: string;
    pageLabel: string;
    listLabel: string;
    relatedTitle: string;
    publishedOn: string;
    by: string;
    categories: {
      coulisses: string;
      cocktails: string;
      cannes: string;
      lifestyle: string;
      mixology: string;
      interview: string;
      clubNews: string;
    };
  };
  menu: {
    title: string;
    subtitle: string;
    categories: {
      signature: string;
      classics: string;
      nonAlcoholic: string;
      soft: string;
      beers: string;
      wines: string;
      procesco: string;
      spritzs: string;
      shots: string;
      vodka: string;
      gin: string;
      tequila: string;
      rum: string;
      whisky: string;
      liqueurs: string;
      champagne: string;
    };
    units: {
      glass: string;
      piscine: string;
      bottle75: string;
      bottle70: string;
      bottle150: string;
      bottle175: string;
    };
    footer: {
      bottles: string;
      service: string;
      warning: string;
    };
    /** aria-label sur le main de /carte. */
    pageLabel: string;
    priceAria: string;
  };
  keyFigures: {
    regionLabel: string;
    stats: ReadonlyArray<{
      target: number;
      decimals: number;
      suffix: string;
      label: string;
    }>;
  };
};

const FR: Dictionary = {
  meta: {
    title: "Glass Club — Carré d'Or, Cannes",
    description:
      "Bar-club privatisable au cœur du Carré d'Or, à 3 minutes du Palais des Festivals. Privatisation, événements, formules sur mesure.",
  },
  nav: {
    privatization: "PRIVATISATION",
    menu: "CARTE",
    events: "ÉVÉNEMENTS",
    membership: "MEMBERSHIP",
    blog: "BLOG",
    about: "À PROPOS",
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
    included: "INCLUS",
    options: "EN OPTION",
    choose: "Choisir cette formule",
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
      { value: "membership-classic", label: "Membership Classic" },
      { value: "membership-gold", label: "Membership Gold" },
      { value: "membership-black", label: "Membership Black" },
      { value: "autre", label: "Autre" },
    ],
  },
  footer: {
    contactLabel: "CONTACT",
    socialLabel: "SUIVEZ-NOUS",
    hoursLabel: "HORAIRES",
    hoursShort: "17h–05h · 7/7",
    legalLabel: "Mentions légales",
    creditsLabel: "Crédits photo Pexels",
    copyright: "© 2026 Glass Club · Tous droits réservés.",
    tagline: "Carré d'Or, Cannes — bar-club privatisable.",
    links: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      facebook: "Facebook",
    },
  },
  reservation: {
    description:
      "Réservez une table en quelques secondes. Caroline vous confirme sous 24h.",
    guestsLabel: "Nb de personnes",
    dateLabel: "Date",
    slotLabel: "Créneau",
    slotPlaceholder: "Sélectionner",
    slotOptions: [
      { value: "thursday", label: "Jeudi 00h–07h" },
      { value: "friday", label: "Vendredi 00h–07h" },
      { value: "saturday", label: "Samedi 00h–07h" },
      { value: "special", label: "Événement spécial" },
    ],
    nameLabel: "Nom",
    emailLabel: "Email",
    phoneLabel: "Téléphone",
    submitButton: "Envoyer la demande",
    submitting: "Envoi…",
    successTitle: "Demande envoyée.",
    successDescription: "Caroline vous répondra sous 24h.",
    errorMessage:
      "Erreur d'envoi — réessayez ou écrivez à caroline@glasscannes.com.",
    orContact: "Ou contactez-nous directement :",
  },
  alts: {
    practicalCannes: "Vieux Port de Cannes la nuit, reflets sur l'eau",
  },
  events: {
    title: "Événements",
    subtitle: "Programmation Glass Club",
    intro:
      "Des sélecteurs internationaux aux étoiles montantes underground, chaque semaine au Glass est soigneusement programmée pour faire vivre le dancefloor. Découvrez les prochaines nuits. Choisissez votre ambiance. Venez.",
    emptyEyebrow: "Programmation à venir",
    emptyTitle: "La saison se prépare",
    emptyMessage:
      "Glass Club ouvre ses portes 7 soirs sur 7. La programmation des soirées spéciales (DJ guests, festivals, événements signature) est annoncée en continu sur notre Instagram.",
    emptyFestivalNote:
      "Pour les afters de festival (Cannes Lions, MIPIM, MIPCOM, ILTM, Festival de Cannes…), nous contactons directement les organisations. Demandes via le formulaire.",
    statusUpcoming: "À venir",
    statusSoldOut: "Complet",
    statusReplay: "Replay",
    statusCancelled: "Annulé",
    ctaBooking: "Réserver",
    ctaInfo: "Plus d'infos",
    ctaInstagram: "Suivre sur Instagram",
    ctaShotgun: "Voir sur Shotgun",
    ctaPrivatize: "Privatiser une soirée",
  },
  membership: {
    title: "Membership",
    eyebrow: "GLASS CLUB · CARRÉ D'OR",
    subtitle: "Rejoignez le cercle Glass Club",
    body: "Être membre du Glass, c'est vivre Cannes autrement. Une carte, des avantages exclusifs, et une place au cœur de la fête. Un cercle d'initiés pour célébrer, rencontrer, partager — pendant les festivals comme toute l'année.",
    cta: "Demander des informations",
    pageLabel: "Membership Glass Club",
    tiersEyebrow: "Devenez membre",
    tiersTitle: "Trois cercles privilégiés",
    tiersIntro:
      "Le Glass Circle est un programme confidentiel. Il ne se vend pas. Il se mérite — par la présence, par la recommandation, par la confiance mutuelle.",
    ctaRequest: "Demander cette adhésion",
    badgeMostRequested: "Le plus demandé",
    introOnlyNote: "Sur introduction par un membre existant.",
  },
  blog: {
    title: "Le Journal",
    subtitle: "Lifestyle · Mixologie · Cannes",
    emptyMessage:
      "Le journal du Glass Club arrive bientôt. Mixologie, interviews, lifestyle Cannes.",
    backToList: "Retour aux articles",
    readMore: "Lire l'article",
    minRead: "min de lecture",
    pageLabel: "Le journal du Glass Club",
    listLabel: "Liste des articles",
    relatedTitle: "À lire aussi",
    publishedOn: "Publié le",
    by: "par",
    categories: {
      coulisses: "Coulisses",
      cocktails: "Cocktails",
      cannes: "Cannes",
      lifestyle: "Lifestyle",
      mixology: "Mixologie",
      interview: "Interview",
      clubNews: "Actualités",
    },
  },
  menu: {
    title: "La Carte",
    subtitle: "Glass Club · Carré d'Or · Cannes",
    categories: {
      signature: "Cocktails Signature",
      classics: "Les Classiques",
      nonAlcoholic: "Cocktails sans alcool",
      soft: "Soft",
      beers: "Bières",
      wines: "Vins",
      procesco: "Procesco",
      spritzs: "Les Spritzs",
      shots: "Shots",
      vodka: "Vodka",
      gin: "Gin",
      tequila: "Tequila",
      rum: "Rhum",
      whisky: "Whisky",
      liqueurs: "Liqueurs",
      champagne: "Champagne",
    },
    units: {
      glass: "Le Verre",
      piscine: "Piscine",
      bottle75: "Bouteille 75cl",
      bottle70: "70cl",
      bottle150: "150cl",
      bottle175: "175cl",
    },
    footer: {
      bottles:
        "Nos bouteilles sont servies avec 3 cannettes de RedBull 25cl et une bouteille de soft au choix.",
      service: "Prix nets, service inclus. La maison n'accepte pas les chèques.",
      warning:
        "L'abus d'alcool est dangereux pour la santé, à consommer avec modération.",
    },
    pageLabel: "Carte du Glass Club",
    priceAria: "Prix",
  },
  keyFigures: {
    regionLabel: "Chiffres clés",
    stats: [
      { target: 4.9, decimals: 1, suffix: "/5", label: "Avis Google" },
      { target: 104, decimals: 0, suffix: "", label: "Événements en 2025" },
      { target: 11, decimals: 0, suffix: "", label: "Privatisations en 2025" },
      { target: 80, decimals: 0, suffix: "", label: "Capacité (pax)" },
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
    privatization: "PRIVATIZATION",
    menu: "MENU",
    events: "EVENTS",
    membership: "MEMBERSHIP",
    blog: "BLOG",
    about: "ABOUT",
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
    included: "INCLUDED",
    options: "OPTIONS",
    choose: "Choose this package",
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
      { value: "membership-classic", label: "Membership Classic" },
      { value: "membership-gold", label: "Membership Gold" },
      { value: "membership-black", label: "Membership Black" },
      { value: "autre", label: "Other" },
    ],
  },
  footer: {
    contactLabel: "CONTACT",
    socialLabel: "FOLLOW",
    hoursLabel: "HOURS",
    hoursShort: "5pm–5am · 7/7",
    legalLabel: "Legal notice",
    creditsLabel: "Pexels photo credits",
    copyright: "© 2026 Glass Club · All rights reserved.",
    tagline: "Carré d'Or, Cannes — a bar-club for private hire.",
    links: {
      whatsapp: "WhatsApp",
      instagram: "Instagram",
      linkedin: "LinkedIn",
      facebook: "Facebook",
    },
  },
  reservation: {
    description: "Book a table in seconds. Caroline confirms within 24h.",
    guestsLabel: "Party size",
    dateLabel: "Date",
    slotLabel: "Slot",
    slotPlaceholder: "Select",
    slotOptions: [
      { value: "thursday", label: "Thursday 12am–7am" },
      { value: "friday", label: "Friday 12am–7am" },
      { value: "saturday", label: "Saturday 12am–7am" },
      { value: "special", label: "Special event" },
    ],
    nameLabel: "Name",
    emailLabel: "Email",
    phoneLabel: "Phone",
    submitButton: "Send request",
    submitting: "Sending…",
    successTitle: "Request sent.",
    successDescription: "Caroline will get back to you within 24h.",
    errorMessage:
      "Sending error — try again or write to caroline@glasscannes.com.",
    orContact: "Or reach out directly:",
  },
  alts: {
    practicalCannes: "Old Port of Cannes at night, lights reflected on the water",
  },
  events: {
    title: "Events",
    subtitle: "Glass Club programming",
    intro:
      "From international selectors to the underground rising stars, each week at the Glass is carefully curated to keep the floor alive. Check out the next nights. Pick your vibe. Show up.",
    emptyEyebrow: "Programming coming",
    emptyTitle: "The season is being prepared",
    emptyMessage:
      "Glass Club is open 7 nights a week. The special events schedule (DJ guests, festivals, signature events) is announced on our Instagram.",
    emptyFestivalNote:
      "For festival afters (Cannes Lions, MIPIM, MIPCOM, ILTM, Festival de Cannes…), we reach out to organisations directly. Requests via the contact form.",
    statusUpcoming: "Upcoming",
    statusSoldOut: "Sold Out",
    statusReplay: "Replay",
    statusCancelled: "Cancelled",
    ctaBooking: "Book",
    ctaInfo: "More info",
    ctaInstagram: "Follow on Instagram",
    ctaShotgun: "View on Shotgun",
    ctaPrivatize: "Privatize an event",
  },
  membership: {
    title: "Membership",
    eyebrow: "GLASS CLUB · CARRÉ D'OR",
    subtitle: "Join the Glass Club inner circle",
    body: "Being a Glass member means experiencing Cannes differently. A card, exclusive perks, and a seat at the heart of the celebration. An insiders' circle to celebrate, meet, share — during the festivals and all year round.",
    cta: "Request more information",
    pageLabel: "Glass Club membership",
    tiersEyebrow: "Become a member",
    tiersTitle: "Three privileged circles",
    tiersIntro:
      "The Glass Circle is a confidential programme. It isn't sold — it's earned, through presence, referral and mutual trust.",
    ctaRequest: "Request membership",
    badgeMostRequested: "Most requested",
    introOnlyNote: "On introduction from an existing member.",
  },
  blog: {
    title: "The Journal",
    subtitle: "Lifestyle · Mixology · Cannes",
    emptyMessage:
      "The Glass Club journal is coming soon. Mixology, interviews, Cannes lifestyle.",
    backToList: "Back to articles",
    readMore: "Read article",
    minRead: "min read",
    pageLabel: "Glass Club journal",
    listLabel: "Articles list",
    relatedTitle: "Also read",
    publishedOn: "Published on",
    by: "by",
    categories: {
      coulisses: "Behind the scenes",
      cocktails: "Cocktails",
      cannes: "Cannes",
      lifestyle: "Lifestyle",
      mixology: "Mixology",
      interview: "Interview",
      clubNews: "Club news",
    },
  },
  menu: {
    title: "The Menu",
    subtitle: "Glass Club · Carré d'Or · Cannes",
    categories: {
      signature: "Signature Cocktails",
      classics: "Classics",
      nonAlcoholic: "Mocktails",
      soft: "Soft Drinks",
      beers: "Beers",
      wines: "Wines",
      procesco: "Procesco",
      spritzs: "Spritzs",
      shots: "Shots",
      vodka: "Vodka",
      gin: "Gin",
      tequila: "Tequila",
      rum: "Rum",
      whisky: "Whisky",
      liqueurs: "Liqueurs",
      champagne: "Champagne",
    },
    units: {
      glass: "By the glass",
      piscine: "Piscine",
      bottle75: "Bottle 75cl",
      bottle70: "70cl",
      bottle150: "150cl",
      bottle175: "175cl",
    },
    footer: {
      bottles:
        "Our bottles come with 3 RedBull cans (25cl) and 1 soft drink of your choice.",
      service: "Prices include service. We don't accept cheques.",
      warning:
        "Excessive alcohol consumption is harmful to health. Drink responsibly.",
    },
    pageLabel: "Glass Club menu",
    priceAria: "Price",
  },
  keyFigures: {
    regionLabel: "Key figures",
    stats: [
      { target: 4.9, decimals: 1, suffix: "/5", label: "Google rating" },
      { target: 104, decimals: 0, suffix: "", label: "Events in 2025" },
      { target: 11, decimals: 0, suffix: "", label: "Privatizations in 2025" },
      { target: 80, decimals: 0, suffix: "", label: "Capacity (pax)" },
    ],
  },
};

export const DICTIONARIES: Record<Locale, Dictionary> = { fr: FR, en: EN };

export function getDictionary(locale: Locale): Dictionary {
  return DICTIONARIES[locale];
}
