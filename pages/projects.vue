<template>
    <div>
        <section>
            <div class="flex flex-col py-10 2xl:py-20 px-4 lg:px-10 2xl:px-20">
                <div class="flex flex-col">
                    <h2 class="text-primary-500 font-['Owners_Wide'] text-4xl 2xl:text-5xl font-bold italic leading-[120%]">
                        Projets
                    </h2>
                    <p class="text-grey-500 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
                        Découvrez mes projets multimédias, où l'image, le son et le mouvement se mêlent à la technique. De la photographie au motion design, chaque création raconte une histoire et porte une vision unique.
                    </p>
                </div>
                <div class="flex flex-col gap-4 py-10 sm:flex-row">
                    <div class="flex flex-col gap-4 sm:w-1/2">
                        <div class="w-full h-50 rounded-sm overflow-hidden sm:h-90 2xl:h-160">
                            <SplineViewer url="https://prod.spline.design/AHq5HPpWNWJyUt7R/scene.splinecode" />
                        </div>
                        <div>
                            <ButtonPrimary  
                                :icon="ArrowUp"
                                to="/multimedia"
                            >
                                Voir les projets multimédia
                            </ButtonPrimary>
                        </div>
                        <p class="text-grey-500 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
                            De la photo au motion design, explorez mes créations audiovisuelles.
                        </p>
                    </div>
                    <div class="flex flex-col gap-4 sm:w-1/2">
                        <div class="w-full h-50 rounded-sm overflow-hidden sm:h-90 2xl:h-160">
                            <SplineViewer url="https://prod.spline.design/5HgjZo3KXZMjX1IA/scene.splinecode" />
                        </div>
                        <div>
                            <ButtonPrimary  
                                :icon="ArrowUp"
                                to="/web"
                            >
                                Voir les projets web
                            </ButtonPrimary>
                        </div>
                        <p class="text-grey-500 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
                            Du design au développement, chaque site est pensé pour allier esthétique et performance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <section class="bg-grey-800 py-20 sm:py-10 2xl:pt-20 2xl:pb-40">
            <div class="flex flex-col px-4 lg:px-10 2xl:px-20">
                <div class="flex items-center flex-wrap justify-between mb-6 gap-4 lg:flex-nowrap lg:justify-between">
                    <h2 class="text-primary-500 font-['Owners_Wide'] text-2xl sm:text-3xl 2xl:text-4xl font-bold normal leading-[140%] tracking-[0.48px] lg:w-1/2">
                        Projets en vedette
                    </h2>
                    
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
            </div>
            
            <div v-if="topProjects && topProjects.length > 0" class="relative">
                <!-- Slider container -->
                <div 
                    ref="sliderContainer"
                    class="slider-container scrollbar-hide px-4 lg:px-10 2xl:px-20"
                    @scroll="checkScrollPosition"
                >
                    <div class="slider-track">
                        <ProjectCard 
                            v-for="article in topProjects" 
                            :key="article._path" 
                            :article="article" 
                            class="w-[90vw] sm:w-[70vw] lg:w-[25vw] h-[100%] 2xl:w-[35vw]"
                        />
                    </div>
                    <!-- Espace après la dernière carte pour éviter qu'elle soit coupée -->
                    <div class="w-4 flex-shrink-0" />
                </div>
            </div>
            <p v-else class="text-grey-400 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px] mt-4 px-4 lg:px-10 2xl:px-20">
                Aucun projet en vedette trouvé. Assurez-vous d'avoir des projets avec isTopProject: true dans vos fichiers Markdown.
            </p>
        </section>
    </div>
</template>



<script setup>
import ArrowUp from '~/components/icons/ArrowUp.vue'
import ArrowLeft from '~/components/icons/ArrowLeft.vue'
import ArrowRight from '~/components/icons/ArrowRight.vue'
import ProjectCard from '~/components/ProjectCard.vue'
import { ref, onMounted } from 'vue'

// Définir les méta-données SEO de la page
useSeoMeta({
  title: 'Projets - Portfolio de Lucas Chedhomme',
  description: 'Découvrez mes projets web et multimédia - Développeur et créateur digital',
  ogTitle: 'Projets - Portfolio de Lucas Chedhomme',
  ogDescription: 'Découvrez mes projets web et multimédia - Développeur et créateur digital',
  ogImage: '/img/index/portraitLucasChedhomme.jpg',
  twitterCard: 'summary_large_image',
})

// Références pour le slider
const sliderContainer = ref(null)
const isAtStart = ref(true)
const isAtEnd = ref(false)

// Récupérer tous les projets où isTopProject est vrai
const { data: topProjects } = await useAsyncData(
  'top-projects',
  async () => {
    try {
      // Récupérer tous les projets sans filtre
      const webProjects = await queryCollection('web').all();
      const multimediaProjects = await queryCollection('multimedia').all();
      
      // Combiner et filtrer les projets avec isTopProject: true
      return [...webProjects, ...multimediaProjects]
        .filter(project => project.isTopProject === true);
    } catch (error) {
      console.error("Erreur lors de la récupération des projets:", error);
      return [];
    }
  }
);

// Fonction pour vérifier la position du scroll et mettre à jour les états des boutons
const checkScrollPosition = () => {
  if (!sliderContainer.value) return;
  
  const { scrollLeft, scrollWidth, clientWidth } = sliderContainer.value;
  isAtStart.value = scrollLeft <= 10;
  isAtEnd.value = scrollLeft >= scrollWidth - clientWidth - 10;
};

// Fonction pour naviguer dans le slider
const navigateSlider = (direction) => {
  if (!sliderContainer.value) return;
  
  const container = sliderContainer.value;
  const scrollAmount = container.clientWidth * 0.8; // Scrolle de 80% de la largeur visible
  
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
    // Utiliser ResizeObserver pour détecter les changements de taille
    const resizeObserver = new ResizeObserver(() => {
      checkScrollPosition();
    });
    resizeObserver.observe(sliderContainer.value);
  }
});
</script>

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
  gap: 0.5rem;
  padding: 0.5rem 0;
  min-width: max-content;

  @media (min-width: 768px) {
    gap: 1rem;
  }
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
  background-color: var(--grey-300, #bfc6c3);
  cursor: not-allowed;
}

.scrollbar-hide {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
</style>

