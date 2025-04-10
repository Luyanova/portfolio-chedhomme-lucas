<template>
  <div :class="{ 'bg-grey-900': themeStore.isDeveloperMode, 'bg-grey-50': !themeStore.isDeveloperMode }">
    <section class="flex flex-col px-4 lg:px-10 2xl:px-20 py-6 h-[calc(100vh-72px)] justify-between z-10 lg:pb-30 lg:pt-11 lg:flex-row">
      <div class="flex flex-col gap-8 lg:gap-16">
      <div class="flex flex-col gap-4 lg:gap-8">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col">
            <Transition name="fade" mode="out-in">
              <p
              :key="'name-' + themeStore.isDeveloperMode" 
                 class="text-sm sm:text-lg 2xl:text-xl font-light font-['Satoshi_Variable'] tracking-widest uppercase"
                 :class="{ 'text-grey-400': themeStore.isDeveloperMode, 'text-grey-500': !themeStore.isDeveloperMode }">
                Chedhomme Lucas
              </p>
            </Transition>
            <Transition name="fade" mode="out-in">
              <p 
              :key="'title-' + themeStore.isDeveloperMode" 
                 class="text-4xl sm:text-5xl 2xl:text-6xl font-['Owners_Wide'] italic font-bold text-primary-500">
                {{ themeStore.isDeveloperMode ? 'Développeur web' : 'Créateur digital' }}
              </p>
            </Transition>
          </div>
          <div>
            <Transition name="fade" mode="out-in">
              <p 
              :key="'description-' + themeStore.isDeveloperMode" 
                 class="text-base 2xl:text-xl font-medium font-['Satoshi_Variable'] leading-[150%] tracking-[0.64px] sm:w-1/2 "
                 :class="{ 'text-grey-400': themeStore.isDeveloperMode, 'text-grey-500': !themeStore.isDeveloperMode }">
                {{ themeStore.isDeveloperMode 
                  ? 'Je conçois et développe des expériences web sur mesure, alliant performance, design et innovation. Chaque ligne de code est pensée pour donner vie à des interfaces fluides et impactantes.' 
                  : 'Je transforme les idées en expériences visuelles et interactives. Du design au code, chaque projet est une fusion de créativité et de technique, portée par ma vision et mon exigence du détail.' }}
              </p>
            </Transition>
          </div>
        </div>
        <div class="flex">
          <label class="flex flex-col items-start cursor-pointer">
            <input  v-model="themeStore.isDeveloperMode" type="checkbox"  value=""  class="sr-only peer">
            <div class="relative w-24 h-8 bg-secondary-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-[44px] rtl:peer-checked:after:-translate-x-[44px] after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-primary-500 after:border-primary-500 after:border after:rounded-full after:h-7 after:w-12 after:transition-all peer-checked:bg-grey-500"/>
            <Transition name="fade" mode="out-in">
              <span 
              :key="'mode-label-' + themeStore.isDeveloperMode" 
                    class="font-['Satoshi_Variable'] text-xs 2xl:text-sm font-light leading-[150%] tracking-[0.72px] mt-1"
                    :class="{ 'text-grey-400': themeStore.isDeveloperMode, 'text-grey-500': !themeStore.isDeveloperMode }">
                {{ themeStore.isDeveloperMode ? 'Mode développeur' : 'Mode créateur' }}
              </span>
            </Transition>
          </label>
        </div>
        </div>
        <div class="mt-4 flex">
          <Transition name="fade" mode="out-in">
            <ButtonPrimary
              :key="'button-' + themeStore.isDeveloperMode"
              :icon="ArrowUp"
              :to="themeStore.isDeveloperMode ? '/web' : '/multimedia'"
            >
              {{ themeStore.isDeveloperMode ? 'Voir les projets web' : 'Voir les projets multimédia' }}
            </ButtonPrimary>
          </Transition>
        </div>
      </div>

      <div class="w-full h-2/5 rounded-sm overflow-hidden sm:h-1/2 lg:h-full lg:w-1/2 2xl:max-h-[70vh]">
        <Transition name="fade" mode="out-in">
          <SplineViewer 
            :key="'spline-' + themeStore.isDeveloperMode"
            :url="themeStore.isDeveloperMode 
              ? 'https://prod.spline.design/5HgjZo3KXZMjX1IA/scene.splinecode' 
              : 'https://prod.spline.design/1citcBVm74CbPxH2/scene.splinecode'" 
          />
        </Transition>
      </div>
    </section>

    <section id="this-section-to-translate" class="relative w-full h-[120vh] z-1 lg:h-[200vh]">
      <NuxtImg 
        src="/img/index/portraitLucasChedhomme.jpg" 
        class="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        format="webp"
        quality="70"
        fit="cover"
      />
      <div class="relative flex flex-col w-full h-full justify-between items-end bg-black/15 px-4 lg:px-10 2xl:px-20 py-20">
        <div class="top sticky top-32 flex flex-col gap-9 w-4/5 mb-20 lg:w-1/2 ">
          <div class="flex flex-col lg:w-5/6 2xl:w-1/2">
            <p class="text-white text-sm 2xl:text-base font-light font-['Satoshi_Variable'] tracking-widest">Biographie</p>
            <p class="text-white text-base sm:text-lg 2xl:text-xl font-normal font-['Satoshi_Variable']">
              {{ themeStore.isDeveloperMode 
                ? 'Je m\'appelle Lucas Chedhomme, j\'ai 21 ans, développeur full-stack spécialisé en technologies web modernes. Mon approche combine rigueur technique et sensibilité créative pour concevoir des applications performantes et esthétiques.' 
                : 'Je m\'appelle Lucas Chedhomme, j\'ai 21 ans, je suis développeur web et créatif, je fusionne technique et design pour donner vie à des expériences uniques. De la refonte de sites à la photographie de concerts, chaque projet est pour moi une occasion d\'explorer et d\'innover.' }}
            </p>
          </div>
          <div class="flex justify-end lg:w-5/6 2xl:w-1/2">
            <ButtonSecondary to="/about">À Propos</ButtonSecondary>
          </div>
        </div>

        <div class="bottom w-full flex flex-col gap-4 lg:w-1/2 ">
          <div class="bg-white  w-full h-[1px]" />
          <div class="flex w-full justify-between">
            <p class="text-grey-100 text-sm 2xl:text-base font-light font-['Satoshi_Variable'] tracking-widest">50° 37' 45.3" N 3° 3' 26.122" E</p>
            <div class="flex flex-col justify-end items-end">
              <p class="text-white text-sm 2xl:text-base font-light font-['Satoshi_Variable'] tracking-widest">Lille,</p>
              <p class="text-white text-sm 2xl:text-base font-light font-['Satoshi_Variable'] tracking-widest">France</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section ref="projectSection1" class="relative h-[200vh] w-full py-20 overflow-hidden flex justify-center lg:h-[150vh]">
      <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-90">
        <ButtonPrimary :icon="ArrowDown" to="/projects">
          Voir les projets
        </ButtonPrimary>
      </div>
      
      <!-- Top right project -->
      <div ref="project1" class="absolute right-[-30vw] top-[30vh] w-[70vw] z-30 sm:w-1/2 sm:right-[-10vw] lg:w-1/4 lg:right-[-5vw] lg:top-[30vh]">
        <LightBoxProject id="web/my-first-web-project" />
      </div>
      
      <!-- Left project -->
      <div ref="project2" class="absolute left-[-10vw] top-[60vh] w-[65vw] z-10 sm:w-3/5 sm:left-[-5vw] lg:w-1/6 lg:left-[10vw] lg:top-[40vh]">
        <LightBoxProject id="web/team-square"/>
      </div>
      
      <!-- Bottom right project -->
      <div ref="project3" class="absolute right-0 top-[90vh] w-[70vw] z-20 lg:w-1/4 lg:right-[20vw] lg:top-[90vh]">
        <LightBoxProject id="multimedia/shay-cabaret" />
      </div>

      <!-- Bottom left project -->
      <div ref="project4" class="absolute left-0 top-[130vh] w-[65vw] z-40 lg:w-1/4 lg:left-[25vw] lg:top-[70vh]">
        <LightBoxProject id="web/team-square"/>
      </div>

      <!-- Bottom Right 2 project -->
      <div ref="project5" class="absolute right-[10vw] top-[160vh] w-[40vw] z-90 lg:w-1/5 lg:left-[-5vw] lg:top-[80vh]">
        <LightBoxProject id="web/team-square"/>
      </div>
    </section>

    <section>
      <div class="px-4 lg:px-10 2xl:px-20 py-16 flex flex-col">
        <p 
        class="text-lg lg:text-2xl 2xl:text-3xl font-['Satoshi_Variable'] font-normal leading-[150%]"
           :class="{ 'text-grey-50': themeStore.isDeveloperMode, 'text-grey-900': !themeStore.isDeveloperMode }">
          Ma vision 
        </p>
        <p ref="visionText" class="text-4xl font-normal font-['Satoshi_Variable'] leading-[180%] sm:text-7xl lg:text-8xl 2xl:text-9xl sm:w-9/12">
          {{ themeStore.isDeveloperMode
            ? 'Structuré et méthodique, je développe des solutions web optimisées. Mes applications allient performance technique et expérience utilisateur soignée, fidèles à ma vision d\'un code propre et efficace.'
            : 'Concentré sur le développement, le webdesign et l\'audiovisuel. Je conçois des expériences créatives, claires et impactantes, alliant technique et esthétique.' }}
        </p>
      </div>
    </section>

    <section>
      <div ref="entreLogiqueSection" class="fade-in-section flex flex-col px-4 lg:px-10 2xl:px-20 py-16 gap-10 sm:flex-row sm:gap-4">
        <NuxtImg 
          src="/img/index/chevalier2F2.png" 
          class="w-full object-cover rounded-sm sm:w-1/2 lg:w-1/3 lg:max-h-[80vh]"
          loading="lazy"
          format="webp"
          quality="50"
        />
        <div class="flex flex-col gap-[25vh] sm:gap-0 sm:justify-between">
          <h1 
          class="text-3xl 2xl:text-4xl text-primary-500 font-['Owners_Wide'] font-bold mt-6 mb-4 sm:my-0 lg:w-2/3">
            {{ themeStore.isDeveloperMode ? "Entre logique et innovation, mon code prend vie" : "Entre code et création, pas de frontières" }}
          </h1>
          <p 
          class="w-4/6 text-base 2xl:text-lg font-normal font-['Satoshi_Variable'] leading-[150%] tracking-[0.64px] lg:w-1/4"
             :class="{ 'text-grey-400': themeStore.isDeveloperMode, 'text-grey-500': !themeStore.isDeveloperMode }">
            {{ themeStore.isDeveloperMode 
              ? "Développeur passionné par l'optimisation et l'efficacité, je crée des solutions web qui allient performance et expérience utilisateur. Mon approche méthodique et ma veille technologique constante me permettent de relever chaque défi technique avec expertise."
              : "Développeur, designer et créatif, je construis des expériences où la technique rencontre l'artistique. Que ce soit à travers le code, l'image ou le design, j'aime créer des projets qui ont du sens, en alliant clarté et esthétisme." }}
          </p>
        </div>
      </div>
    </section>

    <VideoSection class="lg:my-20 lg:px-10 2xl:px-20"/>

    <section ref="projectSection2" class="relative h-[250vh] w-full py-20 overflow-hidden flex justify-center ">
      <!-- Top left project -->
      <div ref="project6" class="absolute left-[25vw] top-[40vh] w-[70vw] sm:w-[60vw] lg:w-[30vw]">
        <LightBoxProject id="web/team-square" />
      </div>
      
      <!-- right project -->
      <div ref="project7" class="absolute right-[25vw] top-[80vh] w-[60vw] sm:w-[50vw] lg:w-[25vw]">
        <LightBoxProject id="web/team-square"/>
      </div>
      
      <!-- Bottom left project -->
      <div ref="project8" class="absolute left-[5vw] top-[110vh] w-[50vw] sm:w-[40vw] lg:w-[20vw]">
        <LightBoxProject id="multimedia/shay-cabaret" />
      </div>

      <!-- Bottom left project -->
      <div ref="project9" class="absolute left-[-5vw] top-[145vh] w-[65vw] sm:w-[55vw] lg:w-[27.5vw]">
        <LightBoxProject id="web/team-square"/>
      </div>

      <!-- Bottom Right 2 project -->
      <div ref="project10" class="absolute right-[10vw] top-[150vh] w-[40vw] sm:w-[50vw] sm:top-[160vh] lg:w-[35vw]">
        <LightBoxProject id="web/team-square"/>
      </div>

      <div ref="project11" class="absolute left-[35vw] top-[190vh] w-[80vw] sm:w-[40vw] lg:w-[20vw]">
        <LightBoxProject id="web/team-square"/>
      </div>
    </section>
  </div>
