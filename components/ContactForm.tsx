import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react'
import { useForm } from '@formspree/react'
import { FormErrors, FormFields, isValid, notify, validate } from 'lib/utils'
import { ToastContainer } from 'react-toastify'

export default function ContactForm() {
  const [form, setForm] = useState<Partial<FormFields>>({
    name: '',
    email: '',
    message: '',
  })
  const [{ submitting, succeeded }, handleSubmit] = useForm(
    process.env.NEXT_PUBLIC_FORMSPREE_HASH,
  )
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = ({ target: { name, value } }) => {
    if (errors[name]) delete errors[name]
    setForm({ ...form, [name]: value })
  }

  const handleBlur = ({ target: { name, value } }: any) => {
    setErrors({ ...errors, ...validate({ [name]: value }) })
  }

  const onSubmit: FormEventHandler = async (e) => {
    e.preventDefault()
    if (isValid(form, errors)) {
      const response = await handleSubmit(e)
      console.log(response)
    }
  }

  useEffect(() => {
    if (!form.name) return
    if (succeeded) {
      notify('success', `Thank you ${form.name}! I'll be in touch`)
      setForm({})
      setErrors({})
    }
  }, [form.name, succeeded])

  return (
    <>
      <form className="py-8" onSubmit={onSubmit} noValidate>
        <fieldset className="flex flex-col gap-6 text-xs">
          <legend className="h1 mb-6">Contact Me</legend>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              id="name"
              name="name"
              placeholder="Jane Appleseed"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.name && <p className="form-error">{errors.name}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              className="form-control"
              type="email"
              id="email"
              name="email"
              placeholder="email@example.com"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.email && <p className="form-error">{errors.email}</p>}
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control resize-none"
              id="message"
              name="message"
              rows={3}
              placeholder="How can I help?"
              onChange={handleChange}
              onBlur={handleBlur}
              required
            />
            {errors.message && <p className="form-error">{errors.message}</p>}
          </div>
        </fieldset>
        <button
          className="btn btn-primary"
          type="submit"
          disabled={submitting || !isValid(form, errors)}
        >
          Send Message
        </button>
      </form>
      <div className="h-0 fixed">
        <ToastContainer position="top-center" theme="colored" />
      </div>
    </>
  )
}
