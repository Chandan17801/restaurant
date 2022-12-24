import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { showCartReducers, authReducers } from './store'
import Category from './components/Category/Category'
import Navbar from './components/Navbar/Navbar'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'
import Profile from './components/Profile/Profile'
import Login from './components/Login/Login'
import SignUp from './components/Login/SignUp'

import './App.css'

let inital = true

function App() {
  const dispatch = useDispatch()
  const toShow = useSelector((state) => state.showcart)
  const authData = useSelector((state) => state.authData)

  const fetchData = useCallback(async () => {
    const response = await fetch(
      'https://react-aaa26-default-rtdb.firebaseio.com/authentication.json',
    )
    if (!response.ok) {
      throw new Error('Unable to fetch')
    }
    const data = await response.json()
    dispatch(authReducers.update(data))
  }, [dispatch])

  useEffect(() => {
    try {
      fetchData()
    } catch (error) {
      console.log('error')
      dispatch(showCartReducers.notify({ toShow: true, title: error.message }))
    }
  }, [fetchData, dispatch])

  useEffect(() => {
    if (inital) {
      inital = false
      return
    }

    const sendData = () => {
      const response = fetch(
        'https://react-aaa26-default-rtdb.firebaseio.com/authentication.json',
        {
          method: 'PUT',
          body: JSON.stringify(authData),
        },
      )
      if (!response.ok) {
        throw new Error('Enable to send Data')
      }
    }
    try {
      sendData()
    } catch (error) {
      // dispatch(showCartReducers.notify({ toShow: true, title: error.message }))
    }
  }, [authData, dispatch])

  return (
    <div className="app">
      {toShow.showCart && <Cart />}
      <Navbar />
      {!toShow.isLoggedIn && !toShow.newUser && <Login />}
      {!toShow.isLoggedIn && toShow.newUser && <SignUp />}
      {toShow.isLoggedIn && toShow.showProfile && <Profile />}
      {toShow.isLoggedIn && !toShow.showCart && !toShow.showProfile && (
        <div className="intro-pic-container"></div>
      )}
      {toShow.isLoggedIn && !toShow.showCart && !toShow.showProfile && (
        <div className="bg">
          <h1>What's your food mood ?</h1>
          <p>Feeling light and crispy or seriously Hungry ?</p>
        </div>
      )}
      {toShow.isLoggedIn && !toShow.showCart && !toShow.showProfile && (
        <Category />
      )}
      {!toShow.showCart && <Footer />}
    </div>
  )
}

export default App
