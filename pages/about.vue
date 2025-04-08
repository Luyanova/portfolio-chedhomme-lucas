<template>
  <div class="bg-grey-50">



  <section class="bg-grey-900">
    <div class="relative flex flex-col gap-4 px-4 py-10 sm:h-screen">
      <div class="flex flex-col gap-6">
        <div class="w-full h-auto relative sm:w-1/3 sm:absolute sm:top-1/3 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/3 lg:w-1/5 lg:top-1/4">
          <NuxtImg 
            src="/img/about/portraitLucasChedhommeAbout.jpg" 
            class="w-full h-full object-cover rounded-xs"
            loading="eager"
            priority
            format="webp"
            quality="50"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-grey-900/70 via-transparent to-transparent pointer-events-none hidden sm:block"/>
        </div>
        <p ref="heroText" class="text-grey-50 font-['Satoshi_Variable'] text-xl font-normal tracking-[0.4px] sm:w-11/12 sm:text-center sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 lg:w-1/2 2xl:text-2xl translate-y-[40px] opacity-0">
          Freelance en design et développement web basé à Lille, alliant créativité et technologie. Je conçois des sites web et des expériences numériques en mêlant design, code et animation.
        </p>
      </div>
      <div ref="heroButton" class="flex sm:absolute sm:top-8/12 sm:left-1/2 sm:-translate-x-1/2 translate-y-[40px] opacity-0">
        <ButtonPrimary :icon="ArrowDown" to="/files/cv-chedhomme-lucas.pdf" is-external download="cv-chedhomme-lucas.pdf">
          Télécharger mon CV
        </ButtonPrimary>
      </div>
    </div>
  </section>


  <section class="bg-grey-50">
    <div ref="monUniversSection" class="fade-in-section flex flex-col gap-8 px-4 lg:px-10 2xl:px-20 py-10 lg:py-30">
      <h2 class="text-primary-500 font-['Owners_Wide'] text-4xl font-bold italic leading-[120%] sm:text-5xl 2xl:text-6xl">
        Mon univers
      </h2>
      <div class="flex flex-col gap-4 sm:gap-10 lg:flex-row">
        <div class="w-full h-auto sm:w-1/2 lg:w-2/5 lg:h-130">
          <NuxtImg 
            src="/img/about/knightDither1.png" 
            class="w-full h-full object-cover rounded-xs"
            loading="lazy"
            format="webp"
            quality="100"
          />
        </div>
        
        <div class="flex flex-col gap-8 sm:gap-10 w-full lg:justify-end">
                  <div class="lg:h-full lg:w-4/6">
                  <p class="text-grey-900 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.64px] lg:sticky lg:top-25 2xl:text-lg">
                    Chaque projet est une fusion entre créativité et précision technique. Mon univers s'articule autour du design, du code et de l'audiovisuel, où chaque interaction vise à captiver et surprendre. J'explore les possibilités du numérique pour créer des expériences immersives.
                  </p>
          </div>
               
          <div class="flex flex-col gap-4 sm:gap-8 lg:flex-row">
            <div>
                  <p class="text-grey-900 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.64px] lg:w-4/6 2xl:text-lg">
                    Mon univers est un mélange d'imaginaire et de technique, où chaque projet prend vie à travers le design, le code et l'audiovisuel.
                  </p>
                </div>
                  <p class="text-grey-900 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.64px] lg:w-4/6 2xl:text-lg">
                    Inspiré par la créativité numérique et l'esthétique du monde musical, j'expérimente pour donner du relief aux idées et façonner des expériences immersives.
                  </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-grey-50">
    <div ref="softSkillsSection" class="fade-in-section flex flex-col gap-10 px-4 py-10 lg:px-10 2xl:px-20 lg:flex-row lg:justify-between lg:gap-30 lg:py-30 lg:pb-60">
   
      <div class="flex flex-col gap-8 lg:w-full">
        <h2 class="text-primary-500 font-['Owners_Wide'] text-4xl font-bold italic leading-[120%] 2xl:text-5xl">
        Soft Skills
      </h2>
        <div class="flex flex-col">
          <p class="text-grey-900 font-['Satoshi_Variable'] text-xl font-normal leading-[150%] tracking-[0.4px] 2xl:text-2xl">
            Autodidacte
          </p>
          <div class="w-full h-px bg-grey-900" />
        </div>
        <div class="flex flex-col">
          <p class="text-grey-900 font-['Satoshi_Variable'] text-xl font-normal leading-[150%] tracking-[0.4px] 2xl:text-2xl">
            Rigueur
          </p>
          <div class="w-full h-px bg-grey-900" />
        </div>
        <div class="flex flex-col">
          <p class="text-grey-900 font-['Satoshi_Variable'] text-xl font-normal leading-[150%] tracking-[0.4px] 2xl:text-2xl">
            Leadership
          </p>
          <div class="w-full h-px bg-grey-900" />
        </div>
        <div class="flex flex-col">
          <p class="text-grey-900 font-['Satoshi_Variable'] text-xl font-normal leading-[150%] tracking-[0.4px] 2xl:text-2xl">
            Créativité
          </p>
          <div class="w-full h-px bg-grey-900" />
        </div>
      </div>
      <NuxtImg 
        src="/img/about/aboutSoftskills.png" 
        class="w-full h-auto object-cover rounded-xs lg:min-w-1/2 lg:min-h-130"
        loading="lazy"
        format="webp"
        quality="80"
      />
    </div>
  </section>



  <section ref="outilsSection" class="relative h-[70vh] overflow-hidden bg-grey-900">
    <h2 ref="outilsWebTitle" class="text-grey-100 font-['Owners_Wide'] text-4xl font-bold italic leading-[120%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap 2xl:text-5xl">
      Outils web
    </h2>
    <div ref="webLogosContainer" class="absolute top-1/2 transform -translate-y-1/2 flex items-center gap-16">
      <VueLogo class="logo-item" />
      <ReactLogo class="logo-item h-12" />
      <NuxtLogo class="logo-item h-12" />
      <LaravelLogo class="logo-item h-12" />
      <TailwindLogo class="logo-item h-12" />
      <ThreeJsLogo class="logo-item h-12" />
      <WebflowLogo class="logo-item" />
      <WordpressLogo class="logo-item" />
    </div>
  </section>

  <section ref="outilsMultimediaSection" class="relative h-[70vh] overflow-hidden bg-grey-50">
    <h2 ref="multimediaTitle" class="text-grey-900 font-['Owners_Wide'] text-4xl font-bold italic text-center leading-[120%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 2xl:text-5xl">
      Outils multimédia
    </h2>
    <div ref="multimediaLogosContainer" class="absolute top-1/2 transform -translate-y-1/2 flex items-center gap-16">
      <AfterEffectsLogo class="logo-item" />
      <PremierProLogo class="logo-item" />
      <FigmaLogo class="logo-item" />
      <LightroomLogo class="logo-item" />
      <NotionLogo class="logo-item" />
      <BlenderLogo class="logo-item" />
      <PhotoshopLogo class="logo-item" />
      <CameraLogo class="logo-item" />
    </div>
  </section>

  <section class="bg-grey-50">
    <div ref="educationSection" class="flex flex-col px-4 py-10 gap-10 lg:flex-row-reverse lg:px-10 2xl:px-20 lg:py-30 lg:gap-30">
      <div class="flex flex-col gap-10 ">
        <h2 class="text-primary-500 font-['Owners_Wide'] text-4xl lg:text-5xl font-bold italic leading-[120%] 2xl:text-6xl">
          Éducation
        </h2>

        <div class="flex flex-col gap-5 ">

          <div class="flex flex-col">
            <div class="flex justify-between">
              <p class="text-grey-900 font-['Satoshi_Variable'] text-xl font-medium leading-[150%] tracking-wider 2xl:text-2xl">
                But MMI
              </p>
              <p class="text-grey-900 font-['Satoshi_Variable'] text-xl font-medium leading-[150%] tracking-wider 2xl:text-2xl">
                2022 - 2025
              </p>
            </div>
            <div class="w-full h-px bg-grey-900" />
          </div>

          <p class="text-grey-500 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-wider 2xl:text-lg">
            J'ai suivi le parcours développement et design web du BUT Métiers du Multimédia et de l'Internet, formation alliant créativité et technicité. Ce cursus m'a permis de découvrir la conception d'interfaces, le développement web. Et de faire ma troisième année en alternance.  
          </p>
        </div>
        <div class="flex flex-col gap-5">
          <div class="flex flex-col">
            <div class="flex justify-between">
              <p class="text-grey-900 font-['Satoshi_Variable'] text-xl font-medium leading-[150%] tracking-wider 2xl:text-2xl">
                ISP Gaya (Erasmus)
              </p>
              <p class="text-grey-900 font-['Satoshi_Variable'] text-xl font-medium leading-[150%] tracking-wider 2xl:text-2xl">
                2024
              </p>
            </div>
            <div class="w-full h-px bg-grey-900" />
          </div>

          <p class="text-grey-500 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-wider 2xl:text-lg">
            Dans le cadre de mon Erasmus, j'ai étudié à Porto, enrichissant ma vision du design et du web. Cette expérience m'a offert une immersion dans un environnement créatif et multiculturel. Tout en pratiquant en freelance la photographie et le développement web.
          </p>
        </div>
      </div>
      <NuxtImg 
        src="/img/about/portoAbout.jpg" 
        class="w-full h-auto object-cover rounded-xs lg:min-w-1/2 lg:max-h-140 2xl:max-h-240"
        loading="lazy"
        format="webp"
        quality="80"
      />
    </div>
  </section>


  <section class="bg-grey-50 gap-40">
    <div class="flex flex-col px-4 pt-10 mb-40 gap-10 lg:px-10 2xl:px-20 lg:mt-20 lg:mb-40 lg:h-[80vh] lg:justify-between">
      <h2 class="text-primary-500 font-['Owners_Wide'] text-4xl lg:text-5xl font-bold italic leading-[120%] 2xl:text-6xl">
        Méthodologie
      </h2>
      <div class="flex flex-col gap-30 sm:w-3/5 lg:flex-row lg:justify-between lg:w-full">
        <div class="flex flex-col gap-2">
          <p class="text-grey-900 font-['Satoshi_Variable'] text-lg font-medium leading-[150%] tracking-[0.54px] 2xl:text-xl">
            1.
          </p>
          <p class="text-grey-900 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.54px] 2xl:text-lg">
            Chaque projet débute par une phase d'échange et de recherche. Comprendre les besoins, analyser l'existant et s'inspirer des tendances permet de poser des bases solides avant toute création.
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-grey-900 font-['Satoshi_Variable'] text-lg font-medium leading-[150%] tracking-[0.54px] 2xl:text-xl">
            2.
          </p>
          <p class="text-grey-900 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.54px] 2xl:text-lg">
            Du wireframe à l'identité visuelle, en passant par la photograhphie, chaque élément est pensé et testé pour offrir une expérience fluide et impactante. 
          </p>
        </div>
        <div class="flex flex-col gap-2">
          <p class="text-grey-900 font-['Satoshi_Variable'] text-lg font-medium leading-[150%] tracking-[0.54px] 2xl:text-xl">
            3.
          </p>
          <p class="text-grey-900 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.54px] 2xl:text-lg">
            L'intégration, l'optimisation et l'attention aux détails donnent vie au projet. Les retours sont pris en compte pour ajuster, affiner et livrer un produit final performant et immersif.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-secondary-500">
    <div class="flex flex-col px-4 py-10 h-[70vh] justify-center items-center lg:gap-10">
      <h2 class="text-primary-500 font-['Owners_Wide'] text-4xl font-bold italic leading-[120%] text-center lg:w-1/2 2xl:text-5xl">
        "Le vert c'est la couleur de l'espoir"
      </h2>
      <div class="w-auto h-48 rounded-sm overflow-hidden">
        <SplineViewer url="https://prod.spline.design/bJfQVhX-zoeNIhss/scene.splinecode" />
       </div>
    </div>
  </section>

  <div class="py-40">
  <VideoSection />
  </div>



