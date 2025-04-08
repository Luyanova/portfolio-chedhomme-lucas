<template>
    <svg 
      :width="width" 
      :height="height" 
      :class="className"
      viewBox="0 0 16 16" 
      fill="none"
    >
      <path 
        d="M7.96382 7.96387L0.514625 15.4131M7.96382 7.96387L0.514625 0.514672M7.96382 7.96387L15.413 0.514672M7.96382 7.96387L15.413 15.4131" 
        :stroke="stroke" 
        stroke-width="0.75"
      />
    </svg>
</template>

<script setup lang="ts">
defineProps({
  width: {
    type: [String, Number],
    default: 16
  },
  height: {
    type: [String, Number],
    default: 16
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