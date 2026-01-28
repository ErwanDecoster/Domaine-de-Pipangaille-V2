import { routes, buildReverseMapping, type Locale as LocaleType, type RouteKey as RouteKeyType } from '@/i18n/routes';
import { getRelativeLocaleUrl } from 'astro:i18n';

export type { Locale, RouteKey } from '@/i18n/routes';
export { routes } from '@/i18n/routes';

/**
 * Retrieves the route key for a given path
 * @param path - The path to analyze
 * @returns The route key or null if not found
 */
export function getRouteKey(path: string): RouteKeyType | null {
  const reverseMap = buildReverseMapping();
  const cleanPath = path.replace(/^\/(en|de|es|it|nl)(\/|$)/, '$2') || '/';
  
  const routeInfo = reverseMap.get(cleanPath);
  return routeInfo?.routeKey || null;
}

/**
 * Generates the full URL for a route in a given language
 * @param routeKey - The route key
 * @param locale - The target language
 * @param slug - Optional slug for dynamic routes
 * @returns The complete URL
 */
export function getLocalizedUrl(
  routeKey: RouteKeyType, 
  locale: LocaleType, 
  slug?: string
): string {
  const basePath = routes[routeKey][locale];
  const fullPath = slug ? `${basePath}/${slug}` : basePath;
  
  return locale === 'fr' ? fullPath : getRelativeLocaleUrl(locale, fullPath);
}
