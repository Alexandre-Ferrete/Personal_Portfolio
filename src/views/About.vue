<script setup lang="ts">
import { hobbies } from '@/data/hobbies'
import { FaPersonRunning, FaDumbbell, FaClapperboard, FaGamepad, FaMusic, FaCode } from 'react-icons/fa6'

const getIcon = (iconName: string) => {
  const icons: Record<string, unknown> = {
    FaPersonRunning,
    FaDumbbell,
    FaClapperboard,
    FaGamepad,
    FaMusic,
    FaCode
  }
  return icons[iconName]
}
</script>

<template>
  <section class="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span class="text-primary">Me</span>
          </h1>
          
          <div class="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I am a final year Computer Engineering student at the University of Minho.
            </p>
            <p>
              I enjoy learning new technologies and building software that solves real problems. 
              My interests include software engineering, web development and continuous technical improvement.
            </p>
            <p>
              Throughout my academic journey, I've worked on various projects that have helped me 
              develop strong problem-solving skills and a deep understanding of modern software development practices.
            </p>
          </div>

          <div class="mt-8">
            <RouterLink
              to="/contact"
              class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
            >
              Get in Touch
            </RouterLink>
          </div>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            My <span class="text-primary">Hobbies</span>
          </h2>
          
          <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div
              v-for="hobby in hobbies"
              :key="hobby.name"
              class="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div class="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-3">
                <component :is="getIcon(hobby.icon)" class="text-xl" />
              </div>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {{ hobby.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
