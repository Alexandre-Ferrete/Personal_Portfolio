<script setup lang="ts">
import type { Project } from '@/data/projects'
import { Github, ExternalLink } from 'lucide-vue-next'

defineProps<{
  project: Project
}>()
</script>

<template>
  <div class="group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 dark:border-gray-700">
    <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    
    <div class="p-6 relative z-10">
      <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary transition-colors">
        {{ project.name }}
      </h3>
      
      <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
        {{ project.description }}
      </p>
      
      <div class="flex flex-wrap gap-2 mb-6">
        <span
          v-for="tech in project.technologies"
          :key="tech"
          class="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
        >
          {{ tech }}
        </span>
      </div>
      
      <div class="flex items-center gap-4">
        <a
          :href="project.github"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium text-sm hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors group/btn"
        >
          <Github class="text-lg" />
          View Code
          <span class="absolute inset-0"></span>
        </a>
        <a
          v-if="project.demo"
          :href="project.demo"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm hover:border-primary hover:text-primary transition-colors"
        >
          <ExternalLink class="text-sm" />
          Demo
        </a>
      </div>
    </div>
    
    <div class="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
  </div>
</template>
