<template>
  <div v-if="project" class="next-project py-5">
    <div class="group">
      <div class="flex flex-col gap-4 lg:gap-8 2xl:gap-10 lg:flex-row">
        <!-- Image du projet -->
        <div class="h-60 sm:h-90 sm:w-1/2 lg:w-1/3 2xl:h-160">
          <NuxtImg 
            :src="project.cover1" 
            :alt="project.title"
            format="webp"
            quality="50"
            loading="lazy"
            fit="cover" 
            class="w-full h-full rounded-sm object-cover" />
        </div>

        
        
        <!-- Informations du projet -->
        <div class="flex flex-col gap-8 lg:w-full lg:justify-between">
          <div class="flex flex-col">
            <h3 class="text-primary-500 font-['Owners_Wide'] text-2xl sm:text-3xl 2xl:text-4xl font-bold leading-[140%] tracking-[0.48px]">
              {{ project.title }}
            </h3>
            
            <p 
              v-if="project.summary"
              class="font-['Satoshi_Variable']"
              :class="{
                'text-grey-500': $route.path.startsWith('/multimedia/'),
                'text-grey-400': $route.path.startsWith('/web/')
              }">
              {{ project.summary }}
            </p>
          </div>
          
          <div 
          class="flex flex-col gap-4 sm:flex-row" :class="{
            'text-grey-900': $route.path.startsWith('/multimedia/'),
            'text-grey-50': $route.path.startsWith('/web/')
          }">

            <div class="flex flex-col gap-4 sm:w-1/2 lg:w-full">
                <!-- Date -->
                <div class="flex flex-col gap-2">
                  <p 
                    class="font-['Satoshi_Variable'] text-lg 2xl:text-xl font-medium leading-[150%] tracking-[0.54px]">
                    Date
                  </p>
                  <p 
                    class="font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]"
                    :class="{
                      'text-grey-500': $route.path.startsWith('/multimedia/'),
                      'text-grey-400': $route.path.startsWith('/web/')
                    }">
                    {{ project.date }}
                  </p>
                </div>

                <!-- Tags -->
                <div class="flex flex-col gap-2">
                  <p 
                    class="font-['Satoshi_Variable'] text-lg 2xl:text-xl font-medium leading-[150%] tracking-[0.54px]">
                    Type de projet
                  </p>
                  <div class="flex flex-wrap lg:flex-nowrap gap-2 sm:max-w-4/5">
                    <span 
                      v-for="tag in project.tags" 
                      :key="tag" 
                      class="text-grey-50 bg-secondary-500 px-3 py-1.5 rounded-xs font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]"
                    >
                      {{ tag }}
                    </span>
                  </div>
                </div>

          </div>

          <div class="flex flex-col gap-4 sm:w-1/2 lg:w-full">

                  <!-- Outils (si disponibles) -->
                  <div v-if="project.tools?.length">
                    <p 
                      class="font-['Satoshi_Variable'] text-lg 2xl:text-xl font-medium leading-[150%] tracking-[0.54px]">
                      Outils
                    </p>
                    <p 
                      class="font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]"
                      :class="{
                        'text-grey-500': $route.path.startsWith('/multimedia/'),
                        'text-grey-400': $route.path.startsWith('/web/')
                      }">
                      {{ project.tools.join(', ') }}
                    </p>
                  </div>
                  
                  <!-- Team (si disponible) -->
                  <div v-if="project.team?.length">
                    <p 
                      class="font-['Satoshi_Variable'] text-lg 2xl:text-xl font-medium leading-[150%] tracking-[0.54px]">
                      Autre(s) membre(s)
                    </p>
                    <p 
                      class="font-['Satoshi_Variable'] text-base 2xl:text-lg font-normal leading-[150%] tracking-[0.64px]"
                      :class="{
                        'text-grey-500': $route.path.startsWith('/multimedia/'),
                        'text-grey-400': $route.path.startsWith('/web/')
                      }">
                      {{ project.team && project.team.map(m => m.name).join(', ') }}
                    </p>
                  </div>
                </div>

              </div>
          <div class="flex justify-end mt-4">
            <ButtonPrimary :to="project.path" :icon="ArrowUp">
              Voir le projet
            </ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ArrowUp from '~/components/icons/ArrowUp.vue'

interface TeamMember {
  name: string;
  site?: string;
}

interface ProjectProps {
  project?: {
    title: string;
    cover1: string;
    summary?: string;
    tools?: string[];
    team?: TeamMember[];
    date: string;
    tags?: string[];
    path?: string;
  }
}

defineProps<ProjectProps>()

defineEmits(['view-project'])
</script>