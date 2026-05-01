/**
 * Tiers de membership Glass Club — réintroduits depuis V1 local
 * (/Users/admin/glass-cannes-site/src/messages/{fr,en}.json
 *  ↳ membershipPage.tiers.classic|gold|black).
 *
 * Prix textuels uniquement (pas numériques) : "Sur recommandation" /
 * "Sur invitation" / "Confidentiel". V1 ne mentionne aucun montant
 * et ne sera pas inventé ici.
 */

import type { Locale } from "@/lib/i18n";

export type TierId = "classic" | "gold" | "black";

export type LocalizedString = Record<Locale, string>;

export type MembershipTier = {
  id: TierId;
  /** Nom affiché (identique FR/EN). */
  name: string;
  /** Prix textuel localisé. */
  price: LocalizedString;
  /** Liste des avantages localisée. */
  benefits: Record<Locale, readonly string[]>;
  /** Marque-page "Le plus demandé" sur Gold. */
  featured?: boolean;
  /** Force Black à n'accepter que sur introduction. */
  introductionOnly?: boolean;
  /** ctaHref typé en literal pour cohérence avec lib/offers.ts. */
  ctaHref: `#contact-form?type=membership-${TierId}`;
};

export const MEMBERSHIP_TIERS: readonly MembershipTier[] = [
  {
    id: "classic",
    name: "Classic",
    price: {
      fr: "Sur recommandation",
      en: "By referral",
    },
    benefits: {
      fr: [
        "Réservation prioritaire (72h avant l'ouverture publique)",
        "Pré-vente tickets sur les soirées à capacité limitée",
        "+1 offert sur tes 4 premières réservations de l'année",
        "Bouteille anniversaire offerte (sur réservation)",
      ],
      en: [
        "Priority booking (72h before the public window)",
        "Ticket pre-sale on capped nights",
        "+1 guest on your first 4 bookings of the year",
        "Birthday bottle on the house (by reservation)",
      ],
    },
    ctaHref: "#contact-form?type=membership-classic",
  },
  {
    id: "gold",
    name: "Gold",
    featured: true,
    price: {
      fr: "Sur invitation",
      en: "By invitation",
    },
    benefits: {
      fr: [
        "Tout ce qui est en Classic",
        "Table garantie tous les samedis (sur réservation 24h avant)",
        "Invitations aux soirées privées fermées (≈ 4 par an)",
        "Accès WhatsApp direct de Caroline pour toute demande",
        "Bouteille offerte au premier passage du mois",
        "Code d'entrée mémorisé par l'équipe (pas de file)",
      ],
      en: [
        "Everything in Classic",
        "Guaranteed Saturday table (reservation 24h ahead)",
        "Closed-door events (≈ 4 per year)",
        "Direct WhatsApp line to Caroline",
        "Bottle on the house on your first visit of the month",
        "Door code memorised by the team — no queue",
      ],
    },
    ctaHref: "#contact-form?type=membership-gold",
  },
  {
    id: "black",
    name: "Black",
    introductionOnly: true,
    price: {
      fr: "Confidentiel",
      en: "Confidential",
    },
    benefits: {
      fr: [
        "Tout ce qui est en Gold",
        "Privatisation exclusive 1 fois par an offerte (jusqu'à 30 guests)",
        "Invitation personnelle aux événements fermés du Glass",
        "Concierge événementiel pour vos dates importantes à Cannes",
        "Accès au carré VIP permanent, sans réservation préalable",
        "Signature DJ sur demande pour vos soirées privées",
      ],
      en: [
        "Everything in Gold",
        "One private event per year on the house (up to 30 guests)",
        "Personal invitations to Glass closed events",
        "Event concierge for your key Cannes dates",
        "Permanent VIP table access, no reservation needed",
        "Signature DJ on request for your private nights",
      ],
    },
    ctaHref: "#contact-form?type=membership-black",
  },
] as const;
