import { getRelativeLocaleUrl } from "astro:i18n";
import { ui, defaultLang } from "../i18n/ui";
import {
  getLocalizedUrl,
  routes,
  type Locale,
  type RouteKey,
} from "./routeTranslator";

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

/**
 * Retrieves the current language with fallback to defaultLang
 * Usage in components: const lang = getCurrentLang(Astro.currentLocale);
 */
export function getCurrentLang(
  currentLocale: string | undefined,
): keyof typeof ui {
  if (currentLocale && currentLocale in ui) {
    return currentLocale as keyof typeof ui;
  }
  return defaultLang as keyof typeof ui;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return (
      (ui[lang] as Record<string, string>)[key as string] ||
      (ui[defaultLang] as Record<string, string>)[key as string]
    );
  };
}

/**
 * Hook for generating translated paths
 * Uses the centralized routing system when a route key is provided
 * Otherwise, uses Astro's default behavior
 */
export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: string = lang) {
    const routeKey = getRouteKeyFromPath(path);
    if (routeKey) {
      return getLocalizedUrl(routeKey, l as Locale);
    }
    return getRelativeLocaleUrl(l, path);
  };
}

/**
 * Helper to find a route key from a path
 * Provides backward compatibility with existing code
 */
function getRouteKeyFromPath(path: string): RouteKey | null {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  for (const [key, translations] of Object.entries(routes)) {
    const paths = Object.values(translations) as string[];
    if (paths.includes(cleanPath)) {
      return key as RouteKey;
    }
  }

  return null;
}

export {
  getLocalizedUrl,
  getRouteKey,
  routes,
  type RouteKey,
  type Locale,
} from "./routeTranslator";
