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

import africanRoomBathRoomView from '@/images/african-room-bathroom-view.jpeg';
import africanRoomDoubleBedsBathroom from '@/images/african-room-double-beds-bathroom.jpeg';
import africanRoomDoubleBeds from '@/images/african-room-double-beds.jpeg';

import tuscanRoomBedBathroomDesk from '@/images/tuscan-room-bed-bathroom-desk.jpeg'
import tuscanRoomBedBathroom from '@/images/tuscan-room-bed-bathroom.jpeg'
import tuscanRoomBedDesk from '@/images/tuscan-room-bed-desk.jpeg'

import maroccanRoomBedSink from '@/images/moroccan-room-bed-sink.jpeg'
import maroccanRoomBed from '@/images/moroccan-room-bed.jpeg'

import creoleRoomBedWindow from '@/images/creole-room-bed-window.jpeg'
import creoleRoomBed from '@/images/creole-room-bed.jpeg'
import creoleRoomDecoration from '@/images/creole-room-decoration.jpeg'

import exemple from '@/images/exemple.png';

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
    image: maroccanRoomBedSink,
    equipmentsNoteKey: "accommodations.rooms.marocaine.equipments.note",
    gallery: [
      {
        src: maroccanRoomBed,
        altKey: "accommodations.rooms.marocaine.gallery.image1",
      },
      {
        src: exemple,
        altKey: "accommodations.rooms.marocaine.gallery.image2",
      },
      {
        src: exemple,
        altKey: "accommodations.rooms.marocaine.gallery.image3",
      },
      {
        src: exemple,
        altKey: "accommodations.rooms.marocaine.gallery.image4",
      },
      {
        src: exemple,
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
        src: exemple,
        altKey: "accommodations.rooms.africaine.gallery.image3",
      },
      {
        src: exemple,
        altKey: "accommodations.rooms.africaine.gallery.image4",
      },
      {
        src: exemple,
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
        src: exemple,
        altKey: "accommodations.rooms.toscane.gallery.image3",
      },
      {
        src: exemple,
        altKey: "accommodations.rooms.toscane.gallery.image4",
      },
      {
        src: exemple,
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
    image: creoleRoomBedWindow,
    gallery: [
      {
        src: creoleRoomBed,
        altKey: "accommodations.rooms.creole.gallery.image1",
      },
      {
        src: creoleRoomDecoration,
        altKey: "accommodations.rooms.creole.gallery.image2",
      },
      {
        src: exemple,
        altKey: "accommodations.rooms.creole.gallery.image3",
      },
      {
        src: exemple,
        altKey: "accommodations.rooms.creole.gallery.image4",
      },
      {
        src: exemple,
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
