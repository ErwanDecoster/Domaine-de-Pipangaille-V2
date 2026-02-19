/**
 * Plausible Analytics Custom Events Tracker
 * Safe wrapper for tracking custom events in Plausible
 */

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    // eslint-disable-next-line no-unused-vars
    plausible?: (_event: string, _opts?: any) => void;
  }
}

export const plausibleEvents = {
  // Booking Widget Events
  bookingWidgetOpened: () => trackEvent("booking_widget_opened"),
  bookingWidgetClosed: () => trackEvent("booking_widget_closed"),
  bookingDateSelected: (dateRange?: string) =>
    trackEvent("booking_date_selected", { dateRange }),
  bookingSubmitted: (roomType?: string) =>
    trackEvent("booking_submitted", { roomType }),
  bookingError: (error?: string) => trackEvent("booking_error", { error }),

  // Contact Form Events
  contactFormSubmitted: (subject?: string) =>
    trackEvent("contact_form_submitted", { subject }),
  contactFormError: (error?: string) =>
    trackEvent("contact_form_error", { error }),

  // Room/Accommodation Events
  roomViewed: (roomName: string) =>
    trackEvent("room_viewed", { room: roomName }),
  roomDetailsOpened: (roomName: string) =>
    trackEvent("room_details_opened", { room: roomName }),
  galleryOpened: (roomName?: string) =>
    trackEvent("gallery_opened", { room: roomName }),

  // Surroundings/POI Events
  surroundingClicked: (name: string, category?: string) =>
    trackEvent("surrounding_clicked", { name, category }),
  surroundingContactClicked: (
    name: string,
    type: "phone" | "website" | "booking",
  ) => trackEvent("surrounding_contact_clicked", { name, type }),
  surroundingFilterApplied: (filter: string) =>
    trackEvent("surrounding_filter_applied", { filter }),

  // Navigation & UX Events
  languageSwitched: (language: string) =>
    trackEvent("language_switched", { language }),
  themeSwitched: (theme: "light" | "dark" | "system") =>
    trackEvent("theme_switched", { theme }),
  externalLinkClicked: (url: string, type?: string) =>
    trackEvent("external_link_clicked", { url, type }),
  mapProviderSelected: (provider: "google" | "bing") =>
    trackEvent("map_provider_selected", { provider }),

  // Business Hours & Info Events
  businessHoursViewed: (place: string) =>
    trackEvent("business_hours_viewed", { place }),
  contactInfoViewed: (place: string) =>
    trackEvent("contact_info_viewed", { place }),
};

/**
 * Core function to track events in Plausible
 * Safely handles cases where plausible is not available
 */
export function trackEvent(
  eventName: string,
  props?: Record<string, string | undefined>,
): void {
  if (typeof window !== "undefined" && window.plausible) {
    // Prepare props - filter out undefined values
    const cleanProps = props
      ? Object.fromEntries(
          Object.entries(props).filter(([, v]) => v !== undefined),
        )
      : undefined;

    window.plausible(eventName, cleanProps ? { props: cleanProps } : undefined);
  }
}
