<template>
  <div class="bg-grey-800 flex flex-col items-center justify-center min-h-screen px-4">


    <NuxtImg 
      src="/img/error/chevalierAgenou.png" 
      class="w-[70%] h-auto object-cover rounded-sm" 
      style="background-blend-mode: color-dodge; mix-blend-mode: plus-lighter;"
    />

    <h1 class="text-3xl font-['Owners_Wide'] font-bold text-primary-500">
      {{ error.statusCode === 404 ? '404' : error.statusCode || 'Erreur' }}
    </h1>
    <p class="text-grey-400 text-l font-['Satoshi_Variable'] mb-8">
      {{ error.statusCode === 404 ? 'Page non trouvée' : 'Une erreur est survenue' }}
    </p>

    
    <NuxtLink to="/" class="bg-primary-500  cursor-pointer inline-flex items-center justify-center gap-2 px-6 py-2 rounded-xs border-1 border-grey-600">
      <span>Accueil</span>
    </NuxtLink>

    <p class="text-grey-400 text-base font-['Satoshi_Variable'] mt-4 text-center max-w-md">
      {{ error.statusCode === 404 
        ? "(N'abandonnez pas)" 
        : "J'essaie de résoudre ce problème. Veuillez réessayer plus tard." 
      }}
    </p>
    

  </div>
</template>

<script setup>

// Récupérer l'objet error
const props = defineProps({
  error: {
    type: Object,
    default: () => ({ statusCode: 500, message: 'Erreur inconnue' })
  }
})

// Définir le titre de la page
useHead({
  title: props.error?.statusCode === 404 
    ? 'Page non trouvée | Lucas Chedhomme' 
    : 'Erreur | Lucas Chedhomme'
})


</script> 