import js from "@eslint/js";
import astro from "eslint-plugin-astro";
import astroParser from "astro-eslint-parser";
import tsParser from "@typescript-eslint/parser";

export default [
  {
    ignores: ["dist/**", ".vercel/**", ".astro/**"],
  },
  js.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
      },
    },
    rules: {},
  },
  {
    files: ["**/*.{js,cjs,mjs,ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      globals: {
        console: "readonly",
        process: "readonly",
        URL: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
        // Browser globals
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        HTMLElement: "readonly",
        URLSearchParams: "readonly",
        Event: "readonly",
      },
    },
  },
];
