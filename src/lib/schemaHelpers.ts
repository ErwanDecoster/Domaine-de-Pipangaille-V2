import { SCHEMA_CONFIG } from "@/constants/schemaConfig";
import { useTranslations } from "@/lib/i18n";
import { getLocalizedUrl } from "@/lib/routeTranslator";
import {
  generateBedAndBreakfastSchema,
  generateRestaurantSchema,
  generateRoomSchema,
  generateBreadcrumbListSchema,
  createMainEntityReference,
  generatePlaceSchema,
  generateAttractionItemListSchema,
} from "./schema";

type Language = "fr" | "en" | "de" | "es" | "it" | "nl";

type TranslationKey = Parameters<ReturnType<typeof useTranslations>>[0];

const SITE_URL = SCHEMA_CONFIG.site.url;

const PLACE_KNOWS_ABOUT_KEYS: TranslationKey[] = [
  "schema.place.knowsAbout.0",
  "schema.place.knowsAbout.1",
  "schema.place.knowsAbout.2",
  "schema.place.knowsAbout.3",
  "schema.place.knowsAbout.4",
];

const BED_AND_BREAKFAST_KNOWS_ABOUT_KEYS: TranslationKey[] = [
  "schema.bedAndBreakfast.knowsAbout.0",
  "schema.bedAndBreakfast.knowsAbout.1",
  "schema.bedAndBreakfast.knowsAbout.2",
  "schema.bedAndBreakfast.knowsAbout.3",
  "schema.bedAndBreakfast.knowsAbout.4",
];

const MENU_SECTION_KEYS: TranslationKey[] = [
  "schema.restaurant.menu.section.0",
  "schema.restaurant.menu.section.1",
  "schema.restaurant.menu.section.2",
  "schema.restaurant.menu.section.3",
  "schema.restaurant.menu.section.4",
];

export function generateLocalizedBedAndBreakfastSchema(lang: Language) {
  const t = useTranslations(lang);
  const description = t(SCHEMA_CONFIG.lodging.descriptionKey as TranslationKey);
  const counterPath = getLocalizedUrl("counter", lang).replace(/^\//, "");
  const containsPlace = SCHEMA_CONFIG.rooms.map((room) => ({
    "@id": `${SITE_URL}${getLocalizedUrl("accommodation", lang, room.key)}#room`,
  }));

  return generateBedAndBreakfastSchema({
    images: SCHEMA_CONFIG.lodging.images,
    coordinates: SCHEMA_CONFIG.site.coordinates,
    amenities: SCHEMA_CONFIG.lodging.amenities,
    description,
    knowsAbout: BED_AND_BREAKFAST_KNOWS_ABOUT_KEYS.map((key) => t(key)),
    containsPlace,
    hasPart: [
      {
        "@id": `${SITE_URL}/${counterPath}/#restaurant`,
      },
    ],
  });
}

export function generateLocalizedRestaurantSchema(lang: Language) {
  const t = useTranslations(lang);
  const description = t(
    SCHEMA_CONFIG.restaurant.descriptionKey as TranslationKey,
  );
  const counterPath = getLocalizedUrl("counter", lang).replace(/^\//, "");

  return generateRestaurantSchema(
    SCHEMA_CONFIG.restaurant.name,
    description,
    SCHEMA_CONFIG.restaurant.images,
    {
      slug: counterPath,
      type: "CafeOrCoffeeShop",
      cuisines: SCHEMA_CONFIG.restaurant.cuisines,
      priceRange: SCHEMA_CONFIG.restaurant.priceRange,
      linkToParentBusiness: true,
      areaServed: ["Drôme Nord", SCHEMA_CONFIG.site.address.addressRegion],
      menu: {
        name: t("schema.restaurant.menu.name"),
        sections: MENU_SECTION_KEYS.map((key) => ({ name: t(key) })),
      },
      openingHours: SCHEMA_CONFIG.restaurant.openingHours,
    },
  );
}

export function generateLocalizedRoomSchema(
  roomKey: string,
  images: string[],
  lang: Language,
) {
  const roomConfig = SCHEMA_CONFIG.rooms.find((room) => room.key === roomKey);
  if (!roomConfig) return null;

  const t = useTranslations(lang);
  const name = t(roomConfig.nameKey as TranslationKey);
  const description = t(roomConfig.descriptionKey as TranslationKey);
  let schemaImages = SCHEMA_CONFIG.lodging.images;

  if (roomConfig.images && roomConfig.images.length > 0) {
    schemaImages = roomConfig.images;
  }

  if (images.length > 0) {
    schemaImages = images;
  }

  return generateRoomSchema(name, description, schemaImages, {
    amenities: roomConfig.amenities,
    minOccupancy: roomConfig.minOccupancy,
    maxOccupancy: roomConfig.maxOccupancy,
    url: getLocalizedUrl("accommodation", lang, roomKey),
    roomKey: roomKey,
  });
}

export function generateLocalizedBreadcrumbList(
  lang: Language,
  items: Array<{ name: string; path: string }>,
) {
  const t = useTranslations(lang);

  const translatedItems = items.map((item) => ({
    name: t(`schema.breadcrumb.${item.name}` as TranslationKey) || item.name,
    path: item.path,
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
  const t = useTranslations(lang);

  return generatePlaceSchema(
    "Le Lieu – Domaine de Pipangaille",
    t("schema.place.description"),
    {
      images,
      coordinates: SCHEMA_CONFIG.site.coordinates,
      knowsAbout: PLACE_KNOWS_ABOUT_KEYS.map((key) => t(key)),
    },
  );
}

export function generateLocalizedAttractionsList(
  lang: Language,
  attractions: Array<{
    name: string;
    url: string;
    description?: string;
    descriptionKey?: TranslationKey;
    image?: string;
  }>,
) {
  const t = useTranslations(lang);

  const localizedAttractions = attractions.map((attraction) => {
    const description = attraction.descriptionKey
      ? t(attraction.descriptionKey)
      : attraction.description;

    return {
      name: attraction.name,
      url: attraction.url,
      image: attraction.image,
      description: description || undefined,
    };
  });

  return generateAttractionItemListSchema(
    localizedAttractions,
    t("schema.attractions.listName"),
  );
}

export const DEFAULT_ATTRACTIONS = [
  {
    name: "Safari de Peaugres",
    url: "https://www.safari-peaugres.com",
    descriptionKey: "surroundings.descriptions.safari_peaugres.short",
    image: "/images/safari-peaugres.jpg",
  },
  {
    name: "Palais Idéal du Facteur Cheval",
    url: "https://www.facteurcheval.com",
    descriptionKey:
      "surroundings.descriptions.palais_ideal_du_facteur_cheval.short",
    image: "/images/palais-ideal-du-facteur-cheval.jpg",
  },
  {
    name: "ViaRhôna",
    url: "https://www.viarhona.com",
    descriptionKey: "surroundings.descriptions.viarhona.short",
    image: "/images/viarhona.jpg",
  },
];

export { generateImageGallerySchema } from "./schema";
