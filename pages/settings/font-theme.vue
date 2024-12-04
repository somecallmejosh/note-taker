<script setup>
  import Back from './components/back.vue'
import { useFontStore } from '~/stores/useFontStore'
const fontStore = useFontStore()
const { selectedFont } = storeToRefs(fontStore)
const { setFont } = fontStore
const fonts = [
  {
    label: 'Sans-serif',
    text: 'Clean and modern, easy to read.',
    value: 'font-sans',
    icon: 'local-font-sans-serif',
  },
  {
    label: 'Serif',
    text: 'Classic and elegant for a timeless feel.',
    value: 'font-serif',
    icon: 'local-font-serif',
  },
  {
    label: 'Monospace',
    text: 'Code-like, great for a technical vibe.',
    value: 'font-monospace',
    icon: 'local-font-monospace',
  },
];
</script>

<template>
  <button-back-link to="/settings" text="Settings" />
  <h1 class="font-semibold">Change Color Theme</h1>
  <p class="mb-6">Choose your color theme:</p>
  <ul class="flex flex-col w-full max-w-xl gap-4">
    <li v-for="theme in fonts" :key="theme.value">
      <button-faux-radio
        :label="theme.label"
        :text="theme.text"
        :icon="theme.icon"
        :valueCheck="selectedFont === theme.value"
        :setValue="() => setFont(theme.value)"
      />
    </li>
  </ul>
</template>
