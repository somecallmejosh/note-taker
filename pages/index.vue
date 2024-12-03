<script setup>
const user = useSupabaseUser()
</script>
<template>
  <layout-default>
    <template #header>
      <h1 class="text-2xl font-bold">All Notes</h1>
    </template>
    <template #main>
      <layout-notes>
        <template #aside>
          <h1>Home page</h1>
          <div v-if="user">
            <p>Welcome, {{ user.email }}</p>
            <div class="h-screen"></div>
            <p> something else</p>
          </div>
          <div v-else>
            <p>You are not logged in</p>
            <NuxtLink to="/login">Login</NuxtLink> | <NuxtLink to="/register">Register</NuxtLink>
          </div>
        </template>
        <template #main>
          Some content
          <div class="h-screen"></div>
          <p> something else</p>
        </template>
      </layout-notes>
    </template>
  </layout-default>
</template>
