<template>
  <button-back-link to="/notes" text="Notes" />
  <layout-note :note="note[0]" context="update" />
</template>

<script setup>
  import { useNotesStore } from '~/stores/useNotesStore'
  const route = useRoute()
  const notesStore = useNotesStore()
  const {note} = storeToRefs(notesStore)
  const {fetchNote} = notesStore
  fetchNote(route.params.id)
</script>
