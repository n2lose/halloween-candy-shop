import axios from 'axios'
import { toast } from 'react-toastify'

// eslint-disable-next-line import/prefer-default-export, @typescript-eslint/no-explicit-any
export const HandlerError = (error: any) => {
  console.log('error === ', error)
  if (axios.isAxiosError(error)) {
    const errorResponse = error.response

    if (Array.isArray(errorResponse?.data.errors)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      errorResponse?.data.errors.forEach((errorItem: any) => {
        toast.warning(errorItem.description)
      })
    } else if (typeof errorResponse?.data.errors === 'object') {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      Object.values(errorResponse?.data.error).forEach((errorItem: any) => {
        toast.warning(errorItem[0])
      })
    } else if (errorResponse?.data) {
      toast.warning(errorResponse?.data.msg)
    } else if (errorResponse?.status === 401) {
      toast.warning('Please login')
      window.history.pushState({}, 'Login', '/login')
    } else if (errorResponse) {
      toast.warning(errorResponse.statusText)
    }
  }
}
