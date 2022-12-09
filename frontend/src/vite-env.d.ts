/// <reference types="vite/client" />
type User = {
  name: string
  id: string
}
type Restaurant = {
  address: Address
  borough: string
  cuisine: string
  grades: []
  name: string
  restaurant_id: string
  _id: string
}
type Address = {
  building: string
  coord: [number, number]
  street: string
  zipcode: string
}