</div>
</template>

<script setup>
import ArrowDown from '~/components/icons/ArrowDown.vue'
import VueLogo from '~/components/icons/logos/VueLogo.vue'
import ReactLogo from '~/components/icons/logos/ReactLogo.vue'
import NuxtLogo from '~/components/icons/logos/NuxtLogo.vue'
import LaravelLogo from '~/components/icons/logos/LaravelLogo.vue'
import TailwindLogo from '~/components/icons/logos/TailwindLogo.vue'
import ThreeJsLogo from '~/components/icons/logos/ThreeJsLogo.vue'
import WebflowLogo from '~/components/icons/logos/WebflowLogo.vue'
import WordpressLogo from '~/components/icons/logos/WordpressLogo.vue'
import AfterEffectsLogo from '~/components/icons/logos/AfterEffectsLogo.vue'
import PremierProLogo from '~/components/icons/logos/PremierProLogo.vue'
import FigmaLogo from '~/components/icons/logos/FigmaLogo.vue'
import LightroomLogo from '~/components/icons/logos/LightroomLogo.vue'
import NotionLogo from '~/components/icons/logos/NotionLogo.vue'
import BlenderLogo from '~/components/icons/logos/BlenderLogo.vue'
import PhotoshopLogo from '~/components/icons/logos/PhotoshopLogo.vue'
import CameraLogo from '~/components/icons/logos/CameraLogo.vue'
import VideoSection from '~/components/VideoSection.vue'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Définir les méta-données SEO de la page
useSeoMeta({
  title: 'À propos - Portfolio de Lucas Chedhomme',
  description: 'Freelance en design et développement web basé à Lille, alliant créativité et technologie. Découvrez mon parcours, mes compétences et ma méthodologie.',
  ogTitle: 'À propos - Portfolio de Lucas Chedhomme',
  ogDescription: 'Freelance en design et développement web basé à Lille, alliant créativité et technologie. Découvrez mon parcours, mes compétences et ma méthodologie.',
  ogImage: '/img/about/portraitLucasChedhommeAbout.jpg',
  ogType: 'profile',
  twitterCard: 'summary_large_image',
})

