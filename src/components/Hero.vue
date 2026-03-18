<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Github, Linkedin, FileDown } from 'lucide-vue-next'
</script>

<template>
  <section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col lg:flex-row items-center justify-between gap-12">
        <div class="lg:w-1/2 text-center lg:text-left">
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
            Hi, I'm <span class="text-primary">Alexandre Ferrete</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-2">
            Final Year Computer Engineering Student
          </p>
          <p class="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-xl">
            Passionate about software development, problem solving and building useful digital products.
          </p>
          
          <div class="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="https://github.com/Alexandre-Ferrete"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors"
            >
              <Github class="text-xl" />
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/alexandre-ferrete"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              <Linkedin class="text-xl" />
              LinkedIn
            </a>
            <button
              class="flex items-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-medium hover:border-primary hover:text-primary transition-colors"
            >
              <FileDown class="text-xl" />
              Download CV
            </button>
          </div>
        </div>

        <div class="lg:w-1/2 flex justify-center">
          <div class="relative w-72 h-72 md:w-96 md:h-96">
            <div class="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-full opacity-20 animate-pulse"></div>
            <div class="relative w-full h-full bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <img src="/fotoPerfil.jpg" alt="Alexandre Ferrete" class="w-full h-full object-cover rounded-full" />
            </div>
          </div>
        </div>
      </div>

      <div class="mt-16 flex justify-center">
        <RouterLink
          to="/about"
          class="px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Learn more about me
        </RouterLink>
      </div>
    </div>
  </section>
</template>
