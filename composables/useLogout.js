export function useLogout() {
  const client = useSupabaseClient()
  const router = useRouter()
  async function logout() {
    try {
      const { error } = await client.auth.signOut()
      router.push('/login')
       if (error) {
         throw error
       }
    } catch(error) {
       console.error(error)
       router.push('/login')
    }
   }

  return {
    logout,
  }
}
