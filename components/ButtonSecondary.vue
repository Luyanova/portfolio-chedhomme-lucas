<template>
    <component 
      ref="buttonRef"
      :is="to ? (isExternal ? 'a' : 'NuxtLink') : 'button'"
      :to="!isExternal ? to : undefined"
      :href="isExternal ? to : undefined"
      :target="isExternal ? '_blank' : undefined"
      :rel="isExternal ? 'noopener noreferrer' : undefined"
      :download="download"
      class="bg-grey-900 hover:bg-grey-600 hover:shadow-[0px_0px_13.9px_0px_#0AF29D] transition-all duration-300 inline-flex items-center justify-center gap-2 px-6 py-2 rounded-xs border-1 border-grey-600"
      @click="to && !isExternal ? handleNavigation($event) : null"
    >
      <p class="text-grey-100 text-base 2xl:text-lg font-medium font-['Satoshi_Variable']">
        <slot>{{ label }}</slot>
      </p>
      <component 
        v-if="icon" 
        :is="icon" 
        class="w-5 h-5"
        :stroke="iconColor"
      />
    </component>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue';
  import { setCursor } from '~/assets/typescript/cursor';

  const props = defineProps({
    label: {
      type: String,
      default: ''
    },
    to: {
      type: String,
      default: ''
    },
    icon: {
      type: Object,
      default: null
    },
    iconColor: {
      type: String,
      default: '#E5F2ED'
    },
    isExternal: {
      type: Boolean,
      default: false
    },
    download: {
      type: [Boolean, String],
      default: false
    }
  });

  const buttonRef = ref<HTMLElement | null>(null);
  let cleanupCursor: (() => void) | null = null;

  onMounted(() => {
    if (buttonRef.value) {
      cleanupCursor = setCursor(buttonRef.value, {
        size: {
          default: 30,
          hover: 45
        },
        offset: {
          x: 15,
          y: 15
        }
      });
    }
  });

  onUnmounted(() => {
    if (cleanupCursor) {
      cleanupCursor();
    }
  });

  const handleNavigation = (event: MouseEvent) => {
    if (props.to) {
      event.preventDefault();
      navigateTo(props.to);
    }
  };
  </script>