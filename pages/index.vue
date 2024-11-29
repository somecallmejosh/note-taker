<script setup>
definePageMeta({
  middleware: ['auth']
})
const user = useSupabaseUser()
const client = useSupabaseClient()
const router = useRouter()

async function logout() {
 try {
   const { error } = await client.auth.signOut()
   router.push('/login')
    if (error) {
      throw error
    }
 } catch(error) {
    console.error(error)
    router.push('/login')
 }
}
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
        <button @click="logout">Logout</button>
      </div>
      <div v-else>
        <p>You are not logged in</p>
        <NuxtLink to="/login">Login</NuxtLink> | <NuxtLink to="/register">Register</NuxtLink>
      </div>
    </template>
  </layout-default>
</template>
