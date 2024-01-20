/* eslint-disable @typescript-eslint/no-unused-vars */
import HttpMethod from '@/modules/common/enums/http-method'
import { createApiFetch } from '@/modules/common/helpers/create-api-fetch'
import { useLocalStorage, type UseFetchOptions } from '@vueuse/core'
import type { Account } from '../types/account'

export async function useLogin(
  dealerCode: string,
  username: string,
  password: string,
): Promise<Account> {
    const url = '/system/general/authenticate'

    const fetchOptions: UseFetchOptions = {
      async afterFetch(ctx) {
        ctx.data = await ctx.response.json()
        return ctx
      },
    }

    const body: RequestInit = {
      body: JSON.stringify({
        kodedealer: dealerCode,
        username,
        password,
        appid: ""
      })
    }

    const apiFetch = createApiFetch<any>(
      HttpMethod.POST,
      body,
      fetchOptions
    )

    const { data, error } = await apiFetch(url)

    if (error.value) {
      throw new Error(error.value)
    }

    if (!data.value) {
      throw new Error('account not found')
    }

    if (import.meta.env.VITE_AUTH_KEY) {
      const authLocal = useLocalStorage(import.meta.env.VITE_AUTH_KEY, '')
      authLocal.value = data.value.token
    }

    const account: Account = {
      dealersKdDlr: data.value.username_dlr,
      userLevel: data.value.user_level,
      username: data.value.nama_user,
      usernameDlr: data.value.username_dlr,
    }

    return account
}
