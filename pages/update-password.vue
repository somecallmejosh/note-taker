<script setup>
definePageMeta({
  layout: 'auth'
})
const { showPassword, togglePasswordVisibility } = usePasswordVisibility()
const client = useSupabaseClient()
const state = ref({
  password: '',
  passwordConfirmation: '',
})
const successMessage = ref('')
const errorMsg = ref('')
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
    errorMsg.value = error.message
  }
}
</script>
<template>
  <auth-wrapper>
    <auth-header title="Reset Your Password" subTitle="Choose a new password to secure your account." />
    <UForm :state="state" class="space-y-8" @submit="updatePassword">
      <UAlert v-if="errorMsg" :description="errorMsg" variant="outline" color="red" />
      <UFormGroup label="Password" name="password" required>
        <UInput :ui="{ icon: { trailing: { pointer: '' } } }" :type="showPassword ? 'text' : 'password'" v-model="state.password">
          <template #trailing>
            <UButton
              variant="link"
              :icon="showPassword ? 'local-local-hide-password' : 'local-show-password'"
              @click="togglePasswordVisibility"
            />
          </template>
        </UInput>
        <template #help>
          <div class="flex items-center gap-1">
            <UIcon name="local-info" /> At least 8 characters
          </div>
        </template>
      </UFormGroup>
      <UFormGroup label="Confirm Password" name="passwordConfirmation" required>
        <UInput :ui="{ icon: { trailing: { pointer: '' } } }" :type="showPassword ? 'text' : 'password'" v-model="state.passwordConfirmation">
          <template #trailing>
            <UButton
              variant="link"
              :icon="showPassword ? 'local-hide-password' : 'local-show-password'"
              @click="togglePasswordVisibility"
            />
          </template>
        </UInput>
      </UFormGroup>
      <UButton type="submit" block>
        Reset password
      </UButton>
    </UForm>
    <div v-if="errors">
      {{ errors }}
    </div>
    <div v-if="successMessage">
      <p>{{ successMessage }}</p>
      <ULink class="underline hover:no-underline" to="/login">Login</ULink>
    </div>
  </auth-wrapper>
</template>
