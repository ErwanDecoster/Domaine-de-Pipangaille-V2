import js from "@eslint/js";
import tsParser from "@typescript-eslint/parser";
import astroParser from "astro-eslint-parser";
import astro from "eslint-plugin-astro";

const config = [
  {
    ignores: ["dist/**", ".vercel/**", ".astro/**", "node_modules/**"],
  },
  {
    files: ["**/*.{js,cjs,mjs}"],
    languageOptions: {
      sourceType: "module",
      ecmaVersion: "latest",
      globals: {
        console: "readonly",
        process: "readonly",
        URL: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        HTMLElement: "readonly",
        URLSearchParams: "readonly",
        Event: "readonly",
        EventTarget: "readonly",
      },
    },
    rules: js.configs.recommended.rules,
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      sourceType: "module",
      ecmaVersion: "latest",
      globals: {
        console: "readonly",
        process: "readonly",
        URL: "readonly",
        fetch: "readonly",
        setTimeout: "readonly",
        setInterval: "readonly",
        clearTimeout: "readonly",
        clearInterval: "readonly",
        window: "readonly",
        document: "readonly",
        localStorage: "readonly",
        sessionStorage: "readonly",
        HTMLElement: "readonly",
        URLSearchParams: "readonly",
        Event: "readonly",
        EventTarget: "readonly",
      },
    },
    rules: js.configs.recommended.rules,
  },
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      sourceType: "module",
      ecmaVersion: "latest",
      parserOptions: {
        parser: tsParser,
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        Astro: "readonly",
        Fragment: "readonly",
      },
    },
    rules: js.configs.recommended.rules,
  },
];

export default [...config, ...astro.configs.recommended];
