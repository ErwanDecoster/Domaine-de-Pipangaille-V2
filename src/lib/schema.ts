import { SCHEMA_CONFIG } from "@/constants/schemaConfig";

const { site, lodging } = SCHEMA_CONFIG;

function getRoomId(roomKey: string): string {
  return `${site.url}/hebergement/${roomKey}/#room`;
}

function getAbsoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  return `${site.url}${path}`;
}

export interface SchemaBase {
  "@context": "https://schema.org";
  "@type": string;
  [key: string]: unknown;
}

export interface BedAndBreakfastSchema extends SchemaBase {
  "@type": "BedAndBreakfast";
  "@id": string;
  name: string;
  url: string;
  logo: string;
  image: string[];
  description: string;
  telephone: string;
  email: string;
  priceRange: string;
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo?: {
    "@type": "GeoCoordinates";
    latitude: string;
    longitude: string;
  };
  numberOfRooms?: number;
  checkinTime?: string;
  checkoutTime?: string;
  petsAllowed?: boolean;
  amenityFeature?: Array<{
    "@type": "LocationFeatureSpecification";
    name: string;
    value?: boolean;
  }>;
  sameAs?: string[];
  knowsAbout?: string[];
  openingHoursSpecification?: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  containsPlace?: Array<{
    "@id": string;
  }>;
  hasPart?: Array<{
    "@id": string;
  }>;
  subjectOf?: {
    "@type": "WebPage";
    "@id": string;
  };
}

export interface RoomSchema extends SchemaBase {
  "@type": "Room";
  "@id": string;
  name: string;
  description: string;
  image: string[];
  isPartOf?: {
    "@id": string;
  };
  amenityFeature?: Array<{
    "@type": "LocationFeatureSpecification";
    name: string;
    value?: boolean;
  }>;
  occupancy?: {
    "@type": "QuantitativeValue";
    minValue: number;
    maxValue: number;
  };
  url?: string;
}

export interface TouristAttractionSchema extends SchemaBase {
  "@type": "TouristAttraction";
  "@id"?: string;
  name: string;
  url: string;
  description?: string;
  image?: string | string[];
  geo?: {
    "@type": "GeoCoordinates";
    latitude?: string;
    longitude?: string;
  };
}

export interface ItemListSchema extends SchemaBase {
  "@type": "ItemList";
  name: string;
  description?: string;
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    item: TouristAttractionSchema;
  }>;
}

export interface RestaurantSchema extends SchemaBase {
  "@type": "Restaurant" | "CafeOrCoffeeShop";
  "@id": string;
  name: string;
  description: string;
  url: string;
  image: string[];
  address: {
    "@type": "PostalAddress";
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  telephone: string;
  email?: string;
  servesCuisine?: string[];
  priceRange?: string;
  isPartOf?: {
    "@id": string;
  };
  areaServed?: Array<{
    "@type": "AdministrativeArea";
    name: string;
  }>;
  openingHoursSpecification?: Array<{
    "@type": "OpeningHoursSpecification";
    dayOfWeek: string | string[];
    opens: string;
    closes: string;
  }>;
  hasMenu?: {
    "@type": "Menu";
    name: string;
    hasMenuSection?: Array<{
      "@type": "MenuSection";
      name: string;
    }>;
  };
}

export interface BreadcrumbListSchema extends SchemaBase {
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface ImageGallerySchema extends SchemaBase {
  "@type": "ImageGallery";
  associatedMedia: Array<{
    "@type": "ImageObject";
    url: string;
    name: string;
    description?: string;
  }>;
}

export interface PlaceSchema extends SchemaBase {
  "@type": "Place";
  "@id": string;
  name: string;
  description: string;
  image?: string[];
  isPartOf?: {
    "@id": string;
  };
  geo?: {
    "@type": "GeoCoordinates";
    latitude: string;
    longitude: string;
  };
  knowsAbout?: string[];
}

export function generateBedAndBreakfastSchema(
  translations: Record<string, string>,
  options?: {
    images?: string[];
    coordinates?: { lat: string; lng: string };
    amenities?: string[];
    description?: string;
    knowsAbout?: string[];
    openingHours?: Array<{
      dayOfWeek: string | string[];
      opens: string;
      closes: string;
    }>;
    subjectOf?: string;
    hasPart?: Array<{ "@id": string }>;
  },
): BedAndBreakfastSchema {
  const images = (options?.images || ["/og/og-image.jpg"]).map(getAbsoluteUrl);

  const schema: BedAndBreakfastSchema = {
    "@context": "https://schema.org",
    "@type": "BedAndBreakfast",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    logo: getAbsoluteUrl(lodging.logo || "/favicon.svg"),
    image: images,
    description: options?.description || site.name,
    telephone: site.phone,
    email: site.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    numberOfRooms: lodging.numberOfRooms,
    checkinTime: lodging.checkinTime,
    checkoutTime: lodging.checkoutTime,
    petsAllowed: lodging.petsAllowed,
    sameAs: SCHEMA_CONFIG.socialProfiles || [],
    knowsAbout: options?.knowsAbout || [
      "Hébergement proche Safari de Peaugres",
      "Séjour proche Palais Idéal du Facteur Cheval",
      "ViaRhôna",
      "Tourisme en Drôme Nord",
      "Chambres d'hôtes en Auvergne-Rhône-Alpes",
    ],
  } as BedAndBreakfastSchema;

  if ((site as any).hasMap) {
    schema["hasMap"] = (site as any).hasMap;
  }

  const coords = options?.coordinates || site.coordinates;
  if (coords) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: coords.lat,
      longitude: coords.lng,
    };
  }

