import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import RestaurantDataService from '../services/restaurant'

export default function Restaurant({ user }: { user: User | null }) {
  const params = useParams()
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  useEffect(() => {
    console.log(params.id)

    RestaurantDataService.get(String(params.id)).then((data: any) => {
      console.log(data.data)
      setRestaurant(data.data)
    })
  }, [])
  return <div>Restaurants</div>
}
