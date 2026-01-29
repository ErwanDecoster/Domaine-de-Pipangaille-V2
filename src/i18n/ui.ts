import { fr } from "./locales/fr";
import { en } from "./locales/en";
import { nl } from "./locales/nl";
import { de } from "./locales/de";
import { es } from "./locales/es";
import { it } from "./locales/it";

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
