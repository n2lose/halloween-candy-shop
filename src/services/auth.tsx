import { UserToken } from '~/@types/User'
import { API_URL } from '~/constant/constant'
import { HandlerError } from '~/helpers/HandlerError'
import api from './api'

type PostLoginType = {
  username: string
  password: string
}

export const loginService = async ({ username, password }: PostLoginType) => {
  try {
    const data = await api.post<UserToken>(`${API_URL}/login`, {
      username,
      password
    })
    return data
  } catch (error) {
    HandlerError(error)
  }
  return null
}

export const refreshTokenService = async (token: string): Promise<UserToken> => {
  try {
    const response = await api.post<UserToken>(
      `${API_URL}/refresh`,
      {
        refresh_token: token
      },
      {
        headers: {
          Authorization:
            'Bearer ' +
            'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MTE2ODc0ODEsIm5iZiI6MTcxMTY4NzQ4MSwianRpIjoiYzkwNWNlZjktMTNhMi00MWRlLWJmNTktNTk4ZTVjN2Y4MTA3IiwiZXhwIjoxNzE0Mjc5NDgxLCJpZGVudGl0eSI6ImZyZWRkeSIsInR5cGUiOiJyZWZyZXNoIn0.YoOjmdIUm1FcAvKRmMY-_ALrmIDXGMmzxkRD-PjZOHY'
        }
      }
    )
    return response.data
  } catch (error) {
    HandlerError(error)
    throw error // Throw the error to maintain the return type
  }
}
