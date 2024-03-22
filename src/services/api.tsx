import axios from 'axios'
import { HandlerError } from '../helpers/HandlerError'
import { UserProfileToken } from '../@types/User'

const api = 'https://api.escuelajs.co/api/v1/auth/'

export const loginService = async (email: string, password: string) => {
  try {
    const data = await axios.post<UserProfileToken>(`${api}login`, {
      email,
      password
    })
    return data
  } catch (error) {
    HandlerError(error)
  }
  return null
}

export const fetchData = () => 'fetch data dashboard'
