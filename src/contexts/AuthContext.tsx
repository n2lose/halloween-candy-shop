import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { refreshTokenService } from '~/services/auth'
import { EXPIRED_TOKEN_MINUTES } from '~/constant/constant'

type AuthContextProps = {
  children?: ReactNode
}
export interface AuthContextInterface {
  authenticated: boolean
  setAuthenticated: (newState: boolean) => void
}

const initialAuthContextValue: AuthContextInterface = {
  authenticated: false,
  setAuthenticated: () => {}
}

const AuthContext = createContext<AuthContextInterface>(initialAuthContextValue)

function AuthProvider({ children }: AuthContextProps) {
  const navigate = useNavigate()

  const [authenticated, setAuthenticated] = useState(() => {
    const tokenOnLocalStorage = localStorage.getItem('accessToken')
    return !!tokenOnLocalStorage
  })
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('accessToken')
  })

  // const isTokenExpired = () => {
  //   const tokenExpiration = localStorage.getItem('accessTokenExpiration') // Assuming you store token expiration time
  //   if (tokenExpiration) {
  //     const expirationTime = new Date(Number(tokenExpiration)).getTime()
  //     const currentTime = new Date().getTime()
  //     return expirationTime < currentTime
  //   }
  //   return true
  // }

  // const handleTokenExpiry = async () => {
  //   const refreshToken = localStorage.getItem('refreshToken')
  //   if (refreshToken) {
  //     try {
  //       const response = await refreshTokenService(refreshToken)
  //       if (response) {
  //         const { access_token } = response.data // Assuming server returns expires_in representing token expiry duration
  //         const expirationTime = new Date().getTime() + EXPIRED_TOKEN_MINUTES * 1000 // Convert 15 minutes to milliseconds and add to current time
  //         localStorage.setItem('accessToken', access_token)
  //         localStorage.setItem('accessTokenExpiration', expirationTime.toString())
  //         setToken(access_token)
  //       }
  //     } catch (error) {
  //       console.error('Failed to refresh token:', error)
  //       // Handle token refresh failure, e.g., log out user and redirect to login page
  //       localStorage.removeItem('accessToken')
  //       localStorage.removeItem('accessTokenExpiration')
  //       localStorage.removeItem('refreshToken')
  //       setAuthenticated(false)
  //       setToken(null)
  //       navigate('/login')
  //     }
  //   }
  // }

  // useEffect(() => {
  //   const requestInterceptor = axios.interceptors.request.use(
  //     (config) => {
  //       // Get the access token from localStorage
  //       const accessToken = localStorage.getItem('accessToken')

  //       console.log('Interceptor - Access Token:', accessToken) // Log the access token

  //       // Set the Authorization header if access token is available
  //       if (accessToken) {
  //         config.headers.Authorization = `Bearer ${accessToken}`
  //         console.log('Interceptor - Authorization Header Set') // Log that the header is set
  //       } else {
  //         console.log('Interceptor - No Access Token Found') // Log if no access token is found
  //       }

  //       return config
  //     },
  //     (error) => {
  //       // Do something with request error
  //       console.error('Interceptor - Request Error:', error) // Log request error
  //       return Promise.reject(error)
  //     }
  //   )

  //   return () => {
  //     // Remove the request interceptor when component unmounts
  //     axios.interceptors.request.eject(requestInterceptor)
  //   }
  // }, [token]) // Ensure dependency on token for useEffect cleanup

  // // Check token expiry on component mount
  // useEffect(() => {
  //   console.log('isTokenExpired ==== ', isTokenExpired())
  //   if (isTokenExpired()) {
  //     handleTokenExpiry()
  //   }
  // }, [])

  const value = useMemo(() => ({ authenticated, setAuthenticated }), [authenticated, setAuthenticated])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
