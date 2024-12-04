<script setup>
  defineProps({
    to: {
      type: String,
      required: true
    },
    text: {
      type: String,
      default: 'Back'
    }
  })
</script>
<template>
  <div class="mb-6 lg:hidden">
    <ULink :to="to" class="flex items-center gap-1">
      <UIcon name="local-arrow-left" class="size-6" />
      {{  text }}
    </ULink>
  </div>
</template>
