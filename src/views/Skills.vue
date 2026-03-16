<script setup lang="ts">
import { skills } from '@/data/skills'
import SkillBadge from '@/components/SkillBadge.vue'
</script>

<template>
  <section class="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          My <span class="text-primary">Skills</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Technologies and tools I work with to bring ideas to life.
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <div
          v-for="category in skills"
          :key="category.name"
          class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6"
        >
          <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span class="w-2 h-2 bg-primary rounded-full"></span>
            {{ category.name }}
          </h2>
          
          <div class="flex flex-wrap gap-3">
            <SkillBadge
              v-for="skill in category.skills"
              :key="skill.name"
              :skill="skill.name"
            />
          </div>
        </div>
      </div>

      <div class="mt-12 p-8 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
          Always Learning
        </h2>
        <p class="text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
          Technology is constantly evolving, and I stay up-to-date with the latest trends 
          and best practices. I'm always eager to learn new technologies and expand my skill set.
        </p>
      </div>
    </div>
  </section>
</template>
