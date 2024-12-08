<template>
  {{ content }}
  <div class="flex flex-col h-full gap-4">
    <div class="flex flex-wrap gap-2" v-if="editor">
      <button
        @click="editor.chain().focus().toggleBold().run()"
        :disabled="!editor.can().chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
      >
        <UIcon name="local-bold" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleItalic().run()"
        :disabled="!editor.can().chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
      >
        <UIcon name="local-italic" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleStrike().run()"
        :disabled="!editor.can().chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
      >
        <UIcon name="local-strike" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleCode().run()"
        :disabled="!editor.can().chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
      >
        <UIcon name="local-code" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().setParagraph().run()"
        :class="{ 'is-active': editor.isActive('paragraph') }"
      >
        <UIcon name="local-paragraph" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
      >
        <UIcon name="local-h1" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
      >
        <UIcon name="local-h2" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
      >
        <UIcon name="local-h3" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
      >
        <UIcon name="local-h4" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
      >
        <UIcon name="local-h5" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
      >
        <UIcon name="local-h6" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
      >
        <UIcon name="local-bullet-list" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
      >
        <UIcon name="local-ordered-list" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleCodeBlock().run()"
        :class="{ 'is-active': editor.isActive('codeBlock') }"
      >
        <UIcon name="local-code-block" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().toggleBlockquote().run()"
        :class="{ 'is-active': editor.isActive('blockquote') }"
      >
        <UIcon name="local-blockquote" class="size-6" />
      </button>
      <button @click="editor.chain().focus().setHorizontalRule().run()">
        <UIcon name="local-horizontal-rule" class="size-6" />
      </button>
      <button @click="editor.chain().focus().setHardBreak().run()">
        <UIcon name="local-hard-break" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().undo().run()"
        :disabled="!editor.can().chain().focus().undo().run()"
      >
        <UIcon name="local-undo" class="size-6" />
      </button>
      <button
        @click="editor.chain().focus().redo().run()"
        :disabled="!editor.can().chain().focus().redo().run()"
      >
        <UIcon name="local-redo" class="size-6" />
      </button>
    </div>
    <div class="flex-1 h-full ">
      <TiptapEditorContent v-bind:content="content"
        :editor="editor"
        class="flex-1 h-full p-4 border outline-none rounded-xl" />
    </div>
  </div>
</template>

<script setup>
  defineProps({
    content: String,
  })
  const editor = useEditor({
    content: computed(() => content),
    extensions: [TiptapStarterKit],
  });

  onBeforeUnmount(() => {
    unref(editor).destroy();
  });
</script>

<style scoped>
button {
  @apply size-8 inline-flex items-center justify-center rounded-lg border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-700/50 transition-colors duration-150;
}
</style>
