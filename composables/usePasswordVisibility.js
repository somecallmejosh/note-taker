export function usePasswordVisibility() {
  const showPassword = ref(false);
  const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
  }

  return {
    showPassword,
    togglePasswordVisibility
  }
}
