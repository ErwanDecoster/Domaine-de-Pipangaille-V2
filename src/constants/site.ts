export const SITE = {
  name: "Domaine de Pipangaille",
  url: "https://domaine-de-pipangaille-v2.vercel.app",
  email: "contact@domaine-de-pipangaille.fr",
  phone: {
    formatted: "+33 4 75 68 28 24",
    e164: "+33475682824",
    whatsapp: "33475682824",
  },
  address: {
    street: "1 Quartier les Marettes",
    postalCode: "26140",
    city: "Andancette",
    region: "Auvergne-Rhône-Alpes",
    country: "France",
    countryCode: "FR",
    formatted: "1 Quartier les Marettes, 26140, Andancette",
    formattedWithCountry: "1 Quartier les Marettes, 26140 Andancette – France",
  },
  coordinates: {
    lat: "45.252593",
    lng: "4.809788",
  },
  mapUrl:
    "https://www.google.com/maps/place/Domaine+de+Pipangaille/@45.2525628,4.8076338,695m/data=!3m2!1e3!4b1!4m9!3m8!1s0x47f53e41af912869:0xe0c49553166e1500!5m2!4m1!1i2!8m2!3d45.2525628!4d4.8102141!16s%2Fg%2F11btm7z48m?entry=ttu&g_ep=EgoyMDI2MDIxMS4wIKXMDSoASAFQAw%3D%3D",
  social: {
    facebook: "https://www.facebook.com/domainedepipangaille",
    instagram: "https://www.instagram.com/domaine_de_pipangaille",
    linkedin: "https://www.linkedin.com/company/domaine-de-pipangaille",
    x: "https://x.com/D_Pipangaille",
    tripadvisor:
      "https://www.tripadvisor.fr/Hotel_Review-g11695688-d5990107-Reviews-Domaine_de_Pipangaille-Andancette_Drome_Auvergne_Rhone_Alpes.html",
    pagesJaunes: "https://www.pagesjaunes.fr/pros/56007503",
  },
  legal: {
    companyName: "SAS Domaine de Pipangaille",
    rcs: "904 638 814",
    naf: "55202",
    capital: "1 500 €",
  },
  hours: {
    checkIn: {
      start: "17:00",
      end: "21:00",
      lateArrivalPossible: "22:00",
    },
    checkout: {
      time: "10:30",
    },
    breakfast: {
      start: "08:00",
      end: "09:30",
    },
    pool: {
      start: "11:00",
      end: "21:00",
    },
  },
} as const;
