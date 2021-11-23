import '@testing-library/jest-dom/extend-expect'
import { loadEnvConfig } from '@next/env'

jest.mock('next/image', () => ({
  __esModule: true,
  default: () => {
    return 'Next image stub' // whatever
  },
}))

jest.mock('mailgun.js', () => {
  const mMailgun = {
    client: jest.fn(() => {
      return {
        messages: {
          create: jest.fn(() =>
            Promise.resolve({ id: 'test-id', message: 'Thank you' }),
          ),
        },
      }
    }),
  }
  return jest.fn(() => mMailgun)
})

export default async function loadEnv() {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}
