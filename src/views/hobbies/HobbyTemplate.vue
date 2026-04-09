<script setup lang="ts">
import { computed } from 'vue'
import { hobbies } from '@/data/hobbies'
import { 
  PersonStanding, Dumbbell, Clapperboard, Gamepad2, 
  Music, Code, Heart, Star, Zap 
} from 'lucide-vue-next'

const props = defineProps<{
  hobbyName?: string
}>()

const iconComponents: Record<string, any> = {
  PersonStanding,
  Dumbbell,
  Clapperboard,
  Gamepad2,
  Music,
  Code
}

const hobby = computed(() => {
  if (props.hobbyName) {
    return hobbies.find(h => h.path === `/hobbies/${props.hobbyName}`)
  }
  return null
})

const icon = computed(() => {
  return hobby.value ? iconComponents[hobby.value.icon] || Star : Star
})
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
          <component :is="icon" class="w-10 h-10 text-blue-500" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          {{ hobby?.name || 'Hobby' }}
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          {{ hobby?.description }}
        </p>
      </div>

      <div class="mt-12 grid md:grid-cols-2 gap-8">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <div class="flex items-center gap-3 mb-4">
            <Heart class="w-6 h-6 text-blue-500" />
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Why I Love It</h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            [Add your personal reasons for enjoying this hobby. What makes it special to you? What memories or experiences have you had?]
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <div class="flex items-center gap-3 mb-4">
            <Star class="w-6 h-6 text-blue-500" />
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Favorite Moments</h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            [Share your favorite experiences, achievements, or memorable moments related to this hobby.]
          </p>
        </div>
      </div>

      <div class="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-800 rounded-2xl p-8">
        <div class="flex items-center gap-3 mb-4">
          <Zap class="w-6 h-6 text-blue-500" />
          <h2 class="text-xl font-bold text-gray-900 dark:text-white">Future Goals</h2>
        </div>
        <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
          [What do you want to achieve or explore in this hobby? Any skills you want to develop or goals you want to reach?]
        </p>
      </div>
    </div>
  </section>
</template>
