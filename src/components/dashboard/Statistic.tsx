import { SalesOverTimeWeekType, SalesOverTimeYearType } from '~/@types/Dashboard'
import { formatNumberToCurrency } from '~/helpers/Utils'

interface StatisticProps {
  salesOverTimeWeek: SalesOverTimeWeekType | undefined
  salesOverTimeYear: SalesOverTimeYearType | undefined
}

const Statistic = (props: StatisticProps) => {
  const { salesOverTimeWeek, salesOverTimeYear } = props

  // Function to get today's index (1 for Monday, 2 for Tuesday, ..., 7 for Sunday)
  function getTodayIndex() {
    const today = new Date()
    let index = today.getDay() // Get the day of the week (0-6)
    if (index === 0) index = 7 // Convert Sunday (0) to 7
    return index
  }

  const todayIndex = getTodayIndex()

  // Get data for today from the object
  const todayData = salesOverTimeWeek && salesOverTimeWeek[todayIndex]

  // Initialize variables to store the totals
  let totalOrdersInAWeek = 0
  let totalValueInAWeek = 0

  // Iterate over each entry in the object
  for (const key in salesOverTimeWeek) {
    // Add orders and total value to the totals
    totalOrdersInAWeek += salesOverTimeWeek[key].orders
    totalValueInAWeek += salesOverTimeWeek[key].total
  }

  // Get the current date
  const currentDate = new Date()

  // Calculate the year and month for last month
  let lastMonthYear = currentDate.getFullYear()
  let lastMonth = currentDate.getMonth() - 1
  if (lastMonth === -1) {
    lastMonth = 11 // December of the previous year
    lastMonthYear--
  }

  // Get the data for last month
  const lastMonthData = salesOverTimeYear && salesOverTimeYear[lastMonth + 1]

  // Calculate total orders and total value for last month
  let totalOrdersLastMonth = 0
  let totalValueLastMonth = 0

  if (lastMonthData) {
    totalOrdersLastMonth = lastMonthData.orders
    totalValueLastMonth = lastMonthData.total
  }
  return (
    <div className='flex flex-wrap justify-between'>
      <div className='w-full md:w-1/3 p-2'>
        <div className='bg-gray-200 p-4'>
          <h3 className='text-lg font-semibold'>Today</h3>
          <p className='text-sm'>
            {todayData ? `${formatNumberToCurrency(todayData.total)} / ${todayData.orders} orders` : ''}
          </p>
        </div>
      </div>
      <div className='w-full md:w-1/3 p-2'>
        <div className='bg-gray-200 p-4'>
          <h3 className='text-lg font-semibold'>Last Week</h3>
          <p className='text-sm'>{`${formatNumberToCurrency(totalValueInAWeek)} / ${totalOrdersInAWeek} orders`}</p>
        </div>
      </div>
      <div className='w-full md:w-1/3 p-2'>
        <div className='bg-gray-200 p-4'>
          <h3 className='text-lg font-semibold'>Last Month</h3>
          <p className='text-sm'>{`${formatNumberToCurrency(totalValueLastMonth)} / ${totalOrdersLastMonth} orders`}</p>
        </div>
      </div>
    </div>
  )
}

export default Statistic
