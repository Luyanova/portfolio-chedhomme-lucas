<template>
    <svg 
      :width="width" 
      :height="height" 
      :class="className"
      viewBox="0 0 18 18" 
      fill="none"
    >
      <path 
        d="M5 5L17 17M17 17H5M17 17V5M13 13L1 1M1 1H13M1 1V13" 
        :stroke="stroke" 
        stroke-width="0.75"
      />
    </svg>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: [String, Number],
    default: 18
  },
  height: {
    type: [String, Number],
    default: 18
  },
  className: {
    type: String,
    default: ''
  },
  stroke: {
    type: String,
    default: '#FAFAFA'
  }
})
</script>