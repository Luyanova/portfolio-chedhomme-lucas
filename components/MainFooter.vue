<template>
  <footer class="bg-secondary-500 text-grey-50 pt-24">
    <div ref="marqueeContainer" class="marquee-container">
      <div class="marquee" :class="{ 'paused': isPaused }">
        <div class="marquee-inner">
          <span class="font-['Owners_Wide'] text-[80px] italic font-bold leading-[120%]">ON DISCUTE ? - ON DISCUTE ? - ON DISCUTE ? - ON DISCUTE ? - </span>
          <span class="font-['Owners_Wide'] text-[80px] italic font-bold leading-[120%]">ON DISCUTE ? - ON DISCUTE ? - ON DISCUTE ? - ON DISCUTE ? - </span>
        </div>
        <div aria-hidden="true" class="marquee-inner">
          <span class="font-['Owners_Wide'] text-[80px] italic font-bold leading-[120%]">ON DISCUTE ? - ON DISCUTE ? - ON DISCUTE ? - ON DISCUTE ? - </span>
          <span class="font-['Owners_Wide'] text-[80px] italic font-bold leading-[120%]">ON DISCUTE ? - ON DISCUTE ? - ON DISCUTE ? - ON DISCUTE ? - </span>
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:min-h-screen">
      <div class="flex flex-col px-4 lg:px-10 2xl:px-20 pt-10 2xl:pt-40 pb-4 gap-10 sm:pb-8 sm:flex-1">
        <div class="flex flex-col gap-10 sm:w-3/4 2xl:w-1/3">
          <p class="font-['Satoshi_Variable'] text-lg sm:text-3xl font-light leading-[150%] tracking-[0.54px]">
            Une idée en tête ? Envie de donner vie à un projet ou juste de discuter digital ? N'hésitez pas à me contacter – que ce soit pour travailler ensemble ou simplement pour dire bonjour !
          </p>

          <div>
            <ButtonPrimary to="/contact">
              Me contacter
            </ButtonPrimary>
          </div>
        </div>

        <div class="flex flex-col gap-10 items-end">
          <NuxtLink to="/">
            <LogoLucasChedhomme height="48" class="h-12" fill="#0af29d" />
          </NuxtLink>
          <div class="flex flex-col items-end gap-6">
            <NuxtLink to="/about">
              <p class="font-['Satoshi_Variable'] text-base lg:text-lg 2xl:text-xl font-normal leading-[150%] capitalize tracking-[0.64px] underline">À propos</p>
            </NuxtLink>
            <NuxtLink to="/projects">
              <p class="font-['Satoshi_Variable'] text-base lg:text-lg 2xl:text-xl font-normal leading-[150%] capitalize tracking-[0.64px] underline">Projets</p>
            </NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex flex-col border-t border-grey-50 px-4 lg:px-10 2xl:px-20 py-4 justify-between 2xl:justify-end sm:flex-1 sm:pt-10">
        <div class="flex flex-col gap-8 lg:flex-row justify-between lg:items-end">
          <div class="flex flex-col gap-4 sm:gap-8 lg:flex-row lg:gap-30">
            <div class="flex flex-col gap-4 sm:gap-8">
              <div class="flex flex-col">
                <p class="font-['Satoshi_Variable'] text-base lg:text-lg 2xl:text-xl font-normal leading-[150%] tracking-[0.64px]">E-mail</p>
                <a href="mailto:contact@lucaschedhomme.com " class="font-['Owners_Wide'] text-base sm:text-xl 2xl:text-3xl underline font-medium leading-[140%] tracking-[1px] decoration-solid decoration-skip-ink-none underline-offset-auto underline-position-from-font hover:text-primary-500 transition-colors  ">
                  contact@lucaschedhomme.com
                </a>
              </div>

              <div class="flex flex-col">
                <p class="font-['Satoshi_Variable'] text-base lg:text-lg 2xl:text-xl font-normal leading-[150%] tracking-[0.64px]">Linkedin</p>
                <a href="https://www.linkedin.com/in/lucas-chedhomme-395520283/" class="font-['Owners_Wide'] text-base sm:text-xl  2xl:text-3xl underline font-medium leading-[140%] tracking-[1px] decoration-solid decoration-skip-ink-none underline-offset-auto underline-position-from-font hover:text-primary-500 transition-colors ">
                  Lucas Chedhomme
                </a>
              </div>
            </div>

            <div class="flex flex-col gap-4 sm:gap-8">
              <div class="flex flex-col">
                <p class="font-['Satoshi_Variable'] text-base lg:text-lg 2xl:text-xl font-normal leading-[150%] tracking-[0.64px]">Instagram</p>
                <a href="https://www.instagram.com/lucaschedh.design?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="font-['Owners_Wide'] text-base sm:text-lg  2xl:text-3xl underline font-medium leading-[140%] tracking-[1px] decoration-solid decoration-skip-ink-none underline-offset-auto underline-position-from-font hover:text-primary-500 transition-colors">
                  @lucaschedh.design
                </a>
              </div>

              <div class="flex flex-col">
                <p class="font-['Satoshi_Variable'] text-base lg:text-lg 2xl:text-xl font-normal leading-[150%] tracking-[0.64px]">Behance</p>
                <a href="https://www.behance.net/lucaschedh" class="font-['Owners_Wide'] text-base sm:text-xl  2xl:text-3xl underline font-medium leading-[140%] tracking-[1px] decoration-solid decoration-skip-ink-none underline-offset-auto underline-position-from-font hover:text-primary-500 transition-colors">
                  @lucaschedh
                </a>
              </div>
            </div>
          </div>

          <div>
            <ButtonSecondary :icon="ArrowDown" icon-color="#E5F2ED" to="/files/cv-chedhomme-lucas.pdf" is-external download="cv-chedhomme-lucas.pdf">
              Télécharger mon CV
            </ButtonSecondary>
          </div>
        </div>

        <div class="flex flex-col sm:flex-row pt-10 gap-4">
          <p class="font-['Satoshi_Variable'] text-base lg:text-lg 2xl:text-xl font-light leading-[150%] tracking-[0.64px] text-grey-50">©2025, Lucas Chedhomme. Tous droits réservés</p>
          <NuxtLink to="/legalNotice" class="font-['Satoshi_Variable'] text-base lg:text-lg 2xl:text-xl font-light leading-[150%] tracking-[0.64px] text-grey-50">Mentions légales</NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import ArrowDown from '~/components/icons/ArrowDown.vue'
