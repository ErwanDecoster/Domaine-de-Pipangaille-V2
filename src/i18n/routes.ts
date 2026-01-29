/**
 * Routes i18n - Mapping centralisé des routes par langue
 * Chaque clé représente une page unique du site
 */

export type RouteKey = keyof typeof routes;
export type Locale = "fr" | "en" | "de" | "es" | "it" | "nl";

export const routes = {
  home: {
    fr: "/",
    en: "/",
    de: "/",
    es: "/",
    it: "/",
    nl: "/",
  },
  place: {
    fr: "/le-lieu",
    en: "/the-place",
    de: "/der-ort",
    es: "/el-lugar",
    it: "/il-luogo",
    nl: "/de-locatie",
  },
  accommodations: {
    fr: "/hebergements",
    en: "/accommodations",
    de: "/unterkunfte",
    es: "/alojamientos",
    it: "/alloggi",
    nl: "/accommodaties",
  },
  counter: {
    fr: "/le-comptoir",
    en: "/the-counter",
    de: "/die-theke",
    es: "/el-mostrador",
    it: "/il-bancone",
    nl: "/de-toonbank",
  },
  surroundings: {
    fr: "/les-alentours",
    en: "/surroundings",
    de: "/umgebung",
    es: "/alrededores",
    it: "/dintorni",
    nl: "/omgeving",
  },
  contact: {
    fr: "/contact",
    en: "/contact",
    de: "/contact",
    es: "/contact",
    it: "/contact",
    nl: "/contact",
  },
  book: {
    fr: "/reservation",
    en: "/booking",
    de: "/buchung",
    es: "/reserva",
    it: "/prenotazione",
    nl: "/boeking",
  },
  legalNotices: {
    fr: "/mentions-legales",
    en: "/legal-notices",
    de: "/impressum",
    es: "/menciones-legales",
    it: "/note-legali",
    nl: "/juridische-vermeldingen",
  },
  termsAndConditions: {
    fr: "/conditions-generales-vente",
    en: "/terms-and-conditions",
    de: "/allgemeine-verkaufsbedingungen",
    es: "/condiciones-generales-venta",
    it: "/condizioni-generali-vendita",
    nl: "/algemene-verkoopvoorwaarden",
  },
  // Routes dynamiques - prefix uniquement
  accommodation: {
    fr: "/hebergement",
    en: "/accommodation",
    de: "/unterkünfte",
    es: "/alojamiento",
    it: "/alloggio",
    nl: "/accommodatie",
  },
  surrounding: {
    fr: "/alentour",
    en: "/surrounding",
    de: "/umgebung-detail",
    es: "/alrededor",
    it: "/dintorno",
    nl: "/omgeving-detail",
  },
} as const;

/**
 * Génère un mapping inverse : path -> { locale, routeKey }
 * Permet de trouver rapidement la clé de route depuis un chemin
 */
export function buildReverseMapping() {
  const reverseMap = new Map<string, { locale: Locale; routeKey: RouteKey }>();

  for (const [routeKey, paths] of Object.entries(routes)) {
    for (const [locale, path] of Object.entries(paths)) {
      reverseMap.set(path, {
        locale: locale as Locale,
        routeKey: routeKey as RouteKey,
      });
    }
  }

  return reverseMap;
}
