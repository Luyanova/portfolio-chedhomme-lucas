<template>
  <div class="lightbox-container relative w-40 h-35 2xl:w-80 2xl:h-70" @click="$emit('click')">
    <!-- Image thumbnail avec dégradé et icône en coin inférieur droit -->
    <div 
      class="relative cursor-pointer rounded-xs overflow-hidden w-full h-full"
    >
      <NuxtImg 
        :src="src" 
        :alt="alt"
        format="webp"
        quality="50"
        loading="lazy"
        fit="cover"
        class="w-full h-full object-cover"
      />
      <!-- Dégradé vertical partant du bas -->
      <div class="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-grey-900/70 to-transparent pointer-events-none" />
      <!-- Icône ArrowExtend en bas à droite -->
      <div class="absolute bottom-2 right-2 p-1">
        <ArrowExtend :width="16" :height="16" stroke="#FAFAFA" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowExtend from '~/components/icons/ArrowExtend.vue'

defineProps({
  src: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'Image projet multimédia'
  }
})

defineEmits(['click'])
</script>