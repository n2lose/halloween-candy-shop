import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'

type AuthContextProps = {
  children?: ReactNode
}

interface AuthContextInterface {
  authenticated: boolean
  setAuthenticated: (newState: boolean) => void
  token: string | null
}

const initialAuthContextValue: AuthContextInterface = {
  authenticated: false,
  setAuthenticated: () => {},
  token: null
}

const AuthContext = createContext<AuthContextInterface>(initialAuthContextValue)

function AuthProvider({ children }: AuthContextProps) {
  const [authenticated, setAuthenticated] = useState(() => {
    const tokenOnLocalStorage = localStorage.getItem('token')
    return !!tokenOnLocalStorage
  })
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const tokenOnLocalStorage = localStorage.getItem('token')
    if (tokenOnLocalStorage) {
      setToken(tokenOnLocalStorage)
      axios.defaults.headers.common.Authorization = `Bearer ${tokenOnLocalStorage}`
    }
  }, [])

  const value = useMemo(() => ({ authenticated, setAuthenticated, token }), [authenticated, token, setAuthenticated])

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