// For access to GSAP plugin instance
const { $gsap } = useNuxtApp()

// Références pour la section Outils Web
const outilsSection = ref(null)
const outilsWebTitle = ref(null)
const webLogosContainer = ref(null)
const webLogoRefs = ref([])

// Références pour la section Outils Multimédia
const outilsMultimediaSection = ref(null)
const multimediaTitle = ref(null)
const multimediaLogosContainer = ref(null)
const multimediaLogoRefs = ref([])

// Références pour la section hero
const heroText = ref(null)
const heroButton = ref(null)

// Références pour la section Mon univers
const monUniversSection = ref(null)

// Références pour les sections avec animations
const softSkillsSection = ref(null)
const educationSection = ref(null)
const fadeInSections = ref([])

// S'assurer que GSAP et ScrollTrigger sont bien chargés
let animationsInitialized = false

// Fonction pour initialiser les animations
const initAnimations = () => {
  if (animationsInitialized) return
  
  console.log('Initializing animations... is GSAP ready?', !!$gsap)
  
  // Use the plugin version if available, otherwise use the imported version
  const activeGsap = $gsap || gsap
  
  try {
    // Ensure ScrollTrigger is registered
    if (!activeGsap.ScrollTrigger) {
      console.log('ScrollTrigger not found on GSAP instance, using imported version')
      if (import.meta.client && typeof window !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger)
      }
    }
    
    // Animation pour la section hero
    if (heroText.value && heroButton.value) {
      const heroTimeline = activeGsap.timeline({
        defaults: { ease: "power2.out" }
      });
      
      heroTimeline
        .to(heroText.value, { 
          y: 0, 
          opacity: 1, 
          duration: 0.8,
          delay: 0.2
        })
        .to(heroButton.value, { 
          y: 0, 
          opacity: 1, 
          duration: 0.6 
        }, "-=0.4");
    } else {
      console.warn('Hero elements not found', {
        text: !!heroText.value,
        button: !!heroButton.value
      });
    }
    
    // Animation pour la section Outils Web
    if (outilsSection.value && webLogosContainer.value) {
      // Récupérer les logos individuels
      webLogoRefs.value = Array.from(webLogosContainer.value.querySelectorAll('.logo-item'))
      
      if (!webLogoRefs.value.length) {
        console.warn('No web logo elements found')
        return
      }
      
      // S'assurer que les dimensions sont calculées correctement
      const containerWidth = webLogosContainer.value.offsetWidth || 800 // Fallback si pas encore calculé
      const viewportWidth = window.innerWidth || 1200 // Fallback si pas encore calculé
      
      // Positionner les logos initialement hors de l'écran à gauche
      activeGsap.set(webLogosContainer.value, {
        x: -viewportWidth - containerWidth / 2
      })
      
      // Appliquer des décalages verticaux aléatoires à chaque logo
      webLogoRefs.value.forEach((logo) => {
        const yOffset = activeGsap.utils.random(-80, 80) // Variation verticale entre -80px et +80px
        const initialRotation = activeGsap.utils.random(-30, 30) // Rotation initiale entre -30 et 30 degrés
        
        // Appliquer les styles initiaux à chaque logo
        activeGsap.set(logo, { 
          y: yOffset,
          scale: activeGsap.utils.random(0.8, 1.2), // Variation de taille
          rotation: initialRotation // Rotation initiale différente pour chaque logo
        })
        
        // Créer une animation de rotation individuelle pour chaque logo
        activeGsap.to(logo, {
          rotation: initialRotation + activeGsap.utils.random(20, 60), // Rotation additionnelle entre 20 et 60 degrés
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: outilsSection.value,
            start: "top bottom-=10%", // Commence quand le haut de la section est à 90% du bas de la fenêtre
            end: "bottom top-=200",
            scrub: 2, // Animation plus lente
          }
        })
      })
      
      // Créer l'animation de défilement horizontal avec une courbe d'accélération plus douce
      activeGsap.to(webLogosContainer.value, {
        x: viewportWidth + containerWidth / 2,
        ease: "power1.inOut", // Courbe d'accélération plus douce
        scrollTrigger: {
          trigger: outilsSection.value,
          start: "top bottom", 
          end: "bottom+=20% top", 
          scrub: 3, 
          markers: false, 
        }
      })
    } else {
      console.warn('Web section or container not found in DOM')
    }

    // Animation pour la section Outils Multimédia (direction et rotation inversées)
    if (outilsMultimediaSection.value && multimediaLogosContainer.value) {
      // Récupérer les logos individuels
      multimediaLogoRefs.value = Array.from(multimediaLogosContainer.value.querySelectorAll('.logo-item'))
      
      if (!multimediaLogoRefs.value.length) {
        console.warn('No multimedia logo elements found')
        return
      }
      
      // S'assurer que les dimensions sont calculées correctement
      const containerWidth = multimediaLogosContainer.value.offsetWidth || 800 // Fallback si pas encore calculé
      const viewportWidth = window.innerWidth || 1200 // Fallback si pas encore calculé
      
      // Positionner les logos initialement hors de l'écran à droite
      activeGsap.set(multimediaLogosContainer.value, {
        x: viewportWidth + containerWidth / 2
      })
      
      // Appliquer des décalages verticaux aléatoires à chaque logo multimédia
      multimediaLogoRefs.value.forEach((logo) => {
        const yOffset = activeGsap.utils.random(-80, 80) // Variation verticale entre -80px et +80px
        const initialRotation = activeGsap.utils.random(-30, 30) // Rotation initiale entre -30 et 30 degrés
        
        // Appliquer les styles initiaux à chaque logo
        activeGsap.set(logo, { 
          y: yOffset,
          scale: activeGsap.utils.random(0.8, 1.2), // Variation de taille
          rotation: initialRotation // Rotation initiale différente pour chaque logo
        })
        
        // Créer une animation de rotation individuelle pour chaque logo (direction inversée)
        activeGsap.to(logo, {
          rotation: initialRotation - activeGsap.utils.random(20, 60), // Rotation additionnelle entre 20 et 60 degrés (vers la gauche)
          ease: "power1.inOut",
          scrollTrigger: {
            trigger: outilsMultimediaSection.value,
            start: "top-=50% bottom", // Commence bien avant que la section n'entre dans le viewport
            end: "bottom top-=200",
            scrub: 2, // Animation plus lente
          }
        })
      })
      
      // Créer l'animation de défilement horizontal de droite à gauche
      activeGsap.to(multimediaLogosContainer.value, {
        x: -viewportWidth - containerWidth / 2, // Défilement vers la gauche
        ease: "power1.inOut", // Courbe d'accélération plus douce
        scrollTrigger: {
          trigger: outilsMultimediaSection.value,
          start: "top-=20% bottom", // Commence BIEN avant que la section n'entre dans le viewport (-100% de sa hauteur)
          end: "center top", // Se termine quand le centre de la section atteint le haut de l'écran
          scrub: 3, // Animation progressive
          markers: false, // Mettre à true pour déboguer
        }
      })
    } else {
      console.warn('Multimedia section or container not found in DOM')
    }
    
    // Animation pour les sections avec fade-in
    const setupFadeInAnimations = () => {
      // Récupérer toutes les sections avec la classe fade-in-section
      fadeInSections.value = [monUniversSection.value, softSkillsSection.value, educationSection.value].filter(Boolean)
      
      // Appliquer l'animation à chaque section
      fadeInSections.value.forEach(section => {
        // Définir l'état initial
        activeGsap.set(section, {
          opacity: 0,
          y: 50,
          scale: 0.95
        })
        
        // Créer l'animation
        activeGsap.to(section, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            toggleActions: "play none none none",
            markers: false
          }
        })
      })
    }
    
    // Ajouter cette fonction à l'initialisation des animations
    setupFadeInAnimations()
    
    // Refresh ScrollTrigger to ensure everything is properly positioned
    const activeScrollTrigger = activeGsap.ScrollTrigger || ScrollTrigger
    activeScrollTrigger.refresh(true)
    
    animationsInitialized = true
    console.log('GSAP animations initialized successfully')
  } catch (error) {
    console.error('Error initializing animations:', error)
  }
}

