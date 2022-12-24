import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { showCartReducers, authReducers } from '../../store/index'

import './Login.css'

function SignUp() {
  const [nameIsTouched, setNameIsTouched] = useState(false)
  const [ageIsTouched, setAgeIsTouched] = useState(false)
  const [emailIsTouched, setEmailIsTouched] = useState(false)
  const [passwordIsTouched, setPasswordIsTouched] = useState(false)
  const [enteredData, setEnteredData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const nameChangeHandler = (event) => {
    setEnteredData({
      ...enteredData,
      name: event.target.value,
    })
  }
  const nameTouchedHandler = (event) => {
    setNameIsTouched(true)
  }
  const nameIsValid = enteredData.name.trim().length >= 1
  const ageChangeHandler = (event) => {
    setEnteredData({
      ...enteredData,
      age: event.target.value,
    })
  }
  const ageTouchedHandler = (event) => {
    setAgeIsTouched(true)
  }
  const ageIsValid = enteredData.age > 12
  const emailChangeHandler = (event) => {
    setEnteredData({
      ...enteredData,
      email: event.target.value,
    })
  }
  const emailTouchedHandler = (event) => {
    setEmailIsTouched(true)
  }
  const emailIsValid = enteredData.email.includes('@')
  const passwordChangeHandler = (event) => {
    setEnteredData({
      ...enteredData,
      password: event.target.value,
    })
  }
  const passwordTouchedHandler = (event) => {
    setPasswordIsTouched(true)
  }
  const passwordIsValid = enteredData.password.length >= 8
  const onSubmitHandler = (event) => {
    event.preventDefault()
    dispatch(authReducers.addUser(enteredData))
    dispatch(showCartReducers.olduser())
  }

  const onClickLoginHandler = () => {
    dispatch(showCartReducers.olduser())
  }

  const dataIsValid =
    nameIsValid && ageIsValid && emailIsValid && passwordIsValid

  return (
    <div className="login-card">
      <p>SignUp</p>
      <form className="login-card-form" onSubmit={onSubmitHandler}>
        <label>Name</label>
        <input
          type="text"
          value={enteredData.name}
          onChange={nameChangeHandler}
          onBlur={nameTouchedHandler}
        ></input>
        {!nameIsValid && nameIsTouched && (
          <p style={{ fontSize: '1rem', color: 'red' }}>*Enter a valid Name.</p>
        )}
        <label>Age</label>
        <input
          type="number"
          value={enteredData.age}
          onChange={ageChangeHandler}
          onBlur={ageTouchedHandler}
        ></input>
        {!ageIsValid && ageIsTouched && (
          <p style={{ fontSize: '1rem', color: 'red' }}>
            *Age must be greater than 12.
          </p>
        )}
        <label>Email</label>
        <input
          type="text"
          value={enteredData.email}
          onChange={emailChangeHandler}
          onBlur={emailTouchedHandler}
        ></input>
        {!emailIsValid && emailIsTouched && (
          <p style={{ fontSize: '1rem', color: 'red' }}>
            *Please include an '@' in the email address.
          </p>
        )}
        <label>Password</label>
        <input
          type="password"
          className="inp-2"
          value={enteredData.password}
          onChange={passwordChangeHandler}
          onBlur={passwordTouchedHandler}
        ></input>
        {!passwordIsValid && passwordIsTouched && (
          <p style={{ fontSize: '1rem', color: 'red' }}>
            *Password must have 8 characters.
          </p>
        )}
        <button
          type="submit"
          disabled={`${dataIsValid ? '' : 'disabled'}`}
          className="btn btn-danger"
        >
          SignUp
        </button>
      </form>
      <div className="social_profile">
        <ul>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2168/2168281.png"
              alt=".."
              style={{ height: '35px', width: '35px' }}
            />
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png"
              alt=".."
              style={{ height: '35px', width: '35px' }}
            />
          </li>
          <li>
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384015.png"
              alt=".."
              style={{ height: '35px', width: '35px' }}
            ></img>
          </li>
        </ul>
      </div>
      <p style={{ fontSize: '0.8rem', margin: '0.5rem' }}>
        Already a user?{' '}
        <span
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={onClickLoginHandler}
        >
          Login
        </span>
      </p>
    </div>
  )
}

export default SignUp
