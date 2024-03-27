import axios from 'axios'
import { HandlerError } from '../helpers/HandlerError'
import { UserProfileToken } from '../@types/User'

const api = 'https://freddy.codesubmit.io/'

type PostLoginType = {
  username: string
  password: string
}

export const loginService = async ({ username, password }: PostLoginType) => {
  try {
    const data = await axios.post<UserProfileToken>(`${api}login`, {
      username,
      password
    })
    return data
  } catch (error) {
    HandlerError(error)
  }
  return null
}

export const fetchData = () => 'fetch data dashboard'