import LogoLucasChedhomme from '~/components/icons/LogoLucasChedhomme.vue'

const isPaused = ref(false)
const marqueeContainer = ref(null)

onMounted(() => {
  if (marqueeContainer.value) {
    marqueeContainer.value.addEventListener('mouseenter', () => {
      isPaused.value = true
    })
    
    marqueeContainer.value.addEventListener('mouseleave', () => {
      isPaused.value = false
    })
  }
})
</script>

<style scoped>
.marquee-container {
  overflow: hidden;
  width: 100%;
  cursor: pointer;
  position: relative;
  background-color: var(--color-secondary-500);
}

.marquee {
  width: fit-content;
  display: flex;
  position: relative;
  will-change: transform;
  animation: marquee 60s linear infinite;
  gap: 0;
}

.marquee.paused {
  animation-play-state: paused;
}

.marquee-inner {
  display: flex;
  width: fit-content;
  flex-shrink: 0;
  gap: 0;
}

.marquee-inner span {
  display: inline-block;
  white-space: nowrap;
  flex-shrink: 0;
}

@keyframes marquee {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-50%, 0, 0);
  }
}

/* Add this to ensure no horizontal overflow */
body, html {
  overflow-x: hidden;
  max-width: 100%;
}

/* Add this to ensure no vertical overflow */
@media (min-width: 640px) {
  footer {
    display: flex;
    flex-direction: column;
  }
  
  footer > div:last-child {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
}
</style>