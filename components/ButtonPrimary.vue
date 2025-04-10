<template>
    <component 
      ref="buttonRef"
      :is="to ? (isExternal ? 'a' : 'NuxtLink') : 'button'"
      :to="!isExternal ? to : undefined"
      :href="isExternal ? to : undefined"
      :target="isExternal ? '_blank' : undefined"
      :rel="isExternal ? 'noopener noreferrer' : undefined"
      :download="download"
      :disabled="disabled"
      class="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-xs border-1 border-grey-600 cursor-pointer"
      :class="disabled ? 'bg-grey-400 cursor-not-allowed' : 'bg-primary-500 hover:bg-primary-600 hover:shadow-[0px_0px_13.9px_0px_#0AF29D] transition-all duration-300'"
      @click="to && !isExternal ? handleNavigation($event) : null"
    >
      <p class="text-base 2xl:text-lg font-medium font-['Satoshi_Variable']" :class="disabled ? 'text-grey-600' : 'text-grey-900'">
        <slot>{{ label }}</slot>
      </p>
      <component 
        :is="icon" 
        v-if="icon" 
        class="w-4 h-4"
        :class="disabled ? 'text-grey-600' : 'text-grey-900'"
      />
    </component>
  </template>
  
  <script setup lang="ts">


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
    isExternal: {
      type: Boolean,
      default: false
    },
    download: {
      type: [Boolean, String],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  });

  const buttonRef = ref<HTMLElement | null>(null);




  const handleNavigation = (event: MouseEvent) => {
    if (props.to) {
      event.preventDefault();
      navigateTo(props.to);
    }
  };
  </script>