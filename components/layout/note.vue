<script setup>
  const client = useSupabaseClient()
  const user = useSupabaseUser()
  const props = defineProps({
    note: {
      type: Object,
      required: true
    },
  })

  const route = useRoute()

  const state = ref({
    title: props.note.title || 'Enter a title...',
    content: props.note.content || 'Enter your note here...',
    tags: props.note.tags || null,
    is_archived: props.note.is_archived || false,
    last_edited: props.note.last_edited || null,
  })

  const submit = async () => {
    console.log('submitting note...')
    const { data, error } = await client
      .from('notes')
      .insert([
        {
          title: state.value.title,
          user_id: user.value?.id,
          tags: ['one', 'two'],
          content: state.value.content,
        },
      ])
      .select()
  }
</script>
<template>
  <form @submit.prevent="submit" class="flex flex-col justify-between flex-1 h-full gap-6 divide-y dark:divide-neutral-700">
    <div class="space-y-2">
      <div class="pb-2 text-xl font-bold">
        <input v-model="state.title" class="text-xl font-bold" placeholder="Add tags&hellip;" />
      </div>
      <div class="flex">
        <div class="flex items-center gap-1 basis-40 shrink-0">
          <UIcon name="local-tag" />
          Tags
        </div>
        <div class="flex-1">
          <input v-model="state.tags" class="w-full transition-all duration-150 bg-transparent focus:p-2" placeholder="Add tags&hellip;" />
        </div>
      </div>
      <div v-if="state.is_archived" class="flex">
        <div class="flex items-center gap-1 basis-40 shrink-0">
          <UIcon name="local-status" />
          Status
        </div>
        <div class="flex-1">
          <span class="text-neutral-400">Archived</span>
        </div>
      </div>
      <div class="flex">
        <div class="flex items-center gap-1 basis-40 shrink-0">
          <UIcon name="local-clock" />
          Last edited
        </div>
        <div class="flex-1">
          <span class="text-neutral-400">{{ state.last_edited ? note.last_edited : 'Not yet saved' }}</span>
        </div>
      </div>
    </div>
    <div class="flex-1 py-4">
      <textarea v-model="state.content" class="block w-full h-full transition-all duration-150 bg-transparent focus:p-4" placeholder="Enter your note here&hellip;"></textarea>
    </div>
    <div class="flex items-center gap-2 pt-4">
      <UButton type="submit">Save Note</UButton>
      <UButton type="button" color="gray">Cancel</UButton>
    </div>
  </form>
</template>