</template>

<script setup>
import ArrowDown from '~/components/icons/ArrowDown.vue'
import ArrowUp from '~/components/icons/ArrowUp.vue'
import { ref, onMounted, watch, nextTick } from 'vue'
import { useThemeStore } from '~/stores/themeStore'

// import SplineViewer from '~/components/SplineViewer.vue'
import LightBoxProject from '~/components/LightBoxProject.vue'
import VideoSection from '~/components/VideoSection.vue'
import SplineViewer from '~/components/SplineViewer.vue'

// Définir les méta-données SEO de la page
useSeoMeta({
  title: 'Portfolio de Lucas Chedhomme - Créateur digital',
  description: 'Portfolio de Lucas Chedhomme, développeur web et créateur digital basé à Lille, France',
  ogTitle: 'Portfolio de Lucas Chedhomme - Créateur digital',
  ogDescription: 'Portfolio de Lucas Chedhomme, développeur web et créateur digital basé à Lille, France',
  ogImage: '/img/index/portraitLucasChedhomme.jpg',
  twitterCard: 'summary_large_image',
})

const themeStore = useThemeStore()
const { $gsap } = useNuxtApp()
const visionText = ref(null)
const projectSection1 = ref(null)
const projectSection2 = ref(null)
const entreLogiqueSection = ref(null)

