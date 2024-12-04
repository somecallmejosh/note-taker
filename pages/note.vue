<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">Notes</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <menu-notes :notes="notesStore.activeNotesMenu" />
        </template>
        <template #main>
          <NuxtPage />
        </template>
        <template #aside2>
          <h1>Aside 2</h1>
        </template>
      </layout-divided-content>
    </template>
  </layout-default>
</template>

<script setup>
const route = useRoute()
import { useNotesStore } from '~/stores/useNotesStore'
const notesStore = useNotesStore()
</script>
