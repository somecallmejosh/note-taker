<template>
  <div class="h-[calc(100%-2rem)] min-h-[400px] lg:h-full lg:max-h-full">
    <button-back-link to="/notes" text="Notes" />
    <layout-note :note="{}" />
  </div>
</template>

<script setup>
const route = useRoute()

</script>
