<template>
  <section class="relative w-full h-screen flex flex-col items-center justify-center">
    <div class="flex flex-col w-full h-full items-center justify-center gap-8">
      <div ref="videoContainer" class="w-1/2 mx-auto overflow-hidden">
        <NuxtImg 
          src="/img/index/tempCv.png" 
          class="w-full h-auto object-cover rounded-sm"
          loading="eager"
          priority
          quality="50"
          alt="Aperçu de mon processus créatif"
        />
      </div>
      <p
         class="font-['Satoshi_Variable'] text-base lg:text-lg 2xl:text-xl font-normal leading-[150%] tracking-[0.64px] w-3/4 text-center"
         :class="{ 'text-grey-400': themeStore.isDeveloperMode, 'text-grey-500': !themeStore.isDeveloperMode }">
        {{ themeStore.isDeveloperMode ? 'Une présentation de mon approche de développement' : 'Une vidéo pour me présenter ;)' }}
      </p>
      <ButtonPrimary disabled>
        Bientôt disponible
      </ButtonPrimary>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import ButtonPrimary from '~/components/ButtonPrimary.vue'
import { useThemeStore } from '~/stores/themeStore'

const themeStore = useThemeStore()
const { $gsap } = useNuxtApp()
const videoContainer = ref(null)

onMounted(() => {
  // Animation for video container width
  $gsap.to(videoContainer.value, {
    width: '90%',
    duration: 1,
    scrollTrigger: {
      trigger: videoContainer.value,
      start: 'top bottom',
      end: 'end 30%',
      scrub: true,
      toggleActions: 'play none none reverse'
    }
  })
})
</script> 