import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react'
import Chart from 'react-apexcharts'
import { Square3Stack3DIcon } from '@heroicons/react/24/outline'
import { useEffect, useMemo, useState } from 'react'
import ToggleButton from '../ToggleButton'
import { ChartOptionConfig } from './chart.config'
import { SalesOverTimeWeekType, SalesOverTimeYearType } from '~/@types/Dashboard'

interface RevenueChartProps {
  salesOverTimeWeek: SalesOverTimeWeekType
  salesOverTimeYear: SalesOverTimeYearType
}

const RevenueChart = (props: RevenueChartProps) => {
  const { salesOverTimeWeek, salesOverTimeYear } = props

  if (!salesOverTimeWeek && !salesOverTimeYear) {
    return <>Loading...</>
  }

  const [toggleChart, setToggleChart] = useState<boolean>(false)
  const [chartConfig, setChartConfig] = useState(ChartOptionConfig)

  // Assuming salesOverTimeWeek has type SalesData
  const transformedObjectWeekly = useMemo(() => {
    const transformedObject: {
      categories: string[]
      data: number[]
    } = {
      categories: [],
      data: []
    }

    Object.entries(salesOverTimeWeek).forEach(([key, obj]) => {
      transformedObject.categories.push(`day ${key}`)
      transformedObject.data.push(obj.total)
    })

    return transformedObject
  }, [salesOverTimeWeek])

  // Assuming salesOverTimeWeek has type SalesData
  const transformedObjectMonthly = useMemo(() => {
    const transformedObject: {
      categories: string[]
      data: number[]
    } = {
      categories: [],
      data: []
    }

    Object.entries(salesOverTimeYear).forEach(([key, obj]) => {
      transformedObject.categories.push(`Month ${key}`)
      transformedObject.data.push(obj.total)
    })

    return transformedObject
  }, [salesOverTimeYear])
  useEffect(() => {
    if (!toggleChart) {
      setChartConfig({
        ...chartConfig,
        series: [
          {
            ...chartConfig.series[0],
            data: transformedObjectWeekly.data
          }
        ],
        options: {
          ...chartConfig.options,
          xaxis: {
            ...chartConfig.options.xaxis,
            categories: transformedObjectWeekly.categories
          }
        }
      })
    } else {
      setChartConfig({
        ...chartConfig,
        series: [
          {
            ...chartConfig.series[0],
            data: transformedObjectMonthly.data
          }
        ],
        options: {
          ...chartConfig.options,
          xaxis: {
            ...chartConfig.options.xaxis,
            categories: transformedObjectMonthly.categories
          }
        }
      })
    }
  }, [toggleChart])

  return (
    <>
      <div className='flex items-center justify-between my-4'>
        <Typography variant='h3'>Revenue (last 7 days) </Typography>
        <div className='flex items-center space-x-2'>
          <ToggleButton isChecked={toggleChart} onToggleChange={() => setToggleChart(!toggleChart)} />
        </div>
      </div>
      <Card>
        <CardHeader
          floated={false}
          shadow={false}
          color='transparent'
          className='flex flex-col gap-4 rounded-none md:flex-row md:items-center'
        >
          <div className='w-max rounded-lg bg-gray-900 p-5 text-white'>
            <Square3Stack3DIcon className='h-6 w-6' />
          </div>
          <div>
            <Typography variant='h6' color='blue-gray'>
              Bar Chart
            </Typography>
            <Typography variant='small' color='gray' className='max-w-sm font-normal'>
              Visualize your data in a simple way using the @material-tailwind/react chart plugin.
            </Typography>
          </div>
        </CardHeader>
        <CardBody className='px-2 pb-0'>
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </>
  )
}

export default RevenueChart
