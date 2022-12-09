import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function RestaurantsListCard({ item, index }: { item: Restaurant; index: number }) {
  const navigate = useNavigate()
  const reviewsClickHandler = () => {
    navigate(`${item._id}`)
  }
  return (
    <div className='col'>
      <div className='card h-100'>
        <div className='card-body  d-flex flex-column'>
          <h5 className='card-title'>{item.name}</h5>
          <p className='card-text'>
            <b>Cuisine: </b> {item.cuisine} <br />
            <b>Address: </b> {`${item.address.building} ${item.address.street}, ${item.address.zipcode} `}
          </p>
          <button className='btn btn-primary mt-auto col-6' onClick={reviewsClickHandler}>
            View reviews
          </button>
        </div>
      </div>
    </div>
  )
}
