<template>
    <svg 
      :width="width" 
      :height="height" 
      :class="className"
      viewBox="0 0 18 18" 
      fill="none"
    >
      <path 
        d="M0.0293672 9.00001H16.9999M16.9999 9.00001L8.51465 17.4853M16.9999 9.00001L8.51465 0.514728"
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