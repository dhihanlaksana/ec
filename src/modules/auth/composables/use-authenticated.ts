import { useAuthStore } from '@/stores/auth'
import { useLocalStorage } from '@vueuse/core'

export function useAuthenticated() {
  const { userData } = useAuthStore()
  
  let isLogin = false

  if (userData?.email) {
    isLogin = true
  }

  return {
    isLogin,
    userData
  }
}
