import acroboisPilatImg from "../images/acrobois-pilat.jpg";
import auPreDuRhoneImg from "../images/au-pre-du-rhone.jpg";
import cesarPizzaImg from "../images/cesar-pizza.jpg";
import chateauDeGrignanImg from "../images/chateau-de-grignan.jpg";
import compagnieDesCanotiersRhoneSaoneImg from "../images/compagnie-des-canotiers-rhone-saone.jpg";
import golfDeSaintClairImg from "../images/golf-de-saint-clair.jpg";
import laBelleEpoqueImg from "../images/la-belle-epoque.jpg";
import laFabriqueDeJulienImg from "../images/la-fabrique-de-julien.jpg";
import laPouleNoireImg from "../images/la-poule-noire.jpg";
import laTableDesSajImg from "../images/la-table-des-saj.jpg";
import laVillaChampagnereImg from "../images/la-villa-champagnere.jpg";
import labyrintheVegetalImg from "../images/labyrinthe-vegetal.jpg";
import lamasDesPlainesImg from "../images/lamas-des-plaines.jpg";
import leChateauDAnetImg from "../images/le-chateau-d-anet.jpg";
import leNougatDeMontsegurImg from "../images/le-nougat-de-montsegur.jpg";
import lePicotinImg from "../images/le-picotin.jpg";
import leRelaisDesMaillesImg from "../images/le-relais-des-mailles.jpg";
import lesAgaponRestaurantImg from "../images/les-agapon-restaurant.jpg";
import montgolfieresCieImg from "../images/montgolfieres-cie.jpg";
import museeDeLAlambicImg from "../images/musee-de-l-alambic.jpg";
import museeValrhonaImg from "../images/musee-valrhona.jpg";
import oDailyTruckImg from "../images/o-daily-truck.jpg";
import palaisIdealDuFacteurChevalImg from "../images/palais-ideal-du-facteur-cheval.jpg";
import safariPeaugresImg from "../images/safari-peaugres.jpg";
import trainDeLArdecheImg from "../images/train-de-l-ardeche.jpg";
import viafluviaImg from "../images/viafluvia.jpg";
import viarhonaImg from "../images/viarhona.jpg";

