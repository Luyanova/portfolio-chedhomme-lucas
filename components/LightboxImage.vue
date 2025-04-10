<template>
  <div ref="containerRef" class="lightbox-container relative w-full h-full ">
    <!-- Image thumbnail avec dégradé et icône en coin inférieur droit -->
    <div 
      class="relative cursor-pointer rounded-sm overflow-hidden w-full h-full" 
      @click.stop="open"
    >
      <NuxtImg 
        v-if="isVisible"
        :src="src" 
        :alt="alt"
        :format="format"
        :quality="quality"
        loading="lazy"
        :fit="fit"
        class="w-full h-full object-cover"
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
          class="relative max-w-screen-lg max-h-screen-lg p-4"
        >
          <!-- Icône de fermeture en haut à gauche -->
          <button 
            class="lightbox-close absolute top-6 left-6 z-100 p-3 bg-black/30 rounded-sm cursor-pointer"
            type="button"
            aria-label="Fermer la lightbox"
            @click.stop="close"
          >
            <CloseCross :width="20" :height="20" stroke="#FAFAFA" />
          </button>
          
          <!-- Image en grand -->
          <NuxtImg 
            v-if="isOpen"
            :src="src" 
            :alt="alt"
            format="webp"
            quality="80"
            loading="eager"
            fit="contain"
            class="max-w-full max-h-[90vh] object-contain rounded-sm"
          />
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { setCursor } from '~/assets/typescript/cursor';
import ArrowExtend from '~/components/icons/ArrowExtend.vue';
import CloseCross from '~/components/icons/closeCross.vue';

defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Image'
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
    type: String as () => 'lazy' | 'eager',
    default: 'lazy'
  },
  fit: {
    type: String,
    default: 'cover'
  }
});

const isOpen = ref(false);
const isVisible = ref(false);
const containerRef = ref<HTMLElement | null>(null);
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
    
    // Initialiser le curseur personnalisé
    cleanupCursor = setCursor(containerRef.value);
  }

  // Nettoyage
  onUnmounted(() => {
    if (containerRef.value) {
      observer.unobserve(containerRef.value);
    }
    
    // Nettoyer le curseur personnalisé
    if (cleanupCursor) {
      cleanupCursor();
    }
  });
});

const open = () => {
  isOpen.value = true;
  document.body.style.overflow = 'hidden'; // Empêche le défilement du body quand lightbox est ouverte
};

const close = () => {
  isOpen.value = false;
  document.body.style.overflow = ''; // Restaure le défilement
};

// Fermer la lightbox avec la touche Escape
onMounted(() => {
  const handleEscape = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen.value) {
      close();
    }
  };
  
  window.addEventListener('keydown', handleEscape);
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape);
  });
});
</script>

<style scoped>
.lightbox-container {
  width: 100%;
  height: 100%;
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