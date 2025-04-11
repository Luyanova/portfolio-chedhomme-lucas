<template>
  <main v-if="project">
    <section class="flex flex-col gap-4 py-10 px-4 lg:px-10 2xl:px-20  sm:flex-row-reverse lg:pb-20">
      <div class="flex flex-col sm:w-1/2 h-120 sm:h-140 lg:h-160 2xl:h-220">
        <LightboxImage 
          :src="project.cover1" 
          :alt="`${project.title} Cover 2`"
          format="webp"
          quality="80"
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
            <p class="text-grey-50 font-['Satoshi_Variable'] text-lg 2xl:text-xl font-medium leading-[150%] tracking-[0.54px]">Date</p>
            <p class="text-grey-400 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">{{ project.date }}</p>
          </div>

          <div class="flex flex-col">
            <p class="text-grey-50 font-['Satoshi_Variable'] text-lg 2xl:text-xl font-medium leading-[150%] tracking-[0.54px]">Type de projet</p>
            <div class="text-grey-400 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
              <template v-for="(tag, index) in project.tags" :key="index">
                <span>{{ tag }}</span>
                <span v-if="index < project.tags.length - 1">, </span>
              </template>
            </div>
          </div>

          <div class="flex flex-col">
            <p class="text-grey-50 font-['Satoshi_Variable'] text-lg 2xl:text-xl font-medium leading-[150%] tracking-[0.54px]">Outils</p>
            <div class="text-grey-400 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
              <template v-for="(tool, index) in project.tools" :key="index">
                <span>{{ tool }}</span>
                <span v-if="index < project.tools.length - 1">, </span>
              </template>
            </div>
          </div>

          <div v-if="project.team?.length" class="flex flex-col">
            <p class="text-grey-50 font-['Satoshi_Variable'] text-lg 2xl:text-xl font-medium leading-[150%] tracking-[0.54px]">Autres membres</p>
            <div class="text-grey-400 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
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

    <section class="flex flex-col gap-4 py-10 px-4 lg:px-10 2xl:px-20 sm:flex-row">
      <div class="sm:w-1/3 sm:h-120">
        <LightboxImage 
          :src="project.cover2" 
          :alt="`${project.title} Cover 2`"
          format="webp"
          quality="80"
          loading="lazy"
          fit="cover"
          class="w-full h-full object-cover"
        />
      </div>

      <div class="flex flex-col gap-10 sm:w-1/2 lg:flex-row">
        <div class="flex flex-col gap-4">
          <div class="flex flex-col">
          <h2 class="text-grey-50 font-['Satoshi_Variable'] text-sm 2xl:text-base font-medium leading-[150%]">Introduction</h2>
          <p class="text-grey-400 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
            {{ project.introduction }}
          </p>
        </div>

        <div class="flex flex-col">
          <p class="text-grey-400 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
            {{ project.description }}
          </p>
        </div>
      </div>

      <div class="flex flex-col">
        <h2 class="text-grey-50 font-['Satoshi_Variable'] text-sm 2xl:text-base font-medium leading-[150%]">Objectif</h2>
        <p class="text-grey-400 font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]">
          {{ project.objective }}
        </p>
      </div>
      </div>
    </section>

    <section>
      <div class="flex flex-col px-4 lg:px-10 2xl:px-20 text-grey-50 text-base 2xl:text-lg font-['Satoshi_Variable'] font-medium leading-[150%]">
      <ContentRenderer :value="project" />
    </div>
    </section>

    <section 
      v-if="project.galleryImages?.length" 
      class="py-12 lg:py-60 px-4 lg:px-50 2xl:px-100"
    >
      <div class="flex flex-col gap-8 sm:grid sm:grid-cols-2 sm:gap-4 lg:grid-cols-2 lg:gap-4">
        <template v-for="(img, index) in project.galleryImages" :key="index">
          <div :class="`gallery-item-${(index % 4) + 1}`">
            <div class="image-container">
              <LightboxImage
                :src="typeof img === 'string' ? img : img.path" 
                :alt="`${project.title} Gallery Image ${index + 1}`"
                format="webp"
                quality="85"
                loading="lazy"
                fit="cover"
                class="w-full h-full object-cover"
              />
            </div>
            <div v-if="typeof img !== 'string' && img.legend" class="mt-2 flex justify-end">
              <p class="text-grey-400 font-['Satoshi_Variable'] text-base 2xl:text-lg italic">
                {{ img.legend }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </section>

    <section>
      <div class="flex flex-col px-4 lg:px-10 2xl:px-20 py-10">
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


const route = useRoute();
const slug = route.params.slug as string;

// Fetch the specific document from the 'web' collection based on the slug
const { data: project, error } = await useAsyncData(
  `web-${slug}`,
  async () => {
    try {
      const allDocs = await queryCollection('web').all();
      
      // Recherche basée sur le slug dans tous les articles
      return allDocs.find(doc => 
        doc.path?.includes(slug)
      ) || null;
    } catch {
      return null;
    }
  }
);

// Fonction pour trouver le projet suivant
const findNextProject = async () => {
  try {
    const allDocs = await queryCollection('web').all();
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

if (error.value || !project.value) {
  throw createError({ 
    statusCode: 404, 
    statusMessage: 'Project not found', 
    fatal: true,
    data: error.value 
  });
}

if (project.value) {
  useSeoMeta({
    title: project.value.title,
    description: project.value.introduction,
    ogTitle: project.value.title,
    ogDescription: project.value.introduction,
    ogImage: project.value.cover1,
    twitterCard: 'summary_large_image',
  });
}
</script>

<style scoped>
/* Styles pour les éléments de galerie sur mobile et desktop */
.gallery-item-1, .gallery-item-2, .gallery-item-3, .gallery-item-4 {
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
}

.image-container {
  width: 100%;
  overflow: hidden;
  height: 100%;
}

/* Styles spécifiques pour chaque type d'élément */
/* Styles pour les écrans plus grands (sm et au-dessus) */
@media (min-width: 640px) {
  /* Styles pour la gallery-item-1 (et 5, 9, etc. par la modulo) */
  .gallery-item-1 {
    width: 100%;
    grid-column: 1 / -1; /* Prend toute la largeur */
  }

  .gallery-item-1 .image-container {
    max-height: 400px;
  }

  /* Styles pour la gallery-item-2 (et 6, 10, etc. par la modulo) */
  .gallery-item-2 {
    width: 100%;
    grid-column: 1 / -1; /* Prend toute la largeur */
  }

  .gallery-item-2 .image-container {
    max-height: 400px;
  }

  /* Styles pour la gallery-item-3 (et 7, 11, etc. par la modulo) */
  .gallery-item-3 {
    width: 100%;
  }

  .gallery-item-3 .image-container {
    max-height: 400px;
  }

  /* Styles pour la gallery-item-4 (et 8, 12, etc. par la modulo) */
  .gallery-item-4 {
    width: 100%;
  }

  .gallery-item-4 .image-container {
    max-height: 400px;
  }
}

/* Styles pour les grands écrans (lg et au-dessus) */
@media (min-width: 1024px) {
  /* Styles pour la gallery-item-1 (et 5, 9, etc. par la modulo) */
  .gallery-item-1 {
    width: 100%;
    max-height: 600px;
    grid-column: 1 / -1; /* Prend toute la largeur */
  }

  .gallery-item-1 .image-container {
    max-height: 600px;
  }

  /* Conteneur principal pour div 2, 3 et 4 */
  .gallery-item-2, .gallery-item-3, .gallery-item-4 {
    height: auto;
  }

  /* Structure qui se répète pour chaque groupe de 4 images */
  /* Styles pour les gallery-item-2 (2, 6, 10, etc.) */
  .gallery-item-2 {
    width: 100%;
    grid-column: 1 / 2; /* Prend la moitié gauche */
    grid-row: span 2; /* S'étend sur deux rangées */
    height: auto;
  }

  .gallery-item-2 .image-container {
    height: 100%; /* Prend toute la hauteur disponible */
    min-height: 816px;
  }

  /* Styles pour les gallery-item-3 (3, 7, 11, etc.) */
  .gallery-item-3 {
    width: 100%;
    grid-column: 2 / 3; /* Prend la moitié droite */
    height: 400px;
  }

  .gallery-item-3 .image-container {
    height: 100%; /* Prend toute la hauteur disponible */
  }

  /* Styles pour les gallery-item-4 (4, 8, 12, etc.) */
  .gallery-item-4 {
    width: 100%;
    grid-column: 2 / 3; /* Prend la moitié droite */
    height: 400px;
  }

  .gallery-item-4 .image-container {
    height: 100%; /* Prend toute la hauteur disponible */
  }
}

/* Styles pour les très grands écrans (xl et au-dessus) - 1280px et plus */
@media (min-width: 1280px) {
  /* Styles pour toutes les gallery-item-1 */
  .gallery-item-1 .image-container {
    max-height: 1000px;
  }
}
</style>

