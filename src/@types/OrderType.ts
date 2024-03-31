export interface CustomerAddress {
  city: string
  street: string
  zipcode: string
}

export interface Customer {
  address: CustomerAddress
  id: string
  name: string
  surname: string
}

export interface Product {
  id: string
  image: string
  name: string
  quantity: number
}

export interface Order {
  created_at: string
  currency: string
  customer: Customer
  id: string
  product: Product
  status: string
  total: number
}

export interface OrdersType {
  orders: Order[]
  total: number
}
