<script setup>
defineProps({
  text: {
    type: String,
    required: true
  },
  linkText: {
    type: String,
    required: false
  },
  link: {
    type: String,
    required: false
  }
})
</script>
<template>
  <p class="text-center">{{ text }} <ULink :to="link" class="underline hover:no-underline">{{ linkText }}</ULink></p>
</template>
