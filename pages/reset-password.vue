<script setup>
const router = useRouter()
const client = useSupabaseClient()
const email = ref('')
const successMessage = ref('')
const errors = ref('')
async function resetPassword() {
  try {
    const { data, error } = await client.auth.resetPasswordForEmail(email.value, {
      redirectTo: 'http://localhost:3000/update-password',
    })
    if (error) {
      throw error
    }
    successMessage.value = 'Check your email for the password reset link'
  } catch(error) {
    errors.value = error.message
  }
}
</script>
<template>
  <form @submit.prevent="resetPassword">
    <label for="email">
      E-Mail
    </label>
    <input
        v-model="email"
        type="email"
      />
    <button>
      Reset Password
    </button>
  </form>
</template>
