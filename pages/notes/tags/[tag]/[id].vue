<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">Tagged Notes: <span class="italic">[{{ route.params.tag }}]</span></h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <menu-notes :notes="taggedNotes" :path="`notes/tags/${route.params.tag}`" />
        </template>
        <template #main>
          <div class="h-[calc(100%-2rem)] min-h-[400px] lg:h-full lg:max-h-full">
            <button-back-link to="/notes/tag" text="Notes" />
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
  const {note, taggedNotes} = storeToRefs(notesStore)
  const {fetchNote, fetchTaggedNotes} = notesStore
  fetchTaggedNotes(route.params.tag)
  fetchNote(route.params.id)
</script>
