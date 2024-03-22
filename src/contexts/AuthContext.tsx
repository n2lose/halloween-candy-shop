import { ReactNode, createContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'

type AuthContextProps = {
  // eslint-disable-next-line react/require-default-props
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
  const [authenticated, setAuthenticated] = useState(initialAuthContextValue.authenticated)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const tokenOnLocalStorage = localStorage.getItem('access_token')
    if (tokenOnLocalStorage) {
      setToken(tokenOnLocalStorage)
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
    }
  }, [token])

  const memoizedValue = useMemo(
    () => ({
      authenticated,
      setAuthenticated,
      token
    }),
    [authenticated, token]
  )

  return <AuthContext.Provider value={memoizedValue}>{children}</AuthContext.Provider>
}

export { AuthContext, AuthProvider }
