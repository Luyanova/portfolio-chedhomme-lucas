<template>
    <nav 
    class="flex justify-between items-center px-4  border-b lg:px-10 2xl:px-20"
    :class="{ 
        'border-grey-700 bg-grey-900': isHomePage && themeStore.isDeveloperMode,
        'border-grey-600': $route.path === '/about' || $route.path.startsWith('/web') || themeStore.isDeveloperMode
    }"
    >
      <NuxtLink to="/" class="py-4" @click="closeMenu">
        <LogoLucasChedhomme height="48" class="h-12" />
      </NuxtLink>
      <div ref="menuRef" class="relative h-[40px] w-[288px] flex justify-end">
        
        <div class="absolute">

          <NavMenu :is-open="isMenuOpen" @toggle="toggleMenu" @close="closeMenu" />
        </div>

      </div>
      <div 
      class="hidden gap-10 lg:flex border-l pl-10 h-[80.8px] 2xl:pl-20"
      :class="{ 
        'border-grey-700 bg-grey-900': isHomePage && themeStore.isDeveloperMode,
        'border-grey-600': $route.path === '/about' || $route.path.startsWith('/web') || themeStore.isDeveloperMode
    }">
        <NuxtLink 
        to="/about" 
        class="flex items-center font-['Satoshi_Variable'] text-base 2xl:text-lg font-medium leading-[150%] tracking-[0.64px] hover:text-primary-500 transition-colors duration-300"
        :class="{
          'text-grey-50': $route.path.startsWith('/web') || $route.path === '/about' || (isHomePage && themeStore.isDeveloperMode),
          'text-grey-900': (isHomePage && !themeStore.isDeveloperMode) || $route.path === '/contact' || $route.path === '/projects' || $route.path.startsWith('/multimedia')
        }"
        >
          <span class="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full">À Propos</span>
        </NuxtLink>
        <NuxtLink 
        to="/projects" 
        class="flex items-center font-['Satoshi_Variable'] text-base 2xl:text-lg font-medium leading-[150%] tracking-[0.64px] hover:text-primary-500 transition-colors duration-300"
        :class="{
          'text-grey-50': $route.path.startsWith('/web') || $route.path === '/about' || (isHomePage && themeStore.isDeveloperMode),
          'text-grey-900': (isHomePage && !themeStore.isDeveloperMode) || $route.path === '/contact' || $route.path === '/projects' || $route.path.startsWith('/multimedia')
        }"
        >
          <span class="relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-primary-500 after:transition-all after:duration-300 hover:after:w-full">Projets</span>
        </NuxtLink>
        <div class="flex items-center">
          <ButtonPrimary to="/contact">
            Contact
          </ButtonPrimary>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup>
  import { onClickOutside } from '@vueuse/core'
  import { useThemeStore } from '~/stores/themeStore'
  import LogoLucasChedhomme from '~/components/icons/LogoLucasChedhomme.vue'
  
  const isMenuOpen = ref(false)
  const menuRef = ref(null)
  const route = useRoute()
  const themeStore = useThemeStore()
  
  // Vérifier si nous sommes sur la page d'accueil
  const isHomePage = computed(() => route.path === '/')
  
  const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value
  }
  
  const closeMenu = () => {
    isMenuOpen.value = false
  }
  
  onClickOutside(menuRef, () => closeMenu())
  
  // Écoutez les changements de route avec le hook intégré de Nuxt
  watch(() => route.path, () => {
    closeMenu()
  })
  
  onMounted(() => {
    window.addEventListener('popstate', closeMenu)
  })
  
  onUnmounted(() => {
    window.removeEventListener('popstate', closeMenu)
  })
  </script>
  
  