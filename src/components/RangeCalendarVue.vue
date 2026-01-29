<script setup lang="ts">
import type { DateRange } from "reka-ui";
import { ref, type Ref, computed, onMounted } from "vue";
import { getLocalTimeZone, today, parseDate } from "@internationalized/date";
import { RangeCalendar } from "@/components/ui/range-calendar";
import {
  fetchAmenitizAvailability,
  buildUnavailableDatesMap,
} from "@/lib/amenitiz";

const props = defineProps<{
  lang?: string;
  unavailableDates?: Set<string>;
}>();

const start = today(getLocalTimeZone());
const end = start.add({ days: 2 });

const dateRange = ref({
  start,
  end,
}) as Ref<DateRange>;

const unavailableDates = ref<Set<string>>(props.unavailableDates || new Set());

// Load dates from localStorage on mount and fetch availability
onMounted(async () => {
  // Load dates from localStorage
  const stored = localStorage.getItem("booking_date_range");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      // Convert ISO strings back to CalendarDate objects
      if (parsed.start && parsed.end) {
        dateRange.value = {
          start: parseDate(parsed.start),
          end: parseDate(parsed.end),
        };
        // Update the display immediately
        updateDateDisplay();
      }
    } catch (e) {
      // If localStorage data is corrupted, use defaults
      console.error("Failed to parse stored date range:", e);
    }
  }

  // Fetch availability data from Amenitiz
  try {
    const today_date = today(getLocalTimeZone());
    const startDate = today_date.toString();
    const endDate = today_date.add({ days: 90 }).toString();

    const availabilityData = await fetchAmenitizAvailability(
      startDate,
      endDate,
      props.lang || "fr",
    );

    if (availabilityData?.data?.availabilities) {
      unavailableDates.value = buildUnavailableDatesMap(
        availabilityData.data.availabilities,
      );
    }
  } catch (error) {
    console.error("Failed to fetch availability:", error);
  }
});

// Map lang codes to locale strings for the calendar
const locale = computed(() => {
  const localeMap: Record<string, string> = {
    fr: "fr-FR",
    en: "en-US",
    de: "de-DE",
    es: "es-ES",
    it: "it-IT",
    nl: "nl-NL",
  };
  return localeMap[props.lang || "fr"] || "fr-FR";
});

// First day of week: 0 = Sunday (en), 1 = Monday (fr, de, es, it, nl)
const weekStartsOn = computed(() => {
  return props.lang === "en" ? 0 : 1;
});

// Function to check if a date is disabled
// Dates unavailable to arrival are only disabled when selecting the start date
// Once a start date is selected, all dates can be selected as end date
const isDateUnavailable = (date: any) => {
  // If no unavailable dates or the Set is empty, no dates are disabled
  if (!unavailableDates.value || unavailableDates.value.size === 0) {
    return false;
  }

  const dateStr = date.toString();
  const isDateUnavailableToArrival = unavailableDates.value.has(dateStr);

  // If we haven't selected a start date yet, disable unavailable dates
  // (so user can only click on available arrival dates)
  if (!dateRange.value.start) {
    return isDateUnavailableToArrival;
  }

  // If start date is selected but not end date, or we're still in selection mode:
  // Don't disable any dates for the end date selection
  // The RangeCalendar component will handle the logic of preventing dates
  // before the start date
  return false;
};

const emit = defineEmits<{
  change: [value: DateRange];
}>();

const updateDateDisplay = () => {
  // Update the date button with the selected dates
  const dateButton = document.getElementById("date-button");
  if (dateButton) {
    const startDate = dateRange.value.start.toString();
    const endDate = dateRange.value.end.toString();

    dateButton.dataset.startDate = startDate;
    dateButton.dataset.endDate = endDate;

    // Format the display text (e.g., "12 Jan - 14 Jan")
    const formatDate = (date: any) => {
      const options = { month: "short", day: "numeric" } as const;
      return date
        .toDate(getLocalTimeZone())
        .toLocaleDateString(locale.value, options);
    };

    const displayText = `${formatDate(dateRange.value.start)} - ${formatDate(dateRange.value.end)}`;
    const dateDisplay = document.getElementById("date-display");
    if (dateDisplay) {
      dateDisplay.textContent = displayText;
    }
  }
};

const handleChange = () => {
  emit("change", dateRange.value);

  // Save to localStorage in ISO format
  localStorage.setItem(
    "booking_date_range",
    JSON.stringify({
      start: dateRange.value.start.toString(),
      end: dateRange.value.end.toString(),
    }),
  );

  updateDateDisplay();
};
</script>

<template>
  <RangeCalendar
    v-model="dateRange"
    :number-of-months="2"
    :min-value="today(getLocalTimeZone())"
    :locale="locale"
    :week-starts-on="weekStartsOn"
    :is-date-unavailable="isDateUnavailable"
    class="rounded-md"
    @update:model-value="handleChange"
  />
</template>
