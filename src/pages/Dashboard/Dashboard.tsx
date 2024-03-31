import { Typography } from '@material-tailwind/react'
import { useEffect, useState } from 'react'
import { BestSellerType, SalesOverTimeWeekType, SalesOverTimeYearType } from '~/@types/Dashboard'
import { BestSellers } from '~/components/dashboard/BestSellers'
import RevenueChart from '~/components/dashboard/RevenueChart'
import Statistic from '~/components/dashboard/Statistic'
import { fetchDashboardData } from '~/services/dashboard.services'

function Dashboard() {
  const [bestsellers, setBestsellers] = useState<BestSellerType[]>([])
  const [salesOverTimeWeek, setSalesOverTimeWeek] = useState<SalesOverTimeWeekType>({})
  const [salesOverTimeYear, setSalesOverTimeYear] = useState<SalesOverTimeYearType>({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchDashboardData()
        if (res?.data) {
          const data = res.data.dashboard
          setBestsellers(data.bestsellers)
          setSalesOverTimeWeek(data.sales_over_time_week)
          setSalesOverTimeYear(data.sales_over_time_year)
        }
      } catch (error) {
        console.error('Error fetching dashboard data:', error)
      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Typography variant='h3' className='mb-4' as='h3'>
        {'DashBoard'}
      </Typography>
      <Statistic salesOverTimeWeek={salesOverTimeWeek} salesOverTimeYear={salesOverTimeYear} />
      <RevenueChart salesOverTimeWeek={salesOverTimeWeek} salesOverTimeYear={salesOverTimeYear} />
      <BestSellers bestsellers={bestsellers} />
    </>
  )
}

export default Dashboard
