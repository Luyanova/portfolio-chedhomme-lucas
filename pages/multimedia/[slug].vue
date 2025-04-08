<template>
  <main v-if="project">
    <section class="flex flex-col gap-4 py-10 px-4 llg:px-10 2xl:px-20 sm:flex-row-reverse lg:pb-20">
      <div class="flex flex-col sm:w-1/2 h-120 sm:h-140 lg:h-160 2xl:h-220">
        <LightboxImage 
          :src="project.cover1" 
          :alt="`${project.title} Cover 2`"
          format="webp"
          quality="20"
          loading="lazy"
          fit="cover"
        />
      </div>

      <div class="flex flex-col gap-8 sm:w-1/2">
        <h2 class="text-primary-500 font-['Owners_Wide'] text-2xl sm:text-3xl 2xl:text-4xl font-bold normal leading-[140%] tracking-[0.48px]">
          {{ project.title }}
        </h2>

        <div class="flex flex-col gap-4">
          <div class="flex flex-col">
            <p class="text-grey-900 font-['Satoshi_Variable'] text-lg font-medium leading-[150%] tracking-[0.54px] 2xl:text-xl">Date</p>
            <p class="text-grey-500 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.64px] 2xl:text-lg">{{ project.date }}</p>
          </div>

          <div class="flex flex-col">
            <p class="text-grey-900 font-['Satoshi_Variable'] text-lg font-medium leading-[150%] tracking-[0.54px] 2xl:text-xl">Type de projet</p>
            <div class="text-grey-500 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.64px] 2xl:text-lg">
              <template v-for="(tag, index) in project.tags" :key="index">
                <span>{{ tag }}</span>
                <span v-if="index < project.tags.length - 1">, </span>
              </template>
            </div>
          </div>

          <div class="flex flex-col">
            <p class="text-grey-900 font-['Satoshi_Variable'] text-lg font-medium leading-[150%] tracking-[0.54px] 2xl:text-xl">Outils</p>
            <div class="text-grey-500 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.64px] 2xl:text-lg">
              <template v-for="(tool, index) in project.tools" :key="index">
                <span>{{ tool }}</span>
                <span v-if="index < project.tools.length - 1">, </span>
              </template>
            </div>
          </div>

          <div v-if="project.team?.length" class="flex flex-col">
            <p class="text-grey-900 font-['Satoshi_Variable'] text-lg font-medium leading-[150%] tracking-[0.54px] 2xl:text-xl">Autres membres</p>
            <div class="text-grey-500 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.64px] 2xl:text-lg">
              <template v-for="(member, index) in project.team" :key="index">
                <a v-if="member.site" :href="member.site" target="_blank" rel="noopener noreferrer" class="underline hover:text-primary-500 transition-colors">{{ member.name }}</a>
                <span v-else>{{ member.name }}</span>
                <span v-if="index < project.team.length - 1">, </span>
              </template>
            </div>
          </div>
        </div>

        <div v-if="project.projectUrl" class="flex">
          <ButtonPrimary :icon="ArrowUp" :to="project.projectUrl" :is-external="true">
            Voir le projet
          </ButtonPrimary>
        </div>
      </div>


    </section>

    <section class="flex flex-col gap-4 py-10 px-4 llg:px-10 2xl:px-20 sm:flex-row">

        <div class="sm:w-1/3 sm:h-120">
        <LightboxImage 
          :src="project.cover2" 
          :alt="`${project.title} Cover 2`"
          format="webp"
          quality="50"
          loading="lazy"
          fit="cover"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col gap-10 sm:w-1/2 lg:flex-row">

        <div class="flex flex-col gap-4 sm:gap-6">
          <div class="flex flex-col">
          <h2 class="text-grey-900 font-['Satoshi_Variable'] text-sm sm:text-base 2xl:text-lg font-medium leading-[150%]">Introduction</h2>
          <p class="text-grey-500 font-['Satoshi_Variable'] text-base sm:text-lg 2xl:text-xl font-normal leading-[150%] tracking-[0.64px]">
            {{ project.introduction }}
          </p>
        </div>

        <div class="flex flex-col">
          <p class="text-grey-500 font-['Satoshi_Variable'] text-base sm:text-lg 2xl:text-xl font-normal leading-[150%] tracking-[0.64px]">
            {{ project.description }}
          </p>
        </div>
      </div>

      <div class="flex flex-col">
        <h2 class="text-grey-900 font-['Satoshi_Variable'] text-sm sm:text-base 2xl:text-lg font-medium leading-[150%]">Objectif</h2>
        <p class="text-grey-500 font-['Satoshi_Variable'] text-base sm:text-lg 2xl:text-xl font-normal leading-[150%] tracking-[0.64px]">
          {{ project.objective }}
        </p>
      </div>


    </div>
    </section>


    <section>
      <div class="flex flex-col px-4 llg:px-10 2xl:px-20 text-grey-900 text-base 2xl:text-lg font-['Satoshi_Variable'] font-medium leading-[150%]">
      <ContentRenderer :value="project" />
    </div>
    </section>

    <section 
      v-if="project.galleryImages?.length" 
      ref="gallerySection"
      class="gallery-container relative overflow-hidden py-24"
      :style="`height: calc(100vh + ${project.galleryImages.length * 80}vh);`"
    >
      <!-- Titre fixe au centre -->
      <h2 class="gallery-title sticky top-1/2 -translate-y-1/2 text-primary-500 font-['Owners_Wide'] text-5xl 2xl:text-6xl font-bold italic leading-[120%] text-center z-20 px-4 llg:px-10 2xl:px-20">
        {{ project.title }}
      </h2>
      
      <!-- Container des images -->
      <div class="gallery-images">
        <div 
          v-for="(img, index) in project.galleryImages" 
          :key="index" 
          class="gallery-item"
          :class="`gallery-item-${index}`"
          :style="{
            position: 'absolute',
            top: `${index * 80 + 40}vh`,
            left: `${galleryPositions[index]?.left || 50}%`,
            transform: 'translateX(-50%)',
            width: '66%',
            maxWidth: '66%',
            zIndex: galleryPositions[index]?.zIndex || 10
          }"
        >
          <LightboxImage
            :src="typeof img === 'string' ? img : img.path" 
            :alt="`${project.title} Gallery Image ${index + 1}`"
            format="webp"
            quality="85"
            loading="lazy"
            fit="cover"
            class="w-full h-full object-cover lg:max-w-100"
          />
          <p v-if="typeof img !== 'string' && img.legend" class="text-grey-500 font-['Satoshi_Variable'] text-sm 2xl:text-base italic mt-2">
            {{ img.legend }}
          </p>
        </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col px-4 llg:px-10 2xl:px-20 py-10">
        <h2 class="text-primary-500 font-['Owners_Wide'] text-2xl sm:text-4xl 2xl:text-5xl font-bold normal leading-[140%] tracking-[0.48px]">
          Prochain projet
        </h2>
        <MultimediaProjectCard :slug="project.path?.split('/').pop() || slug" :project="nextProject || undefined" />
      </div>
    </section>


  </main>
  <div v-else>
    <p>Project not found.</p>
  </div>
