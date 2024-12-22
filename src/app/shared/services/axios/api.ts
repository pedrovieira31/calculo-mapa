import axios, { AxiosError, AxiosInstance, InternalAxiosRequestConfig } from 'axios'
import { errorhandler } from './error-handler'

// exemplo de configuração
const apiConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  authURL: process.env.NEXT_PUBLIC_AUTH_URL,
  clientID: process.env.NEXT_PUBLIC_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET
}

export const api: AxiosInstance = axios.create({
  baseURL: apiConfig.baseURL
})

api.interceptors.request.use(
  async function (config: InternalAxiosRequestConfig) {
    // criar os interceptors necessários

    return config
  },
  function (error) {
    if (error instanceof AxiosError) return errorhandler(error)

    return Promise.reject(error)
  }
)
