/**
 * Source unique de la carte du Glass Club (CHANGE 4).
 * Données structurées extraites du PDF CARTE_GLASS_CLUB.pdf fourni par
 * le client. Les noms propres et noms de cocktails ne sont PAS traduits.
 *
 * Ne pas modifier les prix sans validation client.
 */

import type { Locale } from "@/lib/i18n";

export type UnitKey =
  | "glass"
  | "piscine"
  | "bottle75"
  | "bottle70"
  | "bottle150"
  | "bottle175";

export type LocalizedString = Record<Locale, string>;

export type MenuItem = {
  /** Nom (non traduit, intouchable). Optionnel quand l'item est défini par son unité (vins/procesco). */
  name?: string;
  /** Description ingrédients, traduite. */
  description?: LocalizedString;
  /** Prix unitaire en euros. Si absent, le prix vient du flatPrice de la catégorie. */
  price?: number;
  /** Format / contenance — clé i18n dans dictionary.menu.units. */
  unit?: UnitKey;
};

export type CategoryKey =
  | "signature"
  | "classics"
  | "nonAlcoholic"
  | "soft"
  | "beers"
  | "wines"
  | "procesco"
  | "spritzs"
  | "shots"
  | "vodka"
  | "gin"
  | "tequila"
  | "rum"
  | "whisky"
  | "liqueurs"
  | "champagne";

export type MenuCategory = {
  /** Slug stable. */
  id: CategoryKey;
  /** Sous-titre brut (intouchable, pas i18n) — utilisé pour Vins (Château d'Astros). */
  subtitle?: string;
  /** Prix forfaitaire applicable à tous les items qui n'ont pas leur propre price. */
  flatPrice?: number;
  /** Items. */
  items: readonly MenuItem[];
  /** Colonne d'affichage desktop. Mobile : single-col, tout empilé. */
  column: "left" | "right";
};

