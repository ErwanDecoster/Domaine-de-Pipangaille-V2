<script lang="ts" setup>
import type { RangeCalendarPrevProps } from "reka-ui";
import type { HTMLAttributes } from "vue";
import { reactiveOmit } from "@vueuse/core";
import { RangeCalendarPrev, useForwardProps } from "reka-ui";
import { cn } from "@/lib/utils";

const props = defineProps<
  RangeCalendarPrevProps & { class?: HTMLAttributes["class"] }
>();

const delegatedProps = reactiveOmit(props, "class");

const forwardedProps = useForwardProps(delegatedProps);
</script>

<template>
  <RangeCalendarPrev
    data-slot="range-calendar-prev-button"
    :class="
      cn(
        'border-input bg-background hover:bg-accent hover:text-accent-foreground focus-visible:ring-ring inline-flex items-center justify-center rounded-md border text-sm font-medium transition-colors focus-visible:ring-1 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50',
        'absolute left-1',
        'size-7 bg-transparent p-0 opacity-50 hover:opacity-100',
        props.class,
      )
    "
    v-bind="forwardedProps"
  >
    <slot>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-4"
      >
        <path d="m15 18-6-6 6-6" />
      </svg>
    </slot>
  </RangeCalendarPrev>
</template>
