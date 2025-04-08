<template>
    <svg 
    :width="width" 
    :height="height" 
    :class="className"
    viewBox="0 0 14 14" fill="none">
    <path d="M1 1L7 7L13 1" :stroke="stroke"/>
    </svg>
    </template>


  



    <script setup lang="ts">
defineProps({
  width: {
    type: [String, Number],
    default: 14
  },
  height: {
    type: [String, Number],
    default: 14
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

<!-- <ArrowDown class="w-8 h-8" /> -->