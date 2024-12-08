<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">Notes</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <div class="space-y-4">
            <UButton to="/notes/active" icon="local-plus" block>Create a New Note</UButton>
            <menu-notes :notes="allNotes" path="notes/active" />
          </div>
        </template>
        <template #main>
          <div class="h-[calc(100%-2rem)] min-h-[400px] lg:h-full lg:max-h-full">
            <button-back-link to="/notes" text="Notes" />
            <p class="mb-6">Editing note...</p>
            <layout-note :note="note[0]" context="update" />
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
  const {note, allNotes} = storeToRefs(notesStore)
  const {fetchNote, fetchNotes} = notesStore
  fetchNotes()
  fetchNote(route.params.id)
</script>
