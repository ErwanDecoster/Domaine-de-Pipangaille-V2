import { SCHEMA_CONFIG } from "@/constants/schemaConfig";
import {
  generateBedAndBreakfastSchema,
  generateRestaurantSchema,
  generateRoomSchema,
  generateBreadcrumbListSchema,
  generateImageGallerySchema,
  createMainEntityReference,
  generatePlaceSchema,
  generateAttractionItemListSchema,
} from "./schema";

type Language = "fr" | "en" | "de" | "es" | "it" | "nl";

const BREADCRUMB_TRANSLATIONS: Record<Language, Record<string, string>> = {
  fr: {
    home: "Accueil",
    accommodations: "Hébergements",
    room: "Chambre",
    surroundings: "Alentours",
    contact: "Contact",
    place: "Le Lieu",
    comptoir: "Le Comptoir",
  },
  en: {
    home: "Home",
    accommodations: "Accommodations",
    room: "Room",
    surroundings: "Surroundings",
    contact: "Contact",
    place: "The Place",
    comptoir: "The Counter",
  },
  de: {
    home: "Startseite",
    accommodations: "Unterkünfte",
    room: "Zimmer",
    surroundings: "Umgebung",
    contact: "Kontakt",
    place: "Der Ort",
    comptoir: "Der Tresen",
  },
  es: {
    home: "Inicio",
    accommodations: "Alojamientos",
    room: "Habitación",
    surroundings: "Alrededores",
    contact: "Contacto",
    place: "El Lugar",
    comptoir: "El Mostrador",
  },
  it: {
    home: "Home",
    accommodations: "Alloggi",
    room: "Camera",
    surroundings: "Dintorni",
    contact: "Contatti",
    place: "Il Luogo",
    comptoir: "Il Banco",
  },
  nl: {
    home: "Startpagina",
    accommodations: "Accommodaties",
    room: "Kamer",
    surroundings: "Omgeving",
    contact: "Contact",
    place: "De Plek",
    comptoir: "De Toonbank",
  },
};

export function generateLocalizedBedAndBreakfastSchema(
  lang: Language,
  translations: Record<string, string>,
) {
  const description =
    SCHEMA_CONFIG.lodging.descriptions?.[lang] ||
    SCHEMA_CONFIG.lodging.description;

  return generateBedAndBreakfastSchema(translations, {
    images: SCHEMA_CONFIG.lodging.images,
    coordinates: SCHEMA_CONFIG.site.coordinates,
    amenities: SCHEMA_CONFIG.lodging.amenities,
    description,
    hasPart: [
      {
        "@id":
          "https://domaine-de-pipangaille-v2.vercel.app/le-comptoir/#restaurant",
      },
    ],
  });
}

export function generateLocalizedRestaurantSchema(lang: Language) {
  const menuSections: Record<Language, Array<{ name: string }>> = {
    fr: [
      { name: "Boissons chaudes" },
      { name: "Boissons froides" },
      { name: "Matcha & spécialités" },
      { name: "Crêpes & gourmandises" },
      { name: "Snacking salé" },
    ],
    en: [
      { name: "Hot Drinks" },
      { name: "Cold Drinks" },
      { name: "Matcha & Specialties" },
      { name: "Crepes & Desserts" },
      { name: "Savory Snacking" },
    ],
    de: [
      { name: "Heiße Getränke" },
      { name: "Kalte Getränke" },
      { name: "Matcha & Spezialitäten" },
      { name: "Crêpes & Süßes" },
      { name: "Salzige Snacks" },
    ],
    es: [
      { name: "Bebidas calientes" },
      { name: "Bebidas frías" },
      { name: "Matcha & Especiales" },
      { name: "Crêpes & Dulces" },
      { name: "Snacks salados" },
    ],
    it: [
      { name: "Bevande calde" },
      { name: "Bevande fredde" },
      { name: "Matcha & Specialità" },
      { name: "Crêpes e Dolci" },
      { name: "Snack salato" },
    ],
    nl: [
      { name: "Hete dranken" },
      { name: "Koude dranken" },
      { name: "Matcha & Specialiteiten" },
      { name: "Crêpes & Desserts" },
      { name: "Hartige Snacks" },
    ],
  };

  const description =
    SCHEMA_CONFIG.restaurant.descriptions?.[lang] ||
    SCHEMA_CONFIG.restaurant.description;

  return generateRestaurantSchema(
    SCHEMA_CONFIG.restaurant.name,
    description,
    SCHEMA_CONFIG.restaurant.images,
    {
      slug: "le-comptoir",
      type: "CafeOrCoffeeShop",
      cuisines: SCHEMA_CONFIG.restaurant.cuisines,
      priceRange: SCHEMA_CONFIG.restaurant.priceRange,
      linkToParentBusiness: true,
      areaServed: ["Drôme Nord", "Auvergne-Rhône-Alpes"],
      menu: {
        name: "Menu du Comptoir",
        sections: menuSections[lang] || menuSections.en,
      },
      openingHours: SCHEMA_CONFIG.restaurant.openingHours,
    },
  );
}

export function generateLocalizedRoomSchema(
  roomKey: string,
  langPath: string,
  images: string[],
  lang: Language,
) {
  const roomConfig = SCHEMA_CONFIG.rooms.find((room) => room.key === roomKey);
  if (!roomConfig) return null;

  const name = roomConfig.names?.[lang] || roomConfig.name;
  const description = roomConfig.descriptions?.[lang] || roomConfig.description;

  return generateRoomSchema(
    name,
    description,
    images.length > 0 ? images : SCHEMA_CONFIG.lodging.images,
    {
      amenities: roomConfig.amenities,
      minOccupancy: roomConfig.minOccupancy,
      maxOccupancy: roomConfig.maxOccupancy,
      url: `${langPath}/hebergement/${roomKey}`,
      roomKey: roomKey,
    },
  );
}

