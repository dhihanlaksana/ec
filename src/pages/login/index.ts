import { defineComponent, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useRouter } from 'vue-router'
import { useTitle } from '@vueuse/core'

import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import Password from 'primevue/password'
import Dialog from 'primevue/dialog'
import ProgressSpinner from 'primevue/progressspinner'

import { createValidationSchema } from '@/modules/auth/validations/login-scheme'
import { useLogin } from '@/modules/auth/composables/use-login'
import { useAuthStore } from '@/stores/auth'

import ImgMPMOffice from '@/assets/images/mpm-office.png'
import ImgMPMLogo from '@/components/icons/icon-mosa-logo.vue'
import FailedIcon from '@/components/icons/icon-failed.vue'
import { supabase } from '@/supabase-client'


export default defineComponent({
  components: {
    InputText,
    Card,
    Password,
    Dialog,
    ProgressSpinner,
    ImgMPMLogo,
    FailedIcon
  },
  setup() {
    useTitle('Login To Apps')
    const { t } = useI18n()
    const authStore = useAuthStore()
    const router = useRouter()

    // setup form
    const validationSchema = createValidationSchema(t)
    const { values, errors, validate, defineField } = useForm<
      yup.InferType<typeof validationSchema>
    >({
      validationSchema,
    })

    // setup ref
    const [username, usernameAttrs] = defineField('username')
    const [password, passwordAttrs] = defineField('password')
    
    const isLoading = ref(false)
    const isError = ref(false)
    const errorMessage = ref("")

    const onSubmit = async () => {
      const validationResult = await validate()
      if (validationResult.valid) {
        isLoading.value = true
        try {

          // authStore.setUserData({email: data.user?.email})
          isLoading.value = false
          router.push('/home')
        } catch (error) {
          console.error(`error : ${error}`)
          isError.value = true
          errorMessage.value = t('pages.login.account_not_found')
        }
      }
    }

    return {
      // states
      username,
      usernameAttrs,
      password,
      passwordAttrs,
      isLoading,
      errors,
      errorMessage,
      isError,

      // assets
      ImgMPMOffice,

      // actions
      onSubmit
    }
  },
})

