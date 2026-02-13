import type { ImageMetadata } from "astro";
import {
  Baby,
  Bed,
  BedDouble,
  Monitor,
  Coffee,
  Heart,
  ShowerHead,
  Shirt,
  Sofa,
  Sparkles,
  User,
  Users,
  WashingMachine,
  Wifi,
  AirVent,
  Waves,
  UtensilsCrossed,
} from "@lucide/astro";

import africanRoomBathRoomView from "@/images/african-room-bathroom-view.jpeg";
import africanRoomDoubleBedsBathroom from "@/images/african-room-double-beds-bathroom.jpeg";
import africanRoomDoubleBeds from "@/images/african-room-double-beds.jpeg";
import africanRoomDoubleBedSink from "@/images/african-room-double-bed-sink.jpg";
import africanRoomDoubleBedWindowDecor from "@/images/african-room-double-bed-window-decor.jpg";
import africanRoomDoubleBed from "@/images/african-room-double-bed.jpg";

import tuscanRoomBedBathroomDesk from "@/images/tuscan-room-bed-bathroom-desk.jpeg";
import tuscanRoomBedBathroom from "@/images/tuscan-room-bed-bathroom.jpeg";
import tuscanRoomBedDesk from "@/images/tuscan-room-bed-desk.jpeg";
import tuscanRoomBedDeskShelf from "@/images/tuscan-room-bed-desk-shelf.jpg";
import tuscanRoomBedBasketSink from "@/images/tuscan-room-bed-basket-sink.jpg";
import tuscanRoomShower from "@/images/tuscan-room-shower.jpg";

import moroccanRoomBedSink from "@/images/moroccan-room-bed-sink.jpeg";
import moroccanRoomBed from "@/images/moroccan-room-bed.jpeg";
import moroccanRoomBedToilet from "@/images/moroccan-room-bed-toilet.jpg";
import moroccanRoomBedFrenchDoor from "@/images/moroccan-room-bed-french-door.jpg";
import moroccanRoomShowerSink from "@/images/moroccan-room-shower-sink.jpg";

import creoleRoomBedWindow from "@/images/creole-room-bed-window.jpeg";
import creoleRoomBed from "@/images/creole-room-bed.jpeg";
import creoleRoomBedBasket from "@/images/creole-room-bed-basket.jpg";
import creoleRoomBedWindowDesk from "@/images/creole-room-bed-window-desk.jpg";
import creoleRoomDeskWardrobeMirror from "@/images/creole-room-desk-wardrobe-mirror.jpg";
import creoleRoomDeskWardrobe from "@/images/creole-room-desk-wardrobe.jpg";

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

export type GalleryImage = { src: ImageMetadata; altKey: string };

export type RoomContent = {
  key: RoomSlug;
  image: ImageMetadata;
  gallery: GalleryImage[];
  tags: RoomTag[];
  equipments: RoomEquipment[];
  equipmentsNoteKey?: string;
};

