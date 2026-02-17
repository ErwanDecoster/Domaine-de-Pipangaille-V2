/**
 * Client-side utilities for CheckIng restaurant opening hours
 * Must run in browser to get current time
 */
import businessHours from "@/constants/businessHours.json";

type BusinessHoursData = typeof businessHours;

/**
 * Convert slug to businessHours key (snake_case to camelCase)
 */
const toBusinessHoursKey = (slug: string): string => {
  return slug.replaceAll(/_([a-z])/g, (_, letter) => letter.toUpperCase());
};

/**
 * Check if a restaurant is open at a specific time window
 * @param slug - Restaurant slug
 * @param startHour - Start hour (0-24)
 * @param endHour - End hour (0-24)
 * @returns true if restaurant is open during this time window
 */
const isOpenAtTime = (
  slug: string,
  startHour: number,
  endHour: number,
): boolean => {
  const businessHoursKey = toBusinessHoursKey(slug);
  const hours =
    businessHours[businessHoursKey as keyof BusinessHoursData]?.hours;

  if (!hours) return false;

  // Get today's day of week using Intl API with Europe/Paris timezone
  const dayOfWeekIndex = new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    timeZone: "Europe/Paris",
  })
    .format(new Date())
    .toLowerCase();

  const todayHours = hours[dayOfWeekIndex as keyof typeof hours];

  if (!todayHours?.isOpen || !("periods" in todayHours)) {
    return false;
  }

  // Check if any period overlaps with the requested time window
  return todayHours.periods.some((period: { open: string; close: string }) => {
    const openHour =
      Number.parseInt(period.open.slice(0, 2), 10) +
      Number.parseInt(period.open.slice(2), 10) / 60;
    const closeHour =
      Number.parseInt(period.close.slice(0, 2), 10) +
      Number.parseInt(period.close.slice(2), 10) / 60;

    // Check if the period overlaps with the requested time window
    // Overlap occurs if: period.open < endHour AND period.close > startHour
    return openHour < endHour && closeHour > startHour;
  });
};

/**
 * Check if a restaurant is open at noon (12:00-14:00)
 */
export const isOpenNoon = (slug: string): boolean => {
  return isOpenAtTime(slug, 12, 14);
};

/**
 * Check if a restaurant is open in the evening (19:00-22:00)
 */
export const isOpenEvening = (slug: string): boolean => {
  return isOpenAtTime(slug, 19, 22);
};

/**
 * Update restaurant cards with dynamic opening hours categories
 * This must be called before initializing the filter system
 */
export function updateRestaurantOpeningStatus() {
  const restaurantCards = document.querySelectorAll<HTMLElement>(
    "[data-kind='restaurant']",
  );

  restaurantCards.forEach((card) => {
    const slug = card.dataset.slug;
    if (!slug) return;

    const categories = (card.dataset.categories || "")
      .split(",")
      .filter(Boolean);

    // Check opening hours
    const openNoon = isOpenNoon(slug);
    const openEvening = isOpenEvening(slug);

    // Add dynamic categories
    if (openNoon && !categories.includes("openNoon")) {
      categories.push("openNoon");
    }
    if (openEvening && !categories.includes("openEvening")) {
      categories.push("openEvening");
    }

    // Update data attribute
    card.dataset.categories = categories.join(",");
  });
}
