import { SITE } from "@/constants/site";

/**
 * Time formatting types for different locales
 */
type Locale = "fr" | "en" | "de" | "es" | "it" | "nl";

/**
 * Format time (HH:MM) according to locale
 *
 * @param time - Time in 24h format (e.g., "17:00", "09:30")
 * @param locale - Target locale
 * @returns Formatted time string
 *
 * @example
 * formatTime("17:00", "fr") // "17h"
 * formatTime("17:00", "en") // "5:00 PM"
 * formatTime("10:30", "de") // "10:30 Uhr"
 */
export function formatTime(time: string, locale: Locale): string {
  const [hours, minutes] = time.split(":").map(Number);

  switch (locale) {
    case "fr":
      // French format: "17h", "10h30"
      return minutes === 0
        ? `${hours}h`
        : `${hours}h${minutes.toString().padStart(2, "0")}`;

    case "en": {
      // English format: "5:00 PM", "10:30 AM"
      const period = hours >= 12 ? "PM" : "AM";
      const hour12 = hours % 12 || 12;
      return `${hour12}:${minutes.toString().padStart(2, "0")} ${period}`;
    }

    case "de":
      // German format: "17:00 Uhr", "10:30 Uhr"
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")} Uhr`;

    case "nl": {
      // Dutch format: "17:00 uur", "8.00 uur", "9.30 uur"
      // Use dot separator for times starting with single digit, colon for double digits
      const hoursStr = hours.toString();
      const minutesStr = minutes.toString().padStart(2, "0");
      const separator = hours < 10 ? "." : ":";
      return `${hoursStr}${separator}${minutesStr} uur`;
    }

    case "es":
    case "it":
      // Spanish/Italian format: "17:00", "10:30", "08:00"
      return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;

    default:
      return time;
  }
}

/**
 * Format time range for check-in hours
 *
 * @param locale - Target locale
 * @returns Formatted check-in time range (e.g., "17h-21h", "5:00 PM–9:00 PM")
 */
export function formatCheckinHours(locale: Locale): string {
  const start = formatTime(SITE.hours.checkin.start, locale);
  const end = formatTime(SITE.hours.checkin.end, locale);

  switch (locale) {
    case "en":
      return `${start}–${end}`;
    case "nl": {
      // Dutch uses short format for ranges: "17u-21u"
      const [startHours] = SITE.hours.checkin.start.split(":");
      const [endHours] = SITE.hours.checkin.end.split(":");
      return `${startHours}u-${endHours}u`;
    }
    default:
      return `${start}-${end}`;
  }
}

/**
 * Format time range for breakfast hours
 *
 * @param locale - Target locale
 * @returns Formatted breakfast time range
 */
export function formatBreakfastHours(locale: Locale): string {
  const start = formatTime(SITE.hours.breakfast.start, locale);
  const end = formatTime(SITE.hours.breakfast.end, locale);

  switch (locale) {
    case "fr":
      return `de ${start} à ${end}`;
    case "en":
      return `from ${start} to ${end}`;
    case "de":
      return `von ${start} bis ${end}`;
    case "es":
      return `de ${start} a ${end}`;
    case "it":
      return `dalle ${start} alle ${end}`;
    case "nl":
      return `van ${start} tot ${end}`;
    default:
      return `${start} - ${end}`;
  }
}

/**
 * Get checkout time formatted for locale
 *
 * @param locale - Target locale
 * @returns Formatted checkout time
 */
export function formatCheckoutTime(locale: Locale): string {
  return formatTime(SITE.hours.checkout.time, locale);
}

/**
 * Get late arrival time formatted for locale
 *
 * @param locale - Target locale
 * @returns Formatted late arrival time
 */
export function formatLateArrivalTime(locale: Locale): string {
  return formatTime(SITE.hours.checkin.lateArrivalPossible, locale);
}

/**
 * Get check-in start time formatted for locale
 *
 * @param locale - Target locale
 * @returns Formatted check-in start time
 */
export function formatCheckinStart(locale: Locale): string {
  return formatTime(SITE.hours.checkin.start, locale);
}

/**
 * Format time range for pool hours
 *
 * @param locale - Target locale
 * @returns Formatted pool time range
 */
export function formatPoolHours(locale: Locale): string {
  const start = formatTime(SITE.hours.pool.start, locale);
  const end = formatTime(SITE.hours.pool.end, locale);

  switch (locale) {
    case "fr":
      return `de ${start} à ${end}`;
    case "en":
      return `from ${start} to ${end}`;
    case "de":
      return `von ${start} bis ${end}`;
    case "es":
      return `de ${start} a ${end}`;
    case "it":
      return `dalle ${start} alle ${end}`;
    case "nl":
      return `van ${start} tot ${end}`;
    default:
      return `${start} - ${end}`;
  }
}
