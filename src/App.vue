<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const themeStore = useThemeStore()
themeStore.initTheme()
</script>

<template>
  <div class="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
    <Navbar />
    <main>
      <RouterView />
    </main>
    <Footer />
  </div>
</template>
