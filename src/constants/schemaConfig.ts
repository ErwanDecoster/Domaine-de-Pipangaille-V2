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
    description:
      "Chambres d'hôtes de charme situées à Andancette dans la Drôme, au cœur d'une ancienne magnanerie rénovée avec parc arboré, cuisine d'été et accès direct à la ViaRhôna. 4 chambres thématiques confortables avec salle de bains privée, accès WiFi gratuit et petit-déjeuner inclus.",
    descriptions: {
      fr: "Chambres d'hôtes de charme situées à Andancette dans la Drôme, au cœur d'une ancienne magnanerie rénovée avec parc arboré, cuisine d'été et accès direct à la ViaRhôna. 4 chambres thématiques confortables avec salle de bains privée, accès WiFi gratuit et petit-déjeuner inclus.",
      en: "Charming guesthouse located in Andancette in the Drôme, featuring beautifully themed rooms in a restored silk mill with arboretum park, summer kitchen and direct access to the ViaRhôna. 4 comfortable thematic rooms with private bathroom, free WiFi and breakfast included.",
      de: "Charmantes Gastzimmer in Andancette in der Drôme, mit wunderschön gestalteten Zimmern in einer restaurierten Seidenspinnerei mit Baumpark, Sommerküche und direktem Zugang zur ViaRhôna. 4 komfortable thematische Zimmer mit eigenem Bad, kostenlosem WLAN und Frühstück inklusive.",
      es: "Alojamiento encantador ubicado en Andancette en la Drôme, con habitaciones elegantemente decoradas en un molino de seda restaurado con parque arbolado, cocina de verano y acceso directo a la ViaRhôna. 4 habitaciones temáticas confortables con baño privado, WiFi gratuito y desayuno incluido.",
      it: "Affascinante guesthouse situato ad Andancette nella Drôme, con camere elegantemente decorate in un antico mulino per seta restaurato con parco arboreo, cucina estiva e accesso diretto alla ViaRhôna. 4 camere tematiche confortevoli con bagno privato, WiFi gratuito e colazione inclusa.",
      nl: "Charmant gastenverblijf in Andancette in de Drôme, met prachtig ingerichte kamers in een gerestaureerde zijdemolen met boomgaard, zomerkeuken en directe toegang tot de ViaRhôna. 4 comfortabele thematische kamers met eigen badkamer, gratis WiFi en ontbijt inbegrepen.",
    },
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
    description:
      "Café et salon de thé situé à Andancette, au sein du Domaine de Pipangaille. Matcha, boissons chaudes, crêpes, glaces et snacking dans un cadre arboré en Drôme Nord.",
    descriptions: {
      fr: "Café et salon de thé situé à Andancette, au sein du Domaine de Pipangaille. Matcha, boissons chaudes, crêpes, glaces et snacking dans un cadre arboré en Drôme Nord.",
      en: "Café and tea salon located at Andancette within Domaine de Pipangaille. Matcha, hot drinks, crêpes, ice cream and snacking in a leafy setting in Drôme Nord.",
      de: "Café und Teestube in Andancette im Domaine de Pipangaille. Matcha, heiße Getränke, Crêpes, Eiscreme und Snacks in einer grünen Umgebung in Drôme Nord.",
      es: "Café y salón de té ubicado en Andancette dentro de Domaine de Pipangaille. Matcha, bebidas calientes, crêpes, helado y snacks en un entorno arbolado en Drôme Nord.",
      it: "Caffè e salotto del tè situato ad Andancette all'interno di Domaine de Pipangaille. Matcha, bevande calde, crêpes, gelato e snack in un ambiente alberato nella Drôme Nord.",
      nl: "Café en theelounge in Andancette op het Domaine de Pipangaille. Matcha, hete dranken, crêpes, ijs en snacks in een groene omgeving in Drôme Nord.",
    },
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
      name: "Moroccan Room",
      names: {
        fr: "Chambre Marocaine",
        en: "Moroccan Room",
        de: "Marokkanisches Zimmer",
        es: "Habitación Marroquí",
        it: "Camera Marocchina",
        nl: "Marokkaanse Kamer",
      },
      description:
        "Luxurious Moroccan-themed room with authentic decor and modern amenities",
      descriptions: {
        fr: "Chambre luxueuse à thème marocain avec décoration authentique et équipements modernes. Un espace confortable et exotique pour un séjour inoubliable.",
        en: "Luxurious Moroccan-themed room with authentic decor and modern amenities. A comfortable and exotic space for an unforgettable stay.",
        de: "Luxuriöses marokkanisches Themenzimmer mit authentischer Dekoration und modernen Annehmlichkeiten. Ein komfortabler und exotischer Platz für einen unvergesslichen Aufenthalt.",
        es: "Habitación de lujo con tema marroquí con decoración auténtica y comodidades modernas. Un espacio confortable y exótico para una estancia inolvidable.",
        it: "Lussuosa camera a tema marocchino con arredamento autentico e servizi moderni. Uno spazio confortevole ed esotico per un soggiorno indimenticabile.",
        nl: "Luxe Marokkaans themagekamer met authentieke inrichting en moderne voorzieningen. Een comfortabele en exotische ruimte voor een onvergetelijk verblijf.",
      },
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
      name: "African Room",
      names: {
        fr: "Chambre Africaine",
        en: "African Room",
        de: "Afrikanisches Zimmer",
        es: "Habitación Africana",
        it: "Camera Africana",
        nl: "Afrikaanse Kamer",
      },
      description:
        "Wild and authentic African-inspired bedroom with safari atmosphere",
      descriptions: {
        fr: "Chambre sauvage et authentique inspirée par l'Afrique avec atmosphère safari. Un espace naturel et aventurier pour une expérience unique.",
        en: "Wild and authentic African-inspired bedroom with safari atmosphere. A natural and adventurous space for a unique experience.",
        de: "Wildes und authentisches afrikanisch inspiriertes Schlafzimmer mit Safari-Atmosphäre. Ein natürlicher und abenteuerlicher Platz für ein einzigartiges Erlebnis.",
        es: "Habitación salvaje y auténtica inspirada en África con atmósfera safari. Un espacio natural y aventurero para una experiencia única.",
        it: "Camera selvatica e autentica ispirata all'Africa con atmosfera safari. Uno spazio naturale e avventuroso per un'esperienza unica.",
        nl: "Wild en authentiek Afrikaans geïnspireerde slaapkamer met safariatmosfeer. Een natuurlijke en avontuurlijke ruimte voor een unieke ervaring.",
      },
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
      name: "Tuscan Room",
      names: {
        fr: "Chambre Toscane",
        en: "Tuscan Room",
        de: "Toskanisches Zimmer",
        es: "Habitación Toscana",
        it: "Camera Toscana",
        nl: "Toscaanse Kamer",
      },
      description:
        "Charming Tuscan-style room inspired by the Italian countryside",
      descriptions: {
        fr: "Chambre charmante de style toscan inspirée par la campagne italienne. Un refuge élégant et romantique pour un séjour mémorable.",
        en: "Charming Tuscan-style room inspired by the Italian countryside. An elegant and romantic retreat for a memorable stay.",
        de: "Charmantes toskanisches Zimmer inspiriert von der italienischen Landschaft. Ein eleganter und romantischer Rückzugsort für einen unvergesslichen Aufenthalt.",
        es: "Habitación encantadora de estilo toscano inspirada en el campo italiano. Un refugio elegante y romántico para una estancia memorable.",
        it: "Affascinante camera in stile toscano ispirata dalla campagna italiana. Un rifugio elegante e romantico per un soggiorno memorabile.",
        nl: "Charmant Toscaans kamertje geïnspireerd door het Italiaanse platteland. Een elegant en romantisch toevluchtsoord voor een onvergetelijk verblijf.",
      },
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
      name: "Creole Room",
      names: {
        fr: "Chambre Créole",
        en: "Creole Room",
        de: "Kreolisches Zimmer",
        es: "Habitación Criolla",
        it: "Camera Creola",
        nl: "Creools Kamertje",
      },
      description:
        "Tropical Creole-inspired room with vibrant colors and island atmosphere",
      descriptions: {
        fr: "Chambre tropicale inspirée par la culture créole avec couleurs vibrantes et atmosphère insulaire. Un paradis ensoleillé pour une évasion exotique.",
        en: "Tropical Creole-inspired room with vibrant colors and island atmosphere. A sunny paradise for an exotic escape.",
        de: "Tropisches kreolisch inspiriertes Zimmer mit lebendigen Farben und Inselatmosphäre. Ein sonniges Paradies für einen exotischen Rückzug.",
        es: "Habitación tropical inspirada en la cultura criolla con colores vibrantes y atmósfera isleña. Un paraíso soleado para una escapada exótica.",
        it: "Camera tropicale ispirata dalla cultura creola con colori vibranti e atmosfera insulare. Un paradiso soleggiato per una fuga esotica.",
        nl: "Tropisch kreools geïnspireerde kamer met levendige kleuren en eilandsfeer. Een zonnig paradijs voor een exotisch avontuur.",
      },
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
