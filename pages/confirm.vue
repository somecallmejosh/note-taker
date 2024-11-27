<script setup lang="ts">
const user = useSupabaseUser()

watch(user, () => {
  if (user.value) {
      // Redirect to protected page
      return navigateTo('/')
  }
}, { immediate: true })
</script>

<template>
  <auth-wrapper>
    <auth-header title="Confirmation" subTitle="Please login to continue" />
    <div>Waiting for login...</div>
  </auth-wrapper>
</template>
