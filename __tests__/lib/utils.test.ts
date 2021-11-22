import { isValid, validate } from 'lib/utils'

describe('validate', () => {
  it(`returns error message if provided name field is empty`, async () => {
    const actual = validate({ name: '' })
    expect(actual).toEqual({ name: 'This field is required' })
  })

  it(`returns correct error message if provided email field is empty`, async () => {
    const actual = validate({ email: '' })
    expect(actual).toEqual({ email: 'This field is required' })
  })

  it(`returns correct error message if provided message field is empty`, async () => {
    const actual = validate({ message: '' })
    expect(actual).toEqual({ message: 'This field is required' })
  })

  it(`returns correct error message if provided email is not valid`, async () => {
    const actual = validate({ email: 'foobar' })
    expect(actual).toEqual({ email: 'Please use a valid email address' })
  })
})

describe('isValid', () => {
  it(`returns false for empty errors and empty fields`, async () => {
    const form = { name: '', email: '', message: '' }
    const errors = {}
    const actual = isValid(form, errors)
    expect(actual).toBe(false)
  })

  it(`returns true for empty errors and valid fields`, async () => {
    const form = {
      name: 'Jane',
      email: 'jane@example.com',
      message: 'Test message',
    }
    const errors = {}
    const actual = isValid(form, errors)
    expect(actual).toBe(true)
  })
})
