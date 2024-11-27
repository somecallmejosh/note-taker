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
 } catch(error) {
    console.error(error)
    router.push('/login')
 }
}
</script>
<template>
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
