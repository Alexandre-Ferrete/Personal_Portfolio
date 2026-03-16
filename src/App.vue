<script setup lang="ts">
import { useThemeStore } from '@/stores/theme'
import { onMounted, watchEffect } from 'vue'
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

const themeStore = useThemeStore()

onMounted(() => {
  themeStore.initTheme()
})

watchEffect(() => {
  if (themeStore.isDark) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
})
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
