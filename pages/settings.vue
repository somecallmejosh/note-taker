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
  <layout-default>
    <template #header>
      <h1>Settings</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <UVerticalNavigation :links="links">
            <template #default="{ link }">
              <span class="relative">{{ link.label }}</span>
              <UIcon v-if="link.to == route.fullPath" name="i-heroicons-chevron-right" class="vertical-nav-chevron" />
            </template>
          </UVerticalNavigation>
        </template>
        <template #main>
          <NuxtPage />
        </template>
      </layout-divided-content>
    </template>
  </layout-default>
</template>
<style>
.vertical-nav-chevron {
  @apply absolute right-2 transition-transform transform;
}
</style>
