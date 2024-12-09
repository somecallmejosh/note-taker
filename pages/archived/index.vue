<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">Archived Notes</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <menu-notes :notes="archivedNotes" path="archived/note" />
        </template>
        <template #main>
          <div class="h-[calc(100%-5rem)] lg:h-full">
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
  const {archivedNotes} = storeToRefs(notesStore)
  const {fetchArchivedNotes} = notesStore
  onMounted(async () => {
    await fetchArchivedNotes()
  })
</script>
