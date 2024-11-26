<script setup lang="ts">
const router = useRouter()
const client = useSupabaseClient()
const email = ref('')
const password = ref('')
const errorMsg = ref('')

async function signIn() {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value,
    })
    if (error) {
      throw error
    }
    router.push('/')
  } catch(error) {
    errorMsg.value = error.message
  }
}
</script>
<template>
  <form @submit.prevent="signIn">
    <label for="email">
      E-Mail

    </label>
    <input
        v-model="email"
        type="email"
      />
    <label for="password">
      Password
    </label>
    <input
        v-model="password"
        type="password"
      />
    <button>
      Sign In with E-Mail
    </button>
  </form>
  <NuxtLink to="/register">Register</NuxtLink> |
  <NuxtLink to="/reset-password">Forgot password?</NuxtLink>
</template>
