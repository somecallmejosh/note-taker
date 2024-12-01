<script setup>
definePageMeta({
  layout: 'auth'
})
const { showPassword, togglePasswordVisibility } = usePasswordVisibility()
const router = useRouter()
const client = useSupabaseClient()
const state = reactive({
  email: '',
  password: '',
})
const errorMsg = ref('')
async function signIn() {
  try {
    const { error } = await client.auth.signInWithPassword({
      email: state.email,
      password: state.password,
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
<auth-wrapper>
  <auth-header title="Welcome to Note" subTitle="Please login to continue" />
  <UForm :state="state" class="space-y-8" @submit="signIn">
    <UAlert v-if="errorMsg" :description="errorMsg" variant="outline" color="red" />
    <UFormGroup label="Email Address" name="email" required>
      <UInput type="email" v-model="state.email" />
    </UFormGroup>
    <UFormGroup label="Password" name="password" required>
      <UInput :ui="{ icon: { trailing: { pointer: '' } } }" :type="showPassword ? 'text' : 'password'" v-model="state.password">
        <template #trailing>
          <button @click.prevent="togglePasswordVisibility">
            <icon-show-password v-if="!showPassword" />
            <icon-hide-password v-else />
          </button>
        </template>
      </UInput>
      <template #hint>
        <ULink to="/reset-password" class="text-sm underline hover:no-underline">Forgot?</ULink>
      </template>

    </UFormGroup>
    <UButton type="submit" block>
      Login
    </UButton>
  </UForm>
  <UDivider>Or</UDivider>
  <auth-footer text="No account yet?" link="/register" linkText="Signup" />
</auth-wrapper>
</template>