export const surroundings = {
  toVisit: [
    {
      title: "Safari Peaugres",
      category: ["family"],
      shortDesc: "surroundings.descriptions.safari_peaugres.short",
      longDesc: ["surroundings.descriptions.safari_peaugres.long"],
      gallery: [
        {
          src: safariPeaugresImg,
          altKey: "surroundings.safari_peaugres.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25399.90187538962!2d4.711628222803869!3d45.26310487550016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f51417d31f614f%3A0x762be489cc59804e!2sSafari%20de%20Peaugres!5e0!3m2!1sen!2sfr!4v165953927",
      website: "https://www.safari-peaugres.com/",
      bookLink: "https://www.safari-peaugres.com/horaires-et-tarifs",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/safari.de.peaugres/",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/wowsafaripeaugres/",
        },
        {
          platform: "tiktok",
          link: "https://www.tiktok.com/@wowsafaripeaugres",
        },
      ],
      slug: "safari_peaugres",
      bikeRoute: {
        durationMinutes: 27,
        distanceKm: 7.4,
        elevationGainMeters: 303,
        routeType: "Path",
        bikeScore: 67,
        difficulty: "challenging",
        tags: [
          {
            icon: "bike",
            label: "Short ride",
          },
          {
            icon: "trending-up",
            label: "Hilly",
          },
        ],
      },
    },
    {
      title: "Palais Idéal du Facteur Cheval",
      category: ["family", "visit", "loved"],
      shortDesc:
        "surroundings.descriptions.palais_ideal_du_facteur_cheval.short",
      longDesc: [
        "surroundings.descriptions.palais_ideal_du_facteur_cheval.long",
      ],
      gallery: [
        {
          src: palaisIdealDuFacteurChevalImg,
          altKey: "surroundings.palais_ideal_du_facteur_cheval.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.5805896794313!2d5.025934876547189!3d45.2562732710713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f536b05d5e218d%3A0xc38d75a0b5857c29!2sPalais%20Id%C3%A9al%20du%20Facteur%20Cheval!5e0!3m2!1sfr!2sfr!4v1668710162374",
      website: "https://www.facteurcheval.com/",
      bookLink: "https://www.facteurcheval.com/visitez-le-palais/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/facteur.cheval",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/facteurchevalofficiel/",
        },
      ],
      slug: "palais_ideal_du_facteur_cheval",
      bikeRoute: {
        durationMinutes: 83,
        distanceKm: 24,
        elevationGainMeters: 539,
        routeType: "Path",
        bikeScore: 48,
        difficulty: "challenging",
        tags: [
          {
            icon: "trending-up",
            label: "Hilly",
          },
          {
            icon: "clock",
            label: "Half day",
          },
        ],
      },
    },
    {
      title: "Acrobois Pilat",
      category: ["family", "sport"],
      shortDesc: "surroundings.descriptions.acrobois_pilat.short",
      longDesc: ["surroundings.descriptions.acrobois_pilat.long"],
      gallery: [
        {
          src: acroboisPilatImg,
          altKey: "surroundings.acrobois_pilat.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89692.58883524877!2d4.380942982021311!3d45.37114609720795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5084b3bafc339%3A0xf17cc27dad426b1d!2sAcrobois%20Pilat!5e0!3m2!1sfr!2sfr!4v1668710836619",
      website: "https://pilat.les-acrobois.fr/",
      bookLink: "https://pilat.les-acrobois.fr/le-parc/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/acroboispilat",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/acrobois_pilat",
        },
      ],
      phoneNumber: "+33 4 82 29 80 01",
      slug: "acrobois_pilat",
      bikeRoute: {
        durationMinutes: 168,
        distanceKm: 46.4,
        elevationGainMeters: 1596,
        routeType: "Path",
        bikeScore: 37,
        difficulty: "challenging",
        tags: [
          {
            icon: "trending-up",
            label: "Long distance",
          },
          {
            icon: "trending-up",
            label: "Hilly",
          },
          {
            icon: "clock",
            label: "Half day",
          },
        ],
      },
    },
    {
      title: "Musée de l'Alambic",
      category: ["family", "visit"],
      shortDesc: "surroundings.descriptions.musee_de_l_alambic.short",
      longDesc: ["surroundings.descriptions.musee_de_l_alambic.long"],
      gallery: [
        {
          src: museeDeLAlambicImg,
          altKey: "surroundings.musee_de_l_alambic.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.470119451013!2d4.789534115550604!3d45.25850677909912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f53e1ecf9f32d7%3A0x963ede95fbaa5f1f!2sMus%C3%A9e%20De%20L'alambic!5e0!3m2!1sfr!2sfr!4v166896806589",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/distilleriejeangauthier",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/distilleriejeangauthier/",
        },
      ],
      website: "http://www.jeangauthier.com/",
      phoneNumber: "+33 4 75 34 23 11",
      slug: "musee_de_l_alambic",
      bikeRoute: {
        durationMinutes: 6,
        distanceKm: 1.6,
        elevationGainMeters: 20,
        routeType: "Path",
        bikeScore: 89,
        difficulty: "easy",
        tags: [
          {
            icon: "bike",
            label: "Short ride",
          },
          {
            icon: "star",
            label: "Flat route",
          },
          {
            icon: "star",
            label: "Recommended",
          },
        ],
      },
    },
    {
      title: "Golf de Saint-Clair",
      category: ["sport"],
      shortDesc: "surroundings.descriptions.golf_de_saint_clair.short",
      longDesc: ["surroundings.descriptions.golf_de_saint_clair.long"],
      gallery: [
        {
          src: golfDeSaintClairImg,
          altKey: "surroundings.golf_de_saint_clair.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.76003356285!2d4.687672776548022!3d45.272861371071585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8071d3acf1b43db7!2sGolf%20et%20brasserie%20de%20St-Clair!5e0!3m2!1sfr!2sfr!4v1668714492081",
      website: "https://golfdesaintclair.fr/",
      bookLink: "https://golfdesaintclair.fr/tarifs/#toggle-id-1-closed",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/golfdudomainestclair.fr/",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/golfdestclair",
        },
      ],
      slug: "golf_de_saint_clair",
      bikeRoute: {
        durationMinutes: 40,
        distanceKm: 11,
        elevationGainMeters: 393,
        routeType: "Path",
        bikeScore: 60,
        difficulty: "challenging",
        tags: [
          {
            icon: "trending-up",
            label: "Hilly",
          },
        ],
      },
    },
    {
      title: "ViaRhôna",
      category: ["sport", "ride", "bike"],
      shortDesc: "surroundings.descriptions.viarhona.short",
      longDesc: ["surroundings.descriptions.viarhona.long"],
      gallery: [
        {
          src: viarhonaImg,
          altKey: "surroundings.viarhona.gallery.image1",
        },
      ],
      website: "https://www.viarhona.com/",
      slug: "viarhona",
    },
    {
      title: "ViaFluvia",
      category: ["sport", "ride", "bike"],
      shortDesc: "surroundings.descriptions.viafluvia.short",
      longDesc: ["surroundings.descriptions.viafluvia.long"],
      gallery: [
        {
          src: viafluviaImg,
          altKey: "surroundings.viafluvia.gallery.image1",
        },
      ],
      website: "https://www.viafluvia.fr/",
      slug: "viafluvia",
    },
    {
      title: "Cité du Chocolat Valrhôna",
      category: ["family", "visit", "loved"],
      shortDesc: "surroundings.descriptions.musee_valrhona.short",
      longDesc: ["surroundings.descriptions.musee_valrhona.long"],
      gallery: [
        {
          src: museeValrhonaImg,
          altKey: "surroundings.musee_valrhona.gallery.image1",
        },
      ],
      website: "https://citeduchocolat.com/",
      bookLink: "https://linktr.ee/citeduchocolat",
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.849525935534!2d4.840720676432278!3d45.068563459748944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5449ec36e3cc5%3A0x19f490edcfed10a1!2sCite%20du%20Chocolat%20Valrhona!5e0!3m2!1sen!2sfr!4v1768251979104!5m2!1sen!2sfr",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/CiteDuChocolat/",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/citeduchocolat/",
        },
      ],
      phoneNumber: "+33 4 75 09 27 27",
      slug: "musee_valrhona",
      bikeRoute: {
        durationMinutes: 101,
        distanceKm: 29.3,
        elevationGainMeters: 294,
        routeType: "Path",
        bikeScore: 62,
        difficulty: "moderate",
        tags: [
          {
            icon: "trending-up",
            label: "Hilly",
          },
          {
            icon: "clock",
            label: "Half day",
          },
        ],
      },
    },
    {
      title: "Lamas des Plaines",
      category: ["family", "visit"],
      shortDesc: "surroundings.descriptions.lamas_des_plaines.short",
      longDesc: ["surroundings.descriptions.lamas_des_plaines.long"],
      gallery: [
        {
          src: lamasDesPlainesImg,
          altKey: "surroundings.lamas_des_plaines.gallery.image1",
        },
      ],
      website: "http://www.lamasdesplaines.com/",
      bookLink:
        "http://www.lamasdesplaines.com/Mediation%20animale/Prestations%20et%20tarifs.htm",
      phoneNumber: "+33 6 14 38 82 00",
      slug: "lamas_des_plaines",
    },
    {
      title: "Montgolfières & Cie",
      category: ["family", "visit", "sport"],
      shortDesc: "surroundings.descriptions.mongolfieres_et_cie.short",
      longDesc: ["surroundings.descriptions.mongolfieres_et_cie.long"],
      gallery: [
        {
          src: montgolfieresCieImg,
          altKey: "surroundings.mongolfieres_et_cie.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.832788345058!2d4.684443115548301!3d45.19048097909869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f56ca4d6341c61%3A0x8a4da1cf859e9461!2sMONTGOLFI%C3%88RES%20%26%20Cie!5e0!3m2!1sfr!2sfr!4v1668714934393",
      website: "https://www.montgolfieres-cie.com/",
      bookLink:
        "https://www.montgolfieres-cie.com/tarifs-montgolfiere-ardeche/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/MONTGOLFIERESCie/",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/montgolfieresetcie/",
        },
      ],
      phoneNumber: "+33 4 75 34 41 14",
      slug: "mongolfieres_et_cie",
      bikeRoute: {
        durationMinutes: 54,
        distanceKm: 14.2,
        elevationGainMeters: 627,
        routeType: "Path",
        bikeScore: 51,
        difficulty: "challenging",
        tags: [
          {
            icon: "trending-up",
            label: "Hilly",
          },
        ],
      },
    },
    {
      title: "Train de l'ardèche",
      category: ["family", "visit", "bike", "loved"],
      shortDesc: "surroundings.descriptions.train_de_l_ardeche.short",
      longDesc: ["surroundings.descriptions.train_de_l_ardeche.long"],
      gallery: [
        {
          src: trainDeLArdecheImg,
          altKey: "surroundings.train_de_l_ardeche.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2817.889945565062!2d4.785396876973903!3d45.06774355980253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f542ee0be4daeb%3A0xced9ed03fcfbfc84!2sTrain%20de%20l'Ard%C3%A8che!5e0!3m2!1sfr!2sfr!4v1699292973669",
      website: "https://www.trainardeche.fr/",
      bookLink: "https://www.trainardeche.fr/les-voyages/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/trainardeche07/",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/traindelardeche/",
        },
      ],
      phoneNumber: "+33 4 75 06 07 00",
      slug: "train_de_l_ardeche",
      bikeRoute: {
        durationMinutes: 100,
        distanceKm: 29.1,
        elevationGainMeters: 287,
        routeType: "Path",
        bikeScore: 63,
        difficulty: "moderate",
        tags: [
          {
            icon: "trending-up",
            label: "Hilly",
          },
          {
            icon: "clock",
            label: "Half day",
          },
        ],
      },
    },
    {
      title: "La fabrique de Julien",
      category: ["family", "visit"],
      shortDesc: "surroundings.descriptions.la_fabrique_de_julien.short",
      longDesc: ["surroundings.descriptions.la_fabrique_de_julien.long"],
      gallery: [
        {
          src: laFabriqueDeJulienImg,
          altKey: "surroundings.la_fabrique_de_julien.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5632220.474156089!2d-3.7942353004358234!3d46.42674576287124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f50e9245aa9609%3A0xfdb142f0cca33da4!2sLa%20Fabrique%20de%20Julien!5e0!3m2!1sfr!2sfr!4v1699292916482",
      website: "https://www.fabrique-julien.fr/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/Fabrique.Julien/",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/fabrique.julien/",
        },
        {
          platform: "tiktok",
          link: "https://www.tiktok.com/@la.fabrique.de.julien",
        },
      ],
      phoneNumber: "+33 4 77 51 55 88",
      slug: "la_fabrique_de_julien",
    },
    {
      title: "Le Nougat de Montségur",
      category: ["visit"],
      shortDesc: "surroundings.descriptions.le_nougat_de_montsegur.short",
      longDesc: ["surroundings.descriptions.le_nougat_de_montsegur.long"],
      gallery: [
        {
          src: leNougatDeMontsegurImg,
          altKey: "surroundings.le_nougat_de_montsegur.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2852.565783006997!2d4.844310976948855!3d44.359970506432354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b576d972d14e19%3A0xf24766592b34c9a9!2sLe%20Nougat%20de%20Montsegur!5e0!3m2!1sfr!2sfr!4v1699293264985",
      website: "http://lenougatdemontsegur.com/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/LenougatdeMontsegur",
        },
      ],
      slug: "le_nougat_de_montsegur",
      bikeRoute: {
        durationMinutes: 500,
        distanceKm: 145.9,
        elevationGainMeters: 1167,
        routeType: "Path",
        bikeScore: 31,
        difficulty: "challenging",
        tags: [
          {
            icon: "trending-up",
            label: "Long distance",
          },
          {
            icon: "trending-up",
            label: "Hilly",
          },
          {
            icon: "clock",
            label: "Half day",
          },
        ],
      },
    },
    {
      title: "Château de Grignan",
      category: ["family", "visit"],
      shortDesc: "surroundings.descriptions.chateau_de_grignan.short",
      longDesc: ["surroundings.descriptions.chateau_de_grignan.long"],
      gallery: [
        {
          src: chateauDeGrignanImg,
          altKey: "surroundings.chateau_de_grignan.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2849.693052782849!2d4.906192676950954!3d44.41894400256858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b57a916b9ae53f%3A0x3dddef62740f24a9!2sCh%C3%A2teau%20de%20Grignan!5e0!3m2!1sfr!2sfr!4v1699293349698",
      website: "https://www.chateaux-ladrome.fr/fr/chateau-de-grignan",
      bookLink:
        "https://chateaux-ladrome.notre-billetterie.fr/formulaire?dial=sommairegeneral",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/chateauxdeladrome",
        },
      ],
      phoneNumber: "+33 4 75 91 83 50",
      slug: "chateau_de_grignan",
      bikeRoute: {
        durationMinutes: 440,
        distanceKm: 129.4,
        elevationGainMeters: 1322,
        routeType: "Path",
        bikeScore: 31,
        difficulty: "challenging",
        tags: [
          {
            icon: "trending-up",
            label: "Long distance",
          },
          {
            icon: "trending-up",
            label: "Hilly",
          },
          {
            icon: "clock",
            label: "Half day",
          },
        ],
      },
    },
    {
      title: "Labyrinthe végétal",
      category: ["family", "loved"],
      shortDesc: "surroundings.descriptions.labyrinthe_vegetal.short",
      longDesc: ["surroundings.descriptions.labyrinthe_vegetal.long"],
      gallery: [
        {
          src: labyrintheVegetalImg,
          altKey: "surroundings.labyrinthe_vegetal.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2827.2422525455586!2d4.818862076967201!3d44.87771877237721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12b54c97839d2593%3A0x67542e4940b3b3d8!2zbGFieXJpbnRoZSB2w6lnw6h0YWw!5e0!3m2!1sfr!2sfr!4v1699293410152",
      website: "https://labyleo.com/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/labyrinthevegetal/",
        },
      ],
      phoneNumber: "+33 4 75 25 80 65",
      slug: "labyrinthe_vegetal",
      bikeRoute: {
        durationMinutes: 207,
        distanceKm: 60.1,
        elevationGainMeters: 591,
        routeType: "Path",
        bikeScore: 33,
        difficulty: "challenging",
        tags: [
          {
            icon: "trending-up",
            label: "Long distance",
          },
          {
            icon: "trending-up",
            label: "Hilly",
          },
          {
            icon: "clock",
            label: "Half day",
          },
        ],
      },
    },
    {
      title: "Compagnie des Canotiers Rhône & Saône",
      category: ["family", "loved", "bike"],
      shortDesc:
        "surroundings.descriptions.compagnie_des_canotiers_rhone_et_saone.short",
      longDesc: [
        "surroundings.descriptions.compagnie_des_canotiers_rhone_et_saone.long",
      ],
      gallery: [
        {
          src: compagnieDesCanotiersRhoneSaoneImg,
          altKey:
            "surroundings.compagnie_des_canotiers_rhone_et_saone.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2784.5346671430843!2d4.816064676998021!3d45.740426114964926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4eb0379e15237%3A0x84ce35aa518fc43d!2sCompagnie%20des%20Canotiers%20Rh%C3%B4ne%20%26%20Sa%C3%B4ne!5e0!3m2!1sfr!2sfr!4v1699293472340",
      website: "https://www.canotiersboatnbike.com/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/canotiersboatnbike",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/compagnie_des_canotiers/",
        },
        {
          platform: "tiktok",
          link: "https://www.tiktok.com/@compagniecanotiers",
        },
      ],
      phoneNumber: "+33 6 44 30 79 76",
      slug: "compagnie_des_canotiers_rhone_et_saone",
      bikeRoute: {
        durationMinutes: 263,
        distanceKm: 76,
        elevationGainMeters: 880,
        routeType: "Path",
        bikeScore: 31,
        difficulty: "challenging",
        tags: [
          {
            icon: "trending-up",
            label: "Long distance",
          },
          {
            icon: "trending-up",
            label: "Hilly",
          },
          {
            icon: "clock",
            label: "Half day",
          },
        ],
      },
    },
    {
      title: "Le chateau d'Anet",
      category: ["family", "visit"],
      shortDesc: "surroundings.descriptions.le_chateau_d_anet.short",
      longDesc: ["surroundings.descriptions.le_chateau_d_anet.long"],
      gallery: [
        {
          src: leChateauDAnetImg,
          altKey: "surroundings.le_chateau_d_anet.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.989469225792!2d1.436084077113906!3d48.85841120070413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6ad9b9fc12581%3A0xb9ee1bb171a28a!2sCh%C3%A2teau%20d'Anet!5e0!3m2!1sfr!2sfr!4v1699293510016",
      website: "https://www.chateau-d-anet.com/",
      phoneNumber: "+33 2 37 41 90 07",
      slug: "le_chateau_d_anet",
      bikeRoute: {
        durationMinutes: 2220,
        distanceKm: 647.4,
        elevationGainMeters: 5311,
        routeType: "Path",
        bikeScore: 31,
        difficulty: "challenging",
        tags: [
          {
            icon: "trending-up",
            label: "Long distance",
          },
          {
            icon: "trending-up",
            label: "Hilly",
          },
          {
            icon: "clock",
            label: "Half day",
          },
        ],
      },
    },
  ],
  toEat: [
    {
      title: "Le Relais Des Mailles",
      shortDesc: "surroundings.descriptions.le_relais_mailles.short",
      longDesc: ["surroundings.descriptions.le_relais_mailles.long"],
      gallery: [
        {
          src: leRelaisDesMaillesImg,
          altKey: "surroundings.le_relais_mailles.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.225223103316!2d4.811978015548724!3d45.202777779098774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f53f86aa0f5df3%3A0xadfe40030a3eadd3!2sLe%20Relais%20Des%20Mailles!5e0!3m2!1sfr!2sfr!4v1669483885140",
      website: "https://www.lerelaisdesmailles.com/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/lerelaisdesmailles",
        },
      ],
      phoneNumber: "+33 4 75 23 42 26",
      slug: "le_relais_mailles",
      bikeRoute: {
        durationMinutes: 28,
        distanceKm: 8.1,
        elevationGainMeters: 116,
        routeType: "Path",
        bikeScore: 82,
        difficulty: "moderate",
        tags: [
          {
            icon: "bike",
            label: "Short ride",
          },
          {
            icon: "star",
            label: "Recommended",
          },
        ],
      },
    },
    {
      title: "La Table des SAJ",
      shortDesc: "surroundings.descriptions.la_table_des_saj.short",
      longDesc: ["surroundings.descriptions.la_table_des_saj.long"],
      gallery: [
        {
          src: laTableDesSajImg,
          altKey: "surroundings.la_table_des_saj.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.6052215576483!2d4.782907876440744!3d45.255775247320926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5150bc1dfa54b%3A0x8885f334a6ef92c7!2sLa%20Table%20des%20SAJ!5e0!3m2!1sfr!2sfr!4v1767736458071!5m2!1sfr!2sfr",
      website: "https://la-table-des-saj-restaurant-st-desirat.eatbu.com",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/p/La-Table-des-Saj-61575839439235",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/latabledessaj.resto",
        },
      ],
      phoneNumber: "+33 4 75 32 96 08",
      slug: "la_table_des_saj",
      bikeRoute: {
        durationMinutes: 7,
        distanceKm: 1.7,
        elevationGainMeters: 31,
        routeType: "Path",
        bikeScore: 89,
        difficulty: "easy",
        tags: [
          {
            icon: "bike",
            label: "Short ride",
          },
          {
            icon: "star",
            label: "Flat route",
          },
          {
            icon: "star",
            label: "Recommended",
          },
        ],
      },
    },
    {
      title: "La Poule Noire",
      shortDesc: "surroundings.descriptions.la_poule_noire.short",
      longDesc: ["surroundings.descriptions.la_poule_noire.long"],
      gallery: [
        {
          src: laPouleNoireImg,
          altKey: "surroundings.la_poule_noir.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.1526048602063!2d4.847777615550117!3d45.24470677909896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f53ec2efffb5cf%3A0x5e00680a9119bd91!2sLa%20Poule%20Noire!5e0!3m2!1sfr!2sfr!4v1669484279763",
      website: "https://www.restaurant-lapoulenoire.fr/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/lapoulenoire26",
        },
      ],
      phoneNumber: "+33475030882",
      slug: "la_poule_noir",
      bikeRoute: {
        durationMinutes: 26,
        distanceKm: 7,
        elevationGainMeters: 145,
        routeType: "Path",
        bikeScore: 79,
        difficulty: "moderate",
        tags: [
          {
            icon: "bike",
            label: "Short ride",
          },
        ],
      },
    },
    {
      title: "Le Picotin",
      shortDesc: "surroundings.descriptions.le_picotin.short",
      longDesc: ["surroundings.descriptions.le_picotin.long"],
      gallery: [
        {
          src: lePicotinImg,
          altKey: "surroundings.le_picotin.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.369912579978!2d4.7964493155499515!3d45.24031207909892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f53e33e8fa4b59%3A0x13b9117667cddb47!2sLE%20PICOTIN!5e0!3m2!1sfr!2sfr!4v1669484403254",
      website: "https://le-picotin-restaurant-andance.eatbu.com/?lang=fr",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/GaelleHermandsecretant/",
        },
      ],
      phoneNumber: "+33 4 75 34 21 01",
      slug: "le_picotin",
      bikeRoute: {
        durationMinutes: 11,
        distanceKm: 2.9,
        elevationGainMeters: 98,
        routeType: "Path",
        bikeScore: 83,
        difficulty: "moderate",
        tags: [
          {
            icon: "bike",
            label: "Short ride",
          },
          {
            icon: "star",
            label: "Recommended",
          },
        ],
      },
    },
    {
      title: "Au Pré du Rhône",
      shortDesc: "surroundings.descriptions.au_pre_du_rhone.short",
      longDesc: ["surroundings.descriptions.au_pre_du_rhone.long"],
      gallery: [
        {
          src: auPreDuRhoneImg,
          altKey: "surroundings.au_pre_du_rhone.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2813.687469610846!2d4.829160315547032!3d45.152926979098574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f5417229e2ce4d%3A0xa3c08b2f5145b6b3!2sRestaurant%20Au%20Pr%C3%A9%20du%20Rh%C3%B4ne!5e0!3m2!1sfr!2sfr!4v1669484524190",
      website: "https://au-pre-du-rhone.fr/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/AuPreDuRhone",
        },
      ],
      phoneNumber: "+33 4 75 23 03 44",
      slug: "au_pre_du_rhone",
      bikeRoute: {
        durationMinutes: 53,
        distanceKm: 15.1,
        elevationGainMeters: 222,
        routeType: "Path",
        bikeScore: 73,
        difficulty: "moderate",
        tags: [
          {
            icon: "trending-up",
            label: "Hilly",
          },
        ],
      },
    },
    {
      title: "La belle époque",
      gallery: [
        {
          src: laBelleEpoqueImg,
          altKey: "surroundings.la_belle_epoque.gallery.image1",
        },
        {
          src: laBelleEpoqueImg,
          altKey: "surroundings.la_belle_epoque.gallery.image2",
        },
      ],
      shortDesc: "surroundings.descriptions.la_belle_epoque.short",
      longDesc: ["surroundings.descriptions.la_belle_epoque.long"],
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/people/La-belle-epoque/100089023786667",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/restaurant_la_belle_epoque26/",
        },
      ],
      phoneNumber: "+33 4 75 68 81 86",
      slug: "la_belle_epoque",
    },
    {
      title: "O'Daily Truck",
      gallery: [
        {
          src: oDailyTruckImg,
          altKey: "surroundings.o_daily_truck.gallery.image1",
        },
        {
          src: oDailyTruckImg,
          altKey: "surroundings.o_daily_truck.gallery.image2",
        },
      ],
      shortDesc: "surroundings.descriptions.o_daily_truck.short",
      longDesc: ["surroundings.descriptions.o_daily_truck.long"],
      website: "https://odailytruck.eatbu.com/?lang=fr",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/profile.php?id=100083238615438",
        },
      ],
      phoneNumber: "+33 7 84 75 76 46",
      slug: "o_daily_truck",
    },
    {
      title: "César Pizza",
      shortDesc: "surroundings.descriptions.cesar_pizza.short",
      longDesc: ["surroundings.descriptions.cesar_pizza.long"],
      gallery: [
        {
          src: cesarPizzaImg,
          altKey: "surroundings.cesar_pizza.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2809.3278141159412!2d4.79721751554998!3d45.24116347909896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f53e3151ab7961%3A0xb011d2747fe95cca!2sC%C3%A9sar%20Pizza!5e0!3m2!1sfr!2sfr!4v1669484773964",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/Pizza.andance/",
        },
      ],
      phoneNumber: "+33 4 75 32 75 12",
      slug: "cesar_pizza",
      bikeRoute: {
        durationMinutes: 10,
        distanceKm: 2.7,
        elevationGainMeters: 82,
        routeType: "Path",
        bikeScore: 84,
        difficulty: "moderate",
        tags: [
          {
            icon: "bike",
            label: "Short ride",
          },
          {
            icon: "star",
            label: "Recommended",
          },
        ],
      },
    },
    {
      title: "La Villa Champagnère",
      shortDesc: "surroundings.descriptions.la_villa_champagnere.short",
      longDesc: ["surroundings.descriptions.la_villa_champagnere.long"],
      gallery: [
        {
          src: laVillaChampagnereImg,
          altKey: "surroundings.la_villa_champagnere.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2807.959217030252!2d4.8218889155509155!3d45.26883517909909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f53e796a8f81d7%3A0x807aeb4c6349b13b!2sLa%20Villa%20Champagn%C3%A8re!5e0!3m2!1sfr!2sfr!4v1669484905306",
      website: "http://lavillachampagnere.fr/",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/NathalieOttogalli/",
        },
      ],
      phoneNumber: "+33 4 75 31 69 50",
      slug: "la_villa_champagnere",
      bikeRoute: {
        durationMinutes: 27,
        distanceKm: 7.6,
        elevationGainMeters: 135,
        routeType: "Path",
        bikeScore: 80,
        difficulty: "moderate",
        tags: [
          {
            icon: "bike",
            label: "Short ride",
          },
        ],
      },
    },
    {
      title: "Les Agapons",
      shortDesc: "surroundings.descriptions.les_agapons.short",
      longDesc: ["surroundings.descriptions.les_agapons.long"],
      gallery: [
        {
          src: lesAgaponRestaurantImg,
          altKey: "surroundings.les_agapons.gallery.image1",
        },
      ],
      mapsUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2806.3689680670077!2d4.997990576442773!3d45.30097184431462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f531aa947df32f%3A0xbc5d1e6a3aa025aa!2sLes%20Agapons%20Restaurant!5e0!3m2!1sen!2sfr!4v1767889769559!5m2!1sen!2sfr",
      website: "https://les-agapons.eatbu.com/?lang=fr",
      socialMedia: [
        {
          platform: "facebook",
          link: "https://www.facebook.com/LesAgaponsRestaurant",
        },
        {
          platform: "instagram",
          link: "https://www.instagram.com/lesagapons_restaurant/",
        },
      ],
      phoneNumber: "+33 4 75 03 02 56",
      slug: "les_agapons",
      bikeRoute: {
        durationMinutes: 85,
        distanceKm: 23.8,
        elevationGainMeters: 465,
        routeType: "Path",
        bikeScore: 51,
        difficulty: "challenging",
        tags: [
          {
            icon: "trending-up",
            label: "Hilly",
          },
          {
            icon: "clock",
            label: "Half day",
          },
        ],
      },
    },
  ],
};
