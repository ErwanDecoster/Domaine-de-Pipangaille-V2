export const SCHEMA_CONFIG = {
  site: {
    url: "https://domaine-de-pipangaille-v2.vercel.app",
    name: "Domaine de Pipangaille",
    email: "contact@domaine-de-pipangaille.fr",
    phone: "+33 4 75 68 28 24",
    address: {
      streetAddress: "1 Quartier les Marettes",
      addressLocality: "Andancette",
      addressRegion: "Auvergne-Rhône-Alpes",
      postalCode: "26140",
      addressCountry: "FR",
    },
    coordinates: {
      lat: "45.252593",
      lng: "4.809788",
    },
    hasMap:
      "https://www.google.com/maps/place/Domaine+de+Pipangaille/@45.2525628,4.8076338,695m/data=!3m2!1e3!4b1!4m9!3m8!1s0x47f53e41af912869:0xe0c49553166e1500!5m2!4m1!1i2!8m2!3d45.2525628!4d4.8102141!16s%2Fg%2F11btm7z48m?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
  },

  lodging: {
    name: "Domaine de Pipangaille",
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
    "https://www.facebook.com/domainedepipangaille",
    "https://www.instagram.com/domaine_de_pipangaille",
    "https://www.linkedin.com/company/domaine-de-pipangaille",
    "https://x.com/D_Pipangaille",
  ],
};

export function getRoomConfig(slug: string) {
  return SCHEMA_CONFIG.rooms.find((room) => room.key === slug);
}

export function getAllRoomSlugs() {
  return SCHEMA_CONFIG.rooms.map((room) => room.key);
}
