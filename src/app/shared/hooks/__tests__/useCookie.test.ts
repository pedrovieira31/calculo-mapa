import { parseCookies } from 'nookies'

import { useCookie } from '@hooks'
import { ICreateCookieProps } from '../use-cookies'

jest.mock('@hooks', () => ({
  useCookie: () => ({
    createCookie: jest.fn(),
    deleteCookie: jest.fn()
  })
}))

jest.mock('nookies', () => ({
  parseCookies: jest.fn(() => ({}))
}))

describe('useCookies', () => {
  const mockCookieName = 'mockCookieName'
  const mockValueSession = {
    name: 'John Doe',
    age: 28
  }
  const mockSession: ICreateCookieProps = {
    cookieName: mockCookieName,
    value: mockValueSession
  }

  it('should create a session cookie', () => {
    const { createCookie } = useCookie()
    createCookie(mockSession)

    expect(createCookie).toHaveBeenCalledWith(mockSession)
  })

  it('should delete a session cookie', () => {
    const { deleteCookie } = useCookie()
    const cookies = parseCookies()

    deleteCookie(mockCookieName)

    const sut = cookies.mockCookieName

    expect(sut).not.toEqual(mockSession)
  })
})
