<script setup lang="ts">
const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    default: 6,
  },
  height: {
    type: Number,
    default: 6,
  },
  size: {
    type: Number,
    default: 24,
  },
});

const spanClass = computed(
  () =>
    `inline-flex justify-center items-center w-${props.width} h-${props.height}`
);

const iconSize = computed(() => props.size ?? 24);
</script>
<template>
  <span :class="spanClass">
    <svg
      viewBox="0 0 24 24"
      :width="iconSize"
      :height="iconSize"
      class="inline-block"
    >
      <path fill="currentColor" :d="path" />
    </svg>
    <slot />
  </span>
</template>