export function generateLocalizedBreadcrumbList(
  lang: Language,
  langPrefix: string,
  items: Array<{ name: string; path: string }>,
) {
  const translatedItems = items.map((item) => ({
    name:
      BREADCRUMB_TRANSLATIONS[lang]?.[
        item.name as keyof (typeof BREADCRUMB_TRANSLATIONS)[Language]
      ] || item.name,
    path: `${langPrefix}${item.path}`,
  }));

  return generateBreadcrumbListSchema(translatedItems);
}

export function generateMainEntityReference() {
  return createMainEntityReference();
}

export function generateLocalizedPlaceSchema(
  lang: Language,
  images?: string[],
) {
  const placeDescriptions: Record<Language, string> = {
    fr: "Ancienne magnanerie rénovée située à Andancette avec parc arboré, terrasse extérieure et accès direct à la ViaRhôna. Un lieu chargé d'histoire et de charme, parfait pour se détendre et explorer la région.",
    en: "Restored traditional silk mill located in Andancette with arboretum park, outdoor terrace and direct access to the ViaRhôna. A place rich in history and charm, perfect for relaxation and regional exploration.",
    de: "Restauriertes traditionelles Seidenhaus in Andancette mit Baumpark, Außenterrasse und direktem Zugang zur ViaRhôna. Ein Ort voller Geschichte und Charme, perfekt zum Entspannen und Erkunden der Region.",
    es: "Antiguo molino de seda restaurado ubicado en Andancette con parque arbolado, terraza exterior y acceso directo a la ViaRhôna. Un lugar lleno de historia y encanto, perfecto para relajarse y explorar la región.",
    it: "Antico mulino per seta restaurato situato ad Andancette con parco arboreo, terrazza esterna e accesso diretto alla ViaRhôna. Un luogo ricco di storia e fascino, perfetto per rilassarsi ed esplorare la regione.",
    nl: "Gerestaureerde traditionele zijdemolen in Andancette met boomgaard, buitenterras en directe toegang tot de ViaRhôna. Een plaats vol geschiedenis en charme, perfect om te ontspannen en de regio te verkennen.",
  };

  const placeKnowsAbout: Record<Language, string[]> = {
    fr: [
      "Magnanerie restaurée",
      "Patrimoine architectural régional",
      "Parc arboré",
      "Terrasse extérieure",
      "Architecture traditionnelle",
    ],
    en: [
      "Restored silk mill",
      "Regional architectural heritage",
      "Arboretum park",
      "Outdoor terrace",
      "Traditional architecture",
    ],
    de: [
      "Restauriertes Seidenhaus",
      "Regionales architektonisches Erbe",
      "Baumpark",
      "Außenterrasse",
      "Traditionelle Architektur",
    ],
    es: [
      "Molino de seda restaurado",
      "Patrimonio arquitectónico regional",
      "Parque arbolado",
      "Terraza exterior",
      "Arquitectura tradicional",
    ],
    it: [
      "Mulino per seta restaurato",
      "Patrimonio architettonico regionale",
      "Parco arboreo",
      "Terrazza esterna",
      "Architettura tradizionale",
    ],
    nl: [
      "Gerestaureerde zijdemolen",
      "Regionaal architectonisch erfgoed",
      "Boomgaard",
      "Buitenterras",
      "Traditionele architectuur",
    ],
  };

  return generatePlaceSchema(
    "Le Lieu – Domaine de Pipangaille",
    placeDescriptions[lang] || placeDescriptions.en,
    {
      images,
      coordinates: SCHEMA_CONFIG.site.coordinates,
      knowsAbout: placeKnowsAbout[lang] || placeKnowsAbout.en,
    },
  );
}

export function generateLocalizedAttractionsList(
  lang: Language,
  attractions: Array<{
    name: string;
    url: string;
    description?: string;
    image?: string;
  }>,
) {
  const listNames: Record<Language, string> = {
    fr: "Activités et lieux à proximité du Domaine de Pipangaille",
    en: "Nearby attractions and activities near Domaine de Pipangaille",
    de: "Aktivitäten und Sehenswürdigkeiten in der Nähe des Domaine de Pipangaille",
    es: "Actividades y lugares de interés cerca del Domaine de Pipangaille",
    it: "Attività e luoghi di interesse vicino al Domaine de Pipangaille",
    nl: "Activiteiten en attracties in de buurt van Domaine de Pipangaille",
  };

  return generateAttractionItemListSchema(attractions, listNames[lang]);
}

export const DEFAULT_ATTRACTIONS = [
  {
    name: "Safari de Peaugres",
    url: "https://www.safari-peaugres.com",
    description: "Parc zoologique interactif avec vue sur les Alpes",
    image: "/images/safari-peaugres.jpg",
  },
  {
    name: "Palais Idéal du Facteur Cheval",
    url: "https://www.facteurcheval.com",
    description:
      "Monument naïf unique construit par un facteur rural - Chef-d'œuvre de l'art brut",
    image: "/images/palais-ideal-du-facteur-cheval.jpg",
  },
  {
    name: "ViaRhôna",
    url: "https://www.viarhona.com",
    description:
      "Voie verte reliant le lac Léman à la Méditerranée - Itinéraire cycliste mythique",
    image: "/images/viarhona.jpg",
  },
];

export { generateImageGallerySchema };
