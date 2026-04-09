<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { ref } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const route = useRoute()
const isMenuOpen = ref(false)
const isHobbiesOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' }
]

const hobbies = [
  { name: 'Sports', path: '/hobbies/sports' },
  { name: 'Gym', path: '/hobbies/gym' },
  { name: 'Movies', path: '/hobbies/movies' },
  { name: 'Gaming', path: '/hobbies/gaming' },
  { name: 'Music', path: '/hobbies/music' },
  { name: 'Programming', path: '/hobbies/programming' }
]

const isActive = (path: string) => route.path === path
const isHobbyActive = () => route.path.startsWith('/hobbies')

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <RouterLink 
          to="/" 
          class="text-xl font-bold hover:text-secondary transition-colors"
          @click="closeMenu"
        >
          <img src="/fotoPerfil.jpg" alt="AF" class="w-8 h-8 rounded-full object-cover" />
        </RouterLink>

        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium"
            :class="{ 'text-blue-500 dark:text-blue-400': isActive(link.path) }"
          >
            {{ link.name }}
          </RouterLink>
          
          <div 
            class="relative"
            @mouseenter="isHobbiesOpen = true"
            @mouseleave="isHobbiesOpen = false"
          >
            <button
              class="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors font-medium flex items-center gap-1"
              :class="{ 'text-blue-500 dark:text-blue-400': isHobbyActive() }"
            >
              Hobbies
              <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': isHobbiesOpen }" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            
            <div 
              v-show="isHobbiesOpen"
              class="absolute top-full left-0 mt-1 w-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1"
            >
              <RouterLink
                v-for="hobby in hobbies"
                :key="hobby.path"
                :to="hobby.path"
                class="block px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                :class="{ 'text-blue-500 dark:text-blue-400 bg-gray-100 dark:bg-gray-700': isActive(hobby.path) }"
                @click="isHobbiesOpen = false"
              >
                {{ hobby.name }}
              </RouterLink>
            </div>
          </div>
          
          <ThemeToggle />
        </div>

        <div class="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            @click="toggleMenu"
            class="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle menu"
          >
            <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <div 
      v-if="isMenuOpen" 
      class="md:hidden bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700"
    >
      <div class="px-4 py-2 space-y-1">
        <RouterLink
          v-for="link in navLinks"
          :key="link.path"
          :to="link.path"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :class="{ 'text-blue-500 dark:text-blue-400 bg-gray-100 dark:bg-gray-800': isActive(link.path) }"
          @click="closeMenu"
        >
          {{ link.name }}
        </RouterLink>
        <div class="border-t border-gray-200 dark:border-gray-700 my-2"></div>
        <p class="px-3 py-2 text-sm font-medium text-gray-500 dark:text-gray-400">Hobbies</p>
        <RouterLink
          v-for="hobby in hobbies"
          :key="hobby.path"
          :to="hobby.path"
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :class="{ 'text-blue-500 dark:text-blue-400 bg-gray-100 dark:bg-gray-800': isActive(hobby.path) }"
          @click="closeMenu"
        >
          {{ hobby.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
