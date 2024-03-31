import axios from 'axios'
import { API_URL } from '~/constant/constant'
import { refreshTokenService } from './auth'

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken')
    console.log('accessToken ==== ', accessToken)
    if (accessToken) {
      config.headers['Authorization'] = 'Bearer ' + accessToken
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (res) => {
    return res
  },
  async (err) => {
    const originalConfig = err.config
    console.log('Interceptor triggered. Original config:', originalConfig)

    if (originalConfig.url !== '/login' && err.response && err.response.status === 401 && !originalConfig._retry) {
      console.log('Conditions met. Proceeding with token refresh.')
      try {
        const refreshToken = localStorage.getItem('refreshToken')
        console.log('Refresh token:', refreshToken)
        if (refreshToken) {
          // Send a POST request to refresh the token
          const rs = await axios.post(
            `${API_URL}/refresh`,
            {
              refresh_token: refreshToken
            },
            {
              headers: {
                Authorization: 'Bearer ' + refreshToken
              }
            }
          )
          console.log('response ==== ', rs)
          originalConfig._retry = true
          const access_token = rs?.data.access_token
          if (access_token) {
            localStorage.setItem('accessToken', access_token)
            originalConfig._retry = true
            return instance(originalConfig)
          } else {
            // Access token not returned from refreshTokenService
            throw new Error('Access token not returned')
          }
        } else {
          // No refresh token available
          throw new Error('Refresh token not found')
        }
      } catch (error) {
        console.error('Error during token refresh:', error)
        return Promise.reject(error)
      }
    } else {
      console.log('Conditions not met. Skipping token refresh.')
    }

    return Promise.reject(err)
  }
)

export default instance
