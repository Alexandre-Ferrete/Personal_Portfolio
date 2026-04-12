<script setup lang="ts">
import { Trophy, Target, Zap, Compass } from 'lucide-vue-next'
</script>

<template>
  <section class="min-h-screen pt-24 pb-16 bg-white dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="mb-8">
        <RouterLink
          to="/about"
          class="inline-flex items-center gap-2 text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mb-6 transition-colors"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to About
        </RouterLink>
      </div>

      <div class="text-center mb-12">
        <div class="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-6">
          <Trophy class="w-10 h-10 text-blue-500" />
        </div>
        <h1 class="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Sports
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
          Sports have always been an integral part of my life. I practice a variety of sports including football, tennis, ping-pong, and orienteering.
        </p>
      </div>

      <div class="mt-12 space-y-8">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <div class="flex items-center gap-3 mb-4">
            <Target class="w-6 h-6 text-blue-500" />
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Football</h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Football is a team sport where passion meets strategy on the pitch. There's nothing quite like the thrill of a well-executed play or the bond formed with teammates through every match.
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <div class="flex items-center gap-3 mb-4">
            <Zap class="w-6 h-6 text-blue-500" />
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Tennis</h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Tennis is a solo battle of wills played across a net. Every serve, every rally is a mental chess match where positioning and anticipation make all the difference.
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <div class="flex items-center gap-3 mb-4">
            <Zap class="w-6 h-6 text-blue-500" />
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Ping-Pong</h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Ping-pong proves that the best things come in small packages. Fast, accessible, and endlessly engaging — it's the perfect sport for quick matches and friendly competition.
          </p>
        </div>

        <div class="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8">
          <div class="flex items-center gap-3 mb-4">
            <Compass class="w-6 h-6 text-blue-500" />
            <h2 class="text-xl font-bold text-gray-900 dark:text-white">Orienteering</h2>
          </div>
          <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
            Orienteering is the ultimate adventure sport. Navigating through unknown terrain with just a map and compass, finding checkpoints in the wild — it's exploration meets athletics.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
