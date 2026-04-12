<script setup lang="ts">
import { hobbies } from '@/data/hobbies'
import { Dumbbell, Clapperboard, Gamepad2, Music, Code, PersonStanding } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const getIcon = (iconName: string) => {
  const icons: Record<string, unknown> = {
    PersonStanding,
    Dumbbell,
    Clapperboard,
    Gamepad2,
    Music,
    Code
  }
  return icons[iconName]
}
</script>

<template>
  <section id="about" class="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About <span class="text-primary">Me</span>
          </h1>
          
          <div class="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              I am a final year Informatics Engineering student at the University of Minho.
            </p>
            <p>
              I enjoy learning new technologies and building software that solves real problems. My interests include software engineering, web development and continuous technical improvement. I am naturally curious and tend to dive deeply into new areas, often dedicating significant time to mastering emerging technologies and concepts.
            </p>
            <p>
              Throughout my academic journey, I've worked on various projects that have helped me develop strong problem-solving skills and a deep understanding of modern software development practices.
               Additionally, I have balanced my academic responsibilities with professional experience at Quinta do Lago dos Cisnes, which strengthened my ability to manage time effectively, meet deadlines,
              and perform well under pressure.
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
            <RouterLink
              v-for="hobby in hobbies"
              :key="hobby.name"
              :to="hobby.path"
              class="flex flex-col items-center p-4 bg-white dark:bg-gray-700 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <div class="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full mb-3">
                <component :is="getIcon(hobby.icon)" class="text-xl" />
              </div>
              <span class="text-sm font-medium text-gray-700 dark:text-gray-300 text-center">
                {{ hobby.name }}
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