</template>

<script setup lang="ts">
import ArrowUp from '~/components/icons/ArrowUp.vue'
import LightboxImage from '~/components/LightboxImage.vue'
import { ref, onMounted, computed } from 'vue'

const route = useRoute();
const slug = route.params.slug as string;
const gallerySection = ref(null);

// Générateur pseudo-aléatoire avec graine fixe
class SeededRandom {
  private seed: number;
  
  constructor(seed: string) {
    // Crée une graine numérique à partir du slug
    this.seed = Array.from(seed).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  }
  
  // Génère un nombre entre 0 et 1, similaire à Math.random()
  random(): number {
    const x = Math.sin(this.seed++) * 10000;
    return x - Math.floor(x);
  }
  
  // Génère un nombre entier entre min et max inclus
  randomInt(min: number, max: number): number {
    return Math.floor(this.random() * (max - min + 1)) + min;
  }
}

// Crée une instance avec une graine basée sur le slug du projet
const rng = computed(() => new SeededRandom(slug));

// Pré-calcule les positions et z-index qui seront cohérents entre serveur et client
const generatePositions = (count: number, seededRng: SeededRandom) => {
  const positions = [];
  for (let i = 0; i < count; i++) {
    const isAbove = seededRng.random() > 0.6;
    positions.push({
      left: seededRng.randomInt(25, 75), // Entre 25% et 75%
      zIndex: isAbove 
        ? seededRng.randomInt(30, 40) // Au-dessus du titre
        : seededRng.randomInt(5, 15)   // En-dessous du titre
    });
  }
  return positions;
};

