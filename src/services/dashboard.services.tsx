import { DashboardDataType } from '~/@types/Dashboard'
import { API_URL } from '~/constant/constant'
import { HandlerError } from '~/helpers/HandlerError'
import api from './api'

export const fetchDashboardData = async () => {
  try {
    const data = await api.get<DashboardDataType>(`${API_URL}/dashboard`)
    return data
  } catch (error) {
    HandlerError(error)
  }
  return null
}
