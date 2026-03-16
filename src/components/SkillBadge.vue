<script setup lang="ts">
defineProps<{
  skill: string
}>()
</script>

<template>
  <span class="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium text-sm hover:bg-primary hover:text-white dark:hover:bg-primary transition-all duration-300 cursor-default">
    {{ skill }}
  </span>
</template>
