<script setup>
definePageMeta({
  middleware: ['auth']
})
const user = useSupabaseUser()
</script>
<template>
  <layout-default>
    <template #header>
      <h1>Home Page</h1>
    </template>
    <template #main>
      <h1>Home page</h1>
      <div v-if="user">
        <p>Welcome, {{ user.email }}</p>
      </div>
      <div v-else>
        <p>You are not logged in</p>
        <NuxtLink to="/login">Login</NuxtLink> | <NuxtLink to="/register">Register</NuxtLink>
      </div>
    </template>
  </layout-default>
</template>
