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
            <p>Something</p>
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
  onMounted(async () => {
    await fetchNotes()
  })
</script>
