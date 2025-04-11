<template>
  <div ref="containerRef" class="project-lightbox-container relative">
    <!-- Project thumbnail avec dégradé et icône en coin inférieur droit -->
    <div 
      class="relative cursor-pointer rounded-sm overflow-hidden" 
      @click.stop="open"
    >
      <NuxtImg 
        v-if="isVisible"
        :src="project?.cover1" 
        :alt="project?.title"
        :width="width"
        :height="height"
        :format="format"
        :quality="quality"
        loading="lazy"
        :fit="fit"
        class="w-full h-auto object-cover"
      />
      <!-- Placeholder pendant le chargement -->
      <div v-else class="w-full h-full bg-grey-800 animate-pulse" />
      <!-- Dégradé vertical partant du bas -->
      <div class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-grey-900/70 to-transparent pointer-events-none" />
      
      <!-- Icône ArrowExtend en bas à droite -->
      <div class="absolute bottom-2 right-2 p-1.5">
        <ArrowExtend :width="20" :height="20" stroke="#FAFAFA" />
      </div>

    </div>

    <!-- Lightbox modal - utilise le portail pour l'insérer directement dans le body -->
    <Teleport to="body">
      <div 
        v-if="isOpen" 
        class="lightbox-modal fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 backdrop-blur-xs"
        @click.self="close"
      >
        <div 
          class="relative max-w-screen-lg max-h-screen-lg p-4 flex flex-col gap-4"
        >
          <!-- Icône de fermeture en haut à gauche -->
          <button 
            class="lightbox-close absolute top-6 left-6 z-10 p-3 bg-black/30 rounded-sm cursor-pointer"
            type="button"
            aria-label="Fermer la lightbox"
            @click.stop="close"
          >
            <CloseCross :width="20" :height="20" stroke="#FAFAFA" />
          </button>
          
          <!-- Image en grand -->
          <div class="flex flex-col gap-2">
          <NuxtImg 
            v-if="isOpen"
            :src="project?.cover1" 
            :alt="project?.title"
            format="webp"
            quality="80"
            loading="eager"
            fit="contain"
            class="max-w-full max-h-[70vh] object-contain rounded-sm"
          />
          <h2 class="text-grey-50 text-[20px] font-['Owners_Wide'] font-medium leading-[140%] tracking-[0.4px] mb-2">{{ project?.title || 'Projet' }}</h2>
          </div>


          <!-- Informations du projet -->
          <div class="flex w-full justify-center">
            

            <ButtonPrimary 
              :to="projectUrl" 
              :icon="ArrowDown"
              @click="close"
            >
              Voir le projet
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
import ArrowExtend from '~/components/icons/ArrowExtend.vue';
import CloseCross from '~/components/icons/closeCross.vue';
import ButtonPrimary from '~/components/ButtonPrimary.vue';
import ArrowDown from '~/components/icons/ArrowDown.vue';
import { setCursor } from '~/assets/typescript/cursor';
import type { PropType } from 'vue';

// Interface for project data based on content.config.ts schema
interface ProjectData {
  title: string;
  cover1: string;
  summary: string;
  isTopProject: boolean;
  cover2: string;
  tools: string[];
  tags: string[];
  projectUrl: string;
  date: string;
  team?: {
    name: string;
    site?: string;
  }[];
  introduction: string;
  description: string;
  objective: string;
  galleryImages: (string | {
    path: string;
    legend?: string;
  })[];
  [key: string]: unknown;
}

// Type for collections from content.config.ts
type Collections = {
  multimedia: ProjectData;
  web: ProjectData;
}

// Déclaration des propriétés
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  width: {
    type: [String, Number],
    default: undefined
  },
  height: {
    type: [String, Number],
    default: undefined
  },
  format: {
    type: String,
    default: 'webp'
  },
  quality: {
    type: [String, Number],
    default: 30
  },
  loading: {
    type: String as PropType<'lazy' | 'eager'>,
    default: 'lazy'
  },
  fit: {
    type: String,
    default: 'cover'
  }
});

