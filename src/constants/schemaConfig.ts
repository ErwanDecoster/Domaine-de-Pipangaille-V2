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
      fr: "Chambres d'hôtes de charme situées à Andancette dans la Drôme, au cœur d'une ancienne magnanerie rénovée avec parc arboré et accès direct à la ViaRhôna. 4 chambres thématiques confortables avec salle de bains privée, accès WiFi gratuit et petit-déjeuner inclus.",
      en: "Charming guesthouse located in Andancette in the Drôme, featuring beautifully themed rooms in a restored silk mill with arboretum park and direct access to the ViaRhôna. 4 comfortable thematic rooms with private bathroom, free WiFi and breakfast included.",
      de: "Charmantes Gastzimmer in Andancette in der Drôme, mit wunderschön gestalteten Zimmern in einer restaurierten Seidenspinnerei mit Baumpark und direktem Zugang zur ViaRhôna. 4 komfortable thematische Zimmer mit eigenem Bad, kostenlosem WLAN und Frühstück inklusive.",
      es: "Alojamiento encantador ubicado en Andancette en la Drôme, con habitaciones elegantemente decoradas en un molino de seda restaurado con parque arbolado y acceso directo a la ViaRhôna. 4 habitaciones temáticas confortables con baño privado, WiFi gratuito y desayuno incluido.",
      it: "Affascinante guesthouse situato ad Andancette nella Drôme, con camere elegantemente decorate in un antico mulino per seta restaurato con parco arboreo e accesso diretto alla ViaRhôna. 4 camere tematiche confortevoli con bagno privato, WiFi gratuito e colazione inclusa.",
      nl: "Charmant gastenverblijf in Andancette in de Drôme, met prachtig ingerichte kamers in een gerestaureerde zijdemolen met boomgaard en directe toegang tot de ViaRhôna. 4 comfortabele thematische kamers met eigen badkamer, gratis WiFi en ontbijt inbegrepen.",
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
        "The Moroccan suite, with a warm atmosphere inspired by riads and natural materials, is ideal for a couple seeking escape and a romantic moment. This room can accommodate a couple with one child. This room has a 1.8 x 2 m bed that can be separated into twin beds.",
      descriptions: {
        fr: "La suite marocaine, avec une atmosphère chaleureuse inspirée des riads et des matières naturelles, est idéale pour un couple en quête d'évasion et d'un moment romantique. Cette chambre peut accueillir un couple avec un enfant. Cette chambre dispose d'un lit de 1,8 x 2 m séparable.",
        en: "The Moroccan suite, with a warm atmosphere inspired by riads and natural materials, is ideal for a couple seeking escape and a romantic moment. This room can accommodate a couple with one child. This room has a 1.8 x 2 m bed that can be separated into twin beds.",
        de: "Die marokkanische Suite mit einer von Riads und Naturmaterialien inspirierten, warmen Atmosphäre ist ideal für ein Paar auf der Suche nach Tapetenwechsel und einem romantischen Moment. Dieses Zimmer kann ein Paar mit einem Kind beherbergen. Dieses Zimmer hat ein 1,8 x 2 m großes Bett, das in Einzelbetten aufgeteilt werden kann.",
        es: "La suite marroquí, con una atmósfera cálida inspirada en riads y materiales naturales, es ideal para una pareja en busca de evasión y un momento romántico. Esta habitación puede acoger a una pareja con un niño. Esta habitación tiene una cama de 1,8 x 2 m separable.",
        it: "La suite marocchina, con un'atmosfera calda ispirata ai riad e ai materiali naturali, è ideale per una coppia in cerca di evasione e di un momento romantico. Questa camera dispone di un letto di 1,8 x 2 m separabile.",
        nl: "Het Marokkaanse suite, met een warme sfeer geïnspireerd door riads en natuurlijke materialen, is ideaal voor een stel op zoek naar ontsnapping en een romantisch moment. Deze kamer kan een stel met een kind huisvesten. Deze kamer beschikt over een bed van 1,8 x 2 m dat kan worden gescheiden.",
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
        "The African room with a safari-inspired atmosphere and unique decoration, ideal for a couple, friends or professionals. This room has a 1.8 x 2 m bed that can be separated into twin beds.",
      descriptions: {
        fr: "La chambre africaine avec une atmosphère inspirée Safari et une décoration atypique, idéale pour un couple, des amis ou des professionnels. Cette chambre dispose d'un lit de 1,8 x 2 m séparable.",
        en: "The African room with a safari-inspired atmosphere and unique decoration, ideal for a couple, friends or professionals. This room has a 1.8 x 2 m bed that can be separated into twin beds.",
        de: "Das afrikanische Zimmer mit Safari-inspirierter Atmosphäre und einzigartiger Dekoration, ideal für ein Paar, Freunde oder Geschäftsleute. Dieses Zimmer hat ein 1,8 x 2 m großes Bett, das in Einzelbetten aufgeteilt werden kann.",
        es: "La habitación africana con una atmósfera inspirada en Safari y una decoración atípica, ideal para una pareja, amigos o profesionales. Esta habitación dispone de una cama de 1,8 x 2 m separable.",
        it: "La camera africana con un'atmosfera ispirata al Safari e una decorazione atipica, ideale per una coppia, amici o professionisti. Questa camera dispone di un letto di 1,8 x 2 m separabile.",
        nl: "De Afrikaanse kamer met een sfeer geïnspireerd door Safari en atypische decoratie, ideaal voor een stel, vrienden of professionals. Deze kamer beschikt over een bed van 1,8 x 2 m dat kan worden gescheiden.",
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
        "The Tuscan room, inspired by Italy, combines romance and passion with its pastel colors. Ideal for a couple seeking a moment of serenity. This room has a 1.6 x 2 m bed.",
      descriptions: {
        fr: "La chambre toscane, inspirée de l'Italie, allie romantisme et passion avec ses couleurs pastel. Idéale pour un couple en quête d'un moment de sérénité. Cette chambre dispose d'un lit de 1,6 x 2 m.",
        en: "The Tuscan room, inspired by Italy, combines romance and passion with its pastel colors. Ideal for a couple seeking a moment of serenity. This room has a 1.6 x 2 m bed.",
        de: "Das toskanische Zimmer, von Italien inspiriert, vereint Romantik und Leidenschaft mit seinen Pastellfarben. Ideal für ein Paar auf der Suche nach einem Moment der Gelassenheit.",
        es: "La habitación toscana, inspirada en Italia, combina romanticismo y pasión con sus colores pastel. Ideal para una pareja en busca de un momento de serenidad. Esta habitación dispone de una cama de 1,6 x 2 m.",
        it: "La camera toscana, ispirata all'Italia, unisce romanticismo e passione con i suoi colori pastello. Ideale per una coppia in cerca di un momento di serenità. Questa camera dispone di un letto di 1,6 x 2 m.",
        nl: "De Toscaanse kamer, geïnspireerd door Italië, combineert romantiek en passie met zijn pasteltinten. Ideaal voor een stel op zoek naar een moment van sereniteit. Deze kamer beschikt over een bed van 1,6 x 2 m.",
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
        "The Creole Room is inspired by a journey to the islands with its blue colors and rattan furniture. This room is ideal for a couple.",
      descriptions: {
        fr: "La chambre Créole est inspirée d'un voyage vers les îles avec ses couleurs bleues et son mobilier en rotin. Cette chambre est idéale pour un couple. Cette chambre dispose d'un lit de 1,6 x 2 m.",
        en: "The Creole Room is inspired by a journey to the islands with its blue colors and rattan furniture. This room is ideal for a couple.",
        de: "Das kreolische Zimmer ist von einer Reise zu den Inseln mit seinen blauen Farben und Rattanmöbeln inspiriert. Dieses Zimmer ist ideal für ein Paar.",
        es: "La habitación Criolla está inspirada en un viaje hacia las islas con sus colores azules y su mobiliario de ratán. Esta habitación es ideal para una pareja. Esta habitación dispone de una cama de 1,6 x 2 m.",
        it: "La camera Creola è ispirata a un viaggio verso le isole con i suoi colori blu e il suo arredamento in rattan. Questa camera è ideale per una coppia. Questa camera dispone di un letto di 1,6 x 2 m.",
        nl: "De Creoolse kamer is geïnspireerd door een reis naar de eilanden met zijn blauwe kleuren en rattanmeubilair. Deze kamer is ideaal voor een koppel.",
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
