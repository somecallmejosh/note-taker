<script setup>
  const route = useRoute()
  const links = [{
    label: 'Color Theme',
    to: '/settings/color-theme',
    icon: 'local-sun'
  }, {
    label: 'Font Theme',
    to: '/settings/font-theme',
    icon: 'local-font'
  }, {
    label: 'Password',
    to: '/settings/change-password',
    icon: 'local-lock'
  }]
</script>
<template>
  <UVerticalNavigation :links="links">
    <template #default="{ link }">
      <span class="relative">{{ link.label }}</span>
      <UIcon v-if="link.to == route.fullPath" name="local-chevron-right" class="relative vertical-nav-chevron size-6"/>
    </template>
  </UVerticalNavigation>
</template>
