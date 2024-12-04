<script setup>
  defineProps({
    notes: Array
  })
</script>
<template>
  <div class="space-y-4">
    <UButton to="/note/new" icon="local-plus" block>Create a New Note</UButton>
    <ul class="space-y-2 divide-y dark:divide-neutral-700">
      <li v-for="note in notes" :key="note.id">
        <NuxtLink :to="`/note/${note.id}`" class="block p-2 mt-2 space-y-1.5 transition-colors duration-150 group rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-700/50">
          <p class="text-lg font-bold leading-tight">{{ note.label }}</p>
          <ul class="flex flex-wrap gap-2">
            <li v-for="tag in note.tags" :key="tag">
              <span class="p-1 text-sm capitalize transition-colors duration-150 rounded-lg text-neutral-500 bg-neutral-100 dark:bg-neutral-800 ">{{ tag }}</span>
            </li>
          </ul>
          <p class="text-sm text-neutral-500">{{ note.date }}</p>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