onMounted(() => {
  if (import.meta.client && typeof window !== 'undefined') {
    console.log('onMounted called');
    
    // Initialiser les animations immédiatement, sans setTimeout
    initAnimations();
    
    // Double refresh après un court délai pour s'assurer de la bonne initialisation
    setTimeout(() => {
      try {
        console.log('Running additional refresh');
        const activeScrollTrigger = ($gsap && $gsap.ScrollTrigger) || ScrollTrigger;
        activeScrollTrigger.refresh(true);
      } catch (e) {
        console.warn('Failed to run additional ScrollTrigger refresh:', e);
      }
    }, 500);
  }
})

// Réinitialiser les animations lors du changement de route ou au redimensionnement
onBeforeUnmount(() => {
  try {
    if (import.meta.client && typeof window !== 'undefined') {
      const activeGsap = $gsap || gsap
      const activeScrollTrigger = activeGsap.ScrollTrigger || ScrollTrigger
      
      // Kill all ScrollTrigger instances
      activeScrollTrigger.getAll().forEach(trigger => trigger.kill())
      
      // Nettoyer les animations GSAP
      if (webLogoRefs.value) {
        webLogoRefs.value.forEach(logo => activeGsap.killTweensOf(logo))
      }
      if (multimediaLogoRefs.value) {
        multimediaLogoRefs.value.forEach(logo => activeGsap.killTweensOf(logo))
      }
      if (webLogosContainer.value) activeGsap.killTweensOf(webLogosContainer.value)
      if (multimediaLogosContainer.value) activeGsap.killTweensOf(multimediaLogosContainer.value)
      
      console.log('GSAP animations cleaned up')
    }
  } catch (error) {
    console.warn('Error cleaning up animations:', error)
  }
})

