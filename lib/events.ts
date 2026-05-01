/**
 * Source unique des événements Glass Club.
 *
 * État actuel : tableau vide (cf. docs/CONTENT-AUDIT.md). La V1 production
 * (glasscannes.com/events-1) ne liste aucun événement et le seed V1 local est
 * du fallback factice. La page rendra un empty state tant que Caroline n'a
 * pas validé une liste manuelle ou qu'on n'a pas branché l'API Shotgun.
 */

export type EventStatus = "upcoming" | "past" | "sold-out" | "cancelled";

export type GlassEvent = {
  /** Slug stable kebab-case unique. */
  id: string;
  /** Date ISO 8601 (avec offset si possible). */
  date: string;
  /** Heure de début affichable. */
  timeStart: string;
  /** Heure de fin affichable, optionnelle. */
  timeEnd?: string;
  /** Titre soirée en FR. */
  title: string;
  /** Titre EN (peut être identique au FR pour les noms propres). */
  titleEn: string;
  /** Liste des DJs / artistes. */
  djs?: readonly string[];
  /** Style musical, ex: "Deep Tech · House · Minimal · Techno". */
  musicStyle?: string;
  /** Description courte FR. */
  description?: string;
  /** Description courte EN. */
  descriptionEn?: string;
  /** Chemin d'image local (`/images/events/...`). */
  imageUrl?: string;
  /** Lien réservation externe ou ancre interne. */
  bookingUrl?: string;
  /** Statut éditorial. */
  status: EventStatus;
};

export const EVENTS: readonly GlassEvent[] = [] as const;

export const SHOTGUN_VENUE_URL = "https://shotgun.live/fr/venues/glass";
export const INSTAGRAM_URL = "https://instagram.com/glass_club_cannes";