  if (options?.amenities && options.amenities.length > 0) {
    schema.amenityFeature = options.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    }));
  }

  if (options?.openingHours && options.openingHours.length > 0) {
    schema.openingHoursSpecification = options.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    }));
  }

  schema.containsPlace = SCHEMA_CONFIG.rooms.map((room) => ({
    "@id": getRoomId(room.key),
  }));

  if (options?.subjectOf) {
    schema.subjectOf = {
      "@type": "WebPage",
      "@id": getAbsoluteUrl(options.subjectOf),
    };
  }

  if (options?.hasPart && options.hasPart.length > 0) {
    schema.hasPart = options.hasPart;
  }

  return schema;
}

export function createMainEntityReference(): SchemaBase {
  return {
    "@context": "https://schema.org",
    "@type": "BedAndBreakfast",
    "@id": `${site.url}/#business`,
  };
}

export function generatePlaceSchema(
  name: string,
  description: string,
  options?: {
    images?: string[];
    coordinates?: { lat: string; lng: string };
    knowsAbout?: string[];
  },
): PlaceSchema {
  const schema: PlaceSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "@id": `${site.url}/le-lieu/#place`,
    name,
    description,
    isPartOf: {
      "@id": `${site.url}/#business`,
    },
  };

  if (options?.images && options.images.length > 0) {
    schema.image = options.images.map(getAbsoluteUrl);
  }

  if (options?.coordinates) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: options.coordinates.lat,
      longitude: options.coordinates.lng,
    };
  }

  if (options?.knowsAbout && options.knowsAbout.length > 0) {
    schema["knowsAbout"] = options.knowsAbout;
  }

  return schema;
}

export function generateRoomSchema(
  name: string,
  description: string,
  imageUrls: string[],
  options?: {
    amenities?: string[];
    minOccupancy?: number;
    maxOccupancy?: number;
    url?: string;
    roomKey?: string;
  },
): RoomSchema {
  const images = imageUrls.map(getAbsoluteUrl);
  const roomKey =
    options?.roomKey || name.toLowerCase().replaceAll(/\s+/g, "-");

  const schema: RoomSchema = {
    "@context": "https://schema.org",
    "@type": "Room",
    "@id": getRoomId(roomKey),
    name,
    description,
    image: images,
    isPartOf: {
      "@id": `${site.url}/#business`,
    },
  };

  if (options?.amenities && options.amenities.length > 0) {
    schema.amenityFeature = options.amenities.map((amenity) => ({
      "@type": "LocationFeatureSpecification",
      name: amenity,
      value: true,
    }));
  }

  if (
    options?.minOccupancy !== undefined ||
    options?.maxOccupancy !== undefined
  ) {
    schema.occupancy = {
      "@type": "QuantitativeValue",
      minValue: options?.minOccupancy || 1,
      maxValue: options?.maxOccupancy || 2,
    };
  }

  if (options?.url) {
    schema.url = getAbsoluteUrl(options.url);
  }

  return schema;
}

