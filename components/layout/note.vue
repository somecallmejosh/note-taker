<script setup>
  import { useDateFormat } from '@vueuse/core'
  const toast = useToast()
  const notesStore = useNotesStore()
  const { fetchNotes, fetchTaggedNotes, fetchNote } = notesStore

  const props = defineProps({
    note: {
      type: Object,
      required: true
    },
    context: {
      type: String,
      default: 'new'
    }
  })

  const client = useSupabaseClient()
  const user = useSupabaseUser()

  const convertTagsToArray = (tags) => {
    if (!tags) return []
    return typeof tags === 'object' ? tags : tags.split(',').map((tag) => tag.trim())
  }

  const state = ref({
    title: props.note.title || '',
    content: props.note.content || '',
    tags: props.note.tags || null,
    is_archived: props.note.is_archived || false,
    last_edited: props.note.last_edited || null,
  })

  const createNote = async () => {
    const { data, error } = await client
      .from('notes')
      .insert([
        {
          title: state.value.title,
          user_id: user.value?.id,
          tags: convertTagsToArray(state.value.tags),
          content: state.value.content,
        },
      ])
      .select()
  }

  const updateNote = async () => {
    const { data, error } = await client
      .from('notes')
      .update({
        title: state.value.title,
        tags: convertTagsToArray(state.value.tags),
        content: state.value.content,
      })
      .eq('id', props.note.id)
  }

  const submit = async () => {
    if (props.context === 'new') {
      await createNote()
      toast.add({
        id: 'create_note',
        title: 'Created',
        description: 'Your note has been created.',
        timeout: 5000,
      })
    } else {
      await updateNote()
      await fetchNote(props.note.id)
      await fetchTaggedNotes()
      await fetchNotes()
      toast.add({
        id: 'updated_note',
        title: 'Updated',
        description: 'Your note has been updated.',
        timeout: 5000,
      })
    }
  }
</script>
<template>
  <form @submit.prevent="submit" class="flex flex-col justify-between flex-1 h-full gap-6 divide-y dark:divide-neutral-700">
    <div class="space-y-2">
      <div class="pb-2 text-xl font-bold">
        <input v-model="state.title" class="w-full text-xl font-bold placeholder:text-neutral-500" placeholder="Enter a title&hellip;" />
      </div>
      <div class="flex">
        <div class="flex items-center gap-1 basis-40 shrink-0">
          <UIcon name="local-tag" />
          Tags
        </div>
        <div class="flex-1">
          <input v-model="state.tags" class="w-full transition-all duration-150 bg-transparent focus:p-2 placeholder:text-neutral-500" placeholder="Add tags separated by commas (e.g. Work, Planning)" />
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
          <span class="text-neutral-400">{{ state.last_edited ? useDateFormat(note.last_edited, 'ddd MMM Do, YYYY') : 'Not yet saved' }}</span>
        </div>
      </div>
    </div>
    <div class="flex-1 py-4">
      <textarea v-model="state.content" class="block w-full h-full transition-all duration-150 bg-transparent focus:p-4 placeholder:text-neutral-500" placeholder="Start typing your note here&hellip;"></textarea>
    </div>
    <div class="flex items-center gap-2 pt-4">
      <UButton type="submit">Save Note</UButton>
      <UButton type="button" color="gray">Cancel</UButton>
    </div>
  </form>
</template>