// Fetch the specific document from the 'multimedia' collection based on the slug
const { data: project, error } = await useAsyncData(
  `multimedia-${slug}`,
  async () => {
    try {
      const allDocs = await queryCollection('multimedia').all();
      
      // Recherche basée sur le slug dans tous les articles
      return allDocs.find(doc => 
        doc.path?.includes(slug)
      ) || null;
    } catch {
      return null;
    }
  }
);

// MAINTENANT que project est défini, on peut configurer les méta-données SEO
if (project.value) {
  useSeoMeta({
    title: `${project.value.title} - Portfolio de Lucas Chedhomme`,
    description: project.value.summary || 'Projet multimédia de Lucas Chedhomme',
    ogTitle: `${project.value.title} - Portfolio de Lucas Chedhomme`,
    ogDescription: project.value.summary || 'Projet multimédia de Lucas Chedhomme', 
    ogImage: project.value.cover1,
    twitterCard: 'summary_large_image',
  });
}

// Fonction pour trouver le projet suivant
const findNextProject = async () => {
  try {
    const allDocs = await queryCollection('multimedia').all();
    // Trier par date (du plus récent au plus ancien)
    allDocs.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    
    // Trouver l'index du projet actuel
    const currentIndex = allDocs.findIndex(doc => doc.path?.includes(slug));
    
    // Si trouvé et il y a un projet suivant, le retourner
    if (currentIndex !== -1 && currentIndex < allDocs.length - 1) {
      return allDocs[currentIndex + 1];
    }
    
    // Si c'est le dernier projet, retourner le premier (navigation circulaire)
    if (currentIndex === allDocs.length - 1 && allDocs.length > 1) {
      return allDocs[0];
    }
    
    // Retourner undefined plutôt que null pour correspondre au type attendu
    return undefined;
  } catch (error) {
    console.error('Error finding next project:', error);
    return undefined;
  }
};

// Récupérer le projet suivant
const { data: nextProject } = await useAsyncData(
  `next-project-${slug}`,
  findNextProject
);

// Génère les positions une seule fois, identiques côté serveur et client
const galleryPositions = computed(() => {
  if (!project.value?.galleryImages?.length) return [];
  return generatePositions(project.value.galleryImages.length, rng.value);
});

if (error.value || !project.value) {
  throw createError({ 
    statusCode: 404, 
    statusMessage: 'Project not found', 
    fatal: true,
    data: error.value 
  });
}

// Effet de parallaxe au scroll avec GSAP
onMounted(() => {
  if (gallerySection.value) {
    const { $gsap } = useNuxtApp();
    const galleryElements = document.querySelectorAll('.gallery-item');
    
    galleryElements.forEach((_item, _index) => {
      // @ts-expect-error - GSAP est défini dans les plugins
      $gsap.to(_item, {
        y: -300, // Déplacement vers le haut plus prononcé
        ease: "none",
        scrollTrigger: {
          trigger: gallerySection.value,
          start: "top bottom", // Démarre dès que la section entre dans le viewport (en bas)
          end: "bottom top", // Se termine quand la section sort du viewport (en haut)
          scrub: 1.5, // Effet plus doux
        }
      });
    });
  }
});
</script>

<style scoped>
.gallery-container {
  position: relative;
}

.gallery-images {
  position: relative;
  width: 100%;
  height: 100%;
}

.gallery-item {
  transition: transform 0.3s ease;
}

.gallery-item:hover {
  transform: translateX(-50%) scale(1.02);
}
</style>

