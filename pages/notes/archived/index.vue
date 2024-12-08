<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">Archived Notes</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <menu-notes :notes="archivedNotes" path="notes/archived" />
        </template>
        <template #main>
          <div class="h-[calc(100%-2rem)] min-h-[400px] lg:h-full lg:max-h-full">
            <button-back-link to="/notes/archived" text="Notes" />
            <layout-note :note="{}" context="update" />
          </div>
        </template>
      </layout-divided-content>
    </template>
  </layout-default>
</template>

<script setup>
  import { useNotesStore } from '~/stores/useNotesStore'
  const route = useRoute()
  const notesStore = useNotesStore()
  const {note, archivedNotes} = storeToRefs(notesStore)
  const {fetchNote, fetchArchivedNotes} = notesStore
  fetchArchivedNotes()
  fetchNote(route.params.id)
</script>
