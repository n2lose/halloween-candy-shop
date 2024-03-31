import { ChevronUpDownIcon } from '@heroicons/react/24/solid'
import { Chip, Typography } from '@material-tailwind/react'
import { Order } from '~/@types/OrderType' // Import the OrdersType and Order interfaces
import { TABLE_HEAD } from '~/constant/constant'

interface OrderTableProps {
  orderData: Order[]
}

export function OrderTable({ orderData }: OrderTableProps) {
  if (orderData && orderData.length < 1) return <>Loading data table...</>
  return (
    <table className='mt-4 w-full min-w-max table-auto text-left'>
      {/* Table header */}
      <thead>
        <tr>
          {TABLE_HEAD.map((head, index) => (
            <th
              key={head}
              className='cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50'
            >
              <Typography
                variant='small'
                color='blue-gray'
                className='flex items-center justify-between gap-2 font-normal leading-none opacity-70'
              >
                {head} {index !== TABLE_HEAD.length - 1 && <ChevronUpDownIcon strokeWidth={2} className='h-4 w-4' />}
              </Typography>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {orderData.map(({ product, status, currency, created_at }, index) => {
          const isLast = index === orderData.length - 1
          const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50'
          return (
            <tr key={product.id}>
              <td className={classes}>
                <div className='flex items-center gap-3'>
                  <div className='flex flex-col'>
                    <Typography variant='small' color='blue-gray' className='font-normal'>
                      {product.name}
                    </Typography>
                  </div>
                </div>
              </td>
              <td className={classes}>
                <div className='flex flex-col'>
                  <Typography variant='small' color='blue-gray' className='font-normal'>
                    {new Date(created_at).toLocaleDateString()}
                  </Typography>
                </div>
              </td>
              <td className={classes}>
                <div className='w-max'>
                  <Typography variant='small' color='blue-gray' className='font-normal'>
                    {currency}
                  </Typography>
                </div>
              </td>
              <td className={classes}>
                <Typography variant='small' color='blue-gray' className='font-normal'>
                  {status}
                </Typography>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
