<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { FaSun, FaMoon } from 'react-icons/fa6'

const themeStore = useThemeStore()
</script>

<template>
  <button
    @click="themeStore.toggleTheme"
    class="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
    :aria-label="themeStore.isDark ? 'Switch to light mode' : 'Switch to dark mode'"
  >
    <FaSun v-if="themeStore.isDark" class="text-lg" />
    <FaMoon v-else class="text-lg" />
  </button>
</template>
