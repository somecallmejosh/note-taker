<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">Notes</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <menu-notes :notes="allNotes" path="notes/active" />
        </template>
        <template #main>
          <div class="h-[calc(100%-2rem)] min-h-[400px] lg:h-full lg:max-h-full">
            <button-back-link to="/notes" text="Notes" />
            <layout-note :note="{}" context="new" />
          </div>
        </template>
      </layout-divided-content>
    </template>
  </layout-default>
</template>

<script setup>
  import { useNotesStore } from '~/stores/useNotesStore'
  const notesStore = useNotesStore()
  const {allNotes} = storeToRefs(notesStore)
  const {fetchNotes} = notesStore
  fetchNotes()
</script>
