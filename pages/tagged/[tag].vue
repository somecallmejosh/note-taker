<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">Tagged Notes: {{ route.params.tag }}</h1>
    </template>
    <template #main>
      <layout-divided-content>
        <template #aside>
          <menu-notes />
        </template>
        <template #main>
          Tagged Notes
        </template>
        <template #aside2>
          <h1>Aside 2</h1>
        </template>
      </layout-divided-content>
    </template>
  </layout-default>
</template>

<script setup>
const route = useRoute()

</script>
