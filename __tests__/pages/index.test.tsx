/**
 * @jest-environment jsdom
 */

import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../../pages'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: '',
      asPath: '',
    }
  },
}))

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)
    expect(screen.getByRole('heading', { name: /^hey/i })).toBeInTheDocument()
  })
})
