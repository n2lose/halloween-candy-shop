type ProductType = {
  id: string
  image: string
  name: string
}

type BestSellerType = {
  product: ProductType
  revenue: number
  units: number
}

type SalesOverTimeWeekType = {
  [week: string]: {
    orders: number
    total: number
  }
}

type SalesOverTimeYearType = {
  [month: string]: {
    orders: number
    total: number
  }
}

export interface DashboardDataType {
  dashboard: {
    bestsellers: BestSellerType[]
    sales_over_time_week: SalesOverTimeWeekType
    sales_over_time_year: SalesOverTimeYearType
  }
}

export type { ProductType, BestSellerType, SalesOverTimeWeekType, SalesOverTimeYearType }
