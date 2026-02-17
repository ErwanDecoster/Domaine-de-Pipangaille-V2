import businessHours from "@/constants/businessHours.json";
import { SITE } from "@/constants/site";

type DayKey =
  | "monday"
  | "tuesday"
  | "wednesday"
  | "thursday"
  | "friday"
  | "saturday"
  | "sunday";

type BusinessPeriod = {
  open: string;
  close: string;
};

type BusinessDay = {
  isOpen: boolean;
  periods?: BusinessPeriod[];
};

const DAY_OF_WEEK: Record<DayKey, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

const formatTime = (value: string) => `${value.slice(0, 2)}:${value.slice(2)}`;

const comptoirHours = businessHours.comptoir.hours as Record<
  DayKey,
  BusinessDay
>;

const comptoirOpeningHours = Object.entries(comptoirHours).flatMap(
  ([day, info]) => {
    if (!info.isOpen || !info.periods || info.periods.length === 0) {
      return [];
    }

    return info.periods.map((period: BusinessPeriod) => ({
      dayOfWeek: [DAY_OF_WEEK[day as DayKey]],
      opens: formatTime(period.open),
      closes: formatTime(period.close),
    }));
  },
);

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
    CheckInTime: SITE.hours.CheckIn.start,
    checkoutTime: SITE.hours.checkout.time,
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
    images: ["/images/courtyard-terrace-lawn.jpg", "/images/pool-loungers.jpg"],
  },

  restaurant: {
    name: "Le Comptoir",
    descriptionKey: "schema.restaurant.description",
    cuisines: ["Coffee", "Tea", "French", "Desserts", "Snacks"],
    priceRange: "€€",
    images: [
      "/images/counter/carport-counter.jpg",
      "/images/counter/carport-counter-bikes.jpg",
      "/images/counter/garden-cheese-and-charcuterie-board.jpg",
    ],
    openingHours: comptoirOpeningHours,
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
      images: ["/images/accommodations/moroccan-room-french-door.jpg"],
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
      images: ["/images/accommodations/african-room-double-beds-bathroom.jpg"],
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
      images: ["/images/accommodations/tuscan-room-bed-desk-shelf.jpg"],
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
      images: ["/images/accommodations/creole-room-bed-basket.jpg"],
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
