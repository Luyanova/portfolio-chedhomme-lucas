<script setup lang="ts">
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import ArrowRight from '~/components/icons/ArrowRight.vue'
import { ref, onMounted, computed, watch, nextTick } from 'vue'

// Définir les méta-données SEO de la page
useSeoMeta({
  title: 'Projets multimédia - Portfolio de Lucas Chedhomme',
  description: 'Découvrez mes projets multimédia - photographie, graphisme et vidéo',
  ogTitle: 'Projets multimédia - Portfolio de Lucas Chedhomme',
  ogDescription: 'Découvrez mes projets multimédia - photographie, graphisme et vidéo',
  ogImage: '/img/index/portraitLucasChedhomme.jpg',
  twitterCard: 'summary_large_image',
})

// Définition du type pour un projet multimédia
interface MultimediaProject {
  title: string
  path?: string
  isTopProject?: boolean
  summary?: string
  cover1: string
  cover2?: string
  tools?: string[]
  tags?: string[]
  projectUrl?: string
  date: string
  team?: Array<{ name: string, site?: string }>
}

const { data: allPosts } = await useAsyncData('multimedia', () => queryCollection('multimedia').all())

// État pour le tag actif
const activeTag = ref<string | null>(null)

// Fonction pour filtrer les projets
const filteredPosts = computed(() => {
  if (!allPosts.value) return []
  
  if (!activeTag.value) return allPosts.value
  
  return allPosts.value.filter(project => 
    project.tags && Array.isArray(project.tags) && 
    project.tags.includes(activeTag.value as string)
  )
})

// Surveiller les changements de filteredPosts pour mettre à jour l'état des boutons
watch(filteredPosts, async () => {
  // Attendre que le DOM soit mis à jour
  await nextTick()
  // Recalculer l'état des boutons
  checkScrollPosition()
}, { immediate: true })

// Fonction pour changer le tag actif
const toggleTag = (tag: string) => {
  if (activeTag.value === tag) {
    activeTag.value = null // Désactiver le tag si déjà actif
  } else {
    activeTag.value = tag // Activer le nouveau tag
  }
  
  // Réinitialiser la position du scroll quand on change de filtre
  if (sliderContainer.value) {
    (sliderContainer.value as HTMLElement).scrollLeft = 0
  }
}

// Références pour le slider
const sliderContainer = ref(null)
const isAtStart = ref(true)
const isAtEnd = ref(false)

// Fonction pour vérifier la position du scroll et mettre à jour les états des boutons
const checkScrollPosition = () => {
  if (!sliderContainer.value) return;
  
  const container = sliderContainer.value as HTMLElement;
  const { scrollLeft, scrollWidth, clientWidth } = container;
  isAtStart.value = scrollLeft <= 10;
  isAtEnd.value = scrollLeft >= scrollWidth - clientWidth - 10;
};

// Fonction pour naviguer dans le slider
const navigateSlider = (direction: 'prev' | 'next') => {
  if (!sliderContainer.value) return;
  
  const container = sliderContainer.value as HTMLElement;
  const scrollAmount = container.clientWidth * 0.8;
  
  if (direction === 'next' && !isAtEnd.value) {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  } else if (direction === 'prev' && !isAtStart.value) {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }
};

// Initialiser l'état du slider après montage
onMounted(() => {
  if (sliderContainer.value) {
    checkScrollPosition();
    const resizeObserver = new ResizeObserver(() => {
      checkScrollPosition();
    });
    resizeObserver.observe(sliderContainer.value);
  }
});

// Projet sélectionné pour l'affichage détaillé
const selectedProject = ref<MultimediaProject | null>(null)

// Fonction pour sélectionner un projet à afficher
const selectProject = (project: MultimediaProject) => {
  selectedProject.value = project
}
</script>