// Références pour chaque projet dans la première section
const project1 = ref(null)
const project2 = ref(null)
const project3 = ref(null)
const project4 = ref(null)
const project5 = ref(null)

// Références pour chaque projet dans la deuxième section
const project6 = ref(null)
const project7 = ref(null)
const project8 = ref(null)
const project9 = ref(null)
const project10 = ref(null)
const project11 = ref(null)

onMounted(() => {
  // Setup fade-in animation pour la section "Entre logique et innovation"
  if (entreLogiqueSection.value) {
    $gsap.set(entreLogiqueSection.value, {
      opacity: 0,
      y: 50,
      scale: 0.95
    });
    
    $gsap.to(entreLogiqueSection.value, {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 1.2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: entreLogiqueSection.value,
        start: "top 80%",
        toggleActions: "play none none none",
        markers: false
      }
    });
  }

  // Animation du texte de vision
  const updateVisionTextAnimation = () => {
    const text = visionText.value
    if (!text) return
    
    // Vider le contenu actuel
    text.innerHTML = ''
    
    // Récupérer le texte en fonction du mode
    const content = themeStore.isDeveloperMode
      ? 'Structuré et méthodique, je développe des solutions web optimisées. Mes applications allient performance technique et expérience utilisateur soignée, fidèles à ma vision d\'un code propre et efficace.'
      : 'Concentré sur le développement, le webdesign et l\'audiovisuel. Je conçois des expériences créatives, claires et impactantes, alliant technique et esthétique.'
    
    // Créer les spans
    const chars = content.split('')
    chars.forEach((char) => {
      const span = document.createElement('span')
      span.textContent = char
      span.style.color = themeStore.isDeveloperMode ? '#474e4b' : '#919E9A'
      text.appendChild(span)
    })
    
    // Tuer les animations précédentes si elles existent
    if (window._visionTextAnimation) {
      window._visionTextAnimation.kill()
    }
    
    // Animer les spans
    window._visionTextAnimation = $gsap.to(text.children, {
      color: themeStore.isDeveloperMode ? '#FFFFFF' : '#010F0A',
      duration: 0.5,
      stagger: 0.02,
      scrollTrigger: {
        trigger: text,
        start: 'top 90%',
        end: 'bottom 40%',
        scrub: 1,
        toggleActions: 'play none none reverse'
      }
    })
  }
  
  // Initialiser l'animation
  updateVisionTextAnimation()
  
  // Mettre à jour l'animation quand le mode change
  watch(() => themeStore.isDeveloperMode, (_newVal) => {
    // Utiliser nextTick pour attendre que le DOM soit mis à jour
    nextTick(() => {
      updateVisionTextAnimation()
    })
  })

  // Animation pour les projets de la première section
  if (projectSection1.value) {
    // Animation pour le projet 1
    $gsap.to(project1.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project1.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })

    // Animation pour le projet 2
    $gsap.to(project2.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project2.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })

    // Animation pour le projet 3
    $gsap.to(project3.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project3.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })

    // Animation pour le projet 4
    $gsap.to(project4.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project4.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })

    // Animation pour le projet 5
    $gsap.to(project5.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project5.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })
  }

  // Animation pour les projets de la deuxième section
  if (projectSection2.value) {
    // Animation pour le projet 6
    $gsap.to(project6.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project6.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })

    // Animation pour le projet 7
    $gsap.to(project7.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project7.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })

    // Animation pour le projet 8
    $gsap.to(project8.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project8.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })

    // Animation pour le projet 9
    $gsap.to(project9.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project9.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })

    // Animation pour le projet 10
    $gsap.to(project10.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project10.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })

    // Animation pour le projet 11
    $gsap.to(project11.value, {
      y: -300,
      ease: "none",
      scrollTrigger: {
        trigger: project11.value,
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      }
    })
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Animation des sections */
.fade-in-section {
  will-change: opacity, transform;
  transform-origin: center bottom;
}
</style>
