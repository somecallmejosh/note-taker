<script setup>
const client = useSupabaseClient()
const email = ref('')
const password = ref(null)
const errorMsg = ref(null)
const succesMsg = ref(null)

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: email.value,
      password: password.value,
    })
    if (error) {
      throw error
    }
    succesMsg.value = 'Check your email for the confirmation link'
  } catch(error) {
    errorMsg.value = error.message
  }
}
</script>
<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="signUp">
      <label for="email">
        E-Mail
        <input
          v-model="email"
          type="email"
        />
      </label>
      <label for="password">
        Password
        <input
          v-model="password"
          type="password"
        />
      </label>
      <button type="submit">
        Register
      </button>
      <div v-if="errorMsg">
        {{ errorMsg }}
      </div>
      <div v-if="succesMsg">
        {{ succesMsg }}
      </div>
    </form>
    <NuxtLink to="/login">Login</NuxtLink>å
  </div>

</template>
