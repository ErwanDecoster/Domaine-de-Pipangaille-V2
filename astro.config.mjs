// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

import tailwindcss from "@tailwindcss/vite";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://domaine-de-pipangaille-v2.vercel.app",
  image: {
    layout: "constrained",
  },
  integrations: [
    vue(),
    sitemap({
      i18n: {
        defaultLocale: "fr",
        locales: {
          fr: "fr-FR",
          en: "en-US",
          de: "de-DE",
          es: "es-ES",
          it: "it-IT",
          nl: "nl-NL",
        },
      },
    }),
  ],

  output: "server",

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: vercel(),

  i18n: {
    locales: ["fr", "en", "de", "es", "it", "nl"],
    defaultLocale: "fr",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
