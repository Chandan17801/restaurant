import { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showCartReducers } from '../../store/index.js'
import cart from '../../photos/cart.png'
import classes from './CartButton.module.css'

const CartButton = (props) => {
  const dispatch = useDispatch()
  const cartToggleHandler = (event) => {
    dispatch(showCartReducers.toggle())
  }
  const key=useSelector((state)=>state.authData.email)
  const data=useSelector((state)=>state.authData.auth)
  const userData = data.find(props=>props.email===key)
  const total = userData.cart.totalQuantity
  return (
    <Fragment>
      <img
        src={cart}
        className={classes.button}
        alt=".."
        onClick={cartToggleHandler}
      />
      <div className={classes.badge}>{total}</div>
    </Fragment>
  )
}

export default CartButton
