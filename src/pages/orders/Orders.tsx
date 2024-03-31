import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Input } from '@material-tailwind/react'
import Typography from '@material-tailwind/react/components/Typography'
import { useCallback, useEffect, useState } from 'react'
import { Order } from '~/@types/OrderType'
import { OrderTable } from '~/components/OrderTable'
import { fetchOrdersData } from '~/services/orders.service'

function Orders() {
  const [page, setPage] = useState<number>(1)
  const [total, setTotal] = useState<number>(0)
  const [orderData, setOrderData] = useState<Order[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchOrdersData(page)
        if (res?.data) {
          const data = res.data
          setTotal(data.total)
          setOrderData(data.orders)
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }

    fetchData()
  }, [page])

  const pageSize = Math.ceil(total / 50)

  const handleNext = useCallback(() => {
    if (page >= pageSize) return
    setPage(page + 1)
  }, [page, pageSize])

  const handlePrev = useCallback(() => {
    if (page <= 1) return
    setPage(page - 1)
  }, [page])

  return (
    <>
      <Typography variant='h3' className='mb-4' as='h3'>
        {'Orders'}
      </Typography>
      <div className='w-full md:w-72'>
        <Input label='Search' icon={<MagnifyingGlassIcon className='h-5 w-5' />} />
      </div>

      <OrderTable orderData={orderData} />

      <div className='flex items-center gap-4 mt-4'>
        <button
          className={`mx-1 px-3 py-1 ${page === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'} rounded`}
          onClick={handlePrev}
          disabled={page === 1}
        >
          Prev
        </button>
        <Typography color='gray'>
          Page {page} of {pageSize}
        </Typography>
        <button
          className={`mx-1 px-3 py-1 ${page === pageSize ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-700 text-white'} rounded`}
          onClick={handleNext}
          disabled={page === pageSize}
        >
          Next
        </button>
      </div>
    </>
  )
}

export default Orders
