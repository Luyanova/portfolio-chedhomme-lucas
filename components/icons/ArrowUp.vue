<template>
    <svg 
      :width="width" 
      :height="height" 
      :class="className"
      viewBox="0 0 14 14" 
      fill="none"
    >
      <path 
        d="M1 13L13 1M13 1H1M13 1V13" 
        :stroke="stroke" 
        stroke-width="0.75"
      />
    </svg>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: [String, Number],
    default: 10
  },
  height: {
    type: [String, Number],
    default: 10
  },
  className: {
    type: String,
    default: ''
  },
  stroke: {
    type: String,
    default: '#010F0A'
  }
})
</script>

<!-- <ArrowUp stroke="#FAFAFA" /> -->

<style>
/* Remove scoped to let this CSS affect elements outside this component */
.group:hover .w-6.h-6 path {
  stroke: var(--color-primary-500, #48BB78) !important;
}
</style>