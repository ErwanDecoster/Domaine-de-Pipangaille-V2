<script setup lang="ts">
import type { DateRange } from "reka-ui";
import { ref, type Ref, computed, onMounted, onUnmounted } from "vue";
import { getLocalTimeZone, today, parseDate } from "@internationalized/date";
import { RangeCalendar } from "@/components/ui/range-calendar";
import {
  fetchAmenitizAvailability,
  buildUnavailableDatesMap,
} from "@/lib/amenitiz";

const props = defineProps<{
  lang?: string;
}>();

const start = today(getLocalTimeZone());
const end = start.add({ days: 2 });

const dateRange = ref({ start, end }) as Ref<DateRange>;
const unavailableDates = ref<Set<string>>(new Set());
const isSelectingEndDate = ref(false);
const numberOfMonths = ref(1);
const availabilityLoaded = ref(false);
const loadedDateRange = ref({ start: "", end: "" });
const isLoadingMore = ref(false);

const updateNumberOfMonths = () => {
  numberOfMonths.value = window.innerWidth >= 768 ? 2 : 1;
};

const loadAvailability = async (fromDate?: string, toDate?: string) => {
  if (isLoadingMore.value) return;

  try {
    isLoadingMore.value = true;
    const todayDate = today(getLocalTimeZone());
    const startDate = fromDate || todayDate.toString();
    const endDate = toDate || todayDate.add({ days: 90 }).toString();

    const availabilityData = await fetchAmenitizAvailability(
      startDate,
      endDate,
      props.lang || "fr",
    );

    if (availabilityData?.data?.availabilities) {
      const newDates = buildUnavailableDatesMap(
        availabilityData.data.availabilities,
      );

      // Merge with existing dates
      unavailableDates.value = new Set([
        ...unavailableDates.value,
        ...newDates,
      ]);

      // Update loaded range
      if (
        !loadedDateRange.value.start ||
        startDate < loadedDateRange.value.start
      ) {
        loadedDateRange.value.start = startDate;
      }
      if (!loadedDateRange.value.end || endDate > loadedDateRange.value.end) {
        loadedDateRange.value.end = endDate;
      }
    }

    availabilityLoaded.value = true;
  } catch (error) {
    console.error("Failed to fetch availability:", error);
  } finally {
    isLoadingMore.value = false;
  }
};

const handlePlaceholderChange = (newPlaceholder: any) => {
  if (!availabilityLoaded.value) {
    loadAvailability();
    return;
  }

  // Check if we need to load more data
  const placeholderDate = parseDate(newPlaceholder.toString());
  const placeholderEndOfMonth = placeholderDate.add({
    months: numberOfMonths.value,
  });

  const loadedEnd = loadedDateRange.value.end
    ? parseDate(loadedDateRange.value.end)
    : null;

  // Load more if we're within 30 days of the end of loaded range
  if (loadedEnd) {
    const daysUntilEnd = loadedEnd.compare(placeholderEndOfMonth);

    if (daysUntilEnd < 30) {
      const newStartDate = loadedEnd.add({ days: 1 }).toString();
      const newEndDate = loadedEnd.add({ days: 90 }).toString();
      loadAvailability(newStartDate, newEndDate);
    }
  }
};

onMounted(async () => {
  updateNumberOfMonths();
  window.addEventListener("resize", updateNumberOfMonths);
  const stored = localStorage.getItem("booking_date_range");
  if (stored) {
    try {
      const parsed = JSON.parse(stored);
      if (parsed.start && parsed.end) {
        dateRange.value = {
          start: parseDate(parsed.start),
          end: parseDate(parsed.end),
        };
        updateDateDisplay();
      }
    } catch (e) {
      console.error("Failed to parse stored date range:", e);
    }
  }

  // Defer availability loading until first interaction with calendar
  // This prevents blocking the initial page load and improves LCP
});

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

const weekStartsOn = computed(() => (props.lang === "en" ? 0 : 1));

const isDateUnavailable = (date: any) => {
  if (!unavailableDates.value.size) return false;

  const dateStr = date.toString();
  const isDateUnavailableToArrival = unavailableDates.value.has(dateStr);

  if (isSelectingEndDate.value && dateRange.value.start) {
    const startDateStr = dateRange.value.start.toString();
    const sortedUnavailableDates = Array.from(unavailableDates.value).sort();
    const nextUnavailableDate = sortedUnavailableDates.find(
      (unavailableDate) => unavailableDate > startDateStr,
    );

    if (nextUnavailableDate) {
      return dateStr > nextUnavailableDate;
    }

    return false;
  }

  return isDateUnavailableToArrival;
};

const emit = defineEmits<{
  change: [value: DateRange];
}>();

const updateDateDisplay = () => {
  const dateButton = document.getElementById("date-button");
  if (dateButton && dateRange.value.start && dateRange.value.end) {
    const startDate = dateRange.value.start.toString();
    const endDate = dateRange.value.end.toString();

    dateButton.dataset.startDate = startDate;
    dateButton.dataset.endDate = endDate;

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
  // Load availability data on first interaction with calendar
  if (!availabilityLoaded.value) {
    loadAvailability();
  }

  emit("change", dateRange.value);

  if (dateRange.value.start && !dateRange.value.end) {
    isSelectingEndDate.value = true;
  } else if (dateRange.value.start && dateRange.value.end) {
    isSelectingEndDate.value = false;

    localStorage.setItem(
      "booking_date_range",
      JSON.stringify({
        start: dateRange.value.start.toString(),
        end: dateRange.value.end.toString(),
      }),
    );

    updateDateDisplay();
  } else {
    isSelectingEndDate.value = false;
  }
};

onUnmounted(() => {
  window.removeEventListener("resize", updateNumberOfMonths);
});
</script>

<template>
  <RangeCalendar
    v-model="dateRange"
    :number-of-months="numberOfMonths"
    :min-value="today(getLocalTimeZone())"
    :locale="locale"
    :week-starts-on="weekStartsOn"
    :is-date-unavailable="isDateUnavailable"
    class="rounded-md"
    @update:model-value="handleChange"
    @update:placeholder="handlePlaceholderChange"
  />
</template>
