import { authReducers } from '../../store'
import { useDispatch } from 'react-redux'
import './CartItem.css'

const CartItem = (props) => {
  const dispatch = useDispatch()

  const removeCartItemHandler = () => {
    dispatch(authReducers.removeItem({
      id:props.id,price:props.price
    }))
  }
  const addCartItemHandler = () => {
    dispatch(authReducers.addItem({
      id:props.id,
      price:props.price
    }))
  }
  return (
    <div className='cart-item'>
      <img src={props.pic} alt=".."/>
      <div className='data'>
        <p className='title'>{props.title}</p>
        <div className='counter'>
          <div className='symbol' onClick={removeCartItemHandler}>-</div>
          <div className='quantity'>{props.quantity}</div>
          <div className='symbol' onClick={addCartItemHandler}>+</div>
        </div>
      </div>
      <div className='price'><button className="btn-info">x ₹{props.price}</button></div>
    </div>
  )
}

export default CartItem
