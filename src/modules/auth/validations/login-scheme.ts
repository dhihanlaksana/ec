import type { ComposerTranslation } from 'vue-i18n'
import * as yup from 'yup'

export const createValidationSchema = (t: ComposerTranslation) => {
  return yup.object().shape({
    username: yup
      .string()
      .required(t('validation.required', { field: 'Username' })),
    password: yup
      .string()
      .required(t('validation.required', { field: 'Password' })),
  })
}
