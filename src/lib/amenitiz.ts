/**
 * Amenitiz API utilities
 */

/* global fetch */

export interface AvailabilityData {
  date: string;
  min_stay: number;
  max_stay: number;
  closed_to_arrival: boolean;
  closed_to_departure: boolean;
  closed: boolean;
  is_available: boolean;
}

export interface AvailabilityResponse {
  success?: boolean;
  error: string | null;
  data: {
    availabilities: AvailabilityData[];
    limit_prior_to_arrival: {
      apply_minimum_hours_before_booking: boolean;
      days_limit_before_closing_booking: number;
    };
  };
}

/**
 * Fetch availability data from Amenitiz API
 * @param startDate - Start date in YYYY-MM-DD format
 * @param endDate - End date in YYYY-MM-DD format
 * @param lang - Language code (fr, en, de, es, it, nl)
 * @returns Promise with availability data
 */
export async function fetchAmenitizAvailability(
  startDate: string,
  endDate: string,
  lang: string = "fr",
): Promise<AvailabilityResponse | null> {
  try {
    const url = new URL(
      `https://domaine-de-pipangaille.amenitiz.io/${lang}/api_public/v1/client_booking_engine/availability`,
    );
    url.searchParams.set("start_date", startDate);
    url.searchParams.set("end_date", endDate);

    const response = await fetch(url.toString());

    if (!response.ok) {
      console.warn(
        `Amenitiz API returned ${response.status} ${response.statusText}`,
        { url: url.toString(), status: response.status },
      );
      return null;
    }

    const data: AvailabilityResponse = await response.json();
    return data;
  } catch (error) {
    console.warn("Could not fetch availability data from Amenitiz API:", {
      error: error instanceof Error ? error.message : String(error),
    });
    return null;
  }
}

/**
 * Build a map of unavailable dates for quick lookup
 * @param availabilities - Array of availability data
 * @returns Set of dates that are closed to arrival (in YYYY-MM-DD format)
 */
export function buildUnavailableDatesMap(
  availabilities: AvailabilityData[],
): Set<string> {
  const unavailableDates = new Set<string>();

  availabilities.forEach((availability) => {
    // Mark dates as unavailable for arrival if:
    // - closed_to_arrival is true
    // - closed is true
    // - is_available is false
    if (
      availability.closed_to_arrival ||
      availability.closed ||
      !availability.is_available
    ) {
      unavailableDates.add(availability.date);
    }
  });

  return unavailableDates;
}
