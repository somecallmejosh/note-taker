<script setup>
const router = useRouter()
const client = useSupabaseClient()
const email = ref('')
const successMessage = ref('')
const errors = ref('')
async function updatePassword() {
  try {
    const { data, error } = await client.auth.updateUser({
      password: email.value,
    })
    if (error) {
      throw error
    }
    successMessage.value = 'Password updated'
  } catch(error) {
    errors.value = error.message
  }
}
</script>
<template>
  <form @submit.prevent="updatePassword">
    <label for="email">
      Password
    </label>
    <input
        v-model="email"
        type="password"
      />
    <button>
      Submit New Password
    </button>
  </form>
  <div v-if="errors">
    {{ errors }}
  </div>
  <div v-if="successMessage">
    <p>{{ successMessage }}</p>
    <NuxtLink to="/login">Login</NuxtLink>
  </div>
</template>
