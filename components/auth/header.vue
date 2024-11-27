<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subTitle: {
    type: String,
    required: false
  }
})
</script>
<template>
  <div class="space-y-2 text-center">
    <h1 class="font-bold text-[1.5rem] tracking-tight text-neutral-950">{{ title }}</h1>
    <p class="text-sm text-neutral-600">{{ subTitle }}</p>
  </div>
</template>
