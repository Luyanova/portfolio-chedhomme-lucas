<template>
  <div class="project-card flex flex-col gap-4 overflow-hidden p-2">
    <!-- Image de couverture -->
    <div class="w-full h-64 sm:h-92 overflow-hidden rounded-xs flex-shrink-0 lg:h-64 2xl:h-160">
      <NuxtImg 
        :src="article.cover1" 
        :alt="article.title"
        format="jpg"
        quality="80"
        loading="lazy"
        fit="cover"
        class="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
    
    <!-- Informations du projet -->
    <div class="flex flex-col flex-grow">
      <!-- Titre -->
      <h3 class="text-grey-50 font-['Owners_Wide'] text-lg font-medium leading-[140%] tracking-[0.4px] line-clamp-2 flex-shrink-0 2xl:text-xl">
        {{ article.title }}
      </h3>
      
      <!-- Tags -->
      <div class="flex flex-wrap gap-2 h-full items-start content-start flex-shrink-0 pt-2 mt-2">
        <span 
          v-for="tag in article.tags" 
          :key="tag" 
          class="text-grey-50 bg-secondary-500 px-3 py-1.5 rounded-xs font-['Satoshi_Variable'] text-sm font-normal leading-[150%] 2xl:text-base"
        >
          {{ tag }}
        </span>
      </div>
      
      <!-- Résumé -->
      <p class="text-grey-400 font-['Satoshi_Variable'] text-base font-normal leading-[150%] tracking-[0.64px] line-clamp-3 h-[72px] flex-shrink-0 mt-2 2xl:text-lg">
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
      
      <!-- Bouton pour voir le projet -->
      <div class="flex justify-end mt-16">
        <ButtonPrimary 
          :icon="ArrowDown" 
          :to="getProjectPath(article)"
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
  transition: transform 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
}
</style>
