<template>
  <div class="project-card sm:w-[800px] lg:w-[966px] flex flex-col lg:flex-row gap-4 overflow-hidden p-2 rounded-sm">
    <!-- Image de couverture -->
    <div class="w-full h-64 sm:h-100 lg:w-[400px] lg:h-full overflow-hidden rounded-sm flex-shrink-0">
      <NuxtImg 
        :src="article.cover1" 
        :alt="article.title"
        format="jpg"
        quality="80"
        loading="lazy"
        fit="cover"
        class="w-full h-full object-cover rounded-sm"
      />
    </div>
    
    <!-- Informations du projet -->
    <div class="flex flex-col gap-8 lg:w-[calc(100%-400px)]">
      <div class="flex flex-col gap-4">
        <!-- Titre -->
        <h3 class="text-grey-50 font-['Owners_Wide'] text-[20px] sm:text-[24px] font-medium leading-[140%] tracking-[0.4px] line-clamp-2 flex-shrink-0">
          {{ article.title }}
      </h3>
      
      <div class="flex flex-col gap-2">
      <!-- Tags -->
      <div class="flex gap-2 items-start content-start flex-shrink-0 overflow-x-auto hide-scrollbar">
        <span 
          v-for="tag in article.tags" 
          :key="tag" 
          class="text-grey-50 bg-secondary-500 px-3 py-1.5 rounded-sm font-['Satoshi_Variable'] text-[14px] sm:text-[16px] font-normal leading-[150%] whitespace-nowrap"
        >
          {{ tag }}
        </span>
      </div>
      </div>
      
      <!-- Résumé -->
      <p class="text-grey-400 font-['Satoshi_Variable'] text-[16px] sm:text-[18px] font-normal leading-[150%] tracking-[0.64px] line-clamp-3 h-[72px] sm:h-[84px] flex-shrink-0">
        {{ article.summary }}
      </p>
      
      <!-- Outils -->
      <!-- <div class="flex flex-col h-16 flex-shrink-0">
        <p class="text-grey-50 font-['Satoshi_Variable'] text-[16px] font-medium leading-[150%] tracking-[0.54px]">
          Outils
        </p>
        <p class="text-grey-400 font-['Satoshi_Variable'] text-[14px] font-normal leading-[150%] tracking-[0.64px] line-clamp-1">
          {{ article.tools.join(', ') }}
        </p>
      </div> -->

    </div>
      
      <!-- Bouton pour voir le projet -->
      <div class="flex justify-end mt-auto">
        <ButtonPrimary 
          :icon="ArrowDown" 
          :to="getProjectPath(article)"
          class="sm:text-lg"
        >
          Voir le projet
        </ButtonPrimary>
      </div>
    </div>
  </div>
</template>

<script setup>
import ArrowDown from '~/components/icons/ArrowDown.vue'

// Définir la prop article
defineProps({
  article: {
    type: Object,
    required: true
  }
});

// Fonction pour déterminer le chemin du projet en fonction de sa collection
const getProjectPath = (article) => {
  // Utiliser _path ou path selon ce qui est disponible
  const fullPath = article._path || article.path || '';
  
  // Vérifier si le chemin contient 'web' ou 'multimedia'
  const isWebProject = fullPath.includes('/web/');
  
  // Extraire le slug (dernier segment du chemin)
  const segments = fullPath.split('/').filter(Boolean);
  const projectSlug = segments.length > 0 ? segments[segments.length - 1] : '';
  
  // Construire l'URL en fonction du type de projet
  return isWebProject ? `/web/${projectSlug}` : `/multimedia/${projectSlug}`;
};
</script>

<style scoped>
.project-card {
  position: relative;
  max-width: 100%;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 15px 50px rgba(0, 0, 0, 0.35), 0 10px 25px rgba(0, 0, 0, 0.2);
}

.project-card:hover {

  box-shadow: 0 30px 60px rgba(10, 242, 157, 0.25), 0 15px 30px rgba(10, 242, 157, 0.15);
}
</style>
