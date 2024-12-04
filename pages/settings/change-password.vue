<script setup>
  import Back from './components/back.vue'
  const { showPassword, togglePasswordVisibility } = usePasswordVisibility()
  const client = useSupabaseClient()
  const state = ref({
    password: '',
    confirmPassword: '',
  })
  const successMessage = ref('')
  const errorMsg = ref('')

  async function updatePassword() {
    if (state.password !== state.confirmPassword) {
      alert('Passwords do not match')
      errorMsg.value = 'Passwords do not match'
      return
    }

    try {
      const { data, error } = await client.auth.updateUser({
        password: state.password,
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
  <button-back-link to="/settings" text="Settings" />
  <h1 class="mb-6 font-semibold">Change Password</h1>
    <UForm :state="state" class="space-y-8" @submit.prevent="updatePassword">
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
      <UFormGroup label="Confirm Password" name="confirmPassword" required>
        <UInput :ui="{ icon: { trailing: { pointer: '' } } }" :type="showPassword ? 'text' : 'password'" v-model="state.confirmPassword">
          <template #trailing>
            <UButton
              variant="link"
              :icon="showPassword ? 'local-hide-password' : 'local-show-password'"
              @click="togglePasswordVisibility"
            />
          </template>
        </UInput>
      </UFormGroup>
      <UButton type="submit">
        Reset password
      </UButton>
    </UForm>
    <div v-if="successMessage">
      <p>{{ successMessage }}</p>
      <ULink class="underline hover:no-underline" to="/login">Login</ULink>
    </div>
</template>
