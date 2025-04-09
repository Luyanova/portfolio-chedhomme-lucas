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
  if (!projectsSection.value || !posts.value) return;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { $gsap } = useNuxtApp() as unknown as { $gsap: any };
  
  nextTick(() => {
    const cardElements = document.querySelectorAll('.project-card-web');
    console.log("Posts length:", posts.value?.length);
    console.log("Cards found:", cardElements.length);
    
    if (cardElements.length === 0) return;
    
    // 1. Positionner initialement toutes les cartes hors écran et cachées
    $gsap.set(cardElements, {
      yPercent: 170,     // Position initiale plus basse (hors écran)
      scale: 1.1,        // Taille initiale légèrement plus grande
      rotation: 5,       // Légère rotation initiale
      zIndex: (i: number) => i, // Z-index initial (0-based)
      visibility: 'hidden', // Toutes cachées au départ
      position: 'absolute', // Nécessaire pour la superposition
      top: 0,
      left: '50%',       // Centrer horizontalement
      xPercent: -50,     // Ajuster pour un centrage parfait
      margin: 0,         // Assurer l'absence de marges
      width: () => window.innerWidth >= 1024 ? '966px' : window.innerWidth >= 640 ? '800px' : '100%', // Largeur responsive
      transformOrigin: 'bottom center' // Point de transformation
    });

    // Rendre la première carte visible explicitement avant l'animation
    if (cardElements[0]) {
      $gsap.set(cardElements[0], { visibility: 'visible' });
    }

    // Définir les paramètres de l'animation
    const cardAnimationDuration = 1.0; // Durée de l'animation d'une carte
    const staggerTime = 0.7; // Augmenté pour plus d'espace entre les cartes

    // 2. Créer la timeline et le ScrollTrigger
    const tl = $gsap.timeline({
      scrollTrigger: {
        trigger: projectsSection.value,
        start: 'top top+=80', // Ajusté pour tenir compte de la hauteur de la barre de navigation
        end: `+=${window.innerHeight * (cardElements.length / 1.5)}`, 
        scrub: true,      // Lissage du défilement
        pin: true,       // Épingler la section pendant l'animation
        pinSpacing: true,
        anticipatePin: 1, // Améliorer la réactivité du pin
        markers: false,   // Mettre à true pour déboguer le trigger
        onUpdate: (self: { progress: number }) => {
          // Calculer l'index de la carte active en fonction de la progression
           const rawIndex = self.progress * cardElements.length;
           const newIndex = Math.min(Math.floor(rawIndex), cardElements.length - 1);
           
          // Mettre à jour l'index seulement s'il a changé
          if (newIndex !== activeCardIndex.value) {
            activeCardIndex.value = newIndex;
            console.log("Index actif:", newIndex);
          }
        },
        onLeaveBack: () => {
          // S'assurer que la première carte est active lorsqu'on quitte la section par le haut
          activeCardIndex.value = 0;
        },
        onLeave: () => {
          // S'assurer que la dernière carte est active lorsqu'on quitte la section par le bas
          activeCardIndex.value = cardElements.length - 1;
        }
      }
    });
    
    // 3. Animer chaque carte individuellement avec un décalage (stagger)
    cardElements.forEach((card, index) => {
      // Calculer le décalage vertical pour l'effet d'empilement
      const yOffset = Math.pow(index, 1.5) * 3; // Augmenté pour plus d'espace entre les cartes
      
      // Animer la carte vers sa position finale - avec des points de départ et d'arrivée
      // pour permettre une réversibilité correcte de l'animation
      tl.fromTo(card, 
        {
          yPercent: 150,
          scale: 1.1,
          rotation: 5,
          visibility: 'hidden',
        },
        {
          yPercent: -10 + yOffset,    // Position finale (légèrement au-dessus + décalage)
          scale: 0.90,                // Taille finale réduite
          rotation: 0,                // Rotation finale neutre
          visibility: 'visible',      // Rendre visible pendant l'animation
          duration: cardAnimationDuration, // Durée de l'animation de cette carte
          ease: "power2.inOut",       // Courbe d'animation
          zIndex: index + 1 // Z-index croissant: les dernières cartes sont au-dessus
        }, 
        index * staggerTime); // Démarrer l'animation de cette carte après un délai proportionnel à son index
    });
    
    // Ajouter un petit délai à la fin pour que la dernière carte reste visible un peu plus longtemps avant le dépinglage
    tl.to({}, { duration: 0.5 }); 

    // 4. Ajouter les gestionnaires d'événements pour le survol (inchangé)
    cardElements.forEach(card => {
      card.addEventListener('mouseenter', () => {
        $gsap.to(card, {
          y: '-=5', // Ajuster la position y relative
          boxShadow: '0 30px 60px rgba(10, 242, 157, 0.25), 0 15px 30px rgba(10, 242, 157, 0.15)',
          duration: 0.3,
          overwrite: true
        });
      });
      
      card.addEventListener('mouseleave', () => {
        $gsap.to(card, {
          y: '+=5', // Revenir à la position y relative
          boxShadow: '0 15px 50px rgba(0, 0, 0, 0.35), 0 10px 25px rgba(0, 0, 0, 0.2)',
          duration: 0.3,
          overwrite: true
        });
      });
    });
  }); // Fin de nextTick
}

// Fonction pour réinitialiser l'état de l'animation
const resetAnimationState = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { $gsap } = useNuxtApp() as unknown as { $gsap: any };
  const cardElements = document.querySelectorAll('.project-card-web');
  activeCardIndex.value = 0;
  cardElements.forEach((card: Element, index: number) => {
    $gsap.set(card, {
      yPercent: 170,
      scale: 1.1,
      rotation: 5,
      visibility: 'hidden',
      zIndex: index
    });
  });
};

onMounted(() => {
  // Précharger les images, puis configurer l'animation
  preloadAllImages().then(() => {
    resetAnimationState();
    setupAnimation();
  })
})
</script>

<template>
<main>
  <section>
    <div class="flex flex-col gap-8 px-4 lg:px-10 2xl:px-20 pt-10 lg:flex-row-reverse lg:gap-30 pb-100 ">
      <div class="w-full h-[50vh] sm:h-[65vh] overflow-hidden rounded-sm">
        <NuxtImg
          src="/img/projects/web/web.png"
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
            :key="article.path || index" 
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