// État
const isOpen = ref(false);
const isVisible = ref(false);
const containerRef = ref<HTMLElement | null>(null);
const project = ref<ProjectData | null>(null);
let cleanupCursor: (() => void) | null = null;

// Intersection Observer pour détecter quand l'image est dans le viewport
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          isVisible.value = true;
          // Une fois que l'image est visible, on peut arrêter d'observer
          observer.unobserve(entry.target);
        }
      });
    },
    {
      rootMargin: '50px', // Commence à charger un peu avant que l'image soit visible
      threshold: 0.1
    }
  );

  if (containerRef.value) {
    observer.observe(containerRef.value);
  }

  // Nettoyage
  onUnmounted(() => {
    if (containerRef.value) {
      observer.unobserve(containerRef.value);
    }
  });
});

// Fetch project data using queryCollection
const fetchProject = async () => {
  try {
    // Get collection and path from projectId (e.g., 'web/teamSquare' -> collection: 'web', path: '/web/teamSquare')
    const [collection] = props.id.split('/');
    // Extract slug from projectId (e.g., 'web/teamSquare' -> 'teamSquare')
    const slug = props.id.split('/').slice(1).join('/');
    
    // Ensure collection is a valid collection key
    if (collection === 'web' || collection === 'multimedia') {
      // Construct the path and normalize to lowercase (to match how content files are stored)
      const contentPath = `/${collection}/${slug}`.toLowerCase();
      console.log(`Fetching content at path: ${contentPath}`);
      
      // First try to debug what content is available
      const allInCollection = await queryCollection<keyof Collections>(collection).all();
      console.log(`All available ${collection} items:`, allInCollection.map(item => ({ 
        title: item.title, 
        path: item.path
      })));
      
      // Fetch data from the collection
      const data = await queryCollection<keyof Collections>(collection)
        .path(contentPath)
        .first();
      
      if (data) {
        project.value = data as unknown as ProjectData;
        console.log("Found project:", project.value.title);
      } else {
        console.error(`No project found for ${contentPath}`);
        
        // Attempt to find by fuzzy matching
        const matchingItem = allInCollection.find(item => 
          item.path.toLowerCase() === contentPath ||
          item.path.toLowerCase().includes(slug.toLowerCase())
        );
        
        if (matchingItem) {
          console.log(`Found match by fuzzy search: ${matchingItem.path}`);
          const fuzzyData = await queryCollection<keyof Collections>(collection)
            .path(matchingItem.path)
            .first();
            
          if (fuzzyData) {
            project.value = fuzzyData as unknown as ProjectData;
            console.log("Found project by fuzzy match:", project.value.title);
          }
        }
      }
    } else {
      console.error(`Invalid collection: ${collection}`);
    }
  } catch (error) {
    console.error('Error fetching project data:', error);
  }
};

// URL du projet
const projectUrl = computed(() => {
  if (!project.value) return '/';
  return `/${props.id}`;
});

// Méthodes
const open = () => {
  isOpen.value = true;
  document.body.style.overflow = 'hidden'; // Empêche le défilement du body quand lightbox est ouverte
};

const close = () => {
  isOpen.value = false;
  document.body.style.overflow = ''; // Restaure le défilement
};

// Fermer la lightbox avec la touche Escape
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && isOpen.value) {
    close();
  }
};

onMounted(() => {
  window.addEventListener('keydown', handleEscape);
  fetchProject();
  
  // Initialiser le curseur personnalisé
  if (containerRef.value) {
    cleanupCursor = setCursor(containerRef.value);
  }
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleEscape);
  
  // Nettoyer le curseur personnalisé
  if (cleanupCursor) {
    cleanupCursor();
  }
});
</script>

<style scoped>
.project-lightbox-container {
  width: 100%;
  height: auto;
  position: relative;
}



.lightbox-modal {
  isolation: isolate;
}

.lightbox-close {
  transition: transform 0.3s ease;
}

.lightbox-close:hover {
  transform: scale(1.1);
}
</style> 