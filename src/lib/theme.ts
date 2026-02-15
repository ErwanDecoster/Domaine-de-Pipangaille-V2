/**
 * Theme utility functions for consistent theme management
 * Used across the application for theme initialization and switching
 */

export type Theme = "light" | "dark" | "system";

/**
 * Gets the stored theme preference from localStorage
 * Defaults to "system" if not set or invalid
 */
export function getThemePreference(): Theme {
  if (typeof localStorage !== "undefined") {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark" || stored === "system") {
      return stored;
    }
  }
  return "system";
}

/**
 * Gets the system theme preference based on media query
 */
export function getSystemTheme(): "light" | "dark" {
  if (globalThis.window?.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
}

/**
 * Gets the effective theme to apply (resolves "system" to actual theme)
 */
export function getEffectiveTheme(theme: Theme): "light" | "dark" {
  return theme === "system" ? getSystemTheme() : theme;
}

/**
 * Applies the theme to the document
 */
export function applyTheme(theme: Theme): void {
  const effectiveTheme = getEffectiveTheme(theme);

  if (effectiveTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}

/**
 * Initializes theme by reading preference and applying it
 */
export function initializeTheme(): void {
  const theme = getThemePreference();
  applyTheme(theme);
}

// Export functions as global for inline scripts
if (globalThis.window !== undefined) {
  (globalThis as any).__themeUtils = {
    getThemePreference,
    getSystemTheme,
    getEffectiveTheme,
    applyTheme,
    initializeTheme,
  };
}
