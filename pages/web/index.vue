<script setup lang="ts">
import { ref, onMounted, nextTick, computed } from 'vue'
import WebProjectCard from '~/components/WebProjectCard.vue'

useSeoMeta({
  title: 'Projets web - Portfolio de Lucas Chedhomme',
  description: 'Découvrez mes projets web - photographie, graphisme et vidéo',
  ogTitle: 'Projets web - Portfolio de Lucas Chedhomme',
  ogDescription: 'Découvrez mes projets web - photographie, graphisme et vidéo',
  ogImage: '/img/index/portraitLucasChedhomme.jpg',
  twitterCard: 'summary_large_image',
})

const { data: posts } = await useAsyncData('web', () => queryCollection('web').all())

const projectsSection = ref(null)
const activeCardIndex = ref(0) // Indice de la carte active
const isLoading = ref(true)
const loadedImages = ref(0)

// Image de fond active, calculée en fonction de la carte active
const activeBackgroundImage = computed(() => {
  if (!posts.value || posts.value.length === 0) return '/img/projects/web/temp.png'
  return posts.value[activeCardIndex.value]?.cover1 || '/img/projects/web/temp.png'
})

// Liste de toutes les images à précharger
const imagesToPreload = computed(() => {
  if (!posts.value) return []
  return posts.value.map(post => post.cover1).filter(Boolean)
})

// Fonction pour précharger une image
const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => {
      loadedImages.value++
      console.log(`Image préchargée (${loadedImages.value}/${imagesToPreload.value.length}): ${src}`)
      resolve()
    }
    img.onerror = (err) => {
      console.error(`Erreur de chargement pour ${src}:`, err)
      loadedImages.value++
      resolve() // Résoudre même en cas d'erreur pour ne pas bloquer
    }
    img.src = src
  })
}

// Précharger toutes les images
const preloadAllImages = async () => {
  loadedImages.value = 0
  isLoading.value = true
  
  if (!posts.value || posts.value.length === 0 || imagesToPreload.value.length === 0) {
    isLoading.value = false
    return
  }
  
  console.log(`Démarrage du préchargement de ${imagesToPreload.value.length} images...`)
  console.log('Images à précharger:', imagesToPreload.value)
  
  try {
    // Précharger toutes les images, mais une par une pour éviter de surcharger
    for (const src of imagesToPreload.value) {
      await preloadImage(src)
    }
    
    console.log('Toutes les images ont été préchargées avec succès')
  } catch (error) {
    console.error('Erreur lors du préchargement des images:', error)
  } finally {
    // Définir comme chargé même s'il y a eu des erreurs
    isLoading.value = false
  }
}

// Configurer l'animation GSAP après le chargement des images
const setupAnimation = () => {
  if (!projectsSection.value || !posts.value) return

  const { $gsap } = useNuxtApp()
  
  nextTick(() => {
    console.log("Posts length:", posts.value?.length)
    const cardElements = document.querySelectorAll('.project-card-web')
    console.log("Cards found:", cardElements.length)
    
    if (cardElements.length === 0) return
    
    // Positionner correctement toutes les cartes en dehors de la vue
    // @ts-expect-error - GSAP est défini dans les plugins
    $gsap.set(cardElements, {
      yPercent: 180,     // Position initiale plus basse (hors écran)
      scale: 1.2,        // Commencer à 120% de la taille (plus grand qu'avant)
      rotation: 5,       // Légère rotation initiale
      zIndex: (i: number) => i + 1,  // Z-index croissant: les dernières cartes seront au-dessus
      visibility: (i: number) => i === 0 ? 'visible' : 'hidden', // Seule la première carte est visible
      left: '50%',       // Centrer horizontalement
      xPercent: -50,     // Ajuster pour un centrage parfait
      margin: 0,         // Supprimer les marges qui pourraient affecter le centrage
      width: (_i: number, _el: Element) => {
        // Conserver la largeur définie par le CSS
        return window.innerWidth >= 1024 ? '966px' : window.innerWidth >= 640 ? '800px' : '100%'
      }
    })
    
    // Créer une timeline pour l'animation des cartes
    // @ts-expect-error - GSAP est défini dans les plugins
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: projectsSection.value,
        start: 'top 5%', // Déclencher plus tôt (quand le haut de la section atteint 5% du viewport)
        end: `+=${cardElements.length * 1200 + 500}`, // Ajouter une distance supplémentaire après la dernière animation
        scrub: 1.2,      // Valeur plus élevée pour un effet plus smooth
        pin: true,
        pinSpacing: true,
        anticipatePin: 1, // Améliorer la réactivité du pin
        markers: false,
        // @ts-expect-error - Les types GSAP ne sont pas disponibles
        onUpdate: (self) => {
          // Calculer l'index de la carte active en fonction de la progression du scroll
          const newIndex = Math.min(
            Math.floor(self.progress * cardElements.length), 
            cardElements.length - 1
          )
          // Mettre à jour l'index de la carte active seulement s'il a changé
          if (newIndex !== activeCardIndex.value) {
            activeCardIndex.value = newIndex
          }
        }
      }
    })
    
    // Animer chaque carte individuellement
    cardElements.forEach((card, index) => {
      // Démarrage de l'animation pour cette carte
      if (index > 0) {
        // Pour les cartes après la première, d'abord les rendre visibles
        tl.set(card, { visibility: 'visible' }, index * 1.2) // Décalage beaucoup plus important
      }
      
      // Calculer un décalage exponentiel pour que les cartes s'empilent avec un léger décalage visible
      const yOffset = Math.pow(index, 1.5) * 3; // Décalage positif qui augmente exponentiellement avec l'index
      
      // Animer la carte pour qu'elle vienne à sa position finale avec un léger décalage vertical
      tl.to(card, {
        yPercent: -10 + yOffset,    // Position plus haute avec décalage exponentiel
        scale: 0.90,    // Réduire à 90% de la taille
        rotation: 0,    // Revenir à une rotation neutre
        duration: 1,
        ease: "power2.inOut", // Courbe d'accélération/décélération plus prononcée
        // Forcer la position absolute pour garantir la superposition
        position: 'absolute',
        top: 0,
        left: '50%',     // Maintenir le centrage horizontal
        xPercent: -50,   // Ajustement pour un centrage parfait
        right: 'auto',
        bottom: 0,
        margin: 0,       // Supprimer les marges qui pourraient affecter le centrage
        width: () => {
          // Maintenir la même largeur pendant l'animation
          return window.innerWidth >= 1024 ? '966px' : window.innerWidth >= 640 ? '800px' : '100%'
        }
      }, index * 1.2) // Synchroniser avec le délai d'apparition
      
      // Si ce n'est pas la dernière carte, ajouter une pause plus longue
      if (index < cardElements.length - 1) {
        tl.to({}, { duration: 1.0 }, '>') // Pause beaucoup plus longue avant la carte suivante
      }
    })
    
    // Ajouter un délai supplémentaire à la fin pour maintenir le pin après la dernière animation
    tl.to({}, { duration: 2.0 })

    // Ajouter des gestionnaires d'événements pour le survol de la souris
    cardElements.forEach(card => {
      card.addEventListener('mouseenter', () => {
        // @ts-expect-error - GSAP est défini dans les plugins
        $gsap.to(card, {
          y: '-=5',
          boxShadow: '0 30px 60px rgba(10, 242, 157, 0.25), 0 15px 30px rgba(10, 242, 157, 0.15)',
          duration: 0.3,
          overwrite: true
        });
      });
      
      card.addEventListener('mouseleave', () => {
        // @ts-expect-error - GSAP est défini dans les plugins
        $gsap.to(card, {
          y: '+=5',
          boxShadow: '0 15px 50px rgba(0, 0, 0, 0.35), 0 10px 25px rgba(0, 0, 0, 0.2)',
          duration: 0.3,
          overwrite: true
        });
      });
    });
  })
}

