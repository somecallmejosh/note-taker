<script setup>
definePageMeta({
  layout: 'auth'
})
const client = useSupabaseClient()
const state = ref({
  email: '',
})
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
  <auth-wrapper>
    <auth-header title="Forgotten your password?" subTitle="Enter your email below, and we’ll send you a link to reset it." />
    <UForm :state="state" class="space-y-8" @submit="resetPassword">
      <UFormGroup label="Email Address" name="email" required>
        <UInput type="email" v-model="state.email" />
      </UFormGroup>
      <UButton type="submit" block>
        Send Reset Link
      </UButton>
    </UForm>
  </auth-wrapper>
</template>
