import {
  Baby,
  Bath,
  Bed,
  BedDouble,
  BedSingle,
  Coffee,
  CookingPot,
  Heart,
  Sofa,
  Sparkles,
  Table,
  User,
  Users,
  WashingMachine,
  Wifi,
  Wind,
} from "@lucide/astro";

export const roomSlugs = [
  "marocaine",
  "africaine",
  "toscane",
  "creole",
] as const;

export type RoomSlug = (typeof roomSlugs)[number];

type IconComponent = typeof Bed;

export type RoomEquipment = {
  icon?: IconComponent;
  labelKey: string;
};

export type RoomTag = {
  icon?: IconComponent;
  labelKey: string;
};

export type GalleryImage = { src: string; altKey: string };

export type RoomContent = {
  key: RoomSlug;
  image: string;
  gallery: GalleryImage[];
  tags: RoomTag[];
  equipments: RoomEquipment[];
};

export const roomsContent: RoomContent[] = [
  {
    key: "marocaine",
    image: "/example.jpg",
    gallery: [
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.marocaine.gallery.image1",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.marocaine.gallery.image2",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.marocaine.gallery.image3",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.marocaine.gallery.image4",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.marocaine.gallery.image5",
      },
    ],
    tags: [
      { icon: Bed, labelKey: "accommodations.rooms.marocaine.tags.bedding" },
      { icon: Users, labelKey: "accommodations.rooms.marocaine.tags.family" },
      { icon: Heart, labelKey: "accommodations.rooms.marocaine.tags.couple" },
    ],
    equipments: [
      {
        icon: BedDouble,
        labelKey: "accommodations.rooms.equipments.doubleBedSeparable",
      },
      {
        icon: BedSingle,
        labelKey: "accommodations.rooms.equipments.singleBed",
      },
      {
        icon: Wifi,
        labelKey: "accommodations.rooms.equipments.freeHighSpeedWifi",
      },
      {
        icon: Wind,
        labelKey: "accommodations.rooms.equipments.airConditioning",
      },
      {
        icon: Bath,
        labelKey: "accommodations.rooms.equipments.privateBathroom",
      },
      {
        icon: Baby,
        labelKey: "accommodations.rooms.equipments.babyCribOnRequest",
      },
      {
        icon: CookingPot,
        labelKey: "accommodations.rooms.equipments.kettle",
      },
      {
        icon: Sparkles,
        labelKey: "accommodations.rooms.equipments.hairDryer",
      },
      {
        icon: Sofa,
        labelKey: "accommodations.rooms.equipments.sofaBed",
      },
      {
        icon: WashingMachine,
        labelKey: "accommodations.rooms.equipments.commonWashingMachine",
      },
    ],
  },
  {
    key: "africaine",
    image: "/example.jpg",
    gallery: [
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.africaine.gallery.image1",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.africaine.gallery.image2",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.africaine.gallery.image3",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.africaine.gallery.image4",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.africaine.gallery.image5",
      },
    ],
    tags: [
      { icon: Bed, labelKey: "accommodations.rooms.africaine.tags.bedding" },
      { icon: User, labelKey: "accommodations.rooms.africaine.tags.adults" },
    ],
    equipments: [
      {
        icon: BedDouble,
        labelKey: "accommodations.rooms.equipments.doubleBedSeparable",
      },
      {
        icon: Wifi,
        labelKey: "accommodations.rooms.equipments.freeHighSpeedWifi",
      },
      {
        icon: Wind,
        labelKey: "accommodations.rooms.equipments.airConditioning",
      },
      {
        icon: Bath,
        labelKey: "accommodations.rooms.equipments.privateBathroom",
      },
      {
        icon: Baby,
        labelKey: "accommodations.rooms.equipments.babyCribOnRequest",
      },
      {
        icon: Coffee,
        labelKey: "accommodations.rooms.equipments.kettle",
      },
      {
        icon: Sparkles,
        labelKey: "accommodations.rooms.equipments.hairDryer",
      },
      { icon: Table, labelKey: "accommodations.rooms.equipments.desk" },
      {
        icon: WashingMachine,
        labelKey: "accommodations.rooms.equipments.commonWashingMachine",
      },
    ],
  },
  {
    key: "toscane",
    image: "/example.jpg",
    gallery: [
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.toscane.gallery.image1",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.toscane.gallery.image2",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.toscane.gallery.image3",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.toscane.gallery.image4",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.toscane.gallery.image5",
      },
    ],
    tags: [
      { icon: Heart, labelKey: "accommodations.rooms.toscane.tags.couple" },
      { labelKey: "accommodations.rooms.toscane.tags.romantic" },
    ],
    equipments: [
      {
        icon: BedDouble,
        labelKey: "accommodations.rooms.equipments.doubleBed160",
      },
      {
        icon: Wifi,
        labelKey: "accommodations.rooms.equipments.freeHighSpeedWifi",
      },
      {
        icon: Wind,
        labelKey: "accommodations.rooms.equipments.airConditioning",
      },
      {
        icon: Bath,
        labelKey: "accommodations.rooms.equipments.privateBathroom",
      },
      {
        icon: Baby,
        labelKey: "accommodations.rooms.equipments.babyCribOnRequest",
      },
      {
        icon: Coffee,
        labelKey: "accommodations.rooms.equipments.kettle",
      },
      {
        icon: Sparkles,
        labelKey: "accommodations.rooms.equipments.hairDryer",
      },
      { icon: Table, labelKey: "accommodations.rooms.equipments.desk" },
      {
        icon: WashingMachine,
        labelKey: "accommodations.rooms.equipments.commonWashingMachine",
      },
    ],
  },
  {
    key: "creole",
    image: "/example.jpg",
    gallery: [
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.creole.gallery.image1",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.creole.gallery.image2",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.creole.gallery.image3",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.creole.gallery.image4",
      },
      {
        src: "/example.jpg",
        altKey: "accommodations.rooms.creole.gallery.image5",
      },
    ],
    tags: [],
    equipments: [
      {
        icon: BedDouble,
        labelKey: "accommodations.rooms.equipments.doubleBed160",
      },
      {
        icon: Wifi,
        labelKey: "accommodations.rooms.equipments.freeHighSpeedWifi",
      },
      {
        icon: Wind,
        labelKey: "accommodations.rooms.equipments.airConditioning",
      },
      {
        icon: Bath,
        labelKey: "accommodations.rooms.equipments.privateBathroom",
      },
      {
        icon: Baby,
        labelKey: "accommodations.rooms.equipments.babyCribOnRequest",
      },
      {
        icon: Coffee,
        labelKey: "accommodations.rooms.equipments.kettle",
      },
      {
        icon: Sparkles,
        labelKey: "accommodations.rooms.equipments.hairDryer",
      },
      {
        icon: WashingMachine,
        labelKey: "accommodations.rooms.equipments.commonWashingMachine",
      },
    ],
  },
];
