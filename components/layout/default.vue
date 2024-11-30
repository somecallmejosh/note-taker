<script setup lang="ts">
  const links = [{
    label: 'All Notes',
    icon: 'i-heroicons-home',
    to: '/getting-started/installation'
  }, {
    label: 'Archived Notes',
    icon: 'i-heroicons-archive-box-arrow-down',
    to: '/components/vertical-navigation'
  }]

  const tags = [{
    label: 'Ruby on Rails',
    icon: 'i-heroicons-tag',
    to: '/getting-started/installation'
  }, {
    label: 'Nuxt.js',
    icon: 'i-heroicons-tag',
    to: '/components/vertical-navigation'
  },
  {
    label: 'Vue.js',
    icon: 'i-heroicons-tag',
    to: '/components/vertical-navigation'
  },
  {
    label: 'CSS',
    icon: 'i-heroicons-tag',
    to: '/components/vertical-navigation'
  }]

  const footerLinks = [{
    label: 'Home',
    to: '/',
    icon: 'i-heroicons-home'
  }, {
    label: 'search',
    to: '',
    action: () => alert('search'),
    icon: 'i-heroicons-magnifying-glass'
  },
    {
      label: 'Archived',
      to: '/archived',
      icon: 'i-heroicons-archive-box-arrow-down'
    },
    {
      label: 'Tags',
      to: '/tags',
      icon: 'i-heroicons-tag'
    },
    {
      label: 'Settings',
      to: '/settings',
      icon: 'i-heroicons-cog'
    },
  ]
</script>
<template>
  <div class="flex flex-1 h-dvh lg:divide-x">
    <aside class="hidden lg:flex lg:flex-col lg:basis-[272px] lg:shrink-0 overflow-y-auto p-4">
      <Logo class="mb-6" />
      <UVerticalNavigation :links="links" />
      <UDivider class="my-6" />
      <p class="mb-4 text-sm text-neutral-500">Tags</p>
      <UVerticalNavigation :links="tags" />
    </aside>
    <div class="relative flex flex-col flex-1 overflow-y-auto bg-neutral-100 lg:bg-white">
      <header class="flex items-center w-full px-8 lg:sticky lg:top-0 h-14 md:h-16 lg:h-20 lg:border-b shrink-0 lg:bg-white">
        <Logo class="lg:hidden" />
        <div class="hidden lg:flex lg:flex-1">
          <slot name="header" />
          <ULink to="/settings/color-theme" class="ml-auto">
            <div class="sr-only">Settings</div>
            <UIcon name="i-heroicons-cog" class="size-6" />
          </ULink>
        </div>
      </header>
      <main class="flex flex-1 overflow-y-scroll bg-white rounded-t-2xl lg:rounded-none">
        <slot name="main" />
      </main>
      <footer class="flex py-4 bg-white border-t shadow-lg lg:hidden shrink-0">
        <ul class="flex flex-1 divide-x">
          <li v-for="(link, index) in footerLinks" :key="index" class="footer-li">
            <NuxtLink v-if="link.to" :to="link.to" class="footer-button">
              <div class="inline-flex flex-col justify-center w-full text-center">
                <UIcon :name="link.icon" class="w-6 h-6 mx-auto" />
                <span class="text-sm">{{ link.label }}</span>
              </div>
            </NuxtLink>
            <button v-else @click="link.action" class="footer-button">
              <div class="inline-flex flex-col justify-center w-full text-center">
                <UIcon :name="link.icon" class="w-6 h-6 mx-auto" />
                <span class="text-sm">{{ link.label }}</span>
              </div>
            </button>
          </li>
        </ul>
      </footer>
    </div>
  </div>
</template>

<style>
.footer-li {
  @apply flex-1 flex items-center justify-center;
}
.footer-button {
  @apply inline-flex items-center justify-center py-2 rounded-lg w-[90%] transition-colors duration-200;
}
footer .router-link-active,
.footer-button:hover,
.footer-button:focus {
  @apply bg-blue-50 text-blue-500;
}
</style>
