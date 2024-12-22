import { AxiosError } from 'axios'
import { ApiError } from 'next/dist/server/api-utils'
import { toast } from 'react-toastify'
import { destroyCookie } from 'nookies'
import { APP_ROUTES } from '~/src/config'

export const userSession = '_SOMETHING_' // deletar se não for haver autenticação - editar para nome correto da sessão

export const errorhandler = (error: AxiosError) => {
  const stackTrace = new Error().stack

  if (error instanceof AxiosError) {
    const originalRequest = error.config
    const token = originalRequest?.headers.Authorization

    const isInDev = process.env.NODE_ENV === 'development'

    if (error.code === 'ERR_NETWORK') {
      toast.error('Servidor indisponível ou fora do ar.')
      throw new ApiError(503, 'Servidor indisponível ou fora do ar.')
    }

    if (error.response?.status === 401 && token) {
      toast.error('Acesso não autorizado!')
      destroyCookie({}, userSession)
      return (window.location.href = APP_ROUTES.home.path)
    }

    if (isInDev) {
      toast.error(error.message)
      const functionName = stackTrace?.split('\n')[2]?.trim()
      // eslint-disable-next-line no-console
      console.error(`Erro ocorreu na função: ${functionName}`)
      throw new Error().stack
    } else {
      toast.info('Ocorreu um erro inesperado')
    }
  }
}