export const MENU: readonly MenuCategory[] = [
  // ============ COLONNE GAUCHE ============
  {
    id: "signature",
    flatPrice: 16,
    column: "left",
    items: [
      {
        name: "PALOMA",
        description: {
          fr: "Tequila 1800, sirop d'agave, soda pamplemousse La French, jus de citron vert",
          en: "Tequila 1800, agave syrup, La French grapefruit soda, lime juice",
        },
      },
      {
        name: "MEZCAL ESPRESSO MARTINI",
        description: {
          fr: "Bandida Cristal, Kaluha, sirop de vanille, café",
          en: "Bandida Cristal, Kaluha, vanilla syrup, coffee",
        },
      },
      {
        name: "BASIL SMASH",
        description: {
          fr: "Vodka Grey Goose infusé basilic, mandarine Napoléon, jus d'ananas, jus de citron vert",
          en: "Basil-infused Grey Goose vodka, mandarine Napoléon, pineapple juice, lime juice",
        },
      },
      {
        name: "CLOVER GLASS CLUB",
        description: {
          fr: "Gin infusé hibiscus, purée de framboises, liqueur de litchi, jus de citron vert",
          en: "Hibiscus-infused gin, raspberry purée, lychee liqueur, lime juice",
        },
      },
    ],
  },
  {
    id: "classics",
    flatPrice: 14,
    column: "left",
    items: [
      {
        name: "CUBA LIBRE",
        description: { fr: "Rhum, jus de citron vert, Coca-Cola", en: "Rum, lime juice, Coca-Cola" },
      },
      {
        name: "TEQUILA SUNRISE",
        description: {
          fr: "Tequila, jus d'orange, sirop de grenadine",
          en: "Tequila, orange juice, grenadine syrup",
        },
      },
      {
        name: "MOSCOW MULE",
        description: {
          fr: "Vodka, ginger beer, jus de citron vert",
          en: "Vodka, ginger beer, lime juice",
        },
      },
      {
        name: "COSMOPOLITAN",
        description: {
          fr: "Vodka, Cointreau, citron vert, jus de cranberry",
          en: "Vodka, Cointreau, lime, cranberry juice",
        },
      },
      {
        name: "ESPRESSO MARTINI",
        description: {
          fr: "Vodka, liqueur de café (Kahlúa), espresso, sirop de sucre",
          en: "Vodka, coffee liqueur (Kahlúa), espresso, sugar syrup",
        },
      },
      {
        name: "PORNSTAR MARTINI",
        description: {
          fr: "Vodka, crème de fruit de la passion, sirop de vanille, citron vert",
          en: "Vodka, passion fruit crème, vanilla syrup, lime",
        },
      },
    ],
  },
  {
    id: "nonAlcoholic",
    flatPrice: 9,
    column: "left",
    items: [
      {
        name: "VIRGIN MOJITO",
        description: {
          fr: "Citron vert, menthe fraîche, sucre de canne, eau gazeuse",
          en: "Lime, fresh mint, cane sugar, sparkling water",
        },
      },
      {
        name: "VIRGIN PIÑA COLADA",
        description: { fr: "Jus d'ananas, crème de coco", en: "Pineapple juice, coconut crème" },
      },
    ],
  },
  {
    id: "soft",
    column: "left",
    items: [
      { name: "EAU EVIAN", price: 4 },
      { name: "COCA-COLA · COCA ZÉRO · PERRIER · ICE TEA · GINGER BEER", price: 6 },
      { name: "REDBULL", price: 7 },
    ],
  },
  {
    id: "beers",
    column: "left",
    items: [
      { name: "DESPERADOS 33CL", price: 8 },
      { name: "CORONA 33CL", price: 8 },
    ],
  },
  {
    id: "wines",
    subtitle: "Château d'Astros Amour, Côtes de Provence",
    column: "left",
    items: [
      { unit: "glass", price: 10 },
      { unit: "piscine", price: 14 },
      { unit: "bottle75", price: 45 },
    ],
  },
  {
    id: "procesco",
    column: "left",
    items: [
      { unit: "glass", price: 12 },
      { unit: "piscine", price: 16 },
      { unit: "bottle75", price: 55 },
    ],
  },
  {
    id: "spritzs",
    column: "left",
    items: [
      {
        name: "APÉROL",
        price: 14,
        description: { fr: "Aperol, Procesco, Perrier", en: "Aperol, Procesco, Perrier" },
      },
      {
        name: "HUGO",
        price: 15,
        description: {
          fr: "Liqueur St Germain, menthe, Procesco, Perrier",
          en: "St Germain liqueur, mint, Procesco, Perrier",
        },
      },
    ],
  },
  {
    id: "shots",
    column: "left",
    items: [
      { name: "SHOT", price: 5 },
      { name: "SHOT ALCOOL SUP", price: 9 },
      { name: "SHOT COCKTAIL", price: 7 },
    ],
  },

  // ============ COLONNE DROITE ============
  {
    id: "vodka",
    column: "right",
    items: [
      { name: "ABSOLUT", unit: "bottle70", price: 160 },
      { name: "GREY GOOSE", unit: "bottle70", price: 180 },
      { name: "GREY GOOSE", unit: "bottle175", price: 400 },
    ],
  },
  {
    id: "gin",
    column: "right",
    items: [
      { name: "BOMBAY ORIGINAL", unit: "bottle70", price: 160 },
      { name: "BOMBAY SAPPHIRE", unit: "bottle70", price: 180 },
      { name: "TANQUERAY", unit: "bottle70", price: 220 },
      { name: "HENDRICK'S", unit: "bottle70", price: 250 },
    ],
  },
  {
    id: "tequila",
    column: "right",
    items: [
      { name: "ALTOS BLANCO", unit: "bottle70", price: 160 },
      { name: "1800 SILVER", unit: "bottle70", price: 180 },
      { name: "VOLCAN BLANCO", unit: "bottle70", price: 220 },
      { name: "MEZCAL BANDIDA CRISTALINO", unit: "bottle70", price: 360 },
    ],
  },
  {
    id: "rum",
    column: "right",
    items: [
      { name: "BACARDI BLANCO", unit: "bottle70", price: 160 },
      { name: "DIPLOMATICO", unit: "bottle70", price: 180 },
      { name: "BUMBU ORIGINAL", unit: "bottle70", price: 190 },
    ],
  },
  {
    id: "whisky",
    column: "right",
    items: [
      { name: "JACK DANIEL'S", unit: "bottle70", price: 160 },
      { name: "CHIVAS 12 ANS", unit: "bottle70", price: 180 },
      { name: "JOHNNIE WALKER RED LABEL", unit: "bottle70", price: 180 },
      { name: "JOHNNIE WALKER BLACK LABEL", unit: "bottle70", price: 200 },
    ],
  },
  {
    id: "liqueurs",
    column: "right",
    items: [
      { name: "JAGERMEISTER", unit: "bottle70", price: 130 },
      { name: "GET 27", unit: "bottle70", price: 130 },
    ],
  },
  {
    id: "champagne",
    column: "right",
    items: [
      { name: "MOET & CHANDON", unit: "bottle75", price: 130 },
      { name: "MOET & CHANDON", unit: "bottle150", price: 230 },
      { name: "RUINART BRUT", unit: "bottle75", price: 160 },
      { name: "RUINART BLANC DE BLANC", unit: "bottle75", price: 220 },
    ],
  },
] as const;
