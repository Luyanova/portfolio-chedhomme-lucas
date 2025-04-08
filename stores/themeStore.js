import { defineStore } from 'pinia'
import { ref, onMounted, watch } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const isDeveloperMode = ref(false)
  
  // Charger la préférence depuis localStorage au démarrage
  onMounted(() => {
    if (process.client) {
      const savedMode = localStorage.getItem('isDeveloperMode')
      if (savedMode !== null) {
        isDeveloperMode.value = JSON.parse(savedMode)
      }
    }
  })
  
  // Sauvegarder quand le mode change
  watch(isDeveloperMode, (newValue) => {
    if (process.client) {
      localStorage.setItem('isDeveloperMode', JSON.stringify(newValue))
    }
  })
  
  function toggleMode() {
    isDeveloperMode.value = !isDeveloperMode.value
  }
  
  return { isDeveloperMode, toggleMode }
}) 