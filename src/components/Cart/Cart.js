import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showCartReducers } from '../../store'
import CartItem from './CartItem'
import './Cart.css'

function Cart() {
  const dispatch = useDispatch()
  const hideCartHandler = () => {
    dispatch(showCartReducers.hideCart())
  }
  const key=useSelector((state)=>state.authData.email)
  const data=useSelector((state)=>state.authData.auth)
  const userData = data.find(props=>props.email===key)
  const cartitems=userData.cart.items
  const total = userData.cart.totalCartPrice
  return (
    <Fragment>
      <div className="backdrop" onClick={hideCartHandler}></div>
      <div className="cart-box">
        <p>Shopping Cart</p>
        <div className="cart-item-space">
          {cartitems.length === 0 ? (
            <p style={{ fontSize: '1.5rem', margin: '2rem' }}>
              Oppsss!! Cart is empty
            </p>
          ) : (
            cartitems.map((props) => <CartItem 
            key={props.id}
            id={props.id}
            title={props.title}
            price={props.price}
            totalPrice={props.totalPrice}
            quantity={props.quantity}
            pic={props.pic}
            />)
          )}
        </div>
        {cartitems.length !== 0 && (
          <div className="button-box">
            <button className="btn btn-success">₹ {total}</button>
            <button className="btn btn-success">Checkout</button>
          </div>
        )}
      </div>
    </Fragment>
  )
}

export default Cart
