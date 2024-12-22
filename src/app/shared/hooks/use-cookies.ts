import { setCookie, destroyCookie } from 'nookies'

export interface ICreateCookieProps {
  cookieName: string
  value: unknown
}

/**
 * @function createCookie recieve a cookname and a value as { ICreateCookieProps } to be created
 * @function destroySession recieve a cookname to be destroyed when invocked
 * @returns {
 *  createCookie
 *  destroySession
 * }
 */

export const useCookie = () => {
  const maxAge = process.env.NEXT_PUBLIC_MAX_AGE_IN_SECONDS

  const createCookie = ({ cookieName, value }: ICreateCookieProps) =>
    setCookie(null, cookieName, JSON.stringify(value), {
      maxAge,
      path: '/'
    })

  const deleteCookie = (cookieName: string) =>
    destroyCookie(null, cookieName, {
      cookieName
    })

  return {
    createCookie,
    deleteCookie
  }
}
