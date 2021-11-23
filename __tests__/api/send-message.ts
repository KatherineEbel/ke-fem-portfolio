import { createMocks } from 'node-mocks-http'
import sendMessage from 'pages/api/send-message'
import loadEnv from 'jest.setup'

describe('/api/send-message', () => {
  beforeAll(() => loadEnv())
  it(`returns not found if GET request submitted`, async () => {
    const { req, res } = createMocks({
      method: 'GET',
      body: {},
    })
    await sendMessage(req, res)
    expect(res._getStatusCode()).toBe(404)
    expect(res._getJSONData().error).toBe('Not Found')
  })

  it(`returns error object if body not provided`, async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {},
    })
    await sendMessage(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(res._getJSONData().error).toBe('Bad Request')
  })

  it(`returns error object if name not provided`, async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        email: 'test@foo.com',
        message: 'Test',
      },
    })
    await sendMessage(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(res._getJSONData().error).toBe('Bad Request')
  })

  it(`returns error object if email not provided`, async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Tester',
        message: 'Test',
      },
    })
    await sendMessage(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(res._getJSONData().error).toBe('Bad Request')
  })

  it(`returns error object if message not provided`, async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Tester',
        email: 'tester@foo.com',
      },
    })
    await sendMessage(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(res._getJSONData().error).toBe('Bad Request')
  })

  it(`returns error object if field errors present`, async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: '    ',
        email: '    ',
        message: '    ',
      },
    })
    await sendMessage(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(res._getJSONData()).toEqual({
      errors: {
        name: 'This field is required',
        email: 'This field is required',
        message: 'This field is required',
      },
    })
  })

  it(`returns error object if invalid email provided`, async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Tester',
        email: 'test',
        message: 'test message',
      },
    })
    await sendMessage(req, res)
    expect(res._getStatusCode()).toBe(400)
    expect(res._getJSONData()).toEqual({
      errors: {
        email: 'Please use a valid email address',
      },
    })
  })
  it(`returns message if message sent successfully`, async () => {
    const { req, res } = createMocks({
      method: 'POST',
      body: {
        name: 'Tester',
        email: 'test@foo.com',
        message: 'test message',
      },
    })
    await sendMessage(req, res)
    expect(res._getStatusCode()).toBe(200)
    expect(res._getJSONData()).toEqual({
      message: 'Thank you',
    })
  })
})
