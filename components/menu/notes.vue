<script setup>
  import { useDateFormat } from '@vueuse/core'
  defineProps({
    notes: Array,
    path: String
  })
</script>
<template>
  <div class="space-y-4">
    <ul v-if="notes" class="space-y-2 divide-y dark:divide-neutral-700">
      <li v-for="note in notes" :key="note.id">
        <NuxtLink :to="`/${path}/${note.id}`" class="block p-2 mt-2 space-y-1.5 transition-colors duration-150 group rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50">
          <p class="text-lg font-bold leading-tight">{{ note.title }}</p>
          <ul class="flex flex-wrap gap-2">
            <li v-for="tag in note.tags" :key="tag">
              <span class="p-1 text-sm capitalize transition-colors duration-150 rounded-lg text-neutral-500 bg-neutral-100 dark:bg-neutral-800 ">{{ tag }}</span>
            </li>
          </ul>
          <p class="text-sm text-neutral-500">{{ useDateFormat(note.last_edited, 'ddd MMM Do, YYYY') }}</p>
        </NuxtLink>
      </li>
    </ul>
    <div v-else>
      <p class="text-lg text-neutral-500">No notes found.</p>
    </div>
  </div>
</template>
<style scoped>
.router-link-exact-active {
  @apply bg-neutral-50 dark:bg-neutral-700/50 pointer-events-none;
}
</style>
