import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showCartReducers } from '../../store'
import CartButton from '../CartButton/CartButton'
import profile from '../../photos/profile.png'
import './Navbar.css'

function Navbar() {
  const dispatch = useDispatch()
  const loggedIn = useSelector((state) => state.showcart.isLoggedIn)
  const toggleProfileHandler = () => {
    dispatch(showCartReducers.toggleShowProfile())
  }
  return (
    <div className="nav-bar navbar-expand-lg navbar-light bg-danger">
      <img
        src="https://cdn-icons-png.flaticon.com/512/272/272186.png"
        className="resturant-main-icon"
        alt=""
      />
      {loggedIn && <CartButton />}
      {loggedIn && (
        <img
          src={profile}
          className="profile"
          alt=""
          onClick={toggleProfileHandler}
        />
      )}
    </div>
  )
}

export default Navbar
