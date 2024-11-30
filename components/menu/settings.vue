<script setup>
  const route = useRoute()
  const links = [{
    label: 'Color Theme',
    to: '/settings/color-theme',
    icon: 'i-heroicons-sun'
  }, {
    label: 'Font Theme',
    to: '/settings/font-theme',
    icon: 'i-heroicons-swatch'
  }, {
    label: 'Password',
    to: '/settings/change-password',
    icon: 'i-heroicons-lock-closed'
  }]
</script>
<template>
  <UVerticalNavigation :links="links">
    <template #default="{ link }">
      <span class="relative">{{ link.label }}</span>
      <UIcon v-if="link.to == route.fullPath" name="i-heroicons-chevron-right" class="vertical-nav-chevron" />
    </template>
  </UVerticalNavigation>
</template>
