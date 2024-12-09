<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">Tagged Notes</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <menu-notes :notes="taggedNotes" :path="`tags/${route.params.tag}/note`" />
        </template>
        <template #main>
          <div class="h-[calc(100%-5rem)] lg:h-[calc(100%-2rem)]">
            <NuxtPage />
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
  const { taggedNotes } = storeToRefs(notesStore)
  const { fetchTaggedNotes } = notesStore
  onMounted(async () => {
    await fetchTaggedNotes(route.params.tag)
  })
</script>