onMounted(() => {
  // Précharger les images, puis configurer l'animation
  preloadAllImages().then(() => {
    setupAnimation()
  })
})
</script>

<template>
<main>
  <section>
    <div class="flex flex-col gap-8 px-4 lg:px-10 2xl:px-20 pt-10 lg:flex-row-reverse lg:gap-30 pb-100 ">
      <div class="w-full h-[50vh] sm:h-[65vh] overflow-hidden rounded-sm">
        <NuxtImg
          src="/img/projects/web/webMockup.png"
          alt="Projet web mockup"
          format="webp"
          quality="80"
          loading="eager"
          class="w-full h-full object-cover rounded-xs"
        />
      </div>
      <div class="flex flex-col gap-2">
        <h2 class="text-primary-500 font-['Owners_Wide'] text-4xl 2xl:text-5xl font-bold italic leading-[120%]">
          Projets web
        </h2>
        <p class="text-grey-400 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
          Découvrez mes projets web, où design et développement se rencontrent pour créer des expériences uniques. Chaque site, application ou interface est pensé pour allier esthétique, performance et fonctionnalité.
        </p>
      </div>

    </div>
  </section>

  <section ref="projectsSection" class="relative h-[90vh] lg:h-[110vh]">
    <!-- Indicateur de chargement -->
    <div v-if="isLoading" class="absolute inset-0 z-50 flex items-center justify-center bg-grey-900 bg-opacity-80">
      <div class="text-center">
        <div class="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-500 mb-4"/>
        <p class="text-grey-50 font-['Satoshi_Variable'] text-lg 2xl:text-xl">
          Chargement des images ({{ loadedImages }}/{{ imagesToPreload.length }})
        </p>
      </div>
    </div>
    
    <div class="relative w-full h-full overflow-hidden">
      <div class="absolute inset-0 blur-md transition-opacity duration-500">
        <transition name="fade" mode="out-in">
          <NuxtImg
            :key="activeCardIndex"
            :src="activeBackgroundImage"
            alt="Projet web background"
            format="webp"
            quality="1"
            loading="eager"
            fetchpriority="high"
            class="w-full h-full object-cover"
          />
        </transition>
      </div>
      <div class="relative z-10 h-full w-full flex items-center justify-center">
        <div ref="projectsContainer" class="relative w-full max-w-[95%] sm:max-w-[800px] lg:max-w-[966px] h-[530px] sm:h-[700px] lg:h-[360px] mx-auto px-0 pt-2 pb-10">
          <WebProjectCard 
            v-for="(article, index) in posts" 
            :key="article.path" 
            :article="article"
            class="project-card-web absolute inset-0 bg-grey-900 rounded-sm"
            :style="{
              zIndex: index + 1, /* Z-index croissant: les dernières cartes seront au-dessus */
              visibility: index === 0 ? 'visible' : 'hidden' /* Masquer toutes les cartes sauf la première au départ */
            }"
          />
        </div>
      </div>
    </div>
  </section>


</main>
</template>

<style scoped>
.project-card-web {
  transform-origin: bottom center;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
