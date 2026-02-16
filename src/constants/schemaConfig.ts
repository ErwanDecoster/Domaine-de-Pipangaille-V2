import { SITE } from "@/constants/site";

export const SCHEMA_CONFIG = {
  site: {
    url: SITE.url,
    name: SITE.name,
    email: SITE.email,
    phone: SITE.phone.formatted,
    address: {
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postalCode,
      addressCountry: SITE.address.countryCode,
    },
    coordinates: SITE.coordinates,
    hasMap: SITE.mapUrl,
  },

  lodging: {
    name: SITE.name,
    descriptionKey: "schema.lodging.description",
    numberOfRooms: 4,
    checkinTime: "17:00",
    checkoutTime: "11:00",
    petsAllowed: true,
    amenities: [
      "Free WiFi",
      "Air conditioning",
      "Shower",
      "Garden",
      "Parking",
      "Breakfast",
      "Outdoor terrace",
    ],
    logo: "/favicon.svg",
    images: ["/og/og-image.jpg"],
  },

  restaurant: {
    name: "Le Comptoir",
    descriptionKey: "schema.restaurant.description",
    cuisines: ["Coffee", "Tea", "French", "Desserts", "Snacks"],
    priceRange: "€€",
    images: ["/og/og-image.jpg"],
    openingHours: [
      {
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "11:00",
        closes: "23:00",
      },
      {
        dayOfWeek: ["Saturday"],
        opens: "10:00",
        closes: "00:00",
      },
      {
        dayOfWeek: ["Sunday"],
        opens: "10:00",
        closes: "23:00",
      },
    ],
  },

  rooms: [
    {
      key: "marocaine" as const,
      nameKey: "schema.rooms.marocaine.name",
      descriptionKey: "schema.rooms.marocaine.description",
      amenities: [
        "Double bed",
        "Twin beds option",
        "Shower",
        "Air conditioning",
        "WiFi",
      ],
      minOccupancy: 1,
      maxOccupancy: 2,
    },
    {
      key: "africaine" as const,
      nameKey: "schema.rooms.africaine.name",
      descriptionKey: "schema.rooms.africaine.description",
      amenities: [
        "Double bed",
        "Twin beds option",
        "Shower",
        "Air conditioning",
        "WiFi",
        "Work desk",
      ],
      minOccupancy: 1,
      maxOccupancy: 2,
    },
    {
      key: "toscane" as const,
      nameKey: "schema.rooms.toscane.name",
      descriptionKey: "schema.rooms.toscane.description",
      amenities: [
        "Double bed",
        "Shower",
        "Air conditioning",
        "WiFi",
        "Work desk",
      ],
      minOccupancy: 1,
      maxOccupancy: 2,
    },
    {
      key: "creole" as const,
      nameKey: "schema.rooms.creole.name",
      descriptionKey: "schema.rooms.creole.description",
      amenities: [
        "Double bed",
        "Shower",
        "Air conditioning",
        "WiFi",
        "Work desk",
      ],
      minOccupancy: 1,
      maxOccupancy: 2,
    },
  ],

  socialProfiles: [
    SITE.social.facebook,
    SITE.social.instagram,
    SITE.social.linkedin,
    SITE.social.x,
  ],
};

export function getRoomConfig(slug: string) {
  return SCHEMA_CONFIG.rooms.find((room) => room.key === slug);
}

export function getAllRoomSlugs() {
  return SCHEMA_CONFIG.rooms.map((room) => room.key);
}
