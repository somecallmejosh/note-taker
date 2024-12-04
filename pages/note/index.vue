<template>
  <div class="h-[calc(100%-2rem)] min-h-[400px] lg:h-full lg:max-h-full">
    <button-back-link to="/notes" text="Notes" />
    <menu-notes :notes="notesStore.activeNotesMenu" />
  </div>
</template>

<script setup>
import { useNotesStore } from '~/stores/useNotesStore'
const notesStore = useNotesStore()
</script>
