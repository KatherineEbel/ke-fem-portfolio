import { toast } from 'react-toastify'

export interface FormFields {
  name: string
  email: string
  message: string
}

export type FormErrors = Partial<FormFields>

function isValidEmail(email: string) {
  const regex = new RegExp(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)
  return regex.test(email)
}

export const validate = (fields: Partial<FormFields>) => {
  return Object.keys(fields).reduce((err: Record<string, string>, key) => {
    if (fields[key].trim().length === 0) {
      err[key] = 'This field is required'
    }
    if (key === 'email') {
      if (err[key] === undefined) {
        if (!isValidEmail(fields[key])) {
          err[key] = 'Please use a valid email address'
        }
      }
    }
    return err
  }, {})
}

export const isValid = (
  form: Partial<FormFields>,
  errors: FormErrors,
): boolean => {
  return (
    Object.values(errors).every((v) => !v) &&
    Object.values(form).every((v) => v)
  )
}

export const notify = (type, message) => {
  toast({ type, message })
  if (type === 'success') {
    toast.success(message)
  }
  if (type === 'error') {
    toast.error(message)
  }
}

export const pages = {
  Home: '/',
  Portfolio: '/portfolio',
  'Contact Me': '/contact-me',
}
