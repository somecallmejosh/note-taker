<template>
  <layout-default>
    <template #header>
      <h1>Settings</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <menu-settings />
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
  @apply absolute right-1 transition-transform transform;
}
</style>
