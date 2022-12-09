import React, { useEffect, useState } from 'react'
import RestaurantDataService from '../services/restaurant'
import RestaurantsListCard from './UI/RestaurantsListCard'

export default function RestaurantsLists() {
  const [cuisines, setCuisines] = useState<string[]>([])
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const getAllRestaurants = () => {
    RestaurantDataService.getAll().then((data) => {
    //   console.log(data.data.restaurants)
      setRestaurants(data.data.restaurants)
    })
  }

  const getAllCuisines = () => {
    RestaurantDataService.getCuisines('').then((data) => setCuisines(data.data))
  }

  useEffect(() => {
    getAllCuisines()
    getAllRestaurants()
  }, [])
  return (
    <div className='row row-cols-1 row-cols-md-3 g-4'>
        {restaurants.map((item, i) => {
          return <RestaurantsListCard item={item} index={i} key={`restaurant${item._id}`} />
        })}
    </div>
  )
}
