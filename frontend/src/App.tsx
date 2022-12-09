import { useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'

import './App.css'
import AddReview from './components/AddReview'
import Login from './components/Login'
import Restaurant from './components/Restaurant'
import RestaurantsLists from './components/RestaurantsLists'

function App() {
  // const [user, setUser] = React.useState<User | null>(null)
  const [user, setUser] = useState<User | null>(null)

  async function login(user = null) {
    setUser(user)
  }

  async function logout() {
    setUser(null)
  }
  return (
    <div>
      <nav className='navbar navbar-expand navbar-dark bg-dark'>
        <a href='/restaurants' className='navbar-brand'>
          Restaurant Reviews
        </a>
        <div className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link to={'/restaurants'} className='nav-link'>
              Restaurants
            </Link>
          </li>
          <li className='nav-item'>
            {user ? (
              <a onClick={logout} className='nav-link' style={{ cursor: 'pointer' }}>
                Logout {user.name}
              </a>
            ) : (
              <Link to={'/login'} className='nav-link'>
                Login
              </Link>
            )}
          </li>
        </div>
      </nav>

      <div className='container mt-3'>
        <Routes>
          <Route path={'/'} element={<RestaurantsLists />} />
          <Route path={'/restaurants'} element={<RestaurantsLists />} />
          <Route path='/restaurants/:id/review' element={<AddReview user={user} />} />
          <Route path='/restaurants/:id' element={<Restaurant user={user} />} />
          <Route path='/login' element={<Login login={login} />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
