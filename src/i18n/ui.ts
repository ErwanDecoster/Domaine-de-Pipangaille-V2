import { fr } from "./locales/fr/index.ts";
import { en } from "./locales/en/index.ts";
import { nl } from "./locales/nl/index.ts";
import { de } from "./locales/de/index.ts";
import { es } from "./locales/es/index.ts";
import { it } from "./locales/it/index.ts";

export const languages = {
  fr: "Français",
  en: "English",
  nl: "Nederlands",
  de: "Deutsch",
  es: "Español",
  it: "Italiano",
};

export const defaultLang = "fr";

export const ui = {
  fr,
  en,
  nl,
  de,
  es,
  it,
} as const;
