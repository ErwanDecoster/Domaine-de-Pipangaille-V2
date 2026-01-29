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
}>();

const start = today(getLocalTimeZone());
const end = start.add({ days: 2 });

const dateRange = ref({ start, end }) as Ref<DateRange>;
const unavailableDates = ref<Set<string>>(new Set());
const isSelectingEndDate = ref(false);

onMounted(async () => {
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

  try {
    const todayDate = today(getLocalTimeZone());
    const startDate = todayDate.toString();
    const endDate = todayDate.add({ days: 90 }).toString();

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
  if (dateButton) {
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
