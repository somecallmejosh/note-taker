<template>
  <div class="h-[calc(100%-2rem)] min-h-[400px] lg:h-full lg:max-h-full">
    <button-back-link to="/notes" text="Notes" />
    <layout-note :note="note" />
  </div>
</template>

<script setup>
const route = useRoute()
const note = {
  id: route.params.id,
  title: `Note ${route.params.id}`,
  content: 'Note Content',
  tags: ['dev', 'note'],
  is_archived: false,
  last_edited: 'Jan 1, 2024',
  content: 'All sorts of fancy stuff goes here.',
}
</script>
