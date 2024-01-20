import type { Account } from '@/modules/auth/types/account'
import { defineStore } from 'pinia'

type AuthStore = {
  userData: Account | undefined | null
}

export const useAuthStore = defineStore('authStore', {
  state: (): AuthStore => ({
    userData: null,
  }),
  actions: {
    setUserData(userData: Account) {
      this.userData = userData
    },
  },
  persist: true
})
