// @ts-check
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import vue from "@astrojs/vue";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },
  site: "https://domaine-de-pipangaille.fr",
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

  output: "static",

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
