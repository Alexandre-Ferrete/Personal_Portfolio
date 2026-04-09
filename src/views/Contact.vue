<script setup lang="ts">
import { socials } from '@/data/socials'
import { Github, Linkedin, Mail, MapPin, GraduationCap } from 'lucide-vue-next'

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
  <section class="min-h-screen pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-12">
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Get in <span class="text-primary">Touch</span>
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Have a question or want to work together? Feel free to reach out!
        </p>
      </div>

      <div class="max-w-4xl mx-auto">
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Contact Information
            </h2>
            
            <div class="space-y-6">
              <a
                v-for="social in socials"
                :key="social.name"
                :href="social.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center gap-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-700 hover:bg-primary/10 dark:hover:bg-primary/20 transition-colors group"
              >
                <div class="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full group-hover:scale-110 transition-transform">
                  <component :is="getIcon(social.icon)" class="text-xl" />
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">{{ social.name }}</p>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    {{ social.name === 'Email' ? 'alexferrete05@gmail.com' : social.url.replace('https://', '') }}
                  </p>
                </div>
              </a>
            </div>
          </div>

          <div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
            <h2 class="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Location & Education
            </h2>
            
            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-full">
                  <MapPin class="text-xl" />
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">Location</p>
                  <p class="text-gray-500 dark:text-gray-400">Braga, Portugal</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 flex items-center justify-center bg-secondary/10 text-secondary rounded-full">
                  <GraduationCap class="text-xl" />
                </div>
                <div>
                  <p class="font-medium text-gray-900 dark:text-white">University</p>
                  <p class="text-gray-500 dark:text-gray-400">University of Minho</p>
                  <p class="text-sm text-gray-400 dark:text-gray-500">Computer Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>
