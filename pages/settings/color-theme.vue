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
  <button-back-link to="/settings" text="Settings" />
  <h1 class="font-semibold">Change Color Theme</h1>
  <p class="mb-6">Choose your color theme:</p>
  <ul class="flex flex-col w-full max-w-xl gap-4">
    <li v-for="theme in themes" :key="theme.value">
      <button-faux-radio
        :label="theme.label"
        :text="theme.text"
        :icon="theme.icon"
        :valueCheck="colorMode.preference === theme.value"
        :setValue="() => colorMode.preference = theme.value"
      />
    </li>
  </ul>
</template>
