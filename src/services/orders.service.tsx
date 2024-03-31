import { API_URL } from '~/constant/constant'
import { HandlerError } from '~/helpers/HandlerError'
import api from './api'
import { OrdersType } from '~/@types/OrderType'

export const fetchOrdersData = async (page: number) => {
  try {
    const response = await api.get<OrdersType>(`${API_URL}/orders?page=${page}`)
    return response
  } catch (error) {
    HandlerError(error)
  }
  return null
}
