<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">All Notes</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <UButton icon="local-plus" to="/notes/new" label="New Note" block />
          <menu-notes :notes="allNotes" path="active/note" />
        </template>
        <template #main>
          <div class="h-[calc(100%-5rem)] lg:h-[calc(100%-1rem)]">
            <div v-if="loading" class="flex items-center gap-1">
              Loading...
            </div>
            <div v-else class="h-full">
              <layout-note v-if="note" :note="note[0]" context="update" />
            </div>
          </div>
        </template>
        <template #aside2>
          <div class="space-y-4 ">
            <UButton icon="local-archive" color="neutral" @click="deleteNote" variant="outline" class="w-full">Archive Note</UButton>
            <UButton icon="local-delete" color="neutral" @click="deleteNote" variant="outline" class="w-full">Delete</UButton>
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
  const { note, allNotes } = storeToRefs(notesStore)
  const { fetchNote, fetchNotes } = notesStore
  const loading = ref();
  onMounted(async () => {
    loading.value = true;
    await fetchNote(route.params.id); // Fetch the current note
    if (!allNotes.value.length) {
      await fetchNotes()
    }

    loading.value = false;
  })
</script>
