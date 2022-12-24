import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showCartReducers } from '../../store'
import profile from '../../photos/profile.png'

import './Profile.css'

function Profile() {
  const dispatch = useDispatch()
  const toggleProfileHandler = () => {
    dispatch(showCartReducers.toggleShowProfile())
  }
  const onClickLogout = () => {
    dispatch(showCartReducers.logout())
    dispatch(showCartReducers.toggleShowProfile())
  }
  const key=useSelector((state)=>state.authData.email)
  const data=useSelector((state)=>state.authData.auth)
  const userData = data.find(props=>props.email===key)
  return (
    <div className="profile-card">
      <img
        src="https://cdn-icons-png.flaticon.com/512/1/1981.png"
        className="profile-card-close-button"
        alt=""
        onClick={toggleProfileHandler}
      />
      <img src={profile} className="profile-card-pic" alt="" />
      <div className="profile-card-about">
        <h3>{userData.name}</h3>
        <p>{key}</p>
      </div>
      <div className="profile-card-button">
        <button className="btn btn-info">Show Orders</button>
        <button className="btn btn-warning">Edit Profile</button>
        <button className="btn btn-danger" onClick={onClickLogout}>
          Logout
        </button>
      </div>
      <div className="social_profile">
        <ul>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2168/2168281.png"
              alt=".."
              style={{ height: '30px', width: '30px' }}
            />
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
              alt=".."
              style={{ height: '30px', width: '30px' }}
            />
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
              alt=".."
              style={{ height: '30px', width: '30px' }}
            ></img>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Profile
