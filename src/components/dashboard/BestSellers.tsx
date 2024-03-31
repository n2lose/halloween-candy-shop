import { Card, Typography } from '@material-tailwind/react'
import { BestSellerType } from '~/@types/Dashboard'

interface BestSellersProps {
  bestsellers: BestSellerType[]
}

export function BestSellers(props: BestSellersProps) {
  const TABLE_HEAD = ['Product Name', 'Price', '# Unit Sold', 'Revenue']
  const { bestsellers } = props
  return (
    <>
      <Typography variant='h3' className='my-4'>
        Bestsellers
      </Typography>
      <Card className='h-full w-full overflow-scroll'>
        <table className='w-full min-w-max table-auto text-left'>
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th key={head} className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                  <Typography variant='small' color='blue-gray' className='font-normal leading-none opacity-70'>
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bestsellers.map(({ product, units, revenue }) => (
              <tr key={product.id} className='even:bg-blue-gray-50/50'>
                <td className='p-4'>
                  <Typography variant='small' color='blue-gray' className='font-normal'>
                    {product.name}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography variant='small' color='blue-gray' className='font-normal'>
                    {'$1000'}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography variant='small' color='blue-gray' className='font-normal'>
                    {units}
                  </Typography>
                </td>
                <td className='p-4'>
                  <Typography as='a' href='#' variant='small' color='blue-gray' className='font-medium'>
                    {revenue}
                  </Typography>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </>
  )
}
