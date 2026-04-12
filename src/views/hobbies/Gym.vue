<script setup lang="ts">
import { useRoute } from 'vue-router'
import { hobbies } from '@/data/hobbies'
import { Dumbbell, Heart, Target, Clock } from 'lucide-vue-next'

const route = useRoute()
const hobbySlug = route.params.hobby as string

const hobby = hobbies.find(h => h.path === `/hobbies/${hobbySlug}`)

const gymHighlights = [
  { icon: Clock, title: 'Frequency', text: '5 times per week' },
  { icon: Target, title: 'Focus', text: 'Strength & endurance' },
  { icon: Heart, title: 'Benefits', text: 'Mental clarity & discipline' }
]
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
          <Dumbbell class="w-10 h-10 text-blue-500" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ hobby?.name || 'Gym' }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {{ hobby?.description }}
        </p>
      </div>

      <div class="grid md:grid-cols-3 gap-6 mt-12">
        <div 
          v-for="(item, index) in gymHighlights" 
          :key="index"
          class="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
        >
          <div class="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4">
            <component :is="item.icon" class="w-6 h-6 text-blue-500" />
          </div>
          <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">{{ item.title }}</h3>
          <p class="text-gray-600 dark:text-gray-400">{{ item.text }}</p>
        </div>
      </div>

      <div class="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Why I Love It</h2>
        <ul class="space-y-3 text-gray-600 dark:text-gray-400">
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">•</span>
            <span>Discipline and consistency are the foundations of progress, both in the gym and in life.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">•</span>
            <span>Physical training directly impacts mental health, helping me stay focused and productive.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">•</span>
            <span>Setting and achieving fitness goals provides a sense of accomplishment that translates to other areas.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="text-blue-500 mt-1">•</span>
            <span>It's a great way to disconnect from screens and reconnect with my body.</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
