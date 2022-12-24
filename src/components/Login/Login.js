import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authReducers, showCartReducers } from '../../store/index'

import './Login.css'

function Login() {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [emailIsTouched, setEmailIsTouched] = useState(false)
  const [enteredPassword, setEnteredPassword] = useState('')
  const [passwordIsTouched, setPasswordIsTouched] = useState(false)
  const [validUser, setValidUser] = useState(true)
  const dispatch = useDispatch()
  const authData = useSelector((state) => state.authData.auth)
  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value)
  }
  const emailTouchedHandler = (event) => {
    setEmailIsTouched(true)
  }
  const emailIsValid = enteredEmail.includes('@')
  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value)
  }
  const passwordTouchedHandler = (event) => {
    setPasswordIsTouched(true)
  }
  const passwordIsValid = enteredPassword.length >= 8
  const onSubmitHandler = (event) => {
    event.preventDefault()
    const data = authData.find((props) => props.email === enteredEmail)
    if (data && data.password === enteredPassword) {
      dispatch(authReducers.setKey(enteredEmail))
      dispatch(showCartReducers.login())
      setEnteredEmail('')
      setEnteredPassword('')
      return
    }
    setValidUser(false)
  }

  const onClickSignUpHandler = () => {
    dispatch(showCartReducers.signup())
  }

  const dataIsValid = emailIsValid && passwordIsValid

  return (
    <div className="login-card">
      <p>Login</p>
      <form className="login-card-form" onSubmit={onSubmitHandler}>
        {!validUser && (
          <p style={{ fontSize: '1rem', color: 'red', textAlign: 'center' }}>
            Email or Password is incorrect
          </p>
        )}
        <label>Email</label>
        <input
          type="text"
          value={enteredEmail}
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
          value={enteredPassword}
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
          Login
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
      <p style={{ fontSize: '0.9rem', margin: '0.5rem' }}>
        New to Restaurant?{' '}
        <span
          style={{ textDecoration: 'underline', cursor: 'pointer' }}
          onClick={onClickSignUpHandler}
        >
          Sign Up
        </span>
      </p>
    </div>
  )
}

export default Login
