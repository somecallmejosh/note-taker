<script setup>
  import Back from './components/back.vue'
  const colorMode = useColorMode()
  const themes = [
    {
      label: 'Light Mode',
      text: 'Pick a clean and classic light theme',
      value: 'light',
      icon: 'local-sun'
    },
    {
      label: 'Dark Mode',
      text: 'Select a sleek and modern dark theme',
      value: 'dark',
      icon: 'local-moon'
    },
    {
      label: 'System',
      text: 'Adapts to your device\'s theme',
      value: 'system',
      icon: 'local-system-theme'
     }
  ]
</script>
<template>
  <Back />
  <h1 class="font-semibold">Change Color Theme</h1>
  <p class="mb-6">Choose your color theme:</p>
  <ul class="flex flex-col w-full max-w-xl gap-4">
    <li v-for="theme in themes" :key="theme.value">
      <button
        class="flex items-center w-full gap-4 p-2 pr-4 border rounded-xl group dark:border-neutral-700"
        :class="colorMode.preference === theme.value ? 'bg-neutral-100 dark:bg-neutral-800 dark:text-neutral-200' : 'bg-netural-100 hover:bg-neutral-100 dark:bg-neutral-900 dark:hover:bg-neutral-800'"
        @click="colorMode.preference = theme.value">
        <span class="flex items-center justify-center bg-white border rounded-lg dark:bg-neutral-800 size-10 dark:border-neutral-700">
          <UIcon :name="theme.icon" class="fill-current size-6" />
        </span>
        <span class="flex-1 text-left">
          <span class="block text-sm font-semibold dark:text-white">{{ theme.label }}</span>
          <span class="block text-xs dark:text-neutral-300">{{  theme.text }}</span>
        </span>
        <span class="translate-y-1">
          <UIcon v-if="colorMode.preference !== theme.value" name="local-radio" />
          <UIcon v-else name="local-radio-active" />
        </span>
      </button>
    </li>
  </ul>
</template>
