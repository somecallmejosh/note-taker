<template>
  <div class="lg:hidden">
    <menu-notes :notes="notesStore.archivedNotesMenu" />
  </div>
</template>

<script setup>
import { useNotesStore } from '~/stores/useNotesStore'
const notesStore = useNotesStore()
</script>