<template>
  <div>
    <section>
      <div class="flex flex-col px-4 lg:px-10 2xl:px-20 py-10 2xl:py-20 gap-10">
        <div class="flex flex-col gap-2">
          <h2 class="text-primary-500 font-['Owners_Wide'] text-4xl sm:text-5xl font-bold italic leading-[120%] 2xl:text-6xl">
            Projets multimédia
          </h2>
          <p class="text-grey-500 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.64px] lg:w-3/4 2xl:text-lg">
            Découvrez mes projets multimédias, où l'image, le son et le mouvement se mêlent à la technique. De la photographie au motion design, chaque création raconte une histoire et porte une vision unique.
          </p>
        </div>
        <div class="flex flex-col gap-2 pb-20 sm:pb-15 sm:gap-0 sm:flex-row-reverse">
          <div class="w-full overflow-hidden rounded-sm">
            <NuxtImg
              src="/img/projects/multimedia/vladimirMockup.png"
              alt="Projet multimédia Vladimir mockup"
              format="webp"
              quality="80"
              loading="lazy"
              class="w-full h-auto"
            />
          </div>
          <div class="w-full sm:h-120 lg:h-160 2xl:h-300 overflow-hidden rounded-sm">
            <NuxtImg
              src="/img/projects/multimedia/donut3D.png"
              alt="Mes donuts 3D blender Guru"
              format="webp"
              quality="80"
              loading="lazy"
              class="w-full h-auto sm:h-full sm:object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-10">
      <div class="flex flex-col px-4 lg:px-10 2xl:px-20">
        <h2 class="text-primary-500 font-['Owners_Wide'] text-2xl sm:text-3xl font-bold leading-[120%] pb-8 2xl:text-4xl">
          Tous les projets multimédia
        </h2>
        <div class="flex items-center flex-wrap lg:flex-nowrap mb-4 gap-2 lg:gap-4">
          <span 
            class="cursor-pointer px-3 py-1.5 rounded-sm font-['Satoshi_Variable'] text-sm sm:text-lg font-normal leading-[150%] transition-colors whitespace-nowrap 2xl:text-xl"
            :class="activeTag === null ? 'text-grey-50 bg-secondary-500' : 'text-grey-500 bg-grey-300'"
            @click="activeTag = null"
          >
            Tous les projets
          </span>
          <span 
            class="cursor-pointer px-3 py-1.5 rounded-sm font-['Satoshi_Variable'] text-sm sm:text-lg font-normal leading-[150%] transition-colors whitespace-nowrap 2xl:text-xl"
            :class="activeTag === 'Graphisme' ? 'text-grey-50 bg-secondary-500' : 'text-grey-500 bg-grey-300'"
            @click="toggleTag('Graphisme')"
          >
            Graphisme
          </span>
          <span 
            class="cursor-pointer px-3 py-1.5 rounded-sm font-['Satoshi_Variable'] text-sm sm:text-lg font-normal leading-[150%] transition-colors whitespace-nowrap 2xl:text-xl"
            :class="activeTag === 'Photographie' ? 'text-grey-50 bg-secondary-500' : 'text-grey-500 bg-grey-300'"
            @click="toggleTag('Photographie')"
          >
            Photographie
          </span>
          <span 
            class="cursor-pointer px-3 py-1.5 rounded-sm font-['Satoshi_Variable'] text-sm sm:text-lg font-normal leading-[150%] transition-colors whitespace-nowrap 2xl:text-xl"
            :class="activeTag === 'Vidéo' ? 'text-grey-50 bg-secondary-500' : 'text-grey-500 bg-grey-300'"
            @click="toggleTag('Vidéo')"
          >
            Vidéo
          </span>
          
          <!-- Navigation du slider (desktop) -->
          <div class="flex items-center gap-4 w-full justify-end">
            <button 
              class="slider-nav-btn"
              :class="{'slider-nav-btn-disabled': isAtStart}"
              aria-label="Projet précédent"
              @click="navigateSlider('prev')"   
            >
              <ArrowLeft 
                :stroke="isAtStart ? '#474e4b' : '#FAFAFA'" 
                width="18" 
                height="18" 
              />
            </button>
            <button 
              class="slider-nav-btn"
              :class="{'slider-nav-btn-disabled': isAtEnd}"
              aria-label="Projet suivant"
              @click="navigateSlider('next')" 
            >
              <ArrowRight 
                :stroke="isAtEnd ? '#474e4b' : '#FAFAFA'" 
                width="18" 
                height="18" 
              />
            </button>
          </div>
        </div>

        <div v-if="filteredPosts && filteredPosts.length > 0" class="relative">
          <!-- Slider container -->
          <div 
            ref="sliderContainer"
            class="slider-container scrollbar-hide"
            @scroll="checkScrollPosition"
          >
            <div class="slider-track">
              <div 
                v-for="project in filteredPosts" 
                :key="project.path"
                class="slider-item cursor-pointer"
                @click="selectProject(project)"
              >
                <MultimediaImageCard 
                  :src="project.cover1" 
                  :alt="project.title" 
                />
              </div>
              <!-- Espace après la dernière carte -->
              <div class="w-4 flex-shrink-0"/>
            </div>
          </div>
        </div>
        <p v-else class="text-grey-400 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.64px] mt-4 2xl:text-lg">
          Aucun projet multimédia trouvé dans cette catégorie.
        </p>
        
        <transition name="fade" mode="out-in">
          <div v-if="selectedProject" :key="selectedProject.title">
            <MultimediaProjectCard 
              :project="selectedProject" 
              @view-project="selectProject"
            />
          </div>
          <div v-else-if="filteredPosts.length > 0 && filteredPosts[0]" :key="'default'">
            <MultimediaProjectCard 
              :project="filteredPosts[0]" 
              @view-project="selectProject"
            />
          </div>
        </transition>
      </div>
    </section>


    <section>
      <div class="w-full overflow-hidden rounded-sm pt-10 sm:pt-20 lg:pt-40">
        <NuxtImg
          src="/img/projects/multimedia/justiceAbout.png"
          alt="Projet multimédia justiceAbout"
          format="webp"
          quality="80"
          loading="lazy"
          class="w-full h-full object-cover rounded-sm"
        />
      </div>
    </section>



  </div>
</template>

<style scoped>
.slider-container {
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  position: relative;
}

.slider-container::-webkit-scrollbar {
  display: none; /* Chrome, Safari and Opera */
}

.slider-track {
  display: flex;
  gap: 0.25rem;
  padding: 0.5rem 0;
  min-width: max-content;
}

.slider-item {
  flex: 0 0 auto;
  margin-right: 0.5rem;
}

.slider-nav-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 0.25rem;
  background-color: var(--secondary-500, #04593a);
  transition: all 0.3s ease;
}

.slider-nav-btn:hover:not(.slider-nav-btn-disabled) {
  opacity: 0.9;
  transform: scale(1.05);
}

.slider-nav-btn-disabled {
  background-color: var(--grey-400, #bfc6c3);
  cursor: not-allowed;
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

/* Styles de transition pour fade in/fade out */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.35s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>