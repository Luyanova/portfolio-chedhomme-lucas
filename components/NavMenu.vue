<template>
    <button 
      class="bg-primary-500 relative flex items-end justify-end align-end gap-2 px-3 py-2 border border-grey-600 rounded-xs lg:hidden transition-[width] duration-300 ease-in-out"
      :class="{ 'w-[288px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]': isOpen }"
      aria-label="Menu"
      @click="$emit('toggle')"
    >
    <div class="flex flex-col items-end w-full">
      <div class="flex items-center gap-2 w-full justify-end">
        <div class="flex flex-col relative w-3 h-2">
          <span 
            class="absolute h-0.25 w-3 bg-grey-800 transition-all duration-300 origin-center"
            :class="{ 'rotate-45 top-[6px]': isOpen, 'top-0': !isOpen }"
          />
          <span 
            class="absolute h-0.25 w-3 bg-grey-800 transition-all duration-300 top-[4px]"
            :class="{ 'opacity-0': isOpen }"
          />
          <span 
            class="absolute h-0.25 w-3 bg-grey-800 transition-all duration-300 origin-center"
            :class="{ '-rotate-45 top-[6px]': isOpen, 'top-[8px]': !isOpen }"
          />
        </div>
        <p class="text-grey-800 text-base font-medium font-['Satoshi_Variable']">{{ isOpen ? 'Fermer' : 'Menu' }}</p>
      </div>
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
      >
        <div v-if="isOpen" class="flex flex-col gap-4 justify-end items-end w-full">
          <nav class="flex flex-col gap-4 justify-end items-end w-full pt-4">
            <NuxtLink 
              v-for="(link, index) in links" 
              :key="link.path"
              :to="link.path"
              class="text-grey-800 text-base font-medium font-['Satoshi_Variable'] transition-all duration-300"
              :style="{ 'transition-delay': `${index * 50}ms` }"
              @click="handleLinkClick(link.path, $event)"
            >
              {{ link.label }}
            </NuxtLink>
            <ButtonSecondary to="/contact" class="w-full transition-all duration-300 mt-8" style="transition-delay: 100ms" @click="handleLinkClick('/contact', $event)">Contact</ButtonSecondary>
          </nav>
        </div>
      </transition>
    </div>
    </button>
  </template>
  
  <script setup>
  import { nextTick } from 'vue'
  
  defineProps({
    isOpen: {
      type: Boolean,
      default: false
    }
  })
  
  const emit = defineEmits(['toggle', 'close'])
  
  const handleLinkClick = (path, event) => {
    event.preventDefault()
    emit('close')
    // Utilisons une fonction qui sera appelée après que les événements du cycle de vie actuel soient terminés
    nextTick(() => {
      navigateTo(path)
    })
  }
  
  const links = [
    { path: '/', label: 'Accueil' },
    { path: '/about', label: 'À Propos' },
    { path: '/projects', label: 'Projets' },
  ]
  </script> 
  
  
  