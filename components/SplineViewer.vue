<template>
  <div class="spline-container" ref="container"></div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const props = defineProps({
  url: {
    type: String,
    required: true
  },
  loadingType: {
    type: String,
    default: 'spinner-small-light'
  }
})

const container = ref(null)
let splineViewer = null

onMounted(async () => {
  if (process.client) {
    try {
      // Dynamically import the SplineViewer web component
      await import('@splinetool/viewer')
      
      // Create the web component
      splineViewer = document.createElement('spline-viewer')
      splineViewer.setAttribute('url', props.url)
      splineViewer.setAttribute('loading-anim-type', props.loadingType)
      
      // Clear container and append the viewer
      if (container.value) {
        container.value.innerHTML = ''
        container.value.appendChild(splineViewer)
      }
    } catch (error) {
      console.error('Error loading Spline viewer:', error)
    }
  }
})

onBeforeUnmount(() => {
  if (container.value) {
    container.value.innerHTML = ''
  }
  splineViewer = null
})
</script>

<style scoped>
.spline-container {
  width: 100%;
  height: 100%;
}
</style> 