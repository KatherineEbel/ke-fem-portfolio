/**
 * @jest-environment jsdom
 */

import ContactForm from 'components/ContactForm'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'
import loadEnv from 'jest.setup'
import fetch from 'isomorphic-unfetch'

jest.mock('isomorphic-unfetch')

const fetchMock = fetch as jest.Mock

describe('ContactForm', function () {
  beforeAll(() => {
    loadEnv()
  })
  it(`has a name, email and messageField`, async () => {
    render(<ContactForm />)
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/message/i)).toBeInTheDocument()
  })
  it(`starts off with Submit button disabled`, async () => {
    render(<ContactForm />)
    expect(screen.getByRole('button', { name: /^send/i })).toBeDisabled()
  })

  it(`sets and clears error name for email input`, async () => {
    render(<ContactForm />)
    const input = screen.getByLabelText(/name/i)
    userEvent.clear(input)
    userEvent.tab()
    expect(screen.getAllByText('This field is required').length).toBe(1)
    userEvent.type(input, 'Jane')
    userEvent.tab()
    expect(screen.queryAllByText('This field is required').length).toBe(1)
  })

  it(`sets and clears error message for email input`, async () => {
    render(<ContactForm />)
    const input = screen.getByLabelText(/email/i)
    userEvent.clear(input)
    userEvent.tab()
    expect(screen.getAllByText('This field is required').length).toBe(1)
    userEvent.type(input, 'foo')
    userEvent.tab()
    expect(screen.getAllByText('Please use a valid email address').length).toBe(
      1,
    )
    userEvent.clear(input)
    userEvent.type(input, 'jane@example.com')
    userEvent.tab()
    expect(
      screen.queryAllByText('Please use a valid email address').length,
    ).toBe(0)
  })

  it(`sets and clears error message for message input`, async () => {
    render(<ContactForm />)
    const input = screen.getByLabelText(/message/i)
    userEvent.clear(input)
    userEvent.tab()
    expect(screen.getAllByText('This field is required').length).toBe(1)
    userEvent.type(input, 'Jane')
    expect(screen.queryAllByText('This field is required').length).toBe(0)
  })

  it(`enables submit button whe all fields valid`, async () => {
    render(<ContactForm />)
    userEvent.type(screen.getByLabelText(/name/i), 'Jane')
    userEvent.type(screen.getByLabelText(/email/i), 'jane@example.com')
    userEvent.type(screen.getByLabelText(/message/i), 'Test message')
    expect(screen.queryAllByText('This field is required').length).toBe(0)
    userEvent.tab()
    expect(screen.getByRole('button', { name: /^send/i })).toBeEnabled()
  })

  it(`notifies user when email submitted successfully`, async () => {
    fetchMock.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ message: 'Thank you' }),
    })
    render(<ContactForm />)
    userEvent.type(screen.getByLabelText(/name/i), 'Jane')
    userEvent.type(screen.getByLabelText(/email/i), 'jane@example.com')
    userEvent.type(screen.getByLabelText(/message/i), 'Test message')
    userEvent.click(screen.getByRole('button', { name: /^send/i }))
    await waitFor(() => {
      screen.getByText("Thank you Jane! I'll be in touch")
    })
  })

  it(`notifies user if response not ok`, async () => {
    fetchMock.mockResolvedValueOnce({
      ok: false,
      json: () => Promise.resolve({ error: 'Oops! Something went wrong' }),
    })
    render(<ContactForm />)
    userEvent.type(screen.getByLabelText(/name/i), 'Jane')
    userEvent.type(screen.getByLabelText(/email/i), 'jane@example.com')
    userEvent.type(screen.getByLabelText(/message/i), 'Test message')
    userEvent.click(screen.getByRole('button', { name: /^send/i }))
    await waitFor(() => {
      screen.getByText('Oops! Something went wrong')
    })
  })
})
