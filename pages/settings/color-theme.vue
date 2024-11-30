<script setup>
  import Back from './components/back.vue'
</script>
<template>
  <Back />
  <h1>Change Color Theme</h1>
  <ul>
    <li>
      <nuxt-link to="/settings/color-theme/light">Light</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/settings/color-theme/dark">Dark</nuxt-link>
    </li>
    <li>
      <nuxt-link to="/settings/color-theme/auto">System</nuxt-link>
    </li>
  </ul>
</template>
