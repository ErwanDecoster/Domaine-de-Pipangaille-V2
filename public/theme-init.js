/**
 * Theme initialization script
 * This must be loaded synchronously in the <head> to prevent FOUC (Flash Of Unstyled Content)
 * DO NOT import this as a module - it must be loaded with <script src> in the HTML head
 */
(function () {
  function getThemePreference() {
    if (typeof localStorage !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark" || stored === "system") {
        return stored;
      }
    }
    return "system";
  }

  function getSystemTheme() {
    if (
      globalThis.window?.matchMedia?.("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }
    return "light";
  }

  function applyTheme() {
    const theme = getThemePreference();
    const effectiveTheme = theme === "system" ? getSystemTheme() : theme;

    if (effectiveTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  // Apply theme immediately
  applyTheme();
})();
