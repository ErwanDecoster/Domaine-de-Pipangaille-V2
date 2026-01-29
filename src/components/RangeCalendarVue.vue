<script setup lang="ts">
import type { DateRange } from "reka-ui";
import { ref, type Ref } from "vue";
import { getLocalTimeZone, today } from "@internationalized/date";
import { RangeCalendar } from "@/components/ui/range-calendar";

const start = today(getLocalTimeZone());
const end = start.add({ days: 2 });

const dateRange = ref({
  start,
  end,
}) as Ref<DateRange>;

const emit = defineEmits<{
  change: [value: DateRange];
}>();

// Émettre les changements et mettre à jour le data attribute du bouton
const handleChange = () => {
  emit("change", dateRange.value);

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
      return date.toDate(getLocalTimeZone()).toLocaleDateString("en-US", options);
    };

    const displayText = `${formatDate(dateRange.value.start)} - ${formatDate(dateRange.value.end)}`;
    const dateDisplay = document.getElementById("date-display");
    if (dateDisplay) {
      dateDisplay.textContent = displayText;
    }
  }
};
</script>

<template>
  <RangeCalendar
    v-model="dateRange"
    :number-of-months="2"
    :min-value="today(getLocalTimeZone())"
    class="rounded-md"
    @update:model-value="handleChange"
  />
</template>