export const roomsContent: RoomContent[] = [
  {
    key: "marocaine",
    image: moroccanRoomBedSink,
    equipmentsNoteKey: "accommodations.rooms.marocaine.equipments.note",
    gallery: [
      {
        src: moroccanRoomBed,
        altKey: "accommodations.rooms.marocaine.gallery.image1",
      },
      {
        src: moroccanRoomBedToilet,
        altKey: "accommodations.rooms.marocaine.gallery.image2",
      },
      {
        src: moroccanRoomBedFrenchDoor,
        altKey: "accommodations.rooms.marocaine.gallery.image3",
      },
      {
        src: moroccanRoomShowerSink,
        altKey: "accommodations.rooms.marocaine.gallery.image4",
      },
      {
        src: moroccanRoomBedSink,
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
        icon: AirVent,
        labelKey: "accommodations.rooms.equipments.airConditioning",
      },
      {
        icon: Wifi,
        labelKey: "accommodations.rooms.equipments.freeHighSpeedWifi",
      },
      {
        icon: Waves,
        labelKey: "accommodations.rooms.equipments.pool",
      },
      {
        icon: UtensilsCrossed,
        labelKey: "accommodations.rooms.equipments.breakfast",
      },
      {
        icon: ShowerHead,
        labelKey: "accommodations.rooms.equipments.ShowerRoomMoroccan",
      },
      {
        icon: Sofa,
        labelKey: "accommodations.rooms.equipments.sofaBed",
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
  {
    key: "africaine",
    image: africanRoomDoubleBedsBathroom,
    equipmentsNoteKey: "accommodations.rooms.africaine.equipments.note",
    gallery: [
      {
        src: africanRoomDoubleBeds,
        altKey: "accommodations.rooms.africaine.gallery.image1",
      },
      {
        src: africanRoomBathRoomView,
        altKey: "accommodations.rooms.africaine.gallery.image2",
      },
      {
        src: africanRoomDoubleBedWindowDecor,
        altKey: "accommodations.rooms.africaine.gallery.image3",
      },
      {
        src: africanRoomDoubleBedSink,
        altKey: "accommodations.rooms.africaine.gallery.image4",
      },
      {
        src: africanRoomDoubleBed,
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
        icon: AirVent,
        labelKey: "accommodations.rooms.equipments.airConditioning",
      },
      {
        icon: Wifi,
        labelKey: "accommodations.rooms.equipments.freeHighSpeedWifi",
      },
      {
        icon: Waves,
        labelKey: "accommodations.rooms.equipments.pool",
      },
      {
        icon: UtensilsCrossed,
        labelKey: "accommodations.rooms.equipments.breakfast",
      },
      {
        icon: ShowerHead,
        labelKey: "accommodations.rooms.equipments.ShowerRoomAfrican",
      },
      { icon: Monitor, labelKey: "accommodations.rooms.equipments.smallTable" },
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
  {
    key: "toscane",
    image: tuscanRoomBedDesk,
    gallery: [
      {
        src: tuscanRoomBedBathroomDesk,
        altKey: "accommodations.rooms.toscane.gallery.image1",
      },
      {
        src: tuscanRoomBedBathroom,
        altKey: "accommodations.rooms.toscane.gallery.image2",
      },
      {
        src: tuscanRoomBedDeskShelf,
        altKey: "accommodations.rooms.toscane.gallery.image3",
      },
      {
        src: tuscanRoomBedBasketSink,
        altKey: "accommodations.rooms.toscane.gallery.image4",
      },
      {
        src: tuscanRoomShower,
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
        icon: AirVent,
        labelKey: "accommodations.rooms.equipments.airConditioning",
      },
      {
        icon: Wifi,
        labelKey: "accommodations.rooms.equipments.freeHighSpeedWifi",
      },
      {
        icon: Waves,
        labelKey: "accommodations.rooms.equipments.pool",
      },
      {
        icon: UtensilsCrossed,
        labelKey: "accommodations.rooms.equipments.breakfast",
      },
      {
        icon: ShowerHead,
        labelKey: "accommodations.rooms.equipments.ShowerRoomTuscan",
      },
      { icon: Monitor, labelKey: "accommodations.rooms.equipments.desk" },
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
  {
    key: "creole",
    image: creoleRoomBedWindow,
    gallery: [
      {
        src: creoleRoomBed,
        altKey: "accommodations.rooms.creole.gallery.image1",
      },
      {
        src: creoleRoomBedBasket,
        altKey: "accommodations.rooms.creole.gallery.image2",
      },
      {
        src: creoleRoomBedWindowDesk,
        altKey: "accommodations.rooms.creole.gallery.image3",
      },
      {
        src: creoleRoomDeskWardrobeMirror,
        altKey: "accommodations.rooms.creole.gallery.image4",
      },
      {
        src: creoleRoomDeskWardrobe,
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
        icon: AirVent,
        labelKey: "accommodations.rooms.equipments.airConditioning",
      },
      {
        icon: Wifi,
        labelKey: "accommodations.rooms.equipments.freeHighSpeedWifi",
      },
      {
        icon: Waves,
        labelKey: "accommodations.rooms.equipments.pool",
      },
      {
        icon: UtensilsCrossed,
        labelKey: "accommodations.rooms.equipments.breakfast",
      },
      {
        icon: ShowerHead,
        labelKey: "accommodations.rooms.equipments.ShowerRoomCreole",
      },
      {
        icon: Shirt,
        labelKey: "accommodations.rooms.equipments.wardrobe",
      },
      {
        icon: Monitor,
        labelKey:
          "accommodations.rooms.equipments.pedestalTableWithTwoArmchairs",
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