// Réinitialiser les animations en cas de redimensionnement
const debouncedResize = ref(null)
onMounted(() => {
  if (import.meta.client && typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      // Débounce pour éviter trop d'exécutions
      clearTimeout(debouncedResize.value)
      debouncedResize.value = setTimeout(() => {
        try {
          // Nettoyer puis réinitialiser
          animationsInitialized = false
          
          // Kill existing ScrollTrigger instances
          const activeScrollTrigger = ($gsap && $gsap.ScrollTrigger) || ScrollTrigger
          activeScrollTrigger.getAll().forEach(trigger => trigger.kill())
          
          // Reinitialize
          initAnimations()
        } catch (error) {
          console.warn('Error reinitializing animations after resize:', error)
        }
      }, 250)
    })
  }
})

</script>

<style scoped>
.logo-item {
  width: 80px;
  height: 80px;
  transition: transform 0.3s ease-out;
}

.logo-item:hover {
  transform: scale(1.1);
}

/* Animation des sections */
.fade-in-section {
  will-change: opacity, transform;
  transform-origin: center bottom; /* Pour que le scale soit plus naturel */
}

/* Section des outils avec un fond qui favorise la visibilité des logos */
section[ref="outilsSection"] {
  background: linear-gradient(to bottom, rgba(10, 10, 10, 0.9), rgba(5, 5, 5, 0.95));
}
</style>


