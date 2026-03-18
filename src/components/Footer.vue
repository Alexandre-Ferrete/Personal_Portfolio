<script setup lang="ts">
import { socials } from '@/data/socials'
import { Github, Linkedin, Mail } from 'lucide-vue-next'

const getIcon = (iconName: string) => {
  const icons: Record<string, unknown> = {
    Github,
    Linkedin,
    Mail
  }
  return icons[iconName]
}
</script>

<template>
  <footer class="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div class="flex flex-col md:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-2">
          <span class="text-lg font-bold text-primary">Alexandre Ferrete</span>
          <span class="text-gray-500 dark:text-gray-400">|</span>
          <span class="text-gray-600 dark:text-gray-400">Computer Engineering Student</span>
        </div>

        <div class="flex items-center gap-6">
          <a
            v-for="social in socials"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors text-xl"
            :aria-label="social.name"
          >
            <component :is="getIcon(social.icon)" />
          </a>
        </div>
      </div>

      <div class="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p class="text-center text-sm text-gray-500 dark:text-gray-400">
          &copy; {{ new Date().getFullYear() }} Alexandre Ferrete. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
