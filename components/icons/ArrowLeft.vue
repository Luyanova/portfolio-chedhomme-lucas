<template>
    <svg 
      :width="width" 
      :height="height" 
      :class="className"
      viewBox="0 0 19 18" 
      fill="none"
    >
      <path 
        d="M18.0292 9.00001H1.05866M1.05866 9.00001L9.54395 17.4853M1.05866 9.00001L9.54395 0.514728"
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