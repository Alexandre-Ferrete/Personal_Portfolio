<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import { ref, computed } from 'vue'
import ThemeToggle from './ThemeToggle.vue'

const route = useRoute()
const isMenuOpen = ref(false)

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' }
]

const isActive = (path: string) => route.path === path

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
          class="text-xl font-bold text-primary hover:text-secondary transition-colors"
          @click="closeMenu"
        >
          AF
        </RouterLink>

        <div class="hidden md:flex items-center space-x-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors font-medium"
            :class="{ 'text-primary dark:text-primary': isActive(link.path) }"
          >
            {{ link.name }}
          </RouterLink>
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
          class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          :class="{ 'text-primary bg-gray-100 dark:bg-gray-800': isActive(link.path) }"
          @click="closeMenu"
        >
          {{ link.name }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
