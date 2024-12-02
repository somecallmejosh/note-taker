<script setup>
definePageMeta({
  layout: 'auth'
})
const { showPassword, togglePasswordVisibility } = usePasswordVisibility()
const client = useSupabaseClient()
const state = ref({
  email: '',
  password: '',
})
const errorMsg = ref(null)
const succesMsg = ref(null)

async function signUp() {
  try {
    const { data, error } = await client.auth.signUp({
      email: state.email,
      password: state.password,
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
  <auth-wrapper>
    <auth-header title="Create Your Account" subTitle="Sign up to start organizing your notes and boost your productivity." />
    <UForm :state="state" class="space-y-8" @submit="signUp">
      <UAlert v-if="errorMsg" :description="errorMsg" variant="outline" color="red" />
      <UFormGroup label="Email Address" name="email" required>
        <UInput type="email" v-model="state.email" />
      </UFormGroup>
      <UFormGroup label="Password" name="password" required>
        <UInput :ui="{ icon: { trailing: { pointer: '' } } }" :type="showPassword ? 'text' : 'password'" v-model="state.password">
          <template #trailing>
            <UButton
              variant="link"
              :icon="showPassword ? 'local-hide-password' : 'local-show-password'"
              class="text-gray-500 -translate-x-2 size-5"
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
      <UButton type="submit" block>
        Login
      </UButton>
    </UForm>
    <UDivider>Or</UDivider>
    <auth-footer text="Already Have an Account?" link="/login" linkText="Login" />
  </auth-wrapper>
</template>
