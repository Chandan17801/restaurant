import React from 'react'
import { useDispatch } from 'react-redux'
import { authReducers } from '../../store'
import './CategoryItems.css'

function CategoryItems(props) {
  const dispatch = useDispatch()
  const { id, title, price, pic } = props
  const addCartHandler = () => {
    dispatch(
      authReducers.addItem({
        id,
        title,
        price,
        pic,
      }),
    )
  }

  return (
    <div
      className="card shadow p-3 mb-4 bg-white rounded"
      style={{ width: '18rem', margin: '0.5rem' }}
    >
      <img src={pic} className="card-img-top" alt="..."></img>
      <div className="card-body">
        <h5 className="card-title" style={{ overflowY: 'hidden' }}>
          {props.title}
        </h5>
        <p className="card-text">{props.description}</p>
        <div className="line">
          <p className="btn btn-danger">₹ {props.price}</p>
          <p className="btn btn-danger" onClick={addCartHandler}>
            Add to Cart
          </p>
        </div>
      </div>
    </div>
  )
}

export default CategoryItems
