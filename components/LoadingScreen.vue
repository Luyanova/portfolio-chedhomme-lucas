<template>
  <div v-if="isLoading" class="loading-screen">
    <div class="logo-container">
      <svg 
        width="120" 
        height="120" 
        viewBox="0 0 97 89" 
        fill="none"
        class="logo"
      >
        <defs>
          <linearGradient id="loading-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stop-color="#0AF29D" />
            <stop :offset="`${loadingProgress}%`" stop-color="#0AF29D" />
            <stop :offset="`${loadingProgress}%`" stop-color="#344640" />
            <stop offset="100%" stop-color="#344640" />
          </linearGradient>
        </defs>
        <path d="M34.4917 87.3122L70.6011 5.87332C72.0223 2.33984 68.8973 0.278922 65.3719 0.278931H42.7188C39.9316 0.418605 37.9517 1.74352 36.7396 4.19495L0.795598 85.2636C-0.519046 88.2762 4.048 90.3434 5.41737 87.3122L41.5222 5.8659H50.5297L15.3325 85.2628C14.5919 86.934 15.8154 88.8144 17.6431 88.8144C18.643 88.8144 19.549 88.2256 19.9543 87.3122L56.0722 5.86534H65.0814L29.8705 85.2628C28.5439 88.3015 33.136 90.3226 34.4917 87.3122Z" fill="url(#loading-gradient)"/>
        <path d="M80.3523 88.7831C83.0843 88.6648 85.0964 87.3904 86.3507 84.8973C86.8271 83.6296 96.5581 62.3418 96.3742 61.7261C96.8127 59.33 94.942 57.1299 92.5055 57.1328L52.0414 57.1801L49.81 62.2347L90.2812 62.1845L86.6388 70.4247L46.1722 70.4742L43.9363 75.5394L84.3981 75.4954L80.7572 83.7338L40.2997 83.7777L38.0792 88.807L80.3523 88.7831Z" fill="url(#loading-gradient)"/>
      </svg>
    </div>
    <div class="loading-text text-[satoshi_variable] text-xl text-primary-500  leading-[150%] tracking-[0.64px]">{{ Math.round(loadingProgress) }}%</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isLoading = ref(true)
const loadingProgress = ref(0)
const intervalId = ref(null)

onMounted(() => {
  // Simuler une progression de chargement
  intervalId.value = setInterval(() => {
    if (loadingProgress.value < 100) {
      loadingProgress.value += 1
    } else {
      clearInterval(intervalId.value)
      setTimeout(() => {
        isLoading.value = false
      }, 500) // Petite pause avant de cacher le loader
    }
  }, 20) // Vitesse de progression
  
  // Si on veut écouter le chargement réel des ressources
  window.addEventListener('load', onPageLoad)
})

onUnmounted(() => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
  }
  window.removeEventListener('load', onPageLoad)
})

function onPageLoad() {
  // Si la page se charge plus vite que notre animation, on accélère
  if (loadingProgress.value < 70) {
    loadingProgress.value = 70
  }
}
</script>

<style scoped>
.loading-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--bg-color, #010f0a);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.logo-container {
  position: relative;
  margin-bottom: 2rem;
}



.logo {
  animation: pulse 1.5s infinite alternate;
}

@keyframes pulse {
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.05);
  }
}
</style> 