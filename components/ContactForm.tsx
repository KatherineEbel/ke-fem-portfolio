import {
  ChangeEventHandler,
  FormEventHandler,
  useEffect,
  useState,
} from 'react'
import { FormErrors, FormFields, isValid, notify, validate } from 'lib/utils'
import { ToastContainer } from 'react-toastify'
import fetch from 'isomorphic-unfetch'

export default function ContactForm() {
  const [form, setForm] = useState<Partial<FormFields>>({
    name: '',
    email: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [succeeded, setSucceeded] = useState(false)
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
      setSubmitting(true)
      try {
        const response = await fetch('http://localhost:3000/api/send-message', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        })
        const data = await response.json()
        if (!response.ok) {
          if (data.errors) {
            return setErrors(data.errors)
          }
          notify('error', 'Oops! Something went wrong')
        } else {
          setSucceeded(true)
        }
      } catch (e) {
        notify('error', 'Oops! Something went wrong')
      } finally {
        setSubmitting(false)
      }
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
        <section className="flex flex-col lg:flex-row lg:justify-between gap-8">
          <h3 className="h1 flex-[2]">Contact Me</h3>
          <div className="flex flex-col gap-6 flex-[3]">
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
            <button
              className="btn btn-primary"
              type="submit"
              disabled={submitting || !isValid(form, errors)}
            >
              Send Message
            </button>
          </div>
        </section>
      </form>
      <div className="h-0 fixed">
        <ToastContainer position="top-center" theme="colored" />
      </div>
    </>
  )
}
