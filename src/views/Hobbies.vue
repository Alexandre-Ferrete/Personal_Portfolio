<script setup lang="ts">
import { hobbies } from '@/data/hobbies'
import { 
  PersonStanding, Dumbbell, Clapperboard, Gamepad2, 
  Music, Code, Star 
} from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const iconComponents: Record<string, any> = {
  PersonStanding,
  Dumbbell,
  Clapperboard,
  Gamepad2,
  Music,
  Code
}
</script>

<template>
  <section class="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <RouterLink
          to="/about"
          class="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mb-6 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to About
        </RouterLink>
      </div>

      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
          <Star class="w-10 h-10 text-blue-500" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Hobbies
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          A collection of activities I'm passionate about.
        </p>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 gap-6">
        <RouterLink
          v-for="hobby in hobbies"
          :key="hobby.name"
          :to="hobby.path"
          class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
        >
          <div class="flex flex-col items-center text-center">
            <div class="w-16 h-16 flex items-center justify-center bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-full mb-4">
              <component :is="iconComponents[hobby.icon] || Star" class="w-8 h-8" />
            </div>
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {{ hobby.name }}
            </h2>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ hobby.description.split('.')[0] }}.
            </p>
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>
