<script setup>
  defineProps({
    label: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    valueCheck: {
      type: [Function, Boolean],
      required: true
    },
    setValue: {
      type: Function,
      required: true
    },
  })
</script>
<template>
    <button
      class="flex items-center w-full gap-4 p-2 pr-4 border rounded-xl group dark:border-neutral-700"
      :class="valueCheck ? 'bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-200' : 'bg-netural-100 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800'"
      @click="setValue">
      <span class="flex items-center justify-center bg-white border rounded-lg dark:bg-neutral-800 size-10 dark:border-neutral-700">
        <UIcon :name="icon" class="fill-current size-6" />
      </span>
      <span class="flex-1 text-left">
        <span class="block text-sm font-semibold dark:text-white">{{ label }}</span>
        <span class="block text-xs dark:text-neutral-300">{{  text }}</span>
      </span>
      <span class="translate-y-1">
        <UIcon v-if="!valueCheck" name="local-radio" />
        <UIcon v-else name="local-radio-active" />
      </span>
    </button>
</template>