export function generateRestaurantSchema(
  name: string,
  description: string,
  imageUrls: string[],
  options?: {
    telephone?: string;
    email?: string;
    cuisines?: string[];
    priceRange?: string;
    slug?: string;
    type?: "Restaurant" | "CafeOrCoffeeShop";
    linkToParentBusiness?: boolean;
    areaServed?: string[];
    menu?: {
      name: string;
      sections?: Array<{ name: string }>;
    };
    openingHours?: Array<{
      dayOfWeek: string | string[];
      opens: string;
      closes: string;
    }>;
  },
): RestaurantSchema {
  const images = imageUrls.map(getAbsoluteUrl);
  const slug = options?.slug || "le-comptoir";
  const restaurantId = `${site.url}/${slug}/#restaurant`;
  const restaurantUrl = `${site.url}/${slug}`;

  const schema: RestaurantSchema = {
    "@context": "https://schema.org",
    "@type": options?.type || "CafeOrCoffeeShop",
    "@id": restaurantId,
    name,
    description,
    url: restaurantUrl,
    image: images,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.streetAddress,
      addressLocality: site.address.addressLocality,
      addressRegion: site.address.addressRegion,
      postalCode: site.address.postalCode,
      addressCountry: site.address.addressCountry,
    },
    telephone: options?.telephone || site.phone,
  };

  if (options?.linkToParentBusiness !== false) {
    schema.isPartOf = {
      "@id": `${site.url}/#business`,
    };
  }

  if (options?.email) {
    schema.email = options.email;
  }

  if (options?.cuisines && options.cuisines.length > 0) {
    schema.servesCuisine = options.cuisines;
  }

  if (options?.priceRange) {
    schema.priceRange = options.priceRange;
  }

  if (options?.areaServed && options.areaServed.length > 0) {
    schema.areaServed = options.areaServed.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    }));
  }

  if (options?.menu) {
    schema.hasMenu = {
      "@type": "Menu",
      name: options.menu.name,
    };

    if (options.menu.sections && options.menu.sections.length > 0) {
      schema.hasMenu.hasMenuSection = options.menu.sections.map((section) => ({
        "@type": "MenuSection",
        name: section.name,
      }));
    }
  }

  if (options?.openingHours && options.openingHours.length > 0) {
    schema.openingHoursSpecification = options?.openingHours.map((hours) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: hours.dayOfWeek,
      opens: hours.opens,
      closes: hours.closes,
    }));
  }

  return schema;
}

export function generateBreadcrumbListSchema(
  items: Array<{ name: string; path: string }>,
): BreadcrumbListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: getAbsoluteUrl(item.path),
    })),
  };
}

export function generateTouristAttractionSchema(
  name: string,
  url: string,
  options?: {
    description?: string;
    image?: string | string[];
    coordinates?: { lat: string; lng: string };
  },
): TouristAttractionSchema {
  const schema: TouristAttractionSchema = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    name,
    url,
  };

  if (options?.description) {
    schema.description = options.description;
  }

  if (options?.image) {
    schema.image = Array.isArray(options.image)
      ? options.image.map(getAbsoluteUrl)
      : getAbsoluteUrl(options.image);
  }

  if (options?.coordinates) {
    schema.geo = {
      "@type": "GeoCoordinates",
      latitude: options.coordinates.lat,
      longitude: options.coordinates.lng,
    };
  }

  return schema;
}

export function generateAttractionItemListSchema(
  attractions: Array<{
    name: string;
    url: string;
    description?: string;
    image?: string;
  }>,
  listName: string = "Attractive places near Domaine de Pipangaille",
): ItemListSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: listName,
    itemListElement: attractions.map((attraction, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        name: attraction.name,
        url: attraction.url,
        ...(attraction.description && { description: attraction.description }),
        ...(attraction.image && { image: getAbsoluteUrl(attraction.image) }),
      },
    })),
  };
}

export function generateImageGallerySchema(
  images: Array<{ url: string; name: string; description?: string }>,
): ImageGallerySchema {
  return {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    associatedMedia: images.map((img) => ({
      "@type": "ImageObject",
      url: getAbsoluteUrl(img.url),
      name: img.name,
      description: img.description,
    })),
  };
}
