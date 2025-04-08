<template>
  <div 
    class="min-h-screen bg-transition" 
    :class="{
      'bg-grey-50': $route.path === '/' || $route.path === '/projects' || $route.path === '/legalNotice' || $route.path === '/contact' || $route.path.startsWith('/multimedia'),
      'bg-grey-900': $route.path === '/about' || $route.path.startsWith('/web')
    }"
  >
    <LoadingScreen />
   
    <NuxtRouteAnnouncer />
    <div class="relative">
      <NavBar 
        class="sticky top-0 left-0 right-0 z-200 bg-transition" 
        :class="{
          'bg-grey-50': $route.path === '/' || $route.path === '/projects' || $route.path === '/legalNotice' || $route.path === '/contact' || $route.path.startsWith('/multimedia'),
          'bg-grey-900': $route.path === '/about' || $route.path.startsWith('/web')
        }"
      />
      <Transition name="page" mode="out-in">
        <NuxtPage />
      </Transition>
    </div>
    <MainFooter />
  </div>
</template>

<script setup>
const config = useAppConfig()

useSeoMeta({
  title: config.title,
  description: config.description,
})
</script>

<style>
.bg-transition {
  transition: background-color 0.2s ease;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease-out;
}
.page-enter-from {
  opacity: 0;
  transform: translateX(20px);
}
.page-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>